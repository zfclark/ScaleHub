import type { ScaleConfig } from '@/types/scale'

const swlsOptions = [
  { label: '非常不同意', value: 1 },
  { label: '不同意', value: 2 },
  { label: '有点不同意', value: 3 },
  { label: '既不同意也不反对', value: 4 },
  { label: '有点同意', value: 5 },
  { label: '同意', value: 6 },
  { label: '非常同意', value: 7 },
]

export const swls: ScaleConfig = {
  id: 'swls',
  title: '生活满意度量表（SWLS）',
  shortTitle: 'SWLS 生活满意度',
  description: '由 Diener 等人编制的经典量表，从认知层面对整体生活满意度进行评估，仅 5 题，简洁高效。',
  instructions:
    '以下条目反映您对自己生活的整体判断。请根据您近期的真实想法，选择每个条目的同意程度。本量表关注的是对生活的整体评价，而非某一时刻的情绪。',
  meta: {
    timeMinutes: 1,
    audience: '一般人群，评估整体生活满意度',
    tags: ['幸福感'],
  },
  questions: [
    {
      id: 'q1',
      text: '在大多数方面，我的生活接近于我的理想',
      options: swlsOptions,
    },
    { id: 'q2', text: '我的生活条件非常好', options: swlsOptions },
    { id: 'q3', text: '我对我的生活感到满意', options: swlsOptions },
    {
      id: 'q4',
      text: '到目前为止，我已经得到了生活中我想要的重要东西',
      options: swlsOptions,
    },
    {
      id: 'q5',
      text: '如果能重新来过，我几乎不会改变我的生活',
      options: swlsOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 5,
    max: 35,
    higherIsBetter: true,
    reverse: [],
    bands: [
      {
        min: 5,
        max: 9,
        label: '极不满意',
        description: '您对生活的整体满意度处于极低水平。',
        advice: '建议认真关注当前的生活状态与情绪，主动寻求家人朋友或专业人士的支持。',
      },
      {
        min: 10,
        max: 14,
        label: '不满意',
        description: '您对生活的整体满意度偏低。',
        advice: '建议梳理当前最重要的困扰，从小处着手改善生活；必要时可寻求心理支持。',
      },
      {
        min: 15,
        max: 19,
        label: '轻微不满意',
        description: '您对生活的满意度略低于中性水平，可能存在一些不满意的部分。',
        advice: '尝试识别生活中让您不满意的领域，思考可以改变的部分与需要接纳的部分。',
      },
      {
        min: 20,
        max: 20,
        label: '中性',
        description: '您对生活的评价处于中性状态，既谈不上满意也谈不上不满意。',
        advice: '可以思考什么对您真正重要，主动为生活增加意义感与掌控感。',
      },
      {
        min: 21,
        max: 25,
        label: '轻微满意',
        description: '您对生活的整体满意度略高于中性水平。',
        advice: '继续保持让生活向理想靠近的行动，关注自己珍视的方面。',
      },
      {
        min: 26,
        max: 30,
        label: '满意',
        description: '您对生活的整体满意度较高。',
        advice: '请继续保持当前的生活状态与心态，也可以记录下让您满意的方面。',
      },
      {
        min: 31,
        max: 35,
        label: '非常满意',
        description: '您对生活抱有很高的满意度，生活状态与您的理想非常接近。',
        advice: '这份满足感非常宝贵，请继续保持。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Diener E, Emmons RA, Larsen RJ, Griffin S. The Satisfaction With Life Scale. J Pers Assess. 1985;49(1):71-75.',
  },
}
