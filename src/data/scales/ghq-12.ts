import type { ScaleConfig } from '@/types/scale'

const ghqOptions = [
  { label: '完全没有', value: 0 },
  { label: '与平时差不多', value: 1 },
  { label: '比平时多一些', value: 2 },
  { label: '比平时多很多', value: 3 },
]

/**
 * 一般健康问卷（GHQ-12）
 * - 12 题，选项 0-3 分（Likert 计分），总分 0-36
 * - 第 1、3、4、7、8、12 题为正向表述条目，需反向计分
 * - 分级（按 Likert 总分）：0-11 无明显困扰；12-19 中度困扰；20-36 较高困扰
 * - 采用 Likert 计分法（另有 GHQ 二值计分法，本工具未采用）
 */
export const ghq12: ScaleConfig = {
  id: 'ghq-12',
  title: '一般健康问卷（GHQ-12）',
  shortTitle: 'GHQ-12 心理困扰筛查',
  description:
    '国际最常用的心理健康快速筛查问卷之一，共 12 题，聚焦近几周内的一般心理困扰与功能状态，适合人群层面的初筛。',
  instructions:
    '请根据您最近几周的整体情况作答，比较您现在的状态与平时（平常）的状态有何不同。其中部分条目为反向计分，系统会自动处理，请按真实感受作答。',
  meta: {
    timeMinutes: 3,
    audience: '一般人群（青少年及以上），用于心理困扰的快速筛查',
    tags: ['综合筛查'],
  },
  questions: [
    { id: 'q1', text: '能够集中精力做事情', options: ghqOptions },
    { id: 'q2', text: '因为担忧而失眠', options: ghqOptions },
    { id: 'q3', text: '觉得自己在生活中扮演着有用的角色', options: ghqOptions },
    { id: 'q4', text: '能够对事情做出决定', options: ghqOptions },
    { id: 'q5', text: '感到一直被压力困扰', options: ghqOptions },
    { id: 'q6', text: '感到无法克服自己的困难', options: ghqOptions },
    { id: 'q7', text: '能够享受日常活动', options: ghqOptions },
    { id: 'q8', text: '能够面对并处理自己的问题', options: ghqOptions },
    { id: 'q9', text: '感到不快乐和抑郁', options: ghqOptions },
    { id: 'q10', text: '对自己失去信心', options: ghqOptions },
    { id: 'q11', text: '觉得自己是个没有价值的人', options: ghqOptions },
    { id: 'q12', text: '总体而言感到相当快乐', options: ghqOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 36,
    reverse: ['q1', 'q3', 'q4', 'q7', 'q8', 'q12'],
    bands: [
      {
        min: 0,
        max: 11,
        label: '未提示明显心理困扰',
        description: '您近期的心理状态与平时相比没有明显变差，未提示存在值得关注的心理困扰。',
        advice: '保持规律作息与适度运动即可，继续关注自身状态变化。',
      },
      {
        min: 12,
        max: 19,
        label: '存在中度心理困扰',
        description: '您的得分已达到筛查提示范围，说明近期可能存在一定程度的心理困扰与功能影响。',
        advice:
          '建议留意压力来源与睡眠、情绪的变化，尝试规律作息、运动与社会支持等自助方式；若持续两周以上，建议寻求专业评估。',
      },
      {
        min: 20,
        max: 36,
        label: '存在较高心理困扰',
        description: '您的得分较高，提示近期心理困扰较为明显，并可能已影响日常功能。',
        advice:
          '建议尽快前往精神科或心理科进行专业评估。及早干预通常能显著缩短病程，寻求帮助是有效且值得的选择。',
      },
    ],
  },
  license: {
    status: 'permission-required',
    source:
      'Goldberg DP, Williams P. A user’s guide to the General Health Questionnaire. Windsor: NFER-Nelson, 1988.',
  },
}
