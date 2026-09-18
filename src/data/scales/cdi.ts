import type { ScaleConfig } from '@/types/scale'

/**
 * 儿童抑郁量表（CDI）
 * - 27 题，每题 3 个描述，按严重程度递进计 0-2 分，总分 0-54
 * - 原量表部分条目「最优选项在前」，本工具统一改为按严重程度升序排列后计分，
 *   总分与原量表一致，因此无需反向计分
 * - 分级：0-12 无明显抑郁；13-18 轻度；19-26 中度；27-54 重度（19 分为常用切分值）
 */
export const cdi: ScaleConfig = {
  id: 'cdi',
  title: '儿童抑郁量表（CDI）',
  shortTitle: 'CDI 儿童抑郁评估',
  description:
    '由 Kovacs 编制的儿童青少年抑郁自评工具，共 27 题，每题提供三个严重程度递进的描述，覆盖负性情绪、人际问题、效率低下、快感缺失与负性自尊等方面。',
  instructions:
    '请从每组三句话中选出最符合您最近两周感受的一句。每组只需选择一项，若有两句都符合，请选择程度较严重的那一句。第 9 题涉及生命相关的想法，如在该题有选择，请务必关注结果页提供的心理援助信息。',
  meta: {
    timeMinutes: 6,
    audience: '儿童青少年（7-17 岁），自评抑郁症状',
    tags: ['抑郁', '儿童青少年'],
  },
  questions: [
    {
      id: 'q1',
      text: '悲伤情绪',
      options: [
        { label: '我偶尔感到悲伤', value: 0 },
        { label: '我经常感到悲伤', value: 1 },
        { label: '我一直感到悲伤', value: 2 },
      ],
    },
    {
      id: 'q2',
      text: '对事情的预期',
      options: [
        { label: '我很少担心事情会不顺利', value: 0 },
        { label: '我经常担心事情会不顺利', value: 1 },
        { label: '我总是担心事情会不顺利', value: 2 },
      ],
    },
    {
      id: 'q3',
      text: '做事的结果',
      options: [
        { label: '我做的事大多能做好', value: 0 },
        { label: '我做的很多事都做不好', value: 1 },
        { label: '我做的事没有一件能做好', value: 2 },
      ],
    },
    {
      id: 'q4',
      text: '兴趣与乐趣',
      options: [
        { label: '很多事情让我感到有趣', value: 0 },
        { label: '只有少数事情让我感到有趣', value: 1 },
        { label: '没有什么事情让我感到有趣', value: 2 },
      ],
    },
    {
      id: 'q5',
      text: '行为对错',
      options: [
        { label: '我很少做错事', value: 0 },
        { label: '我经常做错事', value: 1 },
        { label: '我做什么都是错的', value: 2 },
      ],
    },
    {
      id: 'q6',
      text: '对坏事的预期',
      options: [
        { label: '我很少担心会有什么坏事发生', value: 0 },
        { label: '我担心会有什么坏事发生', value: 1 },
        { label: '一定会有坏事发生在我身上', value: 2 },
      ],
    },
    {
      id: 'q7',
      text: '对自己的感受',
      options: [
        { label: '我喜欢自己', value: 0 },
        { label: '我不喜欢自己', value: 1 },
        { label: '我讨厌自己', value: 2 },
      ],
    },
    {
      id: 'q8',
      text: '责任归因',
      options: [
        { label: '坏事通常不是我的错', value: 0 },
        { label: '很多坏事是我的错', value: 1 },
        { label: '所有坏事都是我的错', value: 2 },
      ],
    },
    {
      id: 'q9',
      text: '与生命相关的想法',
      options: [
        { label: '我没有想过要结束自己的生命', value: 0 },
        { label: '我想过要结束自己的生命，但不会真的去做', value: 1 },
        { label: '我想结束自己的生命', value: 2 },
      ],
    },
    {
      id: 'q10',
      text: '哭泣',
      options: [
        { label: '我很少想哭', value: 0 },
        { label: '我经常想哭', value: 1 },
        { label: '我每天大部分时间都想哭', value: 2 },
      ],
    },
    {
      id: 'q11',
      text: '烦恼与困扰',
      options: [
        { label: '事情很少困扰我', value: 0 },
        { label: '很多事情困扰我', value: 1 },
        { label: '所有事情都困扰我', value: 2 },
      ],
    },
    {
      id: 'q12',
      text: '与人相处',
      options: [
        { label: '我喜欢和人在一起', value: 0 },
        { label: '我经常不想和人在一起', value: 1 },
        { label: '我完全不想和人在一起', value: 2 },
      ],
    },
    {
      id: 'q13',
      text: '做决定',
      options: [
        { label: '我对自己的事情能做出决定', value: 0 },
        { label: '我很难以对自己的事情做出决定', value: 1 },
        { label: '我无法对自己的事情做出决定', value: 2 },
      ],
    },
    {
      id: 'q14',
      text: '对外貌的看法',
      options: [
        { label: '我长得不错', value: 0 },
        { label: '我的外表有些让我不满意的地方', value: 1 },
        { label: '我长得很丑', value: 2 },
      ],
    },
    {
      id: 'q15',
      text: '完成功课',
      options: [
        { label: '我很少需要特别努力才能完成功课', value: 0 },
        { label: '我经常需要特别努力才能完成功课', value: 1 },
        { label: '我一直无法完成功课', value: 2 },
      ],
    },
    {
      id: 'q16',
      text: '睡眠',
      options: [
        { label: '我很少睡不好', value: 0 },
        { label: '我很多个晚上都睡不好', value: 1 },
        { label: '我每个晚上都睡不好', value: 2 },
      ],
    },
    {
      id: 'q17',
      text: '疲惫感',
      options: [
        { label: '我很少感到疲惫', value: 0 },
        { label: '我经常感到疲惫', value: 1 },
        { label: '我一直感到疲惫', value: 2 },
      ],
    },
    {
      id: 'q18',
      text: '食欲',
      options: [
        { label: '我很少不想吃东西', value: 0 },
        { label: '我经常不想吃东西', value: 1 },
        { label: '我一直不想吃东西', value: 2 },
      ],
    },
    {
      id: 'q19',
      text: '对身体不适的担忧',
      options: [
        { label: '我很少担心身体疼痛或不舒服', value: 0 },
        { label: '我经常担心身体疼痛或不舒服', value: 1 },
        { label: '我一直担心身体疼痛或不舒服', value: 2 },
      ],
    },
    {
      id: 'q20',
      text: '孤独感',
      options: [
        { label: '我很少感到孤独', value: 0 },
        { label: '我经常感到孤独', value: 1 },
        { label: '我一直感到孤独', value: 2 },
      ],
    },
    {
      id: 'q21',
      text: '在学校的心情',
      options: [
        { label: '我在学校经常感到开心', value: 0 },
        { label: '我在学校偶尔感到开心', value: 1 },
        { label: '我在学校从来没有感到开心', value: 2 },
      ],
    },
    {
      id: 'q22',
      text: '朋友',
      options: [
        { label: '我有很多朋友', value: 0 },
        { label: '我有一些朋友', value: 1 },
        { label: '我没有朋友', value: 2 },
      ],
    },
    {
      id: 'q23',
      text: '学业表现',
      options: [
        { label: '我的功课和以前一样好', value: 0 },
        { label: '我的功课比以前差了一些', value: 1 },
        { label: '我的功课比以前差了很多', value: 2 },
      ],
    },
    {
      id: 'q24',
      text: '与他人的比较',
      options: [
        { label: '我和别人一样好', value: 0 },
        { label: '我不确定自己是否和别人一样好', value: 1 },
        { label: '我永远不可能像别人那么好', value: 2 },
      ],
    },
    {
      id: 'q25',
      text: '被爱的感受',
      options: [
        { label: '我确定有人爱我', value: 0 },
        { label: '我不确定是否有人爱我', value: 1 },
        { label: '没有人真正爱我', value: 2 },
      ],
    },
    {
      id: 'q26',
      text: '听从他人',
      options: [
        { label: '我通常愿意按别人说的做', value: 0 },
        { label: '我很多时候不愿意按别人说的做', value: 1 },
        { label: '我从不按别人说的做', value: 2 },
      ],
    },
    {
      id: 'q27',
      text: '与别人的冲突',
      options: [
        { label: '我和别人相处得不错', value: 0 },
        { label: '我经常和别人吵架', value: 1 },
        { label: '我总是和别人吵架', value: 2 },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 54,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 12,
        label: '无明显抑郁症状',
        description: '您的总分处于较低范围，未提示存在值得关注的抑郁症状。',
        advice: '保持规律作息、适度运动与良好的家庭沟通即可。',
      },
      {
        min: 13,
        max: 18,
        label: '轻度抑郁症状',
        description: '您的总分略高于一般水平，可能存在轻度的抑郁情绪。',
        advice:
          '建议关注情绪变化与睡眠、食欲状况，多与信任的家人朋友交流；若持续两周以上或加重，建议咨询学校心理老师或专业机构。',
      },
      {
        min: 19,
        max: 26,
        label: '中度抑郁症状',
        description: '您的总分已达到 19 分的常用切分值，提示可能存在临床相关的抑郁症状。',
        advice:
          '建议前往儿童心理门诊或儿童精神科进行专业评估。儿童青少年抑郁对心理治疗效果良好，及早干预非常重要。',
      },
      {
        min: 27,
        max: 54,
        label: '重度抑郁症状',
        description: '您的总分处于较高范围，提示抑郁症状可能较为严重并影响日常功能。',
        advice:
          '请尽快就诊儿童精神科，接受系统的专业评估与治疗。请让家长或信任的成年人知道您的感受，您不必独自承受。',
      },
    ],
  },
  criticalItems: [
    {
      questionId: 'q9',
      condition: '>=1',
      action: 'showCrisisResources',
      message:
        '您在第 9 题中反映了与生命相关的想法。请认真对待这些感受，也请让家长、老师或其他信任的成年人知道——这种痛苦是可以被缓解的，向大人求助是勇敢而正确的选择。建议立即联系心理援助热线或前往就近医院。',
    },
  ],
  license: {
    status: 'permission-required',
    source:
      'Kovacs M. Children’s Depression Inventory (CDI). North Tonawanda, NY: Multi-Health Systems, 1992.',
  },
}
