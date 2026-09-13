/**
 * ScaleHub 量表配置类型定义。
 *
 * 量表以「数据配置」描述，评分逻辑完全由 src/engine/scoring.ts 驱动，
 * 新增量表只需新增一个配置文件并在 data/scales/index.ts 注册。
 */

/** 单个选项：文案 + 分值 */
export interface ScaleOption {
  label: string
  value: number
}

/** 单个题目 */
export interface ScaleQuestion {
  id: string
  text: string
  options: ScaleOption[]
}

/** 分数区间：等级、解释与建议 */
export interface ScoreBand {
  min: number
  max: number
  label: string
  description?: string
  advice?: string
}

/** 维度定义（如 DASS-21 的抑郁/焦虑/压力） */
export interface DimensionDef {
  id: string
  title: string
  questionIds: string[]
  /** 维度分倍率（DASS-21 折算为 ×2），默认 1 */
  multiplier?: number
  /** 维度独立的分级区间 */
  bands?: ScoreBand[]
}

/** 特殊触发项（如自杀风险题），条件命中后展示心理援助信息 */
export interface CriticalItem {
  questionId: string
  /** 形如 ">0" / ">=1" / ">=2" / "==3" / "!=0" 的简单比较表达式 */
  condition: string
  action: 'showCrisisResources'
  /** 命中时向用户展示的提示文案 */
  message?: string
}

/** 版权与许可信息 */
export interface ScaleLicense {
  /** 例如：public-domain / free-with-citation / permission-required */
  status: string
  /** 官方来源 / 学术引用 */
  source: string
}

/** 量表元信息 */
export interface ScaleMeta {
  /** 预计时长（分钟） */
  timeMinutes: number
  /** 适用人群 */
  audience: string
  /** 分类标签 */
  tags?: string[]
}

/** 评分配置 */
export interface ScoringConfig {
  type: 'sum'
  /** 理论最低分（默认 0） */
  min?: number
  /** 理论最高分 */
  max: number
  /** 总分倍率（如 SAS 标准分 = 原始总分 × 1.25），默认 1；应用后四舍五入取整 */
  multiplier?: number
  /** 需要反向计分的题目 id 列表 */
  reverse: string[]
  /** 题目权重（可选），key 为题目 id */
  weights?: Record<string, number>
  /** 总分分级区间（纯维度型量表可不填） */
  bands?: ScoreBand[]
  /** 维度分（可选） */
  dimensions?: DimensionDef[]
}

/** 量表完整配置 */
export interface ScaleConfig {
  id: string
  title: string
  shortTitle?: string
  description: string
  instructions: string
  meta: ScaleMeta
  questions: ScaleQuestion[]
  scoring: ScoringConfig
  criticalItems?: CriticalItem[]
  license: ScaleLicense
}

/** 维度得分 */
export interface DimensionScore {
  id: string
  title: string
  score: number
  max: number
  band?: ScoreBand
}

/** 特殊触发项的命中结果 */
export interface CriticalFlag extends CriticalItem {
  questionText: string
}

/** 评分结果 */
export interface ScoreResult {
  scaleId: string
  scaleTitle: string
  /** 回答的题目数量 */
  answeredCount: number
  totalCount: number
  total: number
  max: number
  band?: ScoreBand
  dimensions: DimensionScore[]
  criticalFlags: CriticalFlag[]
}

/** 一条已完成的历史记录 */
export interface TestRecord {
  /** 记录 id（基于时间戳生成） */
  id: string
  scaleId: string
  scaleTitle: string
  /** 完成时间 ISO 字符串 */
  completedAt: string
  answers: Record<string, number>
  result: ScoreResult
}

/** 进行中的答题进度（自动保存） */
export interface TestProgress {
  scaleId: string
  answers: Record<string, number>
  currentIndex: number
  updatedAt: string
}
