import type { ScaleConfig } from '@/types/scale'

const frequencyOptions = [
  { label: '完全没有', value: 0 },
  { label: '有几天', value: 1 },
  { label: '一半以上时间', value: 2 },
  { label: '几乎每天', value: 3 },
]

export const gad7: ScaleConfig = {
  id: 'gad-7',
  title: '广泛性焦虑障碍量表（GAD-7）',
  shortTitle: 'GAD-7 焦虑筛查',
  description: '用于焦虑症状的初步筛查，评估过去两周内焦虑症状的出现频率，是国际通用的焦虑自评工具。',
  instructions:
    '本量表用于评估您在过去 2 周内，被以下问题困扰的程度。请根据第一印象如实作答，无需过多思考。每一个条目选择一个最符合您情况的选项。',
  meta: {
    timeMinutes: 2,
    audience: '一般人群（16 岁及以上），可用于自评焦虑症状',
    tags: ['焦虑'],
  },
  questions: [
    { id: 'q1', text: '感觉紧张、焦虑或急切', options: frequencyOptions },
    { id: 'q2', text: '不能停止或控制担忧', options: frequencyOptions },
    { id: 'q3', text: '对各种各样的事情担忧过多', options: frequencyOptions },
    { id: 'q4', text: '很难放松下来', options: frequencyOptions },
    { id: 'q5', text: '由于不安而无法静坐', options: frequencyOptions },
    { id: 'q6', text: '变得容易烦恼或急躁', options: frequencyOptions },
    { id: 'q7', text: '感到似乎将有可怕的事情发生而害怕', options: frequencyOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 21,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 4,
        label: '无或极轻微焦虑',
        description: '您的焦虑症状处于极低水平，情绪状态良好。',
        advice: '保持规律作息与运动即可，无需特别关注。',
      },
      {
        min: 5,
        max: 9,
        label: '轻度焦虑',
        description: '您存在轻度的焦虑症状，可能会对日常生活产生轻微影响。',
        advice: '建议尝试放松训练、正念呼吸、规律运动等自助方法，并持续观察情绪变化。如症状持续或加重，可寻求专业评估。',
      },
      {
        min: 10,
        max: 14,
        label: '中度焦虑',
        description: '您的焦虑症状已达到中度水平，可能明显影响工作、学习或人际交往。',
        advice: '建议尽快前往精神科或心理科进行专业评估，必要时接受心理咨询或治疗。',
      },
      {
        min: 15,
        max: 21,
        label: '重度焦虑',
        description: '您的焦虑症状已达重度水平，对生活的干扰可能非常大。',
        advice: '强烈建议尽快就诊精神科或心理科，接受系统的专业评估与治疗。您不必独自承受，寻求帮助是明智的选择。',
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097.',
  },
}
