import type { ScoreBand } from '@/types/scale'

/**
 * 等级徽章的配色。
 *
 * 不按「总分 ÷ 满分」的比值取色 —— 那个比值隐含「分越高越差」，对两类别无意义：
 * - 正向计分量表（RSES 自尊 / GSES 自我效能 / SWLS 生活满意度）恰好相反，
 *   高分会立刻被判成红色；
 * - 纯维度型量表（BFI / IPIP-NEO-120 / EPQ-RSC / MMPI / DASS-21）没有总分等级，
 *   比值本身不表达任何严重程度。
 *
 * 改为按「等级在分级序列中的位置」取色：配置里各量表的分级一律按由轻到重排列，
 * 因此序号即可代表严重程度；`higherIsBetter` 为真时把色阶反向。
 */

/** 无分级（如纯维度型量表）时使用中性配色 */
export const NEUTRAL_BAND_CLASS =
  'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'

/** 由「最好」到「最差」的四级色阶 */
const RAMP = [
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300',
  'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300',
]

const THRESHOLDS = [0.2, 0.45, 0.7]

/**
 * @param bands 该量表（或维度）的完整分级序列，需按由轻到重排列
 * @param band  当前命中的等级
 * @param higherIsBetter 总分是否为「越高越好」，默认 false
 */
export function bandColorClass(
  bands: ScoreBand[] | undefined,
  band: ScoreBand | undefined,
  higherIsBetter = false,
): string {
  if (!bands?.length || !band) return NEUTRAL_BAND_CLASS

  const index = bands.findIndex((b) => b.min === band.min && b.max === band.max)
  if (index < 0) return NEUTRAL_BAND_CLASS

  const position = bands.length === 1 ? 0 : index / (bands.length - 1)
  const severity = higherIsBetter ? 1 - position : position

  for (let i = 0; i < THRESHOLDS.length; i++) {
    if (severity <= THRESHOLDS[i]) return RAMP[i]
  }
  return RAMP[RAMP.length - 1]
}
