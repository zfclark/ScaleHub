import type { ScaleConfig } from '@/types/scale'

const frequencyOptions = [
  { label: '完全没有', value: 0 },
  { label: '有几天', value: 1 },
  { label: '一半以上时间', value: 2 },
  { label: '几乎每天', value: 3 },
]

export const phq9: ScaleConfig = {
  id: 'phq-9',
  title: '患者健康问卷抑郁量表（PHQ-9）',
  shortTitle: 'PHQ-9 抑郁筛查',
  description: '国际通用的抑郁症状筛查工具，基于抑郁症诊断标准设计，评估过去两周内抑郁症状的出现频率。',
  instructions:
    '在过去的 2 周内，您有多少时候受到以下任何问题的困扰？请根据实际情况选择最符合的一项。第 9 题涉及自我伤害的相关想法，如在该题有困扰，请务必关注结果页提供的心理援助信息。',
  meta: {
    timeMinutes: 3,
    audience: '一般人群（18 岁及以上），可用于自评抑郁症状',
    tags: ['抑郁'],
  },
  questions: [
    { id: 'q1', text: '做事时提不起劲或没有兴趣', options: frequencyOptions },
    { id: 'q2', text: '感到心情低落、沮丧或绝望', options: frequencyOptions },
    { id: 'q3', text: '入睡困难、睡不安稳或睡眠过多', options: frequencyOptions },
    { id: 'q4', text: '感觉疲倦或没有活力', options: frequencyOptions },
    { id: 'q5', text: '食欲不振或吃得太多', options: frequencyOptions },
    {
      id: 'q6',
      text: '觉得自己很糟，或觉得自己很失败，或让自己或家人失望',
      options: frequencyOptions,
    },
    {
      id: 'q7',
      text: '对事物专注有困难，例如阅读报纸或看电视时难以集中注意力',
      options: frequencyOptions,
    },
    {
      id: 'q8',
      text: '动作或说话速度缓慢到别人已经察觉？或正好相反——烦躁或坐立不安、动来动去的情况比平常更严重',
      options: frequencyOptions,
    },
    { id: 'q9', text: '有不如死掉或用某种方式伤害自己的念头', options: frequencyOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 27,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 4,
        label: '无或极轻微抑郁',
        description: '您的抑郁症状处于极低水平，情绪状态良好。',
        advice: '保持健康的生活方式即可，无需特别关注。',
      },
      {
        min: 5,
        max: 9,
        label: '轻度抑郁',
        description: '您存在轻度的抑郁症状，可能会带来轻微的情绪困扰。',
        advice: '建议保持规律作息与社交活动，增加运动与阳光照射，持续观察情绪变化。若症状持续两周以上或加重，请寻求专业评估。',
      },
      {
        min: 10,
        max: 14,
        label: '中度抑郁',
        description: '您的抑郁症状已达到中度水平，可能明显影响日常生活。',
        advice: '建议前往精神科或心理科进行专业评估，必要时接受心理咨询或治疗。',
      },
      {
        min: 15,
        max: 19,
        label: '中重度抑郁',
        description: '您的抑郁症状已达中重度水平，对生活功能的影响可能较大。',
        advice: '强烈建议尽快就诊精神科或心理科，接受系统的专业评估，并考虑药物和/或心理治疗。',
      },
      {
        min: 20,
        max: 27,
        label: '重度抑郁',
        description: '您的抑郁症状已达重度水平。',
        advice: '请尽快前往精神科就诊，接受专业治疗。您值得被帮助，治疗可以有效改善症状。',
      },
    ],
  },
  criticalItems: [
    {
      questionId: 'q9',
      condition: '>0',
      action: 'showCrisisResources',
      message:
        '您在第 9 题中反映了自我伤害相关的想法。请认真对待这些感受：您并不孤单，许多人在经历类似痛苦后得到了好转。建议您立即拨打心理援助热线或前往就近医院寻求帮助。',
    },
  ],
  license: {
    status: 'free-with-citation',
    source:
      'Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613.',
  },
}
