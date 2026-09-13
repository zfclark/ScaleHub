import { defineStore } from 'pinia'
import type { ScoreResult, TestRecord } from '@/types/scale'

const HISTORY_KEY = 'scalehub:history'
const MAX_RECORDS = 500

/**
 * 已完成测试的历史记录，持久化于 localStorage。
 */
export const useHistoryStore = defineStore('history', {
  state: () => ({
    records: [] as TestRecord[],
  }),
  getters: {
    sortedRecords: (state) =>
      [...state.records].sort((a, b) => b.completedAt.localeCompare(a.completedAt)),
    scalesWithRecords(state): { scaleId: string; title: string; count: number }[] {
      const map = new Map<string, { scaleId: string; title: string; count: number }>()
      for (const r of state.records) {
        const existing = map.get(r.scaleId)
        if (existing) existing.count++
        else map.set(r.scaleId, { scaleId: r.scaleId, title: r.scaleTitle, count: 1 })
      }
      return [...map.values()]
    },
  },
  actions: {
    init() {
      try {
        const raw = localStorage.getItem(HISTORY_KEY)
        if (raw) this.records = JSON.parse(raw) as TestRecord[]
      } catch {
        this.records = []
      }
    },
    persist() {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(this.records))
    },
    addRecord(scaleId: string, scaleTitle: string, answers: Record<string, number>, result: ScoreResult): TestRecord {
      const record: TestRecord = {
        id: `r-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        scaleId,
        scaleTitle,
        completedAt: new Date().toISOString(),
        answers,
        result,
      }
      this.records.push(record)
      if (this.records.length > MAX_RECORDS) {
        this.records.sort((a, b) => b.completedAt.localeCompare(a.completedAt))
        this.records = this.records.slice(0, MAX_RECORDS)
      }
      this.persist()
      return record
    },
    deleteRecord(id: string) {
      this.records = this.records.filter((r) => r.id !== id)
      this.persist()
    },
    exportJson(): string {
      return JSON.stringify(this.sortedRecords, null, 2)
    },
    exportCsv(): string {
      const header = [
        'record_id',
        'completed_at',
        'scale_id',
        'scale_title',
        'total',
        'max',
        'band_label',
        'dimensions',
      ]
      const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`
      const rows = this.sortedRecords.map((r) =>
        [
          r.id,
          r.completedAt,
          r.scaleId,
          r.scaleTitle,
          r.result.total,
          r.result.max,
          r.result.band?.label ?? '',
          r.result.dimensions.map((d) => `${d.title}:${d.score}`).join(' | '),
        ]
          .map(esc)
          .join(','),
      )
      // \ufeff BOM 保证 Excel 正确识别 UTF-8 中文
      return '\ufeff' + [header.map(esc).join(','), ...rows].join('\n')
    },
  },
})
