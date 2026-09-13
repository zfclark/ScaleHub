import type { ScaleConfig } from '@/types/scale'

const aisOptions = [
  { label: '没有问题', value: 0 },
  { label: '轻微问题', value: 1 },
  { label: '明显问题', value: 2 },
  { label: '严重问题', value: 3 },
]

export const ais: ScaleConfig = {
  id: 'ais',
  title: '雅典失眠量表（AIS）',
  shortTitle: 'AIS 失眠筛查',
  description: '基于失眠国际标准设计的自评量表，评估最近一个月的睡眠问题，共 8 题，操作简便、信效度良好。',
  instructions:
    '请根据您最近一个月（至少最近 3 次失眠发作）的实际睡眠情况作答。每个条目选择一个最符合情况的选项。本量表仅用于初步了解睡眠状况，不能替代专业诊断。',
  meta: {
    timeMinutes: 2,
    audience: '存在睡眠困扰的人群，用于失眠症状筛查',
    tags: ['睡眠'],
  },
  questions: [
    {
      id: 'q1',
      text: '入睡时间（熄灯后到入睡所需的时间）',
      options: aisOptions,
    },
    {
      id: 'q2',
      text: '夜间觉醒后再入睡的难易程度',
      options: aisOptions,
    },
    {
      id: 'q3',
      text: '比期望的时间早醒的情况',
      options: aisOptions,
    },
    {
      id: 'q4',
      text: '总睡眠时间是否充足',
      options: aisOptions,
    },
    {
      id: 'q5',
      text: '对总体睡眠质量的评价',
      options: aisOptions,
    },
    {
      id: 'q6',
      text: '睡眠问题对白天情绪的影响',
      options: aisOptions,
    },
    {
      id: 'q7',
      text: '睡眠问题对白天身体功能（体力与精力）的影响',
      options: aisOptions,
    },
    {
      id: 'q8',
      text: '白天困倦嗜睡的程度',
      options: aisOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 24,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 5,
        label: '无失眠',
        description: '您的睡眠状况良好，未提示失眠问题。',
        advice: '继续保持良好的睡眠习惯：规律作息、睡前减少屏幕使用。',
      },
      {
        min: 6,
        max: 9,
        label: '可疑失眠（亚临床范围）',
        description: '您存在一定的睡眠困扰，达到可疑失眠的范围。',
        advice: '建议尝试改善睡眠卫生（固定起床时间、避免下午摄入咖啡因等），并持续观察；必要时可咨询医生。',
      },
      {
        min: 10,
        max: 24,
        label: '提示失眠',
        description: '您的睡眠问题已达到失眠筛查阳性的范围，并可能影响白天状态。',
        advice: '建议前往睡眠专科或精神科进行专业评估；失眠认知行为治疗（CBT-I）是目前推荐的一线干预方式。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Soldatos CR, Dikeos DG, Paparrigopoulos TJ. Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria. J Psychosom Res. 2000;48(6):555-560.',
  },
}
