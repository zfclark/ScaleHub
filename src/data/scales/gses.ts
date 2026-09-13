import type { ScaleConfig } from '@/types/scale'

const gsesOptions = [
  { label: '完全不正确', value: 1 },
  { label: '有点正确', value: 2 },
  { label: '大多数时候正确', value: 3 },
  { label: '完全正确', value: 4 },
]

export const gses: ScaleConfig = {
  id: 'gses',
  title: '一般自我效能感量表（GSES）',
  shortTitle: 'GSES 自我效能感',
  description: '由 Schwarzer 等人编制的单维度量表，评估个体面对各种挑战情境时对自己能力的总体信心，共 10 题。',
  instructions:
    '以下描述的是您在面对困难与挑战时的一般表现。请根据您的实际情况，选择每个描述与您符合的程度。计分为 1-4 分，总分范围 10-40 分。',
  meta: {
    timeMinutes: 2,
    audience: '一般人群（12 岁及以上），评估一般自我效能感',
    tags: ['自我认识'],
  },
  questions: [
    { id: 'q1', text: '如果我尽力去做的话，我总是能够解决问题的', options: gsesOptions },
    {
      id: 'q2',
      text: '即使别人反对我，我仍有办法取得我想要的',
      options: gsesOptions,
    },
    {
      id: 'q3',
      text: '对我来说，坚持理想和达成目标是轻而易举的',
      options: gsesOptions,
    },
    {
      id: 'q4',
      text: '我自信能有效地应付任何突如其来的事情',
      options: gsesOptions,
    },
    {
      id: 'q5',
      text: '以我的才智，我定能应付意料之外的情况',
      options: gsesOptions,
    },
    {
      id: 'q6',
      text: '如果我付出必要的努力，我一定能解决大多数的难题',
      options: gsesOptions,
    },
    {
      id: 'q7',
      text: '我能冷静地面对困难，因为我可以信赖自己处理问题的能力',
      options: gsesOptions,
    },
    {
      id: 'q8',
      text: '面对一个难题时，我通常能找到几个解决方法',
      options: gsesOptions,
    },
    {
      id: 'q9',
      text: '有麻烦的时候，我通常能想到一些应付的办法',
      options: gsesOptions,
    },
    {
      id: 'q10',
      text: '无论什么事在我身上发生，我都能够应付自如',
      options: gsesOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 10,
    max: 40,
    reverse: [],
    bands: [
      {
        min: 10,
        max: 19,
        label: '自我效能感偏低',
        description: '您对自己应对困难能力的信心处于偏低水平。',
        advice: '建议从小挑战开始积累成功经验，观察他人如何应对类似情境，并留意自己的积极反馈，逐步建立信心。',
      },
      {
        min: 20,
        max: 29,
        label: '自我效能感中等',
        description: '您对自己能力的信心处于中等水平，多数情境下能够应对。',
        advice: '可以通过复盘过往成功经验、主动迎接适度挑战来进一步增强效能感。',
      },
      {
        min: 30,
        max: 40,
        label: '自我效能感较高',
        description: '您对自己应对各类挑战的能力有较强信心。',
        advice: '这份信心是宝贵资源，可在帮助他人的过程中继续巩固与发挥。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Schwarzer R, Jerusalem M. Generalized self-efficacy scale. In: Weinman J, Wright S, Johnston M, eds. Measures in health psychology: a user’s portfolio. Windsor: NFER-Nelson, 1995:35-37.',
  },
}
