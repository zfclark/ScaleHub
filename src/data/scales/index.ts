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
import { sas } from './sas'
// ── 以下为 V1.2.0 新增量表 ──
import { sds } from './sds'
import { bdi } from './bdi'
import { cdi } from './cdi'
import { bai } from './bai'
import { scared } from './scared'
import { scl90 } from './scl-90'
import { ghq12 } from './ghq-12'
import { sdq } from './sdq'
import { psqi } from './psqi'
import { audit } from './audit'
import { dast } from './dast'
import { mmpi } from './mmpi'
import { ipipNeo } from './ipip-neo-120'
import { bfi } from './bfi'
import { epq } from './epq'

/**
 * 量表注册表：新增量表只需
 * 1. 在本目录新建配置文件（遵循 ScaleConfig 结构）
 * 2. 在下方数组中注册
 * 评分、展示、历史、趋势等功能将自动支持。
 */
export const scales: ScaleConfig[] = [
  // 抑郁与焦虑（短量表优先，便于快速自测）
  gad7,
  phq9,
  gad2,
  phq2,
  sds,
  bdi,
  bai,
  pss10,
  dass21,
  // 综合症状筛查
  scl90,
  ghq12,
  // 睡眠
  ais,
  isi,
  psqi,
  // 儿童青少年
  sdq,
  cdi,
  scared,
  // 人格
  mmpi,
  ipipNeo,
  bfi,
  epq,
  // 自我认识与幸福感
  rses,
  gses,
  swls,
  sas,
  // 成瘾行为
  audit,
  dast,
]

export function getScaleById(id: string): ScaleConfig | undefined {
  return scales.find((s) => s.id === id)
}
