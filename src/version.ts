/** 应用版本信息：与 package.json 及 README 保持一致 */
export const APP_VERSION = '1.0.0'
/** 展示用版本号（V + 语义化版本） */
export const APP_VERSION_NAME = 'V1.0.0'
export const APP_NAME = 'ScaleHub'
export const APP_SUBTITLE = '心理自测量表集合'
export const APP_SLOGAN = '用几分钟，更了解自己。'

export interface ChangelogEntry {
  version: string
  name: string
  date: string
  items: string[]
}

/** 更新日志：发版时在此追加新条目（最新在前） */
export const CHANGELOG: ChangelogEntry[] = [
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
      '支持 GitHub Pages 与 Cloudflare Pages 双平台部署，构建时自动识别平台切换资源路径',
      '每个量表详情页标注题数、预计时长与适用人群',
    ],
  },
]
