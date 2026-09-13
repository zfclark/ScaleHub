import type { ScaleConfig } from '@/types/scale'

const severityOptions = [
  { label: '无', value: 0 },
  { label: '轻度', value: 1 },
  { label: '中度', value: 2 },
  { label: '重度', value: 3 },
  { label: '极重度', value: 4 },
]

const satisfactionOptions = [
  { label: '非常满意', value: 0 },
  { label: '满意', value: 1 },
  { label: '既不满意也不不满意', value: 2 },
  { label: '不满意', value: 3 },
  { label: '非常不满意', value: 4 },
]

const impactOptions = [
  { label: '一点也没有', value: 0 },
  { label: '一点点', value: 1 },
  { label: '有一些', value: 2 },
  { label: '比较多', value: 3 },
  { label: '非常多', value: 4 },
]

export const isi: ScaleConfig = {
  id: 'isi',
  title: '失眠严重程度指数（ISI）',
  shortTitle: 'ISI 失眠评估',
  description: '国际通用的失眠严重程度评估工具，从失眠症状、满意度、功能影响与担忧程度四个方面进行评估，共 7 题。',
  instructions:
    '请根据您最近 2 周的睡眠情况作答。每个条目选择一个最符合情况的选项。本量表仅用于初步了解失眠的严重程度，不能替代专业诊断。',
  meta: {
    timeMinutes: 2,
    audience: '存在睡眠困扰的人群，评估失眠严重程度',
    tags: ['睡眠'],
  },
  questions: [
    {
      id: 'q1',
      text: '入睡困难的严重程度',
      options: severityOptions,
    },
    {
      id: 'q2',
      text: '维持睡眠困难的严重程度（例如夜间醒来后难以再次入睡）',
      options: severityOptions,
    },
    {
      id: 'q3',
      text: '早醒问题的严重程度',
      options: severityOptions,
    },
    {
      id: 'q4',
      text: '您对目前睡眠模式的满意/不满意程度',
      options: satisfactionOptions,
    },
    {
      id: 'q5',
      text: '您认为睡眠问题在多大程度上影响了您的日常功能（例如日间疲劳、注意力、工作学习效率、情绪等）',
      options: impactOptions,
    },
    {
      id: 'q6',
      text: '您觉得别人在多大程度上能察觉到睡眠问题损害了您的生活质量',
      options: impactOptions,
    },
    {
      id: 'q7',
      text: '您对目前的睡眠问题感到担忧/苦恼的程度',
      options: impactOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 28,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 7,
        label: '无临床意义的失眠',
        description: '您的睡眠状况良好，未提示明显的失眠问题。',
        advice: '保持健康规律的睡眠习惯即可。',
      },
      {
        min: 8,
        max: 14,
        label: '亚临床失眠',
        description: '您存在轻度的失眠问题，尚未达到临床显著水平。',
        advice: '建议改善睡眠卫生并持续观察；若失眠持续超过 3 个月或加重，请寻求专业评估。',
      },
      {
        min: 15,
        max: 21,
        label: '中度失眠',
        description: '您的失眠已达中度水平，可能对白天功能造成影响。',
        advice: '建议前往睡眠专科或精神科就诊，失眠认知行为治疗（CBT-I）是推荐的一线干预。',
      },
      {
        min: 22,
        max: 28,
        label: '重度失眠',
        description: '您的失眠已达重度水平，对日常生活的影响可能较大。',
        advice: '强烈建议尽快就诊睡眠专科或精神科，接受系统评估与治疗。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Morin CM, Belleville G, Bélanger L, Ivers H. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep. 2011;34(5):601-608.',
  },
}
