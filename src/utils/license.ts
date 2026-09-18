/**
 * 量表授权状态的中文标签。
 *
 * 分类与 README「量表授权说明」章节保持一致，
 * 避免在各视图里各写一份映射（原先 ScaleCard 与 ScaleDetailView 各有一份副本，改一处会漏另一处）。
 */
const LICENSE_LABELS: Record<string, string> = {
  'public-domain': '公开可用',
  'free-with-citation': '免费使用',
  'permission-required': '需获得授权',
}

/** 取授权状态的中文标签；遇到未知状态时原样回退，便于发现配置里的新取值 */
export function licenseLabel(status: string): string {
  return LICENSE_LABELS[status] ?? status
}
