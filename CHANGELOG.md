# 更新日志（Changelog）

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 的格式记录更新内容，版本号采用语义化版本（[SemVer](https://semver.org/lang/zh-CN/)）。应用内「关于」页会同步展示此更新日志。

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

[1.0.0]: https://github.com/linhai/scalehub/releases/tag/v1.0.0
