import type { ScaleConfig } from '@/types/scale'

const scaredOptions = [
  { label: '从不或几乎不', value: 0 },
  { label: '有时', value: 1 },
  { label: '经常', value: 2 },
]

/**
 * 儿童焦虑性情绪障碍筛查表（SCARED）
 * - 41 题，选项 0-2 分，总分 0-82，常用切分值为 25 分
 * - 5 个维度：惊恐/躯体症状（13 题，切分值 7）、广泛性焦虑（9 题，切分值 9）、
 *   分离焦虑（8 题，切分值 5）、社交焦虑（7 题，切分值 8）、学校回避（4 题，切分值 3）
 * - 无反向计分条目
 */
export const scared: ScaleConfig = {
  id: 'scared',
  title: '儿童焦虑性情绪障碍筛查表（SCARED）',
  shortTitle: 'SCARED 儿童焦虑筛查',
  description:
    '由 Birmaher 等人编制的儿童青少年焦虑筛查工具，共 41 题，覆盖惊恐/躯体症状、广泛性焦虑、分离焦虑、社交焦虑与学校回避五个维度，可用于区分不同类型的焦虑问题。',
  instructions:
    '请根据您（或您代为作答的孩子）最近 3 个月内的实际情况，判断每一条描述出现的频率。本量表适用于 8-18 岁儿童青少年，既可由孩子自评，也可由家长根据观察代为作答（家长版判读标准有所不同，建议结合专业人员意见）。',
  meta: {
    timeMinutes: 6,
    audience: '儿童青少年（8-18 岁）及其家长，筛查各类焦虑问题',
    tags: ['焦虑', '儿童青少年'],
  },
  questions: [
    { id: 'q1', text: '当我感到害怕时，我会感到呼吸困难', options: scaredOptions },
    { id: 'q2', text: '我在学校会头痛', options: scaredOptions },
    { id: 'q3', text: '我不喜欢和不熟悉的人待在一起', options: scaredOptions },
    { id: 'q4', text: '如果离家在外过夜，我会感到害怕', options: scaredOptions },
    { id: 'q5', text: '我担心别人是否喜欢我', options: scaredOptions },
    { id: 'q6', text: '当我感到害怕时，我会觉得自己快要晕倒', options: scaredOptions },
    { id: 'q7', text: '我感到紧张', options: scaredOptions },
    { id: 'q8', text: '我走到哪里都要跟着父母（或主要照顾者）', options: scaredOptions },
    { id: 'q9', text: '别人说我看起来紧张', options: scaredOptions },
    { id: 'q10', text: '和不熟悉的人在一起时，我会感到紧张', options: scaredOptions },
    { id: 'q11', text: '我在学校会胃痛', options: scaredOptions },
    { id: 'q12', text: '当我感到害怕时，我会觉得自己快要发疯了', options: scaredOptions },
    { id: 'q13', text: '我担心一个人睡觉', options: scaredOptions },
    { id: 'q14', text: '我担心自己不如别的孩子好', options: scaredOptions },
    { id: 'q15', text: '当我感到害怕时，我会觉得周围的一切都不真实', options: scaredOptions },
    { id: 'q16', text: '我会梦到父母遭遇不好的事情', options: scaredOptions },
    { id: 'q17', text: '我担心要去上学', options: scaredOptions },
    { id: 'q18', text: '当我感到害怕时，我的心跳得很快', options: scaredOptions },
    { id: 'q19', text: '我会发抖', options: scaredOptions },
    { id: 'q20', text: '我会梦到发生在自己身上的不好的事情', options: scaredOptions },
    { id: 'q21', text: '我担心事情能否顺利发展', options: scaredOptions },
    { id: 'q22', text: '当我感到害怕时，我会大量出汗', options: scaredOptions },
    { id: 'q23', text: '我是个容易担心的人', options: scaredOptions },
    { id: 'q24', text: '我会无缘无故地感到非常害怕', options: scaredOptions },
    { id: 'q25', text: '我害怕一个人待在家里', options: scaredOptions },
    { id: 'q26', text: '和不熟悉的人说话对我来说很困难', options: scaredOptions },
    { id: 'q27', text: '当我感到害怕时，我会觉得喘不过气来', options: scaredOptions },
    { id: 'q28', text: '别人说我担心得太多', options: scaredOptions },
    { id: 'q29', text: '我不喜欢离开家人', options: scaredOptions },
    { id: 'q30', text: '我害怕自己会突然出现强烈的焦虑', options: scaredOptions },
    { id: 'q31', text: '我担心父母可能遭遇不好的事情', options: scaredOptions },
    { id: 'q32', text: '和不熟悉的人在一起时我会害羞', options: scaredOptions },
    { id: 'q33', text: '我担心将来会发生什么', options: scaredOptions },
    { id: 'q34', text: '当我感到害怕时，我会觉得想吐', options: scaredOptions },
    { id: 'q35', text: '我担心自己事情做得好不好', options: scaredOptions },
    { id: 'q36', text: '我害怕去上学', options: scaredOptions },
    { id: 'q37', text: '我会担心已经发生过的事情', options: scaredOptions },
    { id: 'q38', text: '当我感到害怕时，我会感到头晕', options: scaredOptions },
    {
      id: 'q39',
      text: '当有其他孩子或大人看着我做某件事时，我会感到紧张',
      options: scaredOptions,
    },
    {
      id: 'q40',
      text: '要去聚会、活动或其他有很多陌生人的场合时，我会感到紧张',
      options: scaredOptions,
    },
    { id: 'q41', text: '我很害羞', options: scaredOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 82,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 24,
        label: '未达筛查切分值',
        description: '总分低于 25 分的常用切分值，未提示存在需要关注的焦虑问题。',
        advice: '继续保持稳定的作息、充足的运动与良好的亲子沟通即可。',
      },
      {
        min: 25,
        max: 82,
        label: '达到筛查切分值',
        description:
          '总分已达到 25 分的常用切分值，提示可能存在焦虑相关问题，建议结合各维度分判断主要类型。',
        advice:
          '建议前往儿童精神科或儿童心理门诊进行专业评估。儿童青少年焦虑对认知行为治疗（CBT）反应良好，家长的理解与陪伴是重要的支持力量。请注意：本结果不能替代专业诊断。',
      },
    ],
    dimensions: [
      {
        id: 'panic_somatic',
        title: '惊恐 / 躯体症状',
        questionIds: [
          'q1',
          'q6',
          'q9',
          'q12',
          'q15',
          'q18',
          'q19',
          'q22',
          'q24',
          'q27',
          'q30',
          'q34',
          'q38',
        ],
        bands: [
          { min: 0, max: 6, label: '未达切分值', description: '惊恐与躯体症状未提示异常。' },
          {
            min: 7,
            max: 26,
            label: '达切分值',
            description: '惊恐发作与躯体症状较为明显，是本量表提示的重点方向。',
          },
        ],
      },
      {
        id: 'generalized_anxiety',
        title: '广泛性焦虑',
        questionIds: ['q5', 'q7', 'q14', 'q21', 'q23', 'q28', 'q33', 'q35', 'q37'],
        bands: [
          { min: 0, max: 8, label: '未达切分值', description: '广泛性担忧未提示异常。' },
          {
            min: 9,
            max: 18,
            label: '达切分值',
            description: '存在较多的过度担忧，是本量表提示的重点方向。',
          },
        ],
      },
      {
        id: 'separation_anxiety',
        title: '分离焦虑',
        questionIds: ['q4', 'q8', 'q13', 'q16', 'q20', 'q25', 'q29', 'q31'],
        bands: [
          { min: 0, max: 4, label: '未达切分值', description: '分离相关焦虑未提示异常。' },
          {
            min: 5,
            max: 16,
            label: '达切分值',
            description: '与家人分离时的焦虑较为明显，是本量表提示的重点方向。',
          },
        ],
      },
      {
        id: 'social_anxiety',
        title: '社交焦虑',
        questionIds: ['q3', 'q10', 'q26', 'q32', 'q39', 'q40', 'q41'],
        bands: [
          { min: 0, max: 7, label: '未达切分值', description: '社交相关焦虑未提示异常。' },
          {
            min: 8,
            max: 14,
            label: '达切分值',
            description: '在陌生社交场合中的紧张与回避较为明显，是本量表提示的重点方向。',
          },
        ],
      },
      {
        id: 'school_avoidance',
        title: '学校回避',
        questionIds: ['q2', 'q11', 'q17', 'q36'],
        bands: [
          { min: 0, max: 2, label: '未达切分值', description: '学校相关焦虑未提示异常。' },
          {
            min: 3,
            max: 8,
            label: '达切分值',
            description: '与上学相关的躯体不适或回避较为明显，是本量表提示的重点方向。',
          },
        ],
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Birmaher B, Khetarpal S, Brent D, et al. The Screen for Child Anxiety Related Emotional Disorders (SCARED): scale construction and psychometric characteristics. J Am Acad Child Adolesc Psychiatry. 1997;36(4):545-553.',
  },
}
