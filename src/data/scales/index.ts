import type { ScaleConfig } from '@/types/scale'
import { gad7 } from './gad-7'
import { phq9 } from './phq-9'
import { gad2 } from './gad-2'
import { phq2 } from './phq-2'
import { pss10 } from './pss-10'
import { dass21 } from './dass-21'
import { ais } from './ais'
import { isi } from './isi'
import { rses } from './rses'
import { gses } from './gses'
import { swls } from './swls'

/**
 * 量表注册表：新增量表只需
 * 1. 在本目录新建配置文件（遵循 ScaleConfig 结构）
 * 2. 在下方数组中注册
 * 评分、展示、历史、趋势等功能将自动支持。
 */
export const scales: ScaleConfig[] = [
  gad7,
  phq9,
  gad2,
  phq2,
  pss10,
  dass21,
  ais,
  isi,
  rses,
  gses,
  swls,
]

export function getScaleById(id: string): ScaleConfig | undefined {
  return scales.find((s) => s.id === id)
}
