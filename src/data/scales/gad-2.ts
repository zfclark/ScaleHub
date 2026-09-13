import type { ScaleConfig } from '@/types/scale'

const frequencyOptions = [
  { label: '完全没有', value: 0 },
  { label: '有几天', value: 1 },
  { label: '一半以上时间', value: 2 },
  { label: '几乎每天', value: 3 },
]

export const gad2: ScaleConfig = {
  id: 'gad-2',
  title: '超快速焦虑初筛（GAD-2）',
  shortTitle: 'GAD-2 焦虑初筛',
  description: 'GAD-7 的核心前两题，用于 1 分钟内完成焦虑问题的超快速初筛，阳性者建议进一步完成 GAD-7。',
  instructions:
    '在过去的 2 周内，您有多少时候受到以下问题的困扰？请根据实际情况选择最符合的一项。本量表仅为快速初筛，结果不能替代专业评估。',
  meta: {
    timeMinutes: 1,
    audience: '一般人群，用于焦虑问题的快速初筛',
    tags: ['焦虑', '快速筛查'],
  },
  questions: [
    { id: 'q1', text: '感觉紧张、焦虑或急切', options: frequencyOptions },
    { id: 'q2', text: '不能停止或控制担忧', options: frequencyOptions },
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
        description: '目前未提示明显的焦虑问题。',
        advice: '当前结果良好。如日后情绪出现变化，可随时复测或完成完整的 GAD-7。',
      },
      {
        min: 3,
        max: 6,
        label: '初筛阳性',
        description: '初筛结果提示可能存在焦虑问题。',
        advice: '建议进一步完成 GAD-7 完整量表，以获得更准确的评估；必要时寻求专业帮助。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Kroenke K, Spitzer RL, Williams JBW, Monahan PO, Löwe B. Anxiety disorders in primary care: prevalence and implications. Ann Intern Med. 2007;146(5):317-325.',
  },
}
