# 更新日志（Changelog）

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 的格式记录更新内容，版本号采用语义化版本（[SemVer](https://semver.org/lang/zh-CN/)）。应用内「关于」页会同步展示此更新日志。

## [1.2.0] · 2026-09-19

### 新增

- 新增 15 个心理量表，量表总数由 12 个增至 **27 个**：SCL-90 症状清单、GHQ-12 一般健康问卷、SDS 抑郁自评量表、BDI-II 贝克抑郁量表、BAI 贝克焦虑量表、MMPI（参考简版）、IPIP-NEO-120 大五人格量表、BFI 大五人格量表、EPQ-RSC 艾森克人格问卷、PSQI 匹兹堡睡眠质量指数、AUDIT 酒精使用障碍筛查量表、DAST-20 药物依赖严重程度量表、SDQ 长处与困难问卷、CDI 儿童抑郁量表、SCARED 儿童焦虑性情绪障碍筛查表
- 多维度量表：SCL-90 九因子、MMPI 三效度 + 十临床量表、IPIP-NEO-120 与 BFI 五因素、EPQ-RSC 四维度、SCARED 五维度、SDQ 困难总分与亲社会行为分离计分
- README 新增「量表授权说明」章节，按 `public-domain` / `free-with-citation` / `permission-required` 三类标注各量表的授权状态与使用限制

### 修复

- 修正反向计分在 1 基李克特量表上的系统性偏差。原实现按「选项最大值 − 原始分」折算，使得选项为 1-4 分的量表（如 SAS）反向题实际落在 0-3 区间，每题比标准计分少 1 分——SAS 含 5 个反向条目，原始分因此偏低 5 分、标准分偏低 6.25 分，足以影响 50 分临界值的判读。现改为「选项最小值 + 选项最大值 − 原始分」，0-3、1-4、1-5 等各类分制均可正确翻转
- 修正 DASS-21 的 `scoring.max`：由 `126` 改为 `63`。总分为 21 题原始分之和，不含各维度的 ×2 折算，原值使结果页显示「总分 x / 126」而实际最高只有 63 分
- 修正 GitHub Pages 部署的资源路径大小写：`vite.config.ts` 的 `base` 由 `/scalehub/` 改为 `/ScaleHub/`。GitHub 仓库名为 `zfclark/ScaleHub` 且区分大小写，全小写路径使构建产物资源请求 404，页面打开后为空白

### 变更

- 评分引擎新增 `scoring.totalExcludes`：支持将特定题目排除在总分之外，同时仍参与其所属维度分的计算（用于 SDQ 亲社会行为维度）
- 升级 GitHub Actions 以适配 Node 20 目标运行时弃用：`checkout@v5`、`setup-node@v5`（`node-version` 20 → 22）、`configure-pages@v6`、`upload-pages-artifact@v5`、`deploy-pages@v5`
- 版本号提升至 **V1.2.0**

### 文档

- README 内置量表清单重构为按类别分组的表格；补充新增量表的配置字段说明（`reverse` / `multiplier` / `totalExcludes` / `dimensions[].bands`）与分值区间校验提醒
- 关于页文案更新：说明部分量表受版权保护，仅供非商业的自我了解参考

## [1.1.0] · 2026-09-17

### 调整

- Cloudflare 部署方式调整为 **Workers 静态资产**通用方案：`wrangler.toml` 声明静态资产目录（`dist`），部署命令统一为 `npx wrangler deploy`，不再依赖 Pages 专用配置
- 新增 `npm run build:cf` 构建模式：Cloudflare（根路径 `/`）与 GitHub Pages（子路径 `/scalehub/`）的资源路径按构建命令自动切换
- 移除本地手动部署方式（`deploy:cf` 脚本），Cloudflare 统一通过 Git 连接自动部署

### 修复

- 移除 tsconfig 中已废弃的 `baseUrl`，路径别名改为相对 tsconfig 解析，消除编辑器弃用警告

### 文档

- README 全面重写：新增部署命令对照表、Node.js 版本要求与项目结构说明

## [1.0.0] · 2026-09-14

ScaleHub 首个正式版本。

### 新增

- 首批 12 个心理自测量表：GAD-7、PHQ-9、GAD-2、PHQ-2、PSS-10、DASS-21、AIS 雅典失眠量表、ISI 失眠严重程度指数、Rosenberg 自尊量表、GSES 一般自我效能感量表、SWLS 生活满意度量表、SAS 焦虑自评量表
- 通用评分引擎：支持总分、维度分（DASS-21 三维度）、反向计分（PSS-10 / RSES / SAS）、加权、总分倍率折算（SAS 标准分）、临界值与特殊触发规则
- 测试页：一次一题、进度条、答案自动保存与断点续答；移动端底部固定操作栏
- 结果页：总分 / 维度分、等级判定、解释与建议、复测建议；命中风险题时展示心理援助信息
- 历史记录：时间线分组、复测趋势图（ECharts，支持多维度量表切换总分 / 维度分视图）、JSON / CSV 导出、单条删除
- 量表列表：关键词搜索（名称、简介、标签）与标签筛选组合使用
- 信息页：关于（含更新日志）、隐私说明、心理援助资源

### 特性

- 数据完全本地：所有答题与历史数据仅存储于浏览器 localStorage，不上传服务器
- 界面支持浅色 / 深色主题切换
- 移动端优先的响应式布局
- 双平台部署：GitHub Pages（GitHub Actions）与 Cloudflare Pages，构建时自动识别平台切换资源路径

[1.2.0]: https://github.com/zfclark/ScaleHub/releases/tag/v1.2.0
[1.1.0]: https://github.com/zfclark/ScaleHub/releases/tag/v1.1.0
[1.0.0]: https://github.com/zfclark/ScaleHub/releases/tag/v1.0.0
