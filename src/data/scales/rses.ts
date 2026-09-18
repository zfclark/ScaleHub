import type { ScaleConfig } from '@/types/scale'

const agreeOptions = [
  { label: '非常不同意', value: 0 },
  { label: '不同意', value: 1 },
  { label: '同意', value: 2 },
  { label: '非常同意', value: 3 },
]

export const rses: ScaleConfig = {
  id: 'rses',
  title: 'Rosenberg 自尊量表（RSES）',
  shortTitle: 'RSES 自尊评估',
  description: '全球使用最广泛的自尊测量工具之一，通过 10 个条目评估个体整体自我价值感，包含正向与反向条目。',
  instructions:
    '以下描述的是您对自己的一些普遍感受。请根据您通常的看法，选择每个条目的同意程度。其中部分条目为反向计分，系统会自动处理，请按真实感受作答。',
  meta: {
    timeMinutes: 2,
    audience: '一般人群（青少年及以上），评估整体自尊水平',
    tags: ['自我认识'],
  },
  questions: [
    { id: 'q1', text: '总的来说，我对自己是满意的', options: agreeOptions },
    { id: 'q2', text: '有时我会觉得自己一无是处', options: agreeOptions },
    { id: 'q3', text: '我觉得自己有许多优点', options: agreeOptions },
    { id: 'q4', text: '我觉得我能和大多数人一样把事情做好', options: agreeOptions },
    { id: 'q5', text: '我觉得自己没有什么值得自豪的地方', options: agreeOptions },
    { id: 'q6', text: '有时我确实感到自己很没用', options: agreeOptions },
    {
      id: 'q7',
      text: '我觉得自己是个有价值的人，至少不比别人差',
      options: agreeOptions,
    },
    { id: 'q8', text: '我希望能更看得起自己', options: agreeOptions },
    { id: 'q9', text: '我总是倾向于觉得自己是个失败者', options: agreeOptions },
    { id: 'q10', text: '我对自己持积极的态度', options: agreeOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 30,
    higherIsBetter: true,
    reverse: ['q2', 'q5', 'q6', 'q8', 'q9'],
    bands: [
      {
        min: 0,
        max: 15,
        label: '自尊水平偏低',
        description: '您的整体自我价值感处于偏低水平，可能较容易自我否定。',
        advice: '建议尝试记录自己的优点与成功小事，练习自我关怀；若长期伴随情绪低落，可考虑寻求心理支持。',
      },
      {
        min: 16,
        max: 25,
        label: '自尊水平中等',
        description: '您的自尊水平处于常见的中等范围，多数人对自己的看法与此类似。',
        advice: '可以通过设定并完成小目标、发展优势领域来进一步提升自我价值感。',
      },
      {
        min: 26,
        max: 30,
        label: '自尊水平良好',
        description: '您对自己有较高的认可与接纳，自我价值感良好。',
        advice: '请继续保持对自我的积极态度，这份稳定的价值感是应对压力的重要资源。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Rosenberg M. Society and the adolescent self-image. Princeton, NJ: Princeton University Press, 1965.',
  },
}
