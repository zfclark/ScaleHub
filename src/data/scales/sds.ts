import type { ScaleConfig } from '@/types/scale'

const sdsOptions = [
  { label: '没有或很少时间', value: 1 },
  { label: '少部分时间', value: 2 },
  { label: '相当多时间', value: 3 },
  { label: '绝大部分或全部时间', value: 4 },
]

/**
 * Zung 抑郁自评量表（SDS）
 * - 20 题，选项 1-4 分，原始总分 20-80
 * - 标准分 = 原始总分 × 1.25（取整），范围 25-100
 * - 第 2、5、6、11、12、14、16、17、18、20 题为反向计分条目
 * - 分级（按标准分）：<50 正常；50-59 轻度；60-69 中度；≥70 重度
 */
export const sds: ScaleConfig = {
  id: 'sds',
  title: '抑郁自评量表（SDS）',
  shortTitle: 'SDS 抑郁自评',
  description:
    '由 Zung 编制的经典抑郁自评工具，从情感、躯体、精神运动与心理四个方面评估您近一周的抑郁程度，共 20 题，结果以标准分呈现。',
  instructions:
    '请根据您最近一周的实际感觉作答，选择每个条目最符合您情况的选项。其中部分条目为反向计分，系统会自动处理，请按真实感受作答。第 19 题涉及生命意义的想法，如在该题有困扰，请务必关注结果页提供的心理援助信息。',
  meta: {
    timeMinutes: 5,
    audience: '一般人群（有自主作答能力者），自评抑郁症状及其严重程度',
    tags: ['抑郁'],
  },
  questions: [
    { id: 'q1', text: '我觉得闷闷不乐，情绪低沉', options: sdsOptions },
    { id: 'q2', text: '我觉得一天之中早晨最好', options: sdsOptions },
    { id: 'q3', text: '我一阵阵哭出来或觉得想哭', options: sdsOptions },
    { id: 'q4', text: '我晚上睡眠不好', options: sdsOptions },
    { id: 'q5', text: '我吃得跟平常一样多', options: sdsOptions },
    {
      id: 'q6',
      text: '我与异性密切接触时和以往一样感到愉快',
      options: sdsOptions,
    },
    { id: 'q7', text: '我发觉我的体重在下降', options: sdsOptions },
    { id: 'q8', text: '我有便秘的苦恼', options: sdsOptions },
    { id: 'q9', text: '我心跳比平时快', options: sdsOptions },
    { id: 'q10', text: '我无缘无故地感到疲乏', options: sdsOptions },
    { id: 'q11', text: '我的头脑跟平常一样清楚', options: sdsOptions },
    { id: 'q12', text: '我觉得经常做的事情并没有困难', options: sdsOptions },
    { id: 'q13', text: '我觉得不安而平静不下来', options: sdsOptions },
    { id: 'q14', text: '我对将来抱有希望', options: sdsOptions },
    { id: 'q15', text: '我比平常容易生气激动', options: sdsOptions },
    { id: 'q16', text: '我觉得做出决定是容易的', options: sdsOptions },
    { id: 'q17', text: '我觉得自己是个有用的人，有人需要我', options: sdsOptions },
    { id: 'q18', text: '我的生活过得很有意思', options: sdsOptions },
    {
      id: 'q19',
      text: '我认为如果我死了别人会生活得好些',
      options: sdsOptions,
    },
    { id: 'q20', text: '平常感兴趣的事我仍然照样感兴趣', options: sdsOptions },
  ],
  scoring: {
    type: 'sum',
    min: 25,
    max: 100,
    multiplier: 1.25,
    reverse: ['q2', 'q5', 'q6', 'q11', 'q12', 'q14', 'q16', 'q17', 'q18', 'q20'],
    bands: [
      {
        min: 25,
        max: 49,
        label: '正常范围',
        description: '您的标准分低于 50 分，目前未提示明显的抑郁症状。',
        advice: '保持规律作息、适度运动与稳定的社交联系，继续关注自己的情绪状态。',
      },
      {
        min: 50,
        max: 59,
        label: '轻度抑郁',
        description: '您的标准分处于 50-59 分，提示存在轻度抑郁症状。',
        advice:
          '建议增加日间光照与有氧运动、维持规律作息与社交活动，并持续观察两周以上；若症状加重，请寻求专业评估。',
      },
      {
        min: 60,
        max: 69,
        label: '中度抑郁',
        description: '您的标准分处于 60-69 分，提示存在中度抑郁症状，可能明显影响日常生活。',
        advice: '建议前往精神科或心理科进行专业评估，必要时接受心理咨询或药物治疗。',
      },
      {
        min: 70,
        max: 100,
        label: '重度抑郁',
        description: '您的标准分达到 70 分及以上，提示抑郁症状已达重度水平。',
        advice:
          '请尽快前往精神科就诊，接受系统的专业评估与治疗。抑郁是可以被有效治疗的，您不必独自承受。',
      },
    ],
  },
  criticalItems: [
    {
      questionId: 'q19',
      condition: '>=3',
      action: 'showCrisisResources',
      message:
        '您在第 19 题中反映了与生命意义相关的痛苦想法。请认真对待这些感受——这种痛苦是可以被缓解的，专业帮助确实有效。建议您立即联系心理援助热线、信任的人，或前往就近医院寻求帮助。',
    },
  ],
  license: {
    status: 'public-domain',
    source:
      'Zung WWK. A self-rating depression scale. Arch Gen Psychiatry. 1965;12(1):63-70.',
  },
}
