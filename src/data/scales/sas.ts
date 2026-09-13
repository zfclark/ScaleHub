import type { ScaleConfig } from '@/types/scale'

const sasOptions = [
  { label: '没有或很少时间', value: 1 },
  { label: '少部分时间', value: 2 },
  { label: '相当多时间', value: 3 },
  { label: '绝大部分或全部时间', value: 4 },
]

/**
 * Zung 焦虑自评量表（SAS）
 * - 20 题，选项 1-4 分，原始总分 20-80
 * - 标准分 = 原始总分 × 1.25（取整），范围 25-100
 * - 第 5、9、13、17、19 题为反向计分条目
 * - 分级（按标准分）：<50 正常；50-59 轻度；60-69 中度；≥70 重度
 */
export const sas: ScaleConfig = {
  id: 'sas',
  title: '焦虑自评量表（SAS）',
  shortTitle: 'SAS 焦虑自评',
  description:
    '由 Zung 编制的经典焦虑自评工具，从焦虑的心理感受与躯体症状两方面评估您近一周的焦虑程度，共 20 题，结果以标准分呈现。',
  instructions:
    '请根据您最近一周的实际感觉作答，选择每个条目最符合您情况的选项。其中部分条目为反向计分，系统会自动处理，请按真实感受作答。本量表仅用于自我了解与初步筛查，不能替代专业诊断。',
  meta: {
    timeMinutes: 5,
    audience: '一般人群（有自主作答能力者），自评焦虑症状及其严重程度',
    tags: ['焦虑'],
  },
  questions: [
    { id: 'q1', text: '我觉得比平常容易紧张和着急', options: sasOptions },
    { id: 'q2', text: '我无缘无故地感到害怕', options: sasOptions },
    { id: 'q3', text: '我容易心里烦乱或觉得惊恐', options: sasOptions },
    { id: 'q4', text: '我觉得我可能将要发疯', options: sasOptions },
    { id: 'q5', text: '我觉得一切都很好，也不会发生什么不幸', options: sasOptions },
    { id: 'q6', text: '我手脚发抖打颤', options: sasOptions },
    { id: 'q7', text: '我因为头痛、头颈痛和背痛而苦恼', options: sasOptions },
    { id: 'q8', text: '我感觉容易衰弱和疲乏', options: sasOptions },
    { id: 'q9', text: '我觉得心平气和，并且容易安静地坐着', options: sasOptions },
    { id: 'q10', text: '我觉得心跳得很快', options: sasOptions },
    { id: 'q11', text: '我因为一阵阵头晕而苦恼', options: sasOptions },
    { id: 'q12', text: '我有晕倒发作或觉得要晕倒似的', options: sasOptions },
    { id: 'q13', text: '我呼气吸气都感到很容易', options: sasOptions },
    { id: 'q14', text: '我手脚麻木和刺痛', options: sasOptions },
    { id: 'q15', text: '我因为胃痛和消化不良而苦恼', options: sasOptions },
    { id: 'q16', text: '我常常要小便', options: sasOptions },
    { id: 'q17', text: '我的手常常是干燥温暖的', options: sasOptions },
    { id: 'q18', text: '我脸红发热', options: sasOptions },
    { id: 'q19', text: '我容易入睡并且一夜睡得很好', options: sasOptions },
    { id: 'q20', text: '我做噩梦', options: sasOptions },
  ],
  scoring: {
    type: 'sum',
    min: 25,
    max: 100,
    multiplier: 1.25,
    reverse: ['q5', 'q9', 'q13', 'q17', 'q19'],
    bands: [
      {
        min: 25,
        max: 49,
        label: '正常范围',
        description: '您的标准分低于 50 分，目前未提示明显的焦虑症状。',
        advice: '保持规律作息与适度运动，继续关注自己的情绪状态即可。',
      },
      {
        min: 50,
        max: 59,
        label: '轻度焦虑',
        description: '您的标准分处于 50-59 分，提示存在轻度焦虑症状。',
        advice:
          '建议尝试放松训练、正念呼吸、规律运动等自助方法，并持续观察情绪变化；若症状持续或加重，可寻求专业评估。',
      },
      {
        min: 60,
        max: 69,
        label: '中度焦虑',
        description: '您的标准分处于 60-69 分，提示存在中度焦虑症状，可能影响日常生活。',
        advice: '建议前往精神科或心理科进行专业评估，必要时接受心理咨询或治疗。',
      },
      {
        min: 70,
        max: 100,
        label: '重度焦虑',
        description: '您的标准分达到 70 分及以上，提示焦虑症状已达重度水平。',
        advice:
          '强烈建议尽快就诊精神科或心理科，接受系统的专业评估与治疗。您不必独自承受，寻求帮助是明智的选择。',
      },
    ],
  },
  license: {
    status: 'public-domain',
    source:
      'Zung WWK. A rating instrument for anxiety disorders. Psychosomatics. 1971;12(6):371-379.',
  },
}
