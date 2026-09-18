import type { ScaleConfig } from '@/types/scale'

const mmpiOptions = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
]

/**
 * 明尼苏达多项人格测验（MMPI · 参考简版）
 *
 * ⚠️ 重要说明：本配置为**参考简版**，并非官方 MMPI / MMPI-2 题本。
 * - 官方 MMPI-2 含 567 个条目，由 Pearson 持有版权，须取得授权并由具备资质的专业人员施测与解释
 * - 本配置自建 65 个条目，覆盖 3 个效度量表（L / F / K）与 10 个临床量表，
 *   各量表 5 题、统一按「是」为高分方向作答，不含原始量表的 K 校正与条目交叉计分
 * - 因此其分数**不可与官方 MMPI-2 常模比较**，仅可作为人格特征的粗略参考
 * - 正式测量请使用 Pearson 授权的官方题本，并由专业人员实施
 *
 * 维度满分均为 5 分；本量表无总分概念，结果以 13 个维度分呈现。
 */
export const mmpi: ScaleConfig = {
  id: 'mmpi',
  title: '明尼苏达多项人格测验（MMPI · 参考简版）',
  shortTitle: 'MMPI 人格测验（简版）',
  description:
    'MMPI 是应用最广泛的人格与临床评定量表之一。本工具收录的是自建参考简版（65 题），覆盖 L / F / K 三个效度量表与疑病、抑郁、癔病、精神病态偏离、男性化-女性化、偏执、精神衰弱、精神分裂、轻躁狂、社会内向 10 个临床量表。⚠️ 本简版非官方 MMPI-2 题本，分数不可与官方常模比较，仅供人格特征的粗略参考；正式测量须使用 Pearson 授权题本并由专业人员施测。',
  instructions:
    '请根据您的实际情况回答每一个问题，选择「是」或「否」。请尽量作答，不要留空。请按您一贯的表现作答，不必过多思考，也不要去判断哪个答案更「好」。完成后请务必阅读结果页的说明——本简版不能替代专业的心理评估。',
  meta: {
    timeMinutes: 10,
    audience: '一般成年人（18 岁及以上），了解自身人格与心理状态特点（参考简版）',
    tags: ['人格'],
  },
  questions: [
    { id: 'q1', text: '你是否从来没有对别人说过谎', options: mmpiOptions },
    { id: 'q2', text: '你是否经常听到别人听不到的声音', options: mmpiOptions },
    { id: 'q3', text: '你是否认为自己比表现出来的更优秀', options: mmpiOptions },
    { id: 'q4', text: '你是否经常感到身体各处有不适', options: mmpiOptions },
    { id: 'q5', text: '你是否经常感到心情低落', options: mmpiOptions },
    {
      id: 'q6',
      text: '你是否经常感到身体某一部分麻木或失去感觉',
      options: mmpiOptions,
    },
    {
      id: 'q7',
      text: '你是否经常对权威人物或规章制度感到不满',
      options: mmpiOptions,
    },
    {
      id: 'q8',
      text: '你是否对艺术、音乐或戏剧比多数同龄人更有兴趣',
      options: mmpiOptions,
    },
    { id: 'q9', text: '你是否觉得别人常常在谈论你', options: mmpiOptions },
    { id: 'q10', text: '你是否经常感到紧张不安', options: mmpiOptions },
    {
      id: 'q11',
      text: '你是否常常觉得周围的人或事物不太真实',
      options: mmpiOptions,
    },
    {
      id: 'q12',
      text: '你是否常常觉得自己精力过剩，不需要太多睡眠',
      options: mmpiOptions,
    },
    { id: 'q13', text: '你是否更喜欢独处而不是参加聚会', options: mmpiOptions },
    { id: 'q14', text: '你是否总是言行一致，从未失信于人', options: mmpiOptions },
    { id: 'q15', text: '你是否觉得有人一直在暗中监视你', options: mmpiOptions },
    { id: 'q16', text: '你是否很少需要担心自己的健康', options: mmpiOptions },
    { id: 'q17', text: '你是否经常担心自己的健康', options: mmpiOptions },
    { id: 'q18', text: '你是否对生活感到没有希望', options: mmpiOptions },
    {
      id: 'q19',
      text: '你是否经常感到头晕或快要昏倒',
      options: mmpiOptions,
    },
    {
      id: 'q20',
      text: '你是否曾经因为一时冲动而做出让自己后悔的事',
      options: mmpiOptions,
    },
    {
      id: 'q21',
      text: '你是否更喜欢安静细致的工作，而不是激烈竞争的工作',
      options: mmpiOptions,
    },
    { id: 'q22', text: '你是否觉得有人想伤害或陷害你', options: mmpiOptions },
    {
      id: 'q23',
      text: '你是否经常担心一些别人不太在意的事情',
      options: mmpiOptions,
    },
    { id: 'q24', text: '你是否常常感到自己与别人很疏远', options: mmpiOptions },
    {
      id: 'q25',
      text: '你是否常常同时开始很多事情却难以完成',
      options: mmpiOptions,
    },
    { id: 'q26', text: '你在陌生人面前是否比较拘束', options: mmpiOptions },
    {
      id: 'q27',
      text: '你是否从来没有做过任何让自己后悔的事',
      options: mmpiOptions,
    },
    {
      id: 'q28',
      text: '你是否常常觉得自己的思想被别人控制',
      options: mmpiOptions,
    },
    {
      id: 'q29',
      text: '你是否觉得自己有能力处理大多数问题',
      options: mmpiOptions,
    },
    { id: 'q30', text: '你是否常常感到胸口或腹部不舒服', options: mmpiOptions },
    { id: 'q31', text: '你是否经常觉得自己是一个失败者', options: mmpiOptions },
    {
      id: 'q32',
      text: '你是否经常在压力下出现身体不适，但检查查不出原因',
      options: mmpiOptions,
    },
    { id: 'q33', text: '你是否经常觉得自己不需要遵守规则', options: mmpiOptions },
    { id: 'q34', text: '你是否常常在意自己的外表与穿着', options: mmpiOptions },
    { id: 'q35', text: '你是否很难信任别人', options: mmpiOptions },
    {
      id: 'q36',
      text: '你是否常常反复检查自己做过的事',
      options: mmpiOptions,
    },
    { id: 'q37', text: '你是否常常觉得没有人能理解你', options: mmpiOptions },
    {
      id: 'q38',
      text: '你是否常常感到自己的想法一个接一个停不下来',
      options: mmpiOptions,
    },
    {
      id: 'q39',
      text: '你是否避免成为大家关注的焦点',
      options: mmpiOptions,
    },
    { id: 'q40', text: '你是否从来没有对别人发过脾气', options: mmpiOptions },
    {
      id: 'q41',
      text: '你是否经常感到自己的身体被某种外力影响',
      options: mmpiOptions,
    },
    {
      id: 'q42',
      text: '你是否很少在意别人对你的看法',
      options: mmpiOptions,
    },
    { id: 'q43', text: '你是否经常感到身体某部位疼痛', options: mmpiOptions },
    { id: 'q44', text: '你是否经常感到提不起精神', options: mmpiOptions },
    {
      id: 'q45',
      text: '你是否经常感到喉咙发紧或有异物感',
      options: mmpiOptions,
    },
    { id: 'q46', text: '你是否经常与人发生争执', options: mmpiOptions },
    { id: 'q47', text: '你是否对机械或工具类的事物兴趣不大', options: mmpiOptions },
    {
      id: 'q48',
      text: '你是否觉得别人对你的成就评价不公',
      options: mmpiOptions,
    },
    { id: 'q49', text: '你是否很难做出决定', options: mmpiOptions },
    {
      id: 'q50',
      text: '你是否觉得自己的想法很难对别人说清楚',
      options: mmpiOptions,
    },
    { id: 'q51', text: '你是否常常做出冲动的决定', options: mmpiOptions },
    {
      id: 'q52',
      text: '你是否觉得与人交往需要花费很多精力',
      options: mmpiOptions,
    },
    {
      id: 'q53',
      text: '你是否从来没有拿过任何不属于自己的东西',
      options: mmpiOptions,
    },
    { id: 'q54', text: '你是否认为有人在密谋陷害你', options: mmpiOptions },
    {
      id: 'q55',
      text: '你是否觉得自己比别人更少犯错',
      options: mmpiOptions,
    },
    {
      id: 'q56',
      text: '你是否觉得自己身体的毛病比别人多',
      options: mmpiOptions,
    },
    { id: 'q57', text: '你是否很少能感到真正的快乐', options: mmpiOptions },
    {
      id: 'q58',
      text: '你是否希望别人更多地照顾和关心你',
      options: mmpiOptions,
    },
    { id: 'q59', text: '你是否很少感到内疚', options: mmpiOptions },
    {
      id: 'q60',
      text: '你是否觉得自己更愿意从事需要细心与耐心的工作',
      options: mmpiOptions,
    },
    { id: 'q61', text: '你是否感到别人在利用你', options: mmpiOptions },
    { id: 'q62', text: '你是否常常感到难以放松', options: mmpiOptions },
    {
      id: 'q63',
      text: '你是否经常觉得自己的思维变得混乱',
      options: mmpiOptions,
    },
    {
      id: 'q64',
      text: '你是否常常觉得自己比周围的人更有能力',
      options: mmpiOptions,
    },
    { id: 'q65', text: '你是否在多数社交场合感到不自在', options: mmpiOptions },
  ],
  scoring: {
    type: 'sum',
    min: 0,
    max: 65,
    reverse: [],
    dimensions: [
      {
        id: 'l',
        title: 'L 说谎（效度）',
        questionIds: ['q1', 'q14', 'q27', 'q40', 'q53'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示明显掩饰',
            description: '作答较为坦诚，未表现出刻意的自我美化倾向。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '倾向呈现出「毫无缺点」的自我形象。本维度得分偏高时，其余维度的结果可能偏低，建议结合他人评价综合看待。',
          },
        ],
      },
      {
        id: 'f',
        title: 'F 稀有反应（效度）',
        questionIds: ['q2', 'q15', 'q28', 'q41', 'q54'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示异常',
            description: '未报告过多罕见或非常规的体验。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '报告了较多罕见体验，可能反映真实的心理困扰，也可能与作答随意、夸大困扰有关。建议结合临床访谈判断。',
          },
        ],
      },
      {
        id: 'k',
        title: 'K 防御（效度）',
        questionIds: ['q3', 'q16', 'q29', 'q42', 'q55'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示明显防御',
            description: '作答较为开放，心理防御水平不高。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '倾向否认问题、强调自身应对能力。可能反映心理资源较充足，也可能反映不愿承认困难。',
          },
        ],
      },
      {
        id: 'hs',
        title: 'Hs 疑病',
        questionIds: ['q4', 'q17', 'q30', 'q43', 'q56'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示升高',
            description: '对身体健康的关注处于常见范围。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '对身体感受较为关注，主诉较多。建议先进行内科检查以排除器质性疾病；若检查无异常而担忧仍持续，可咨询心理科。',
          },
        ],
      },
      {
        id: 'd',
        title: 'D 抑郁',
        questionIds: ['q5', 'q18', 'q31', 'q44', 'q57'],
        bands: [
          { min: 0, max: 2, label: '未提示升高', description: '情绪状态未提示明显的低落倾向。' },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description: '存在较明显的低落、无望或精力不足体验，建议关注情绪状态并考虑专业评估。',
          },
        ],
      },
      {
        id: 'hy',
        title: 'Hy 癔病',
        questionIds: ['q6', 'q19', 'q32', 'q45', 'q58'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示升高',
            description: '未提示明显的躯体化反应或对关注的强烈需求。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '压力下容易出现躯体不适，并较希望获得他人关注与照顾。建议结合医学检查与心理评估综合判断。',
          },
        ],
      },
      {
        id: 'pd',
        title: 'Pd 精神病态偏离',
        questionIds: ['q7', 'q20', 'q33', 'q46', 'q59'],
        bands: [
          { min: 0, max: 2, label: '未提示升高', description: '未提示明显的规则冲突或冲动倾向。' },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '对规则与权威较易感到抵触，行事偏冲动，较少感到内疚。在需要创新突破的情境中可能有优势，但也可能带来人际与规则的摩擦。',
          },
        ],
      },
      {
        id: 'mf',
        title: 'Mf 兴趣取向',
        questionIds: ['q8', 'q21', 'q34', 'q47', 'q60'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '偏向常规取向',
            description: '兴趣取向与多数同性别者的典型分布较为接近。',
          },
          {
            min: 3,
            max: 5,
            label: '偏向多元取向',
            description:
              '兴趣取向较为多元，更偏向艺术、细致与审美的领域。这是一个描述性维度，本身不反映心理是否健康。',
          },
        ],
      },
      {
        id: 'pa',
        title: 'Pa 偏执',
        questionIds: ['q9', 'q22', 'q35', 'q48', 'q61'],
        bands: [
          { min: 0, max: 2, label: '未提示升高', description: '未提示明显的猜疑或不信任倾向。' },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description: '较易感到被针对、被议论或不被公正对待，人际关系中可能较多戒备。建议寻求专业评估。',
          },
        ],
      },
      {
        id: 'pt',
        title: 'Pt 精神衰弱',
        questionIds: ['q10', 'q23', 'q36', 'q49', 'q62'],
        bands: [
          { min: 0, max: 2, label: '未提示升高', description: '未提示明显的焦虑与强迫倾向。' },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '焦虑、反复思虑、难以决断与反复检查等表现较为明显。认知行为疗法（CBT）对这类困扰有充分证据支持。',
          },
        ],
      },
      {
        id: 'sc',
        title: 'Sc 精神分裂',
        questionIds: ['q11', 'q24', 'q37', 'q50', 'q63'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '未提示升高',
            description: '未提示明显的疏离感或思维、感知异常体验。',
          },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '存在较明显的疏离、被隔绝或思维不清晰的体验。建议尽快前往精神科进行专业评估，以准确理解这些体验。',
          },
        ],
      },
      {
        id: 'ma',
        title: 'Ma 轻躁狂',
        questionIds: ['q12', 'q25', 'q38', 'q51', 'q64'],
        bands: [
          { min: 0, max: 2, label: '未提示升高', description: '精力与活动水平未提示异常。' },
          {
            min: 3,
            max: 5,
            label: '偏高',
            description:
              '精力旺盛、想法奔涌、活动量大且较冲动。这可能表现为高效与创造力，但若伴随睡眠需求显著减少或明显冲动行为，建议专业评估。',
          },
        ],
      },
      {
        id: 'si',
        title: 'Si 社会内向',
        questionIds: ['q13', 'q26', 'q39', 'q52', 'q65'],
        bands: [
          {
            min: 0,
            max: 2,
            label: '偏外向',
            description: '您在社交场合中较为自在，乐于与人交往。',
          },
          {
            min: 3,
            max: 5,
            label: '偏内向',
            description:
              '您更偏好独处或小范围的交往，在人群中容易感到消耗。这是正常的人格差异，选择适合自身节奏的生活方式即可。',
          },
        ],
      },
    ],
  },
  license: {
    status: 'permission-required',
    source:
      '官方量表：Hathaway SR, McKinley JC. The Minnesota Multiphasic Personality Inventory. Minneapolis: University of Minnesota Press, 1943；Butcher JN, et al. MMPI-2. Minneapolis: University of Minnesota Press, 1989（版权归 Pearson 所有，须授权使用）。本工具为自建参考简版，非官方题本。',
  },
}
