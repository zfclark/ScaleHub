import type { ScaleConfig } from '@/types/scale'

const epqOptions = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
]

/**
 * 艾森克人格问卷简式量表（EPQ-RSC，48 题）
 * - 48 题，是非作答，4 个维度各 12 题：外向性 E、神经质 N、精神质 P、掩饰性 L
 * - 反向计分条目：9、11、12、20、22、25、27、28、37、38、39、40（「否」代表该维度高分）
 * - 各维度 0-12 分，相互独立，不设总分
 */
export const epq: ScaleConfig = {
  id: 'epq',
  title: '艾森克人格问卷简式量表（EPQ-RSC）',
  shortTitle: 'EPQ 人格问卷',
  description:
    '基于 Eysenck 人格理论编制的人格问卷简式量表中国版，共 48 题，从外向性 E、神经质 N、精神质 P 三个维度描述人格特征，并含掩饰性 L 维度用于评估作答的自我呈现倾向。',
  instructions:
    '以下每个问题都请根据您的实际情况回答「是」或「否」。请逐题作答，不要过多思考，也不要试图判断哪个答案「更好」——本问卷没有正确答案或好坏之分。请按您平时一贯的表现作答。',
  meta: {
    timeMinutes: 6,
    audience: '一般人群（青少年及以上），描述性评估人格特征',
    tags: ['人格'],
  },
  questions: [
    { id: 'q1', text: '你是个健谈、爱说话的人吗', options: epqOptions },
    { id: 'q2', text: '你是否经常感到紧张不安', options: epqOptions },
    {
      id: 'q3',
      text: '你是否喜欢按自己的方式做事，而不太在意别人的看法',
      options: epqOptions,
    },
    { id: 'q4', text: '你是否总是说到做到、从不食言', options: epqOptions },
    { id: 'q5', text: '你喜欢结交新朋友吗', options: epqOptions },
    { id: 'q6', text: '你的情绪是否经常起伏不定', options: epqOptions },
    { id: 'q7', text: '你是否常常觉得别人对你有敌意', options: epqOptions },
    { id: 'q8', text: '你是否从不撒谎', options: epqOptions },
    {
      id: 'q9',
      text: '你是否更喜欢安静地独处，而不是参加热闹的聚会',
      options: epqOptions,
    },
    { id: 'q10', text: '你是否经常感到心情低落', options: epqOptions },
    {
      id: 'q11',
      text: '你是否更喜欢与人合作，而不是自己一个人做决定',
      options: epqOptions,
    },
    { id: 'q12', text: '你是否有过幸灾乐祸的时候', options: epqOptions },
    { id: 'q13', text: '你是否喜欢热闹、充满活动的场合', options: epqOptions },
    { id: 'q14', text: '你是否很容易感到烦躁或被激怒', options: epqOptions },
    { id: 'q15', text: '你是否对别人的感受比较不在意', options: epqOptions },
    {
      id: 'q16',
      text: '你是否总是对别人彬彬有礼，即使对方不太客气',
      options: epqOptions,
    },
    { id: 'q17', text: '你是否喜欢经常外出，参加各种活动', options: epqOptions },
    {
      id: 'q18',
      text: '你是否经常担心一些可能发生的坏事',
      options: epqOptions,
    },
    { id: 'q19', text: '你是否喜欢冒险和刺激的活动', options: epqOptions },
    { id: 'q20', text: '你是否曾经拿过不属于自己的东西', options: epqOptions },
    {
      id: 'q21',
      text: '和别人在一起时，你是否觉得自己更有活力',
      options: epqOptions,
    },
    {
      id: 'q22',
      text: '面对压力时，你是否能很快恢复平静',
      options: epqOptions,
    },
    { id: 'q23', text: '你是否常常觉得规矩和制度让人厌烦', options: epqOptions },
    { id: 'q24', text: '你是否从来不迟到', options: epqOptions },
    {
      id: 'q25',
      text: '在陌生人面前，你是否常常不知道该说什么',
      options: epqOptions,
    },
    { id: 'q26', text: '你是否经常因为一些小事而心烦', options: epqOptions },
    { id: 'q27', text: '你是否容易被别人的情绪所影响', options: epqOptions },
    {
      id: 'q28',
      text: '你是否有时会说一些自己也知道不真实的话',
      options: epqOptions,
    },
    { id: 'q29', text: '你是否喜欢主动和陌生人交谈', options: epqOptions },
    { id: 'q30', text: '你是否常常感到疲倦或精力不足', options: epqOptions },
    {
      id: 'q31',
      text: '你是否有时会无缘无故地想和别人争执',
      options: epqOptions,
    },
    { id: 'q32', text: '你是否从不在背后议论别人', options: epqOptions },
    { id: 'q33', text: '你是否乐于成为大家关注的焦点', options: epqOptions },
    { id: 'q34', text: '你是否觉得自己容易紧张、容易着急', options: epqOptions },
    {
      id: 'q35',
      text: '你是否喜欢捉弄别人，或开一些有点过分的玩笑',
      options: epqOptions,
    },
    {
      id: 'q36',
      text: '你是否总是遵守所有的规定和规则',
      options: epqOptions,
    },
    {
      id: 'q37',
      text: '你是否更喜欢独自做事，而不是和别人一起',
      options: epqOptions,
    },
    {
      id: 'q38',
      text: '你是否大多数时候都心情放松、无忧无虑',
      options: epqOptions,
    },
    {
      id: 'q39',
      text: '你是否愿意为了帮助别人而牺牲自己的利益',
      options: epqOptions,
    },
    {
      id: 'q40',
      text: '你是否曾经因为生气而说过伤人的话',
      options: epqOptions,
    },
    { id: 'q41', text: '你是否有许多朋友', options: epqOptions },
    { id: 'q42', text: '你是否经常失眠或睡眠不安稳', options: epqOptions },
    {
      id: 'q43',
      text: '你是否觉得自己比较难以体会别人的情绪',
      options: epqOptions,
    },
    { id: 'q44', text: '你是否偶尔会嫉妒别人', options: epqOptions },
    {
      id: 'q45',
      text: '你是否喜欢和人开玩笑、说说笑笑',
      options: epqOptions,
    },
    { id: 'q46', text: '你是否容易受到惊吓', options: epqOptions },
    {
      id: 'q47',
      text: '你是否喜欢做一些别人觉得出格的事情',
      options: epqOptions,
    },
    { id: 'q48', text: '你是否从不后悔自己做过的事', options: epqOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 48,
    reverse: [
      'q9',
      'q11',
      'q12',
      'q20',
      'q22',
      'q25',
      'q27',
      'q28',
      'q37',
      'q38',
      'q39',
      'q40',
    ],
    dimensions: [
      {
        id: 'extraversion',
        title: '外向性 E',
        questionIds: ['q1', 'q5', 'q9', 'q13', 'q17', 'q21', 'q25', 'q29', 'q33', 'q37', 'q41', 'q45'],
        bands: [
          {
            min: 0,
            max: 3,
            label: '偏内向',
            description: '您倾向于安静、内敛，偏好独处或小范围的深度交往，做事较为审慎。',
          },
          {
            min: 4,
            max: 8,
            label: '中间型',
            description: '您在外向与内向之间，能适应社交场合，也需要独处时间来恢复精力。',
          },
          {
            min: 9,
            max: 12,
            label: '偏外向',
            description: '您开朗、健谈、乐于交往，通常能从社交活动中获得活力与积极情绪。',
          },
        ],
      },
      {
        id: 'neuroticism',
        title: '神经质 N',
        questionIds: ['q2', 'q6', 'q10', 'q14', 'q18', 'q22', 'q26', 'q30', 'q34', 'q38', 'q42', 'q46'],
        bands: [
          {
            min: 0,
            max: 3,
            label: '情绪稳定',
            description: '您的情绪反应平稳，面对压力时通常能保持冷静并较快恢复。',
          },
          {
            min: 4,
            max: 8,
            label: '中间型',
            description: '您的情绪反应处于常见范围，遇到压力时会有波动，但大多能自行调节。',
          },
          {
            min: 9,
            max: 12,
            label: '情绪偏敏感',
            description:
              '您对压力和负面情绪较为敏感，容易体验焦虑、担忧与情绪起伏。建议学习情绪调节技巧并保证睡眠与运动；若长期影响生活，可寻求专业支持。',
          },
        ],
      },
      {
        id: 'psychoticism',
        title: '精神质 P',
        questionIds: ['q3', 'q7', 'q11', 'q15', 'q19', 'q23', 'q27', 'q31', 'q35', 'q39', 'q43', 'q47'],
        bands: [
          {
            min: 0,
            max: 3,
            label: '偏温和',
            description: '您待人较为体贴、顾及他人感受，倾向于合作与遵守共同规则。',
          },
          {
            min: 4,
            max: 8,
            label: '中间型',
            description: '您既能顾及他人感受，也能坚持自我主张，处于常见的平衡状态。',
          },
          {
            min: 9,
            max: 12,
            label: '偏独立强硬',
            description:
              '您倾向于独立、直接、不拘常规，不太在意外界评价。这一特征在需要创新与坚持己见的情境中具有优势，但在人际协作中可多留意他人感受。',
          },
        ],
      },
      {
        id: 'lie',
        title: '掩饰性 L',
        questionIds: ['q4', 'q8', 'q12', 'q16', 'q20', 'q24', 'q28', 'q32', 'q36', 'q40', 'q44', 'q48'],
        bands: [
          {
            min: 0,
            max: 3,
            label: '低',
            description: '您的作答较为直率、不加掩饰，对自身不足的承认度较高。',
          },
          {
            min: 4,
            max: 8,
            label: '中等',
            description: '您的作答处于常见的自我呈现水平，结果可正常参考。',
          },
          {
            min: 9,
            max: 12,
            label: '偏高',
            description:
              '您倾向于呈现更符合社会期待的自我形象。请注意：L 维度得分偏高时，E、N、P 三个维度的结果可能略有偏差，建议结合他人评价综合看待。',
          },
        ],
      },
    ],
  },
  license: {
    status: 'permission-required',
    source:
      'Eysenck HJ, Eysenck SBG. Manual of the Eysenck Personality Questionnaire. London: Hodder & Stoughton, 1975. 中文修订版：钱铭怡, 武国城, 朱荣春, 等. 艾森克人格问卷简式量表中国版（EPQ-RSC）的修订. 心理学报. 2000;32(3):317-323.',
  },
}
