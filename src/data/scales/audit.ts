import type { ScaleConfig } from '@/types/scale'

const freqOptions = [
  { label: '从不', value: 0 },
  { label: '每月不足一次', value: 1 },
  { label: '每月 2-4 次', value: 2 },
  { label: '每周 2-3 次', value: 3 },
  { label: '每周 4 次或以上', value: 4 },
]

const quantityOptions = [
  { label: '1-2 个标准杯', value: 0 },
  { label: '3-4 个标准杯', value: 1 },
  { label: '5-6 个标准杯', value: 2 },
  { label: '7-9 个标准杯', value: 3 },
  { label: '10 个标准杯或以上', value: 4 },
]

const sixPlusOptions = [
  { label: '从不', value: 0 },
  { label: '每月不足一次', value: 1 },
  { label: '每月', value: 2 },
  { label: '每周', value: 3 },
  { label: '几乎每天', value: 4 },
]

const consequenceOptions = [
  { label: '没有', value: 0 },
  { label: '有，但不在过去一年内', value: 2 },
  { label: '有，在过去一年内', value: 4 },
]

/**
 * 酒精使用障碍筛查量表（AUDIT，WHO）
 * - 10 题，第 1-8 题选项 0-4 分，第 9-10 题选项 0/2/4 分，总分 0-40
 * - 分级：0-7 低风险；8-15 危险饮酒；16-19 有害饮酒；20-40 可能酒精依赖
 * - 1 个标准杯约含 10 g 纯酒精（相当于 250 ml 啤酒 / 100 ml 葡萄酒 / 30 ml 白酒）
 */
export const audit: ScaleConfig = {
  id: 'audit',
  title: '酒精使用障碍筛查量表（AUDIT）',
  shortTitle: 'AUDIT 饮酒风险筛查',
  description:
    '由世界卫生组织（WHO）组织多国协作编制的饮酒问题筛查工具，覆盖饮酒量、依赖症状与酒精相关问题三个维度，共 10 题，是国际公认的酒精筛查金标准。',
  instructions:
    '请根据您过去一年的饮酒情况如实作答。若您不饮酒，可直接选择「从不」或「没有」。本量表仅用于了解您的饮酒风险水平，不作任何评价，也不能替代专业诊断。',
  meta: {
    timeMinutes: 3,
    audience: '有饮酒经历的人群（18 岁及以上），筛查危险饮酒与酒精使用障碍',
    tags: ['成瘾行为'],
  },
  questions: [
    { id: 'q1', text: '您多久喝一次含酒精的饮料', options: freqOptions },
    {
      id: 'q2',
      text: '在您喝酒的日子里，通常喝多少（1 个标准杯约含 10 g 纯酒精）',
      options: quantityOptions,
    },
    {
      id: 'q3',
      text: '您多久会有一次一次喝下 6 个标准杯或更多的情况',
      options: sixPlusOptions,
    },
    {
      id: 'q4',
      text: '在过去一年中，您多久发现自己一旦开始喝酒就很难停下来',
      options: sixPlusOptions,
    },
    {
      id: 'q5',
      text: '在过去一年中，您多久因为喝酒而没能完成本该完成的事情',
      options: sixPlusOptions,
    },
    {
      id: 'q6',
      text: '在过去一年中，您多久需要在早晨喝一杯才能让自己进入状态',
      options: sixPlusOptions,
    },
    {
      id: 'q7',
      text: '在过去一年中，您多久在喝酒之后感到内疚或后悔',
      options: sixPlusOptions,
    },
    {
      id: 'q8',
      text: '在过去一年中，您多久因为喝酒而想不起前一天晚上发生的事情',
      options: sixPlusOptions,
    },
    {
      id: 'q9',
      text: '您是否曾因喝酒而使自己或他人受伤',
      options: consequenceOptions,
    },
    {
      id: 'q10',
      text: '是否有亲友、医生或其他医务人员曾关心您的饮酒问题，或建议您减少饮酒',
      options: consequenceOptions,
    },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 40,
    reverse: [],
    bands: [
      {
        min: 0,
        max: 7,
        label: '低风险饮酒',
        description: '您的饮酒模式处于低风险范围，未提示存在危险饮酒或酒精使用障碍。',
        advice: '继续保持适度饮酒或不饮酒的习惯。规律运动、充足睡眠是更好的减压方式。',
      },
      {
        min: 8,
        max: 15,
        label: '危险饮酒',
        description: '您的得分提示已进入危险饮酒范围，当前的饮酒量可能对健康造成损害。',
        advice:
          '建议减少饮酒频次与单次饮酒量，避免空腹饮酒与劝酒场合；可记录一周饮酒日记以增强觉察。若难以自行减少，建议咨询专业机构。',
      },
      {
        min: 16,
        max: 19,
        label: '有害饮酒',
        description: '您的得分提示饮酒已对身心造成实际损害，可能已形成一定的饮酒依赖。',
        advice:
          '建议尽快前往精神科或成瘾医学专科进行专业评估。酒精使用障碍是可以治疗的，接受评估并不意味着「有问题」，而是负责任的选择。',
      },
      {
        min: 20,
        max: 40,
        label: '可能酒精依赖',
        description: '您的得分处于较高水平，提示很可能已存在酒精依赖，突然停酒可能带来风险。',
        advice:
          '强烈建议尽快就诊精神科或成瘾医学专科。请注意：长期大量饮酒者突然停酒可能出现戒断反应，应由专业人员指导，请勿自行骤然停酒。',
      },
    ],
  },
  license: {
    status: 'public-domain',
    source:
      'Saunders JB, Aasland OG, Babor TF, de la Fuente JR, Grant M. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO collaborative project on early detection of persons with harmful alcohol consumption — II. Addiction. 1993;88(6):791-804.',
  },
}
