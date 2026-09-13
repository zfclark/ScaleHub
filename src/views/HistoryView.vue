<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHistoryStore } from '@/stores/history'
import TrendChart from '@/components/TrendChart.vue'
import DisclaimerBlock from '@/components/DisclaimerBlock.vue'

const historyStore = useHistoryStore()

const selectedScaleId = ref<string>('')

const grouped = computed(() => {
  const groups = new Map<string, typeof historyStore.sortedRecords>()
  for (const r of historyStore.sortedRecords) {
    const date = r.completedAt.slice(0, 10)
    if (!groups.has(date)) groups.set(date, [])
    groups.get(date)!.push(r)
  }
  return [...groups.entries()]
})

const trendRecords = computed(() => {
  const scaleId = selectedScaleId.value
  return scaleId
    ? historyStore.sortedRecords.filter((r) => r.scaleId === scaleId)
    : []
})

function formatDate(date: string): string {
  const d = new Date(date + 'T00:00:00')
  return d.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

function bandColorClass(scaleId: string, total: number): string {
  const records = historyStore.sortedRecords.filter((r) => r.scaleId === scaleId)
  const max = records[0]?.result.max ?? 1
  const ratio = total / max
  if (ratio < 0.25) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
  if (ratio < 0.5) return 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
  if (ratio < 0.75) return 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300'
  return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
}

function download(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function exportJson() {
  download(
    historyStore.exportJson(),
    `scalehub-history-${new Date().toISOString().slice(0, 10)}.json`,
    'application/json',
  )
}

function exportCsv() {
  download(
    historyStore.exportCsv(),
    `scalehub-history-${new Date().toISOString().slice(0, 10)}.csv`,
    'text/csv;charset=utf-8',
  )
}

const confirmDeleteId = ref<string | null>(null)

function requestDelete(id: string) {
  confirmDeleteId.value = id
}

function confirmDelete() {
  if (confirmDeleteId.value) {
    historyStore.deleteRecord(confirmDeleteId.value)
    confirmDeleteId.value = null
  }
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 class="text-2xl font-bold">历史记录</h1>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          共 {{ historyStore.records.length }} 条记录 · 全部数据仅保存在本地浏览器
        </p>
      </div>
      <div v-if="historyStore.records.length" class="flex gap-2">
        <button class="btn-secondary !px-3.5 !py-2 text-xs" @click="exportCsv">导出 CSV</button>
        <button class="btn-secondary !px-3.5 !py-2 text-xs" @click="exportJson">导出 JSON</button>
      </div>
    </div>

    <div v-if="historyStore.records.length === 0" class="card p-12 text-center">
      <p class="text-4xl">🌱</p>
      <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">还没有测试记录</p>
      <router-link to="/scales" class="btn-primary mt-4">开始第一次测试</router-link>
    </div>

    <template v-else>
      <!-- 趋势图 -->
      <section class="card p-5">
        <div class="mb-4">
          <label class="mb-1.5 block text-xs text-slate-500 dark:text-slate-400">选择量表查看趋势</label>
          <select
            v-model="selectedScaleId"
            class="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base dark:border-slate-700 dark:bg-slate-900 sm:w-72 sm:text-sm"
          >
            <option value="" disabled>请选择量表（需至少 2 次记录）</option>
            <option
              v-for="s in historyStore.scalesWithRecords.filter((s) => s.count >= 2)"
              :key="s.scaleId"
              :value="s.scaleId"
            >
              {{ s.title }}（{{ s.count }} 次）
            </option>
          </select>
        </div>
        <TrendChart v-if="selectedScaleId" :records="trendRecords" :key="selectedScaleId" />
        <p v-else class="py-6 text-center text-sm text-slate-400">
          选择一个复测过的量表，即可查看分数随时间的变化趋势
        </p>
      </section>

      <!-- 时间线 -->
      <section class="space-y-6">
        <div v-for="[date, records] in grouped" :key="date">
          <h2 class="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {{ formatDate(date) }}
          </h2>
          <div class="space-y-2.5">
            <div
              v-for="r in records"
              :key="r.id"
              class="card flex items-center justify-between gap-3 p-4"
            >
              <router-link
                :to="`/results/${r.id}`"
                class="min-w-0 flex-1 transition hover:opacity-80"
              >
                <div class="flex flex-wrap items-center gap-2">
                  <span class="truncate text-sm font-medium">{{ r.scaleTitle }}</span>
                  <span class="badge" :class="bandColorClass(r.scaleId, r.result.total)">
                    {{ r.result.band?.label ?? '已完成' }}
                  </span>
                </div>
                <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {{ formatTime(r.completedAt) }} · 总分 {{ r.result.total }}/{{ r.result.max }}
                  <template v-if="r.result.dimensions.length">
                    ·
                    {{
                      r.result.dimensions
                        .map((d) => `${d.title} ${d.score}`)
                        .join(' · ')
                    }}
                  </template>
                </p>
              </router-link>
              <button
                class="flex-shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                title="删除该记录"
                @click="requestDelete(r.id)"
              >
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- 删除确认 -->
    <div
      v-if="confirmDeleteId"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      @click.self="confirmDeleteId = null"
    >
      <div class="card w-full max-w-sm p-6">
        <h3 class="text-base font-semibold">删除这条记录？</h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          删除后无法恢复（不影响已导出的文件）。
        </p>
        <div class="mt-5 flex justify-end gap-2">
          <button class="btn-secondary !py-2" @click="confirmDeleteId = null">取消</button>
          <button
            class="rounded-xl bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-500"
            @click="confirmDelete"
          >
            确认删除
          </button>
        </div>
      </div>
    </div>

    <DisclaimerBlock />
  </div>
</template>
