import type { ScaleConfig } from '@/types/scale'

const sdqOptions = [
  { label: '不符合', value: 0 },
  { label: '有点符合', value: 1 },
  { label: '完全符合', value: 2 },
]

/**
 * 长处与困难问卷（SDQ，自评版）
 * - 25 题，选项 0-2 分，分为 5 个维度各 5 题
 * - 困难总分 = 情绪症状 + 品行问题 + 多动/注意 + 同伴关系，共 20 题，范围 0-40
 * - 亲社会行为维度单独计分（0-10），不计入困难总分
 * - 反向计分条目：7、11、14、21、25
 * - 困难总分分级（自评版）：0-14 正常；15-17 边缘；18-19 较高；20-40 很高
 */
export const sdq: ScaleConfig = {
  id: 'sdq',
  title: '长处与困难问卷（SDQ）',
  shortTitle: 'SDQ 儿童行为筛查',
  description:
    '由 Goodman 编制的儿童青少年心理健康筛查工具，共 25 题，同时评估情绪症状、品行问题、多动/注意、同伴关系四类困难，以及亲社会行为这一长处，兼顾问题与优势。',
  instructions:
    '请根据您（或您代为作答的孩子）最近 6 个月内的情况作答。每条描述按「不符合 / 有点符合 / 完全符合」三档选择。本量表适用于 11-17 岁儿童青少年自评（4-10 岁可由家长作答），结果不能替代专业诊断。',
  meta: {
    timeMinutes: 5,
    audience: '儿童青少年（11-17 岁自评，4-10 岁家长版），筛查行为与情绪困难',
    tags: ['儿童青少年', '综合筛查'],
  },
  questions: [
    { id: 'q1', text: '我会尝试对别人友善，我关心别人的感受', options: sdqOptions },
    { id: 'q2', text: '我坐立不安，很难长时间安静地坐着', options: sdqOptions },
    { id: 'q3', text: '我经常头痛、肚子痛或身体不舒服', options: sdqOptions },
    { id: 'q4', text: '我乐于与别人分享东西（食物、玩具、笔等）', options: sdqOptions },
    { id: 'q5', text: '我经常发脾气或大吵大闹', options: sdqOptions },
    { id: 'q6', text: '我比较孤独，多数时间自己玩', options: sdqOptions },
    { id: 'q7', text: '我通常顺从，别人要我做的事我一般会做', options: sdqOptions },
    { id: 'q8', text: '我经常担心很多事', options: sdqOptions },
    { id: 'q9', text: '如果有人受伤、难过或不舒服，我愿意帮忙', options: sdqOptions },
    { id: 'q10', text: '我经常坐立不安或扭来扭去', options: sdqOptions },
    { id: 'q11', text: '我至少有一个好朋友', options: sdqOptions },
    { id: 'q12', text: '我经常与别人打架或欺负别人', options: sdqOptions },
    { id: 'q13', text: '我经常不快乐、情绪低落或想哭', options: sdqOptions },
    { id: 'q14', text: '我通常被其他孩子喜欢', options: sdqOptions },
    { id: 'q15', text: '我容易分心，很难集中注意力', options: sdqOptions },
    { id: 'q16', text: '我在陌生环境中会紧张，很容易失去自信', options: sdqOptions },
    { id: 'q17', text: '我对年纪比我小的孩子友善', options: sdqOptions },
    { id: 'q18', text: '我经常撒谎或欺骗别人', options: sdqOptions },
    { id: 'q19', text: '其他孩子经常欺负我、取笑我', options: sdqOptions },
    { id: 'q20', text: '我经常主动帮助别人（父母、老师、其他孩子）', options: sdqOptions },
    { id: 'q21', text: '我做事之前会先想清楚', options: sdqOptions },
    { id: 'q22', text: '我从家里、学校或其他地方拿过不属于自己的东西', options: sdqOptions },
    { id: 'q23', text: '我和成年人相处比和同龄人相处更好', options: sdqOptions },
    { id: 'q24', text: '我有很多害怕的事情，很容易被吓到', options: sdqOptions },
    { id: 'q25', text: '我能把事情做完，注意力良好', options: sdqOptions },
  ],
  scoring: {
    type: 'sum',
    // 困难总分只统计 20 个困难条目，亲社会行为的 5 个条目单独作为维度分
    min: 0,
    max: 40,
    reverse: ['q7', 'q11', 'q14', 'q21', 'q25'],
    totalExcludes: ['q1', 'q4', 'q9', 'q17', 'q20'],
    bands: [
      {
        min: 0,
        max: 14,
        label: '困难水平正常',
        description: '困难总分处于正常范围，未提示需要关注的行为或情绪问题。',
        advice: '继续保持稳定的作息与良好的亲子、同伴关系。可关注亲社会行为维度，了解孩子的优势。',
      },
      {
        min: 15,
        max: 17,
        label: '困难水平边缘',
        description: '困难总分处于边缘范围，部分方面可能存在轻度困难。',
        advice:
          '建议对照各维度分找出主要困难方向，观察 1-3 个月；若持续存在或影响学习与人际关系，建议咨询学校心理老师或专业机构。',
      },
      {
        min: 18,
        max: 19,
        label: '困难水平较高',
        description: '困难总分高于常用切分值，提示可能存在临床相关的行为或情绪困难。',
        advice: '建议前往儿童心理门诊或儿童精神科进行专业评估，同时与学校保持沟通以获得支持。',
      },
      {
        min: 20,
        max: 40,
        label: '困难水平很高',
        description: '困难总分处于很高水平，多个领域可能受到明显影响。',
        advice:
          '建议尽快就诊儿童精神科或儿童心理门诊，接受系统评估。儿童青少年期的行为与情绪问题对早期干预反应良好。',
      },
    ],
    dimensions: [
      {
        id: 'emotional',
        title: '情绪症状',
        questionIds: ['q3', 'q8', 'q13', 'q16', 'q24'],
        bands: [
          { min: 0, max: 4, label: '正常范围', description: '情绪症状未提示异常。' },
          {
            min: 5,
            max: 10,
            label: '偏高',
            description: '存在较多的躯体不适、担忧或不快乐体验，是本问卷提示的重点方向。',
          },
        ],
      },
      {
        id: 'conduct',
        title: '品行问题',
        questionIds: ['q5', 'q7', 'q12', 'q18', 'q22'],
        bands: [
          { min: 0, max: 2, label: '正常范围', description: '品行相关问题未提示异常。' },
          {
            min: 3,
            max: 10,
            label: '偏高',
            description: '存在较多的发脾气、冲突或违规行为，是本问卷提示的重点方向。',
          },
        ],
      },
      {
        id: 'hyperactivity',
        title: '多动 / 注意',
        questionIds: ['q2', 'q10', 'q15', 'q21', 'q25'],
        bands: [
          { min: 0, max: 5, label: '正常范围', description: '多动与注意力问题未提示异常。' },
          {
            min: 6,
            max: 10,
            label: '偏高',
            description: '存在较明显的坐立不安与注意力困难，是本问卷提示的重点方向。',
          },
        ],
      },
      {
        id: 'peer',
        title: '同伴关系',
        questionIds: ['q6', 'q11', 'q14', 'q19', 'q23'],
        bands: [
          { min: 0, max: 2, label: '正常范围', description: '同伴关系未提示异常。' },
          {
            min: 3,
            max: 10,
            label: '偏高',
            description: '存在同伴交往方面的困难，是本问卷提示的重点方向。',
          },
        ],
      },
      {
        id: 'prosocial',
        title: '亲社会行为（长处）',
        questionIds: ['q1', 'q4', 'q9', 'q17', 'q20'],
        bands: [
          {
            min: 0,
            max: 5,
            label: '低于平均水平',
            description: '亲社会行为得分偏低，可留意并创造练习关心他人、合作与分享的机会。',
          },
          {
            min: 6,
            max: 10,
            label: '处于优势',
            description: '亲社会行为得分良好，体贴、乐于分享与合作是重要的心理资源。',
          },
        ],
      },
    ],
  },
  license: {
    status: 'free-with-citation',
    source:
      'Goodman R. The Strengths and Difficulties Questionnaire: a research note. J Child Psychol Psychiatry. 1997;38(5):581-586. (免费用于非商业用途，详见 youthinmind.info)',
  },
}
