import type {
  CriticalFlag,
  ScaleConfig,
  ScoreBand,
  ScoreResult,
  DimensionScore,
} from '@/types/scale'

/**
 * 通用评分引擎：根据量表配置与答案计算总分、维度分、等级与特殊触发项。
 * 评分逻辑完全由配置驱动，不针对任何量表写死。
 */

/** 解析 ">0" / ">=1" / "<2" / "==3" / "!=0" 形式的简单比较表达式 */
function evalCondition(value: number, condition: string): boolean {
  const match = condition.trim().match(/^(>=|<=|>|<|==|!=)\s*(-?\d+(?:\.\d+)?)$/)
  if (!match) return false
  const op = match[1]
  const target = Number(match[2])
  switch (op) {
    case '>':
      return value > target
    case '>=':
      return value >= target
    case '<':
      return value < target
    case '<=':
      return value <= target
    case '==':
      return value === target
    case '!=':
      return value !== target
    default:
      return false
  }
}

/** 求某题选项中的最大分值（用于反向计分） */
function maxOptionValue(config: ScaleConfig, questionId: string): number {
  const q = config.questions.find((item) => item.id === questionId)
  if (!q || q.options.length === 0) return 0
  return Math.max(...q.options.map((o) => o.value))
}

/** 在 bands 中查找分数所属区间 */
export function findBand(bands: ScoreBand[] | undefined, score: number): ScoreBand | undefined {
  if (!bands) return undefined
  return bands.find((b) => score >= b.min && score <= b.max)
}

/** 校验答案是否全部作答 */
export function isComplete(config: ScaleConfig, answers: Record<string, number>): boolean {
  return config.questions.every((q) => answers[q.id] !== undefined && answers[q.id] !== null)
}

/** 首个未作答的题目索引（用于跳转提示） */
export function firstUnansweredIndex(
  config: ScaleConfig,
  answers: Record<string, number>,
): number {
  return config.questions.findIndex((q) => answers[q.id] === undefined)
}

/**
 * 主评分函数。
 * @param config 量表配置
 * @param answers 以题目 id 为 key、选项分值为 value 的答案表
 */
export function computeResult(config: ScaleConfig, answers: Record<string, number>): ScoreResult {
  let total = 0
  let answered = 0

  for (const q of config.questions) {
    const raw = answers[q.id]
    if (raw === undefined) continue
    answered++
    const weight = config.scoring.weights?.[q.id] ?? 1
    const value = config.scoring.reverse.includes(q.id)
      ? maxOptionValue(config, q.id) - raw
      : raw
    total += value * weight
  }

  // 维度分
  const dimensions: DimensionScore[] = (config.scoring.dimensions ?? []).map((dim) => {
    let score = 0
    for (const qid of dim.questionIds) {
      const raw = answers[qid]
      if (raw === undefined) continue
      const weight = config.scoring.weights?.[qid] ?? 1
      const value = config.scoring.reverse.includes(qid)
        ? maxOptionValue(config, qid) - raw
        : raw
      score += value * weight
    }
    score *= dim.multiplier ?? 1
    const dimMax = dim.questionIds.length * maxOptionValue(config, dim.questionIds[0] ?? '') * (dim.multiplier ?? 1)
    return {
      id: dim.id,
      title: dim.title,
      score,
      max: dimMax,
      band: findBand(dim.bands, score),
    }
  })

  // 特殊触发项
  const criticalFlags: CriticalFlag[] = (config.criticalItems ?? [])
    .filter((item) => {
      const value = answers[item.questionId]
      return value !== undefined && evalCondition(value, item.condition)
    })
    .map((item) => ({
      ...item,
      questionText: config.questions.find((q) => q.id === item.questionId)?.text ?? '',
    }))

  return {
    scaleId: config.id,
    scaleTitle: config.title,
    answeredCount: answered,
    totalCount: config.questions.length,
    total,
    max: config.scoring.max,
    band: findBand(config.scoring.bands, total),
    dimensions,
    criticalFlags,
  }
}
