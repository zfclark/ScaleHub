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
      '新增独立「更新日志」页（/changelog），完整展示各版本变更；关于页改为最新版本摘要 + 入口，页脚同步加入入口',
      '修复反向计分在 1 基李克特量表上的偏差：由「最大值 - 原始分」改为「最小值 + 最大值 - 原始分」，SAS 等选项为 1-4 分的量表反向题不再少计 1 分',
      '修复 DASS-21 的 scoring.max：由 126 改为 63（总分为 21 题原始分之和，不含各维度的 ×2 折算）',
      '修复 GitHub Pages 资源路径大小写：vite.config.ts 的 base 由 /scalehub/ 改为 /ScaleHub/，仓库名区分大小写，原路径导致资源请求 404、页面打开后空白',
      '修复等级配色方向错误：原按「总分 ÷ 满分」映射绿→红，使正向计分量表（RSES 自尊、GSES 自我效能、SWLS 生活满意度）的高分档被显示成红色，纯维度型量表的「已完成」标签也被染上红绿；现按等级在分级序列中的位置取色，新增 scoring.higherIsBetter 标记正向量表，无分级时用中性色',
      '修复量表详情页反向计分题号列表：IPIP-NEO-120 有 60 个反向条目（BFI 16 个），原先逐题列出会渲染成一行无法阅读的长文本，现超过 8 个时只显示数量',
      '修复趋势图配色与更新：调色板原只有 3 色，而 MMPI 有 13 个维度、SCL-90 有 9 个，颜色重复会让不同维度看起来是同一条线；图表容器被重建后 useChart 仍持有旧实例，导致图表停止更新',
      '修复答题自动跳转：定时器未在卸载时清理、自动跳转后进度未落盘（续答会停在上一题）、手动翻页时未取消待触发的自动跳转',
      '修复 localStorage 写入未捕获异常：隐私模式或配额已满时会抛异常并中断答题流程，现统一经安全封装降级',
      '修复答题进度统计：answeredCount 原按答案对象键数统计，残留已移除题目的作答会显示错误进度',
      '修复历史记录导出的 revokeObjectURL 时序：原先同步调用可能在下载启动前就令 URL 失效',
      '评分引擎新增 scoring.totalExcludes，支持将特定题目排除在总分之外、但仍参与所属维度分（用于 SDQ 亲社会行为维度）',
      '升级 GitHub Actions 以适配 Node 20 运行时弃用：checkout@v5、setup-node@v5（node-version 20 → 22）、configure-pages@v6、upload-pages-artifact@v5、deploy-pages@v5',
      'index.html 增加主题内联脚本，在应用脚本加载前应用深色主题，消除暗色模式首屏闪白；移除 useChart 中未使用的 BarChart / RadarChart 注册',
      '量表详情页「版权/许可」统一改称「授权状态」，与 README 的「量表授权说明」章节对齐；主页文案改为「收录 N 个心理自测量表」',
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
