import { defineStore } from 'pinia'
import type { TestProgress } from '@/types/scale'
import { safeGetItem, safeRemoveItem, safeSetItem } from '@/utils/storage'

const KEY_PREFIX = 'scalehub:progress:'

/**
 * 进行中答题的自动保存：每个量表独立存档，
 * 中途退出后再次进入可提示继续。
 */
export const useAnswersStore = defineStore('answers', {
  state: () => ({
    current: null as TestProgress | null,
  }),
  actions: {
    load(scaleId: string): TestProgress | null {
      const raw = safeGetItem(KEY_PREFIX + scaleId)
      if (!raw) return null
      try {
        const data = JSON.parse(raw) as TestProgress
        if (data.scaleId !== scaleId) return null
        return data
      } catch {
        return null
      }
    },
    save(progress: TestProgress) {
      this.current = progress
      safeSetItem(KEY_PREFIX + progress.scaleId, JSON.stringify(progress))
    },
    clear(scaleId: string) {
      this.current = null
      safeRemoveItem(KEY_PREFIX + scaleId)
    },
  },
})
