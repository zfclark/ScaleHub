import type { ScaleConfig } from '@/types/scale'

const baiOptions = [
  { label: '完全没有', value: 0 },
  { label: '轻度，不太影响我', value: 1 },
  { label: '中度，很不舒服但还能忍受', value: 2 },
  { label: '严重，几乎无法忍受', value: 3 },
]

/**
 * Beck 焦虑量表（BAI）
 * - 21 题，选项 0-3 分，总分 0-63
 * - 条目均为焦虑的躯体与认知症状，无反向计分
 * - 分级：0-7 最小焦虑；8-15 轻度；16-25 中度；26-63 重度
 */
export const bai: ScaleConfig = {
  id: 'bai',
  title: '贝克焦虑量表（BAI）',
  shortTitle: 'BAI 焦虑评估',
  description:
    '由 Beck 等人编制的焦虑自评工具，侧重评估焦虑的躯体症状与主观恐惧体验，共 21 题，与抑郁量表配合使用可帮助区分焦虑与抑郁。',
  instructions:
    '下面列出的是人们常见的焦虑相关感受。请根据您最近一周（包括今天）被这些感受困扰的程度，选择最符合的一项。本量表仅用于自我了解与初步筛查，不能替代专业诊断。',
  meta: {
    timeMinutes: 5,
    audience: '一般人群（青少年及以上），评估焦虑症状的严重程度',
    tags: ['焦虑'],
  },
  questions: [
    { id: 'q1', text: '身体麻木或刺痛感', options: baiOptions },
    { id: 'q2', text: '感到身体发热', options: baiOptions },
    { id: 'q3', text: '双腿发软、站不稳', options: baiOptions },
    { id: 'q4', text: '无法放松下来', options: baiOptions },
    { id: 'q5', text: '害怕最坏的事情会发生', options: baiOptions },
    { id: 'q6', text: '头晕或头昏', options: baiOptions },
    { id: 'q7', text: '心悸或心跳加快', options: baiOptions },
    { id: 'q8', text: '站立不稳', options: baiOptions },
    { id: 'q9', text: '惊恐或极度不安', options: baiOptions },
    { id: 'q10', text: '紧张不安', options: baiOptions },
    { id: 'q11', text: '有窒息感', options: baiOptions },
    { id: 'q12', text: '手部颤抖', options: baiOptions },
    { id: 'q13', text: '身体发抖、晃动', options: baiOptions },
    { id: 'q14', text: '害怕失去控制', options: baiOptions },
    { id: 'q15', text: '呼吸困难', options: baiOptions },
    { id: 'q16', text: '害怕死亡', options: baiOptions },
    { id: 'q17', text: '感到恐惧', options: baiOptions },
    { id: 'q18', text: '消化不良或腹部不适', options: baiOptions },
    { id: 'q19', text: '感到头晕、快要昏倒', options: baiOptions },
    { id: 'q20', text: '面部潮红', options: baiOptions },
    { id: 'q21', text: '出汗（并非因为炎热或运动）', options: baiOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 63,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 7,
        label: '焦虑水平很低',
        description: '您的得分处于最低区间，未提示存在值得关注的焦虑症状。',
        advice: '保持规律作息与适度运动即可，无需特别关注。',
      },
      {
        min: 8,
        max: 15,
        label: '轻度焦虑',
        description: '您存在轻度焦虑症状，可能带来一定的主观不适。',
        advice:
          '建议尝试腹式呼吸、渐进式肌肉放松或正念练习，减少咖啡因摄入，并观察症状变化；若持续存在，可寻求专业评估。',
      },
      {
        min: 16,
        max: 25,
        label: '中度焦虑',
        description: '您存在中度焦虑症状，躯体不适可能已影响日常生活与工作学习。',
        advice: '建议前往精神科或心理科进行专业评估，认知行为疗法（CBT）对焦虑障碍有充分证据支持。',
      },
      {
        min: 26,
        max: 63,
        label: '重度焦虑',
        description: '您的焦虑症状已达重度水平，躯体不适明显，可能严重影响日常功能。',
        advice: '强烈建议尽快就诊精神科或心理科，接受系统的专业评估与治疗，必要时结合药物干预。',
      },
    ],
  },
  license: {
    status: 'permission-required',
    source:
      'Beck AT, Epstein N, Brown G, Steer RA. An inventory for measuring clinical anxiety: psychometric properties. J Consult Clin Psychol. 1988;56(6):893-897.',
  },
}
