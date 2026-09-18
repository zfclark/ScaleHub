/** 应用版本信息：与 package.json 及 README 保持一致 */
export const APP_VERSION = '1.2.0'
/** 展示用版本号（V + 语义化版本） */
export const APP_VERSION_NAME = 'V1.2.0'
export const APP_NAME = 'ScaleHub'
export const APP_SUBTITLE = '心理自测量表集合'
export const APP_SLOGAN = '用几分钟，更了解自己。'

export interface ChangelogEntry {
  version: string
  name: string
  date: string
  items: string[]
}

/** 更新日志：与根目录 CHANGELOG.md 保持一致（应用内「关于」页展示用），发版时两处同步追加 */
export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '1.2.0',
    name: 'V1.2.0',
    date: '2026-09-19',
    items: [
      '新增 15 个心理量表，量表总数由 12 个增至 27 个：SCL-90、GHQ-12、SDS、BDI-II、BAI、MMPI（参考简版）、IPIP-NEO-120、BFI、EPQ-RSC、PSQI、AUDIT、DAST-20、SDQ、CDI、SCARED',
      '新增多维度量表支持：SCL-90 九因子、MMPI 三效度 + 十临床量表、IPIP-NEO-120 与 BFI 五因素、EPQ-RSC 四维度、SCARED 五维度、SDQ 困难总分与亲社会行为分离计分',
      '修复反向计分在 1 基李克特量表上的偏差：由「最大值 - 原始分」改为「最小值 + 最大值 - 原始分」，SAS 等选项为 1-4 分的量表反向题不再少计 1 分',
      '修复 DASS-21 的 scoring.max：由 126 改为 63（总分为 21 题原始分之和，不含各维度的 ×2 折算）',
      '修复 GitHub Pages 资源路径大小写：vite.config.ts 的 base 由 /scalehub/ 改为 /ScaleHub/，仓库名区分大小写，原路径导致资源请求 404、页面打开后空白',
      '评分引擎新增 scoring.totalExcludes，支持将特定题目排除在总分之外、但仍参与所属维度分（用于 SDQ 亲社会行为维度）',
      '升级 GitHub Actions 以适配 Node 20 运行时弃用：checkout@v5、setup-node@v5（node-version 20 → 22）、configure-pages@v6、upload-pages-artifact@v5、deploy-pages@v5',
      'README 新增「量表授权说明」章节，按 public-domain / free-with-citation / permission-required 三类标注各量表的授权状态与使用限制',
      'MMPI 收录为自建参考简版（65 题），NEO-PI-R 改用公共领域的 IPIP-NEO-120 替代，相关限制已在量表说明与 README 中明确标注',
    ],
  },
  {
    version: '1.1.0',
    name: 'V1.1.0',
    date: '2026-09-17',
    items: [
      'Cloudflare 部署方式调整为 Workers 静态资产通用方案：wrangler.toml 声明静态资产目录，部署命令统一为 npx wrangler deploy',
      '新增 npm run build:cf 构建模式，Cloudflare（根路径）与 GitHub Pages（子路径）资源路径按构建命令自动切换',
      '移除本地手动部署方式（deploy:cf 脚本），部署统一走 Git 连接自动部署',
      '修复 tsconfig 的 baseUrl 弃用问题，路径别名改为相对 tsconfig 解析',
      'README 文档全面重写：部署对照表、Node 版本要求、项目结构说明等',
    ],
  },
  {
    version: '1.0.0',
    name: 'V1.0.0',
    date: '2026-09-14',
    items: [
      '上线首批 12 个心理自测量表：GAD-7、PHQ-9、GAD-2、PHQ-2、PSS-10、DASS-21、AIS、ISI、Rosenberg 自尊量表、GSES、SWLS、SAS 焦虑自评量表',
      '通用评分引擎：支持总分、维度分（DASS-21 三维度）、反向计分（PSS-10 / RSES）、加权、临界值与特殊触发规则',
      '测试页一次一题、进度条展示、答案自动保存与断点续答',
      '结果页等级判定、维度图、解释与建议，命中风险题时展示心理援助信息',
      '历史记录：时间线、复测趋势图、JSON/CSV 导出、单条删除',
      '全部数据仅存储于本地浏览器（localStorage），不上传服务器',
      '支持浅色 / 深色主题切换',
      '量表列表支持关键词搜索（名称、简介、标签），可与标签筛选组合使用',
      '支持 GitHub Pages 与 Cloudflare（Workers 静态资产）双平台部署，按构建模式自动切换资源路径',
      '每个量表详情页标注题数、预计时长与适用人群',
    ],
  },
]
