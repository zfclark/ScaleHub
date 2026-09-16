# ScaleHub · 心理自测量表集合

> 用几分钟，更了解自己。

ScaleHub 是一个纯前端的**心理自测量表集合与自我了解工具**：在线答题、自动计分、即时解读、历史趋势追踪。所有数据只保存在本地浏览器，不上传任何服务器。

## ✨ 特性

- **配置驱动**：量表以配置数据描述，评分由通用引擎完成，支持总分、维度分、反向计分、加权、总分倍率（如 SAS 标准分）与风险题触发规则
- **数据完全本地**：答题与历史仅存储于浏览器 localStorage，无账号、无上传、无追踪，支持导出 JSON / CSV
- **即答即得分**：一次一题、进度条、断点续答；结果页展示等级、维度分、解释与建议
- **搜索与筛选**：量表列表支持关键词搜索（名称 / 简介 / 标签），可与标签筛选组合
- **趋势可追踪**：历史时间线 + 复测趋势图，多维度量表（如 DASS-21）可切换总分 / 维度分视图
- **信息透明**：每个量表标注题数、预计时长与适用人群
- **浅色 / 深色主题**，移动端优先的响应式布局

## 🧭 内置量表

| 量表                    | 题数 | 用途                                 |
| ----------------------- | ---- | ------------------------------------ |
| GAD-7                   | 7    | 广泛性焦虑筛查                       |
| PHQ-9                   | 9    | 抑郁筛查（含风险临界项）             |
| GAD-2                   | 2    | 超快速焦虑初筛                       |
| PHQ-2                   | 2    | 超快速抑郁初筛                       |
| PSS-10                  | 10   | 压力知觉（4 题反向计分）             |
| DASS-21                 | 21   | 抑郁 / 焦虑 / 压力三维度评估         |
| AIS 雅典失眠量表        | 8    | 失眠筛查                             |
| ISI 失眠严重程度指数    | 7    | 失眠严重程度                         |
| Rosenberg 自尊量表      | 10   | 整体自尊（5 题反向计分）             |
| GSES 一般自我效能感量表 | 10   | 一般自我效能感                       |
| SWLS 生活满意度量表     | 5    | 整体生活满意度                       |
| SAS 焦虑自评量表        | 20   | 焦虑自评（标准分计分，5 题反向计分） |

## 🚀 快速开始

环境要求：Node.js ≥ 20.19（推荐 22 LTS）。

```bash
npm install        # 安装依赖
npm run dev        # 本地开发
npm run typecheck  # 类型检查
npm run build      # 生产构建（输出至 dist/）
npm run preview    # 本地预览构建产物
```

## 🏗️ 技术栈

- Vue 3（Composition API）+ Vite + TypeScript
- Vue Router（Hash 模式）+ Pinia
- Tailwind CSS
- ECharts（按需引入，独立分包按需加载）
- 数据存储：localStorage
- 部署：GitHub Pages（Actions）/ Cloudflare Workers 静态资产

## 📁 项目结构

```
src/
├── types/scale.ts        # 量表配置类型定义
├── engine/scoring.ts     # 通用评分引擎（配置驱动）
├── data/scales/          # 量表配置（每量表一个文件，在 index.ts 注册）
├── stores/               # Pinia：answers / history / theme
├── composables/          # useChart 等组合式函数
├── components/           # 通用组件（量表卡片、选项组、免责声明等）
├── router/               # 路由（Hash 模式）
└── views/                # 页面视图
```

### 新增量表

1. 在 `src/data/scales/` 下新建配置文件，遵循 `ScaleConfig` 结构（题目、选项分值、bands、criticalItems、license 等）
2. 在 `src/data/scales/index.ts` 中注册

评分、结果解读、历史与趋势图将自动支持，无需改动评分引擎。

## 📦 部署

支持两种部署目标，资源路径差异由构建命令自动处理，无需手动修改配置：

| 部署目标     | 构建命令           | 资源路径     |
| ------------ | ------------------ | ------------ |
| GitHub Pages | `npm run build`    | `/scalehub/` |
| Cloudflare   | `npm run build:cf` | `/`          |

### 方式一：GitHub Pages（GitHub Actions 自动部署）

项目已内置 `.github/workflows/deploy.yml`，推送 `main` 分支即可自动部署：

1. 在 GitHub 创建仓库（仓库名 `scalehub`）
2. 推送代码：

    ```bash
    git remote add origin https://github.com/<你的用户名>/scalehub.git
    git push -u origin main
    ```

3. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
4. 之后每次推送到 `main` 分支自动构建部署，访问地址为 `https://<用户名>.github.io/scalehub/`

### 方式二：Cloudflare（Workers 静态资产）

以 Workers 静态资产方式部署。`wrangler.toml` 已配置静态资产目录（`dist`），项目使用 Hash 路由，无需任何重写规则。

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → 选择 **Workers** → **Connect to Git**，选择本仓库
2. 构建设置：
    - Build command：`npm run build:cf`
    - Deploy command：`npx wrangler deploy`
3. 保存并部署，之后每次推送到 `main` 分支自动重新部署
4. 访问地址为 `https://scalehub.<你的子域>.workers.dev`

## 📝 版本与更新日志

当前版本：**V1.1.0**。完整更新日志见 [CHANGELOG.md](CHANGELOG.md)，应用内「关于」页同步展示。

## ⚠️ 免责声明

ScaleHub 中的所有量表结果**仅供个人自我了解参考，不构成医学诊断、处方或治疗建议**。若结果提示中重度困扰，或您的状态持续影响生活，请及时寻求精神科医生或心理咨询师的专业帮助。如遇紧急情况，请拨打 **120** 或访问应用内「心理援助」页。

## 📄 许可

本项目代码基于 [MIT License](LICENSE) 发布。项目收录的量表均为国际通用的公开量表，可免费使用。
