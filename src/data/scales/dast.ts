import type { ScaleConfig } from '@/types/scale'

const yesNoOptions = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
]

/**
 * 药物依赖严重程度量表（DAST-20）
 * - 20 题，是非作答，每题 1 分（第 3 题为反向计分），总分 0-20
 * - 分级：0 无问题；1-5 低水平；6-10 中等；11-15 显著；16-20 严重
 */
export const dast: ScaleConfig = {
  id: 'dast',
  title: '药物依赖严重程度量表（DAST-20）',
  shortTitle: 'DAST-20 药物依赖筛查',
  description:
    '由 Skinner 编制的药物使用问题自评工具，共 20 题，评估过去一年内药物使用对健康、家庭、工作与法律层面的影响程度，并提供严重程度分级建议。',
  instructions:
    '以下问题涉及您过去一年内使用药物（此处指非医疗目的使用、或超出医嘱使用或滥用的药物）的情况。请如实作答，本量表不记录任何身份信息，结果仅保存在您的浏览器本地。若您从不使用此类药物，请全部选择「否」。',
  meta: {
    timeMinutes: 4,
    audience: '存在药物使用问题的人群（18 岁及以上），评估药物使用问题的严重程度',
    tags: ['成瘾行为'],
  },
  questions: [
    { id: 'q1', text: '您是否使用过非医疗目的的药物', options: yesNoOptions },
    { id: 'q2', text: '您是否曾同时滥用一种以上的药物', options: yesNoOptions },
    {
      id: 'q3',
      text: '当您想停止使用药物时，您总是能够停下来吗',
      options: yesNoOptions,
    },
    {
      id: 'q4',
      text: '您是否因使用药物而出现过记忆空白或情景闪回',
      options: yesNoOptions,
    },
    { id: 'q5', text: '您是否曾因药物使用而感到自责或内疚', options: yesNoOptions },
    {
      id: 'q6',
      text: '您的伴侣（或父母）是否曾抱怨过您使用药物',
      options: yesNoOptions,
    },
    { id: 'q7', text: '您是否曾因使用药物而忽略家人', options: yesNoOptions },
    {
      id: 'q8',
      text: '您是否曾为了获取药物而参与违法活动',
      options: yesNoOptions,
    },
    {
      id: 'q9',
      text: '当您停止使用药物时，是否出现过戒断症状（如身体不适）',
      options: yesNoOptions,
    },
    {
      id: 'q10',
      text: '您是否因使用药物而出现过医疗问题（如记忆减退、肝炎、抽搐、出血等）',
      options: yesNoOptions,
    },
    {
      id: 'q11',
      text: '您是否曾向他人求助过自己的药物使用问题',
      options: yesNoOptions,
    },
    { id: 'q12', text: '您是否曾因使用药物而住院', options: yesNoOptions },
    {
      id: 'q13',
      text: '您是否曾因与药物相关的违法行为而被拘留或逮捕',
      options: yesNoOptions,
    },
    {
      id: 'q14',
      text: '您是否曾在药物影响下参与打斗',
      options: yesNoOptions,
    },
    {
      id: 'q15',
      text: '您是否曾感到自己无法停止使用药物',
      options: yesNoOptions,
    },
    {
      id: 'q16',
      text: '您是否曾使用比原计划更大剂量或更长时间的药物',
      options: yesNoOptions,
    },
    {
      id: 'q17',
      text: '您是否曾花费大量时间获取药物、使用药物或从药物影响中恢复',
      options: yesNoOptions,
    },
    {
      id: 'q18',
      text: '您是否曾因使用药物而放弃原本重要的活动',
      options: yesNoOptions,
    },
    {
      id: 'q19',
      text: '您是否曾在明知药物已造成问题的情况下仍继续使用',
      options: yesNoOptions,
    },
    { id: 'q20', text: '您是否觉得自己存在药物使用方面的问题', options: yesNoOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 20,
    reverse: ['q3'],
    bands: [
      {
        min: 0,
        max: 0,
        label: '未提示药物使用问题',
        description: '您未报告任何药物使用相关的问题。',
        advice: '保持健康的生活方式即可。如需减压，运动、社交与规律作息是更安全有效的选择。',
      },
      {
        min: 1,
        max: 5,
        label: '低水平',
        description: '您的得分提示存在低水平的药物使用问题，需要保持警觉与自我观察。',
        advice:
          '建议继续观察自己的使用模式与诱因，避免在情绪低落或社交压力下使用；若使用频率增加，建议及早咨询专业机构。',
      },
      {
        min: 6,
        max: 10,
        label: '中等水平',
        description: '您的得分提示药物使用问题已达到中等水平，可能对生活造成一定影响。',
        advice:
          '建议前往成瘾医学专科或精神科进行专业评估，并考虑接受心理咨询。及早干预能显著改善预后。',
      },
      {
        min: 11,
        max: 15,
        label: '显著水平',
        description: '您的得分提示药物使用问题较为显著，可能已形成依赖并影响多个生活领域。',
        advice:
          '建议尽快就诊成瘾医学专科或精神科，接受系统评估与治疗。药物依赖是可治疗的疾病，寻求帮助并不丢人。',
      },
      {
        min: 16,
        max: 20,
        label: '严重水平',
        description: '您的得分处于严重范围，提示药物依赖程度较高，并可能伴随明显的躯体与心理损害。',
        advice:
          '请尽快前往成瘾医学专科或精神科就诊。请注意：长期使用后突然停用可能带来危险的戒断反应，务必在专业人员指导下进行，请勿自行骤然停药。',
      },
    ],
  },
  criticalItems: [
    {
      questionId: 'q20',
      condition: '==1',
      action: 'showCrisisResources',
      message:
        '您认为自己存在药物使用方面的问题——这份觉察本身就很重要，也是改变的第一步。药物依赖是可以被有效治疗的，建议您尽快联系成瘾医学专科或精神科，也可以在需要时拨打心理援助热线。',
    },
  ],
  license: {
    status: 'public-domain',
    source: 'Skinner HA. The Drug Abuse Screening Test. Addict Behav. 1982;7(4):363-371.',
  },
}
