import type { ScaleConfig } from '@/types/scale'

const qualityOptions = [
  { label: '很好', value: 0 },
  { label: '较好', value: 1 },
  { label: '较差', value: 2 },
  { label: '很差', value: 3 },
]

const latencyOptions = [
  { label: '15 分钟以内', value: 0 },
  { label: '16-30 分钟', value: 1 },
  { label: '31-60 分钟', value: 2 },
  { label: '超过 60 分钟', value: 3 },
]

const durationOptions = [
  { label: '超过 7 小时', value: 0 },
  { label: '6-7 小时', value: 1 },
  { label: '5-6 小时', value: 2 },
  { label: '不足 5 小时', value: 3 },
]

const efficiencyOptions = [
  { label: '85% 以上', value: 0 },
  { label: '75%-84%', value: 1 },
  { label: '65%-74%', value: 2 },
  { label: '低于 65%', value: 3 },
]

const disturbanceOptions = [
  { label: '没有问题', value: 0 },
  { label: '每周不足 1 次', value: 1 },
  { label: '每周 1-2 次', value: 2 },
  { label: '每周 3 次或以上', value: 3 },
]

const daytimeOptions = [
  { label: '没有困扰', value: 0 },
  { label: '轻微困扰', value: 1 },
  { label: '明显困扰', value: 2 },
  { label: '严重困扰', value: 3 },
]

/**
 * 匹兹堡睡眠质量指数（PSQI · 7 因子计分版）
 * - 原量表含 19 个自评条目，需按复杂规则折算为 7 个成分分（每项 0-3 分）
 * - 本工具采用「7 因子直答」形式：每个成分作为一个条目直接作答，总分 0-21
 * - 分级：0-5 睡眠质量良好；6-7 睡眠质量一般；8-21 睡眠质量差（切分值为 7 分）
 */
export const psqi: ScaleConfig = {
  id: 'psqi',
  title: '匹兹堡睡眠质量指数（PSQI）',
  shortTitle: 'PSQI 睡眠质量',
  description:
    '国际通用的睡眠质量评估工具，从主观睡眠质量、入睡时间、睡眠时长、睡眠效率、睡眠障碍、催眠药物与日间功能 7 个方面进行评价，总分 0-21 分。',
  instructions:
    '请根据您最近一个月的实际睡眠情况，就以下 7 个方面分别选择最符合的一项。本工具采用 7 因子直答形式（原量表为 19 个条目折算 7 个成分分），总分判读标准与原量表一致。',
  meta: {
    timeMinutes: 3,
    audience: '存在睡眠困扰的人群，综合评估近一个月睡眠质量',
    tags: ['睡眠'],
  },
  questions: [
    { id: 'q1', text: '近一个月，您对自己睡眠质量的总体评价', options: qualityOptions },
    {
      id: 'q2',
      text: '近一个月，您从上床到入睡通常需要多长时间',
      options: latencyOptions,
    },
    { id: 'q3', text: '近一个月，您每夜实际睡眠时间大约有多长', options: durationOptions },
    {
      id: 'q4',
      text: '近一个月，您的睡眠效率（实际睡眠时间 ÷ 卧床时间）大约是多少',
      options: efficiencyOptions,
    },
    {
      id: 'q5',
      text: '近一个月，您因夜间易醒、起夜、疼痛、打鼾等影响睡眠的情况有多频繁',
      options: disturbanceOptions,
    },
    {
      id: 'q6',
      text: '近一个月，您需要借助催眠药物（处方或自行购买）才能入睡的情况有多频繁',
      options: disturbanceOptions,
    },
    {
      id: 'q7',
      text: '近一个月，您在白天感到困倦、精力不足或难以保持清醒的程度',
      options: daytimeOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 21,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 5,
        label: '睡眠质量良好',
        description: '您的睡眠质量处于良好水平，各成分未提示明显问题。',
        advice: '继续保持规律作息与良好的睡眠习惯，如固定的起床时间与睡前减少屏幕使用。',
      },
      {
        min: 6,
        max: 7,
        label: '睡眠质量一般',
        description: '您的睡眠质量处于临界范围，可能存在某些方面的睡眠问题。',
        advice:
          '建议回顾睡眠卫生习惯（固定起床时间、避免下午摄入咖啡因、睡前避免饮酒），持续观察 2-4 周；若睡眠问题持续或加重，建议寻求专业评估。',
      },
      {
        min: 8,
        max: 21,
        label: '睡眠质量差',
        description: '您的总分已超过 7 分的常用切分值，提示存在临床相关的睡眠质量问题。',
        advice:
          '建议前往睡眠专科或精神科就诊。失眠认知行为治疗（CBT-I）是各类慢性失眠的一线推荐干预方式，效果优于单纯用药。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Buysse DJ, Reynolds CF, Monk TH, Berman SR, Kupfer DJ. The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research. Psychiatry Res. 1989;28(2):193-213.',
  },
}
