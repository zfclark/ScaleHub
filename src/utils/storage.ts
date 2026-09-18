/**
 * localStorage 的安全封装。
 *
 * 直接调用 localStorage 在以下情形会抛异常：Safari 无痕模式、浏览器禁用站点数据、
 * 或配额已满（QuotaExceededError）。这些异常会中断调用方的流程
 * （例如答题过程中保存进度时抛错），因此统一降级：
 * 读失败返回 null，写失败返回 false，调用方无需 try/catch。
 */

export function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function safeSetItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

export function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    // 存储不可用时无需处理：本来就没有可清理的数据
  }
}
