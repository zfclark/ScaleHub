import type { ScaleConfig } from '@/types/scale'

const frequencyOptions = [
  { label: '从不', value: 0 },
  { label: '偶尔', value: 1 },
  { label: '有时', value: 2 },
  { label: '时常', value: 3 },
  { label: '总是', value: 4 },
]

export const pss10: ScaleConfig = {
  id: 'pss-10',
  title: '知觉压力量表（PSS-10）',
  shortTitle: 'PSS-10 压力知觉',
  description: '评估过去一个月内您感受到生活压力的程度，包含正向与反向计分条目，是使用最广泛的压力自评工具之一。',
  instructions:
    '以下问题询问您在过去一个月中的感受和想法。请针对每一个条目，选择您在过去一个月中最常有的感受。其中部分条目为反向计分，系统会自动处理，请按真实感受作答。',
  meta: {
    timeMinutes: 3,
    audience: '一般人群，评估近期压力知觉水平',
    tags: ['压力'],
  },
  questions: [
    {
      id: 'q1',
      text: '因为发生了意料之外的事情，我感到心烦意乱',
      options: frequencyOptions,
    },
    { id: 'q2', text: '我感觉无法控制自己生活中的重要事情', options: frequencyOptions },
    { id: 'q3', text: '我感到紧张不安和有压力', options: frequencyOptions },
    { id: 'q4', text: '我感觉自己自信满满，能够处理个人遇到的问题', options: frequencyOptions },
    { id: 'q5', text: '我感觉事情正朝着我希望的方向发展', options: frequencyOptions },
    {
      id: 'q6',
      text: '我发现自己无法应付所有自己必须做的事情',
      options: frequencyOptions,
    },
    { id: 'q7', text: '我能够控制自己生活中令人恼怒的事情', options: frequencyOptions },
    { id: 'q8', text: '我感觉自己掌控着事情发展的进程', options: frequencyOptions },
    {
      id: 'q9',
      text: '我会因为一些超出自己控制范围的事情而感到生气',
      options: frequencyOptions,
    },
    {
      id: 'q10',
      text: '我感到困难积累得太多，自己无法克服它们',
      options: frequencyOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 40,
    reverse: ['q4', 'q5', 'q7', 'q8'],
    bands: [
      {
        min: 0,
        max: 13,
        label: '低压力水平',
        description: '您对生活压力的知觉处于较低水平，应对状态良好。',
        advice: '继续保持当前的节奏与应对方式，注意劳逸结合。',
      },
      {
        min: 14,
        max: 26,
        label: '中等压力水平',
        description: '您正经历中等程度的压力，这在多数人身上都会出现。',
        advice: '建议关注压力来源，尝试时间管理、运动、正念等减压方法；留意睡眠与情绪的变化。',
      },
      {
        min: 27,
        max: 40,
        label: '高压力水平',
        description: '您的压力知觉已处于较高水平，长期持续可能影响身心健康。',
        advice: '建议主动调整生活节奏、寻求家人朋友支持；若压力持续难以缓解或伴随明显不适，请考虑寻求专业心理帮助。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Cohen S, Kamarck T, Mermelstein R. A global measure of perceived stress. J Health Soc Behav. 1983;24(4):385-396.',
  },
}
