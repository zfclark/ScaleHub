# ScaleHub · 心理自测量表集合

> 用几分钟，更了解自己。

ScaleHub 是一个纯前端的**心理自测量表集合与自我了解工具**。在线答题、自动计分、即时解读、历史趋势追踪——所有数据只保存在用户本地浏览器，不上传任何服务器。

**当前版本：V1.0.0** · 更新日志见下方或应用内「关于」页。

## ✨ 特性

- **量表配置化**：量表以配置数据描述，评分逻辑由通用引擎驱动，支持总分、维度分、反向计分、加权、临界值与特殊触发规则
- **数据完全本地**：答题记录与历史仅存储于浏览器 localStorage，无账号、无上传、无追踪，支持导出 JSON / CSV
- **即答即得分**：一次一题、进度条、断点续答；结果页展示等级、维度分、解释与建议
- **搜索与筛选**：量表列表支持关键词搜索（名称 / 简介 / 标签）与标签筛选组合使用
- **趋势可追踪**：历史时间线 + 复测趋势图（支持多维度量表如 DASS-21）
- **信息透明**：每个量表标注题数、预计时长与适用人群
- **浅色 / 深色主题**切换

## 🧭 内容量表（V1.0.0）

| 量表 | 题数 | 用途 |
|---|---|---|
| GAD-7 | 7 | 广泛性焦虑筛查 |
| PHQ-9 | 9 | 抑郁筛查（含风险临界项） |
| GAD-2 | 2 | 超快速焦虑初筛 |
| PHQ-2 | 2 | 超快速抑郁初筛 |
| PSS-10 | 10 | 压力知觉（4 题反向计分） |
| DASS-21 | 21 | 抑郁/焦虑/压力三维度评估 |
| AIS 雅典失眠量表 | 8 | 失眠筛查 |
| ISI 失眠严重程度指数 | 7 | 失眠严重程度 |
| Rosenberg 自尊量表 | 10 | 整体自尊（5 题反向计分） |
| GSES 一般自我效能感量表 | 10 | 一般自我效能感 |
| SWLS 生活满意度量表 | 5 | 整体生活满意度 |
| SAS 焦虑自评量表 | 20 | 焦虑自评（标准分计分，5 题反向计分） |

后续计划扩展：HADS、PSQI、BAI、SAS、SDS、SCL-90 等。

## 🚀 快速开始

```bash
npm install
npm run dev        # 本地开发
npm run typecheck  # 类型检查
npm run build      # 构建产物输出至 dist/
```

## 🏗️ 技术栈

- Vue 3（Composition API）+ Vite + TypeScript
- Vue Router（Hash 模式）+ Pinia
- Tailwind CSS
- ECharts（按需引入）
- 数据存储：localStorage
- 部署：GitHub Pages + GitHub Actions

## 📁 目录结构

```
src/
├── types/scale.ts        # 量表配置类型定义
├── engine/scoring.ts     # 通用评分引擎（配置驱动）
├── data/scales/          # 量表配置（每量表一个文件，在 index.ts 注册）
├── stores/               # Pinia：answers / history / theme
├── composables/useChart.ts
├── components/           # 通用组件
└── views/                # 页面视图
```

### 新增量表

1. 在 `src/data/scales/` 下新建配置文件，遵循 `ScaleConfig` 结构（题目、选项分值、bands、criticalItems、license 等）
2. 在 `src/data/scales/index.ts` 中注册

评分、结果解读、历史与趋势图将自动支持，无需改动评分引擎。

## 📦 部署（GitHub Pages）

项目已内置 `.github/workflows/deploy.yml`，推送到 `main` 分支即可自动部署。

1. 在 GitHub 创建仓库（仓库名 `scalehub`）
2. 推送代码：

```bash
git remote add origin https://github.com/<你的用户名>/scalehub.git
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
4. 构建使用 `base: '/scalehub/'`，访问地址为 `https://<用户名>.github.io/scalehub/`

## 📝 版本与更新日志

### V1.0.0 · 2026-09-14

- 上线首批 12 个心理自测量表：GAD-7、PHQ-9、GAD-2、PHQ-2、PSS-10、DASS-21、AIS、ISI、Rosenberg 自尊量表、GSES、SWLS、SAS 焦虑自评量表
- 通用评分引擎：支持总分、维度分（DASS-21 三维度）、反向计分（PSS-10 / RSES）、加权、临界值与特殊触发规则
- 测试页一次一题、进度条展示、答案自动保存与断点续答
- 结果页等级判定、维度图、解释与建议，命中风险题时展示心理援助信息
- 历史记录：时间线、复测趋势图、JSON/CSV 导出、单条删除
- 全部数据仅存储于本地浏览器（localStorage），不上传服务器
- 支持浅色 / 深色主题切换
- 量表列表支持关键词搜索（名称、简介、标签），可与标签筛选组合使用
- 每个量表详情页标注题数、预计时长与适用人群

## ⚠️ 免责声明

ScaleHub 中的所有量表结果**仅供个人自我了解参考，不构成医学诊断、处方或治疗建议**。若结果提示中重度困扰，或您的状态持续影响生活，请及时寻求精神科医生或心理咨询师的专业帮助。如遇紧急情况，请拨打 **120** 或访问应用内「心理援助」页。

## 📄 许可

本项目代码基于 [MIT License](LICENSE) 发布。各量表的版权与许可状态详见应用内量表详情页的「来源 / 引用」说明。
