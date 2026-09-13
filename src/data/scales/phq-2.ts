import type { ScaleConfig } from '@/types/scale'

const frequencyOptions = [
  { label: '完全没有', value: 0 },
  { label: '有几天', value: 1 },
  { label: '一半以上时间', value: 2 },
  { label: '几乎每天', value: 3 },
]

export const phq2: ScaleConfig = {
  id: 'phq-2',
  title: '超快速抑郁初筛（PHQ-2）',
  shortTitle: 'PHQ-2 抑郁初筛',
  description: 'PHQ-9 的核心前两题，用于 1 分钟内完成抑郁问题的超快速初筛，阳性者建议进一步完成 PHQ-9。',
  instructions:
    '在过去的 2 周内，您有多少时候受到以下问题的困扰？请根据实际情况选择最符合的一项。本量表仅为快速初筛，结果不能替代专业评估。',
  meta: {
    timeMinutes: 1,
    audience: '一般人群，用于抑郁问题的快速初筛',
    tags: ['抑郁', '快速筛查'],
  },
  questions: [
    { id: 'q1', text: '做事时提不起劲或没有兴趣', options: frequencyOptions },
    { id: 'q2', text: '感到心情低落、沮丧或绝望', options: frequencyOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 6,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 2,
        label: '初筛阴性',
        description: '目前未提示明显的抑郁问题。',
        advice: '当前结果良好。如日后情绪出现变化，可随时复测或完成完整的 PHQ-9。',
      },
      {
        min: 3,
        max: 6,
        label: '初筛阳性',
        description: '初筛结果提示可能存在抑郁问题。',
        advice: '建议进一步完成 PHQ-9 完整量表，以获得更准确的评估；必要时寻求专业帮助。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Kroenke K, Spitzer RL, Williams JBW. The Patient Health Questionnaire-2: validity of a two-item depression screener. Med Care. 2003;41(11):1284-1292.',
  },
}
