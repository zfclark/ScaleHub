import type { ScaleConfig } from '@/types/scale'

const bfiOptions = [
  { label: '非常不同意', value: 0 },
  { label: '比较不同意', value: 1 },
  { label: '既不同意也不反对', value: 2 },
  { label: '比较同意', value: 3 },
  { label: '非常同意', value: 4 },
]

/**
 * 大五人格量表（BFI，Big Five Inventory）
 * - 44 题，选项 0-4 分（原量表为 1-5 分，此处等距平移，反向计分规则不受影响）
 * - 5 个维度：外向性 E（8 题）、宜人性 A（9 题）、尽责性 C（9 题）、神经质 N（8 题）、开放性 O（10 题）
 * - 16 个反向计分条目：2、6、8、9、12、18、21、23、24、27、31、34、35、37、41、43
 * - 大五人格无「总分」概念，结果以 5 个维度分呈现
 */
export const bfi: ScaleConfig = {
  id: 'bfi',
  title: '大五人格量表（BFI）',
  shortTitle: 'BFI 大五人格',
  description:
    '由 John 与 Srivastava 编制的大五人格简短测量工具，共 44 题，从外向性、宜人性、尽责性、神经质与开放性五个维度描述人格特征，是人格研究中使用最广泛的短量表之一。',
  instructions:
    '以下是一些描述个人特点的句子。请根据这些描述在多大程度上符合您自己的情况，选择相应的同意程度。请按照您的真实情况作答，而不是您希望自己成为的样子。人格没有好坏之分，各维度得分高低都有其独特的优势。',
  meta: {
    timeMinutes: 7,
    audience: '一般人群（青少年及以上），描述性评估大五人格特征',
    tags: ['人格'],
  },
  questions: [
    { id: 'q1', text: '是健谈的、爱说话的', options: bfiOptions },
    { id: 'q2', text: '倾向于挑剔别人', options: bfiOptions },
    { id: 'q3', text: '做事周全彻底', options: bfiOptions },
    { id: 'q4', text: '容易感到沮丧、忧郁', options: bfiOptions },
    { id: 'q5', text: '有独创性，常能提出新想法', options: bfiOptions },
    { id: 'q6', text: '比较沉默寡言', options: bfiOptions },
    { id: 'q7', text: '乐于助人、不自私', options: bfiOptions },
    { id: 'q8', text: '有时会比较粗心', options: bfiOptions },
    { id: 'q9', text: '比较放松，能很好地应对压力', options: bfiOptions },
    { id: 'q10', text: '对很多不同的事物都感到好奇', options: bfiOptions },
    { id: 'q11', text: '精力充沛', options: bfiOptions },
    { id: 'q12', text: '容易与人发生争执', options: bfiOptions },
    { id: 'q13', text: '是个可靠的工作者', options: bfiOptions },
    { id: 'q14', text: '容易紧张', options: bfiOptions },
    { id: 'q15', text: '思维敏锐、有深度', options: bfiOptions },
    { id: 'q16', text: '能带来很多热情', options: bfiOptions },
    { id: 'q17', text: '天性宽厚、待人宽容', options: bfiOptions },
    { id: 'q18', text: '倾向于做事没有条理', options: bfiOptions },
    { id: 'q19', text: '经常担心', options: bfiOptions },
    { id: 'q20', text: '有丰富的想象力', options: bfiOptions },
    { id: 'q21', text: '倾向于安静', options: bfiOptions },
    { id: 'q22', text: '通常信任他人', options: bfiOptions },
    { id: 'q23', text: '倾向于懒散', options: bfiOptions },
    { id: 'q24', text: '情绪稳定，不容易被激怒', options: bfiOptions },
    { id: 'q25', text: '有创造力、善于创新', options: bfiOptions },
    { id: 'q26', text: '个性果断、有主见', options: bfiOptions },
    { id: 'q27', text: '可能显得冷淡、疏远', options: bfiOptions },
    { id: 'q28', text: '能坚持把事情做完', options: bfiOptions },
    { id: 'q29', text: '情绪容易起伏', options: bfiOptions },
    { id: 'q30', text: '重视艺术与审美体验', options: bfiOptions },
    { id: 'q31', text: '有时会害羞、放不开', options: bfiOptions },
    { id: 'q32', text: '对几乎所有人都体贴友善', options: bfiOptions },
    { id: 'q33', text: '做事有效率', options: bfiOptions },
    { id: 'q34', text: '在紧张情境下仍能保持冷静', options: bfiOptions },
    { id: 'q35', text: '更喜欢常规、重复性的工作', options: bfiOptions },
    { id: 'q36', text: '外向、善于社交', options: bfiOptions },
    { id: 'q37', text: '有时对别人不够礼貌', options: bfiOptions },
    { id: 'q38', text: '会制定计划并坚持执行', options: bfiOptions },
    { id: 'q39', text: '容易变得紧张不安', options: bfiOptions },
    { id: 'q40', text: '喜欢思考、琢磨各种想法', options: bfiOptions },
    { id: 'q41', text: '对艺术兴趣不大', options: bfiOptions },
    { id: 'q42', text: '喜欢与人合作', options: bfiOptions },
    { id: 'q43', text: '容易分心', options: bfiOptions },
    { id: 'q44', text: '在艺术、音乐或文学方面有品味', options: bfiOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 176,
    reverse: [
      'q2',
      'q6',
      'q8',
      'q9',
      'q12',
      'q18',
      'q21',
      'q23',
      'q24',
      'q27',
      'q31',
      'q34',
      'q35',
      'q37',
      'q41',
      'q43',
    ],
    dimensions: [
      {
        id: 'extraversion',
        title: '外向性 E',
        questionIds: ['q1', 'q6', 'q11', 'q16', 'q21', 'q26', 'q31', 'q36'],
        bands: [
          {
            min: 0,
            max: 15,
            label: '偏内敛',
            description: '您更偏好安静、独处的环境，社交活动相对较少，通常更审慎、独立。',
          },
          {
            min: 16,
            max: 22,
            label: '中等',
            description: '您在社交与独处之间取得平衡，能适应热闹也能享受安静。',
          },
          {
            min: 23,
            max: 32,
            label: '偏外向',
            description: '您热情、健谈，乐于与人交往，常从社交中获得能量与积极情绪。',
          },
        ],
      },
      {
        id: 'agreeableness',
        title: '宜人性 A',
        questionIds: ['q2', 'q7', 'q12', 'q17', 'q22', 'q27', 'q32', 'q37', 'q42'],
        bands: [
          {
            min: 0,
            max: 17,
            label: '偏直接',
            description: '您更倾向坦率表达立场、据理力争，在需要坚持原则时较少让步。',
          },
          {
            min: 18,
            max: 25,
            label: '中等',
            description: '您既能照顾他人感受，也能在必要时坚持自己的立场。',
          },
          {
            min: 26,
            max: 36,
            label: '偏温和',
            description: '您体贴、乐于助人、信任他人，重视人际和谐与合作。',
          },
        ],
      },
      {
        id: 'conscientiousness',
        title: '尽责性 C',
        questionIds: ['q3', 'q8', 'q13', 'q18', 'q23', 'q28', 'q33', 'q38', 'q43'],
        bands: [
          {
            min: 0,
            max: 17,
            label: '偏随性',
            description: '您行事较为灵活、不拘计划，适合需要即兴与创造空间的环境。',
          },
          {
            min: 18,
            max: 25,
            label: '中等',
            description: '您能在计划性与灵活性之间取得平衡，多数任务可稳定完成。',
          },
          {
            min: 26,
            max: 36,
            label: '偏自律',
            description: '您有条理、可靠、能坚持到底，通常能在长期目标上取得成果。',
          },
        ],
      },
      {
        id: 'neuroticism',
        title: '神经质 N',
        questionIds: ['q4', 'q9', 'q14', 'q19', 'q24', 'q29', 'q34', 'q39'],
        bands: [
          {
            min: 0,
            max: 15,
            label: '情绪偏稳定',
            description: '您情绪平稳、抗压能力较强，面对压力时较少出现明显波动。',
          },
          {
            min: 16,
            max: 22,
            label: '中等',
            description: '您的情绪反应处于常见范围，面对压力会有起伏但通常能自行恢复。',
          },
          {
            min: 23,
            max: 32,
            label: '情绪偏敏感',
            description: '您对压力与负面情绪较为敏感，容易体验焦虑、担忧或情绪波动。',
            advice:
              '敏感性本身并非缺陷，它常伴随更强的共情与觉察力。建议学习情绪调节技巧、保证睡眠与运动，若负面情绪长期影响生活，可寻求专业支持。',
          },
        ],
      },
      {
        id: 'openness',
        title: '开放性 O',
        questionIds: ['q5', 'q10', 'q15', 'q20', 'q25', 'q30', 'q35', 'q40', 'q41', 'q44'],
        bands: [
          {
            min: 0,
            max: 19,
            label: '偏务实',
            description: '您更看重实用与经验，偏好熟悉、确定的事物与常规做法。',
          },
          {
            min: 20,
            max: 28,
            label: '中等',
            description: '您对新鲜事物有一定兴趣，同时也能接受稳定的常规。',
          },
          {
            min: 29,
            max: 40,
            label: '偏开放',
            description: '您好奇心强、想象力丰富，乐于接触新观念、艺术与多元体验。',
          },
        ],
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'John OP, Srivastava S. The Big Five Inventory — Versions 4a and 54. Berkeley, CA: University of California, Berkeley, Institute of Personality and Social Research, 1999.',
  },
}
