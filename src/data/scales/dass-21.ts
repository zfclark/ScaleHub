import type { ScaleConfig } from '@/types/scale'

const dassOptions = [
  { label: '完全不符合', value: 0 },
  { label: '部分符合', value: 1 },
  { label: '大部分符合', value: 2 },
  { label: '完全符合', value: 3 },
]

const questions: ScaleConfig['questions'] = [
  { id: 'q1', text: '我感到很难让自己安静下来', options: dassOptions },
  { id: 'q2', text: '我感到口干舌燥', options: dassOptions },
  { id: 'q3', text: '我好像再也不能体验到任何愉快的感受', options: dassOptions },
  {
    id: 'q4',
    text: '我感到呼吸困难（例如在没有体力活动的情况下呼吸急促）',
    options: dassOptions,
  },
  { id: 'q5', text: '我发现自己很难主动开始做事情', options: dassOptions },
  { id: 'q6', text: '我倾向于对一些小事反应过度', options: dassOptions },
  { id: 'q7', text: '我感到身体发抖（例如手抖）', options: dassOptions },
  { id: 'q8', text: '我感到自己消耗了很多精神', options: dassOptions },
  { id: 'q9', text: '我担心那些可能让自己恐慌或当众出丑的场合', options: dassOptions },
  { id: 'q10', text: '我觉得未来没有什么值得期待的事情', options: dassOptions },
  { id: 'q11', text: '我感到焦躁不安、难以平静', options: dassOptions },
  { id: 'q12', text: '我感到很难放松下来', options: dassOptions },
  { id: 'q13', text: '我感到沮丧和忧郁', options: dassOptions },
  {
    id: 'q14',
    text: '我无法容忍任何阻碍我继续手头事情的东西',
    options: dassOptions,
  },
  { id: 'q15', text: '我感到自己快要崩溃了', options: dassOptions },
  { id: 'q16', text: '我对任何事情都提不起热情', options: dassOptions },
  { id: 'q17', text: '我觉得自己是个没有价值的人', options: dassOptions },
  { id: 'q18', text: '我感到自己比较容易生气或被激怒', options: dassOptions },
  {
    id: 'q19',
    text: '即使没有明显的体力活动，我也感到心率明显加快',
    options: dassOptions,
  },
  { id: 'q20', text: '我无缘无故地感到害怕', options: dassOptions },
  { id: 'q21', text: '我感到生命毫无意义', options: dassOptions },
]

export const dass21: ScaleConfig = {
  id: 'dass-21',
  title: '抑郁-焦虑-压力量表（DASS-21）',
  shortTitle: 'DASS-21 综合评估',
  description: '一份量表同时评估抑郁、焦虑、压力三类负性情绪症状，共 21 题、三个维度，各维度分数需乘以 2 以便与 DASS-42 对照。',
  instructions:
    '请阅读每一个条目，并根据过去一周内您的实际情况，选择最符合的选项。请注意评估的是「过去一周」的感受，而不是某一天的感受。第 21 题若让您感到困扰，请关注结果页提供的帮助信息。',
  meta: {
    timeMinutes: 6,
    audience: '一般人群，同时筛查抑郁、焦虑与压力状态',
    tags: ['抑郁', '焦虑', '压力'],
  },
  questions,
  scoring: {
    type: 'sum',
    min: 0,
    // 总分为 21 题的原始分之和（0-63），不含维度的 ×2 折算；
    // 维度分各自 ×2 后与 DASS-42 对照，结果解读以维度分为准
    max: 63,
    reverse: [],
    dimensions: [
      {
        id: 'depression',
        title: '抑郁',
        questionIds: ['q3', 'q5', 'q10', 'q13', 'q16', 'q17', 'q21'],
        multiplier: 2,
        bands: [
          { min: 0, max: 9, label: '正常', description: '抑郁症状处于正常范围。' },
          { min: 10, max: 13, label: '轻度', description: '存在轻度抑郁症状，建议留意情绪变化。' },
          {
            min: 14,
            max: 20,
            label: '中度',
            description: '存在中度抑郁症状，建议进行专业评估。',
            advice: '建议前往精神科或心理科咨询，并尝试保持社交与运动。',
          },
          { min: 21, max: 27, label: '重度', description: '存在重度抑郁症状。' },
          {
            min: 28,
            max: 42,
            label: '极重度',
            description: '抑郁症状处于极重度水平。',
            advice: '强烈建议尽快就诊精神科，接受系统评估与治疗。',
          },
        ],
      },
      {
        id: 'anxiety',
        title: '焦虑',
        questionIds: ['q2', 'q4', 'q7', 'q9', 'q15', 'q19', 'q20'],
        multiplier: 2,
        bands: [
          { min: 0, max: 7, label: '正常', description: '焦虑症状处于正常范围。' },
          { min: 8, max: 9, label: '轻度', description: '存在轻度焦虑症状，建议留意变化。' },
          {
            min: 10,
            max: 14,
            label: '中度',
            description: '存在中度焦虑症状。',
            advice: '建议学习放松技巧并观察症状变化，必要时寻求专业评估。',
          },
          { min: 15, max: 19, label: '重度', description: '存在重度焦虑症状。' },
          {
            min: 20,
            max: 42,
            label: '极重度',
            description: '焦虑症状处于极重度水平。',
            advice: '强烈建议尽快就诊精神科或心理科，接受专业评估与治疗。',
          },
        ],
      },
      {
        id: 'stress',
        title: '压力',
        questionIds: ['q1', 'q6', 'q8', 'q11', 'q12', 'q14', 'q18'],
        multiplier: 2,
        bands: [
          { min: 0, max: 14, label: '正常', description: '压力水平处于正常范围。' },
          { min: 15, max: 18, label: '轻度', description: '存在轻度压力反应，建议留意状态。' },
          {
            min: 19,
            max: 25,
            label: '中度',
            description: '存在中度压力反应。',
            advice: '建议梳理压力来源，尝试运动、正念等减压方式。',
          },
          { min: 26, max: 33, label: '重度', description: '存在重度压力反应。' },
          {
            min: 34,
            max: 42,
            label: '极重度',
            description: '压力反应处于极重度水平。',
            advice: '建议尽快寻求专业心理帮助，减轻身心负担。',
          },
        ],
      },
    ],
  },
  criticalItems: [
    {
      questionId: 'q21',
      condition: '>=2',
      action: 'showCrisisResources',
      message:
        '您对「生命毫无意义」这一条目给出了较高的评分。请认真对待这些感受——痛苦是可以被缓解的，专业的帮助是有效的。建议您联系心理援助热线或信任的人。',
    },
  ],
  license: {
    status: 'free-with-citation',
    source:
      'Lovibond SH, Lovibond PF. The structure of negative emotional states: comparison of the Depression Anxiety Stress Scales (DASS) with the Beck Depression and Anxiety Inventories. Behav Res Ther. 1995;33(3):335-343.',
  },
}
