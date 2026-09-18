<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TestRecord } from '@/types/scale'
import { useChart } from '@/composables/useChart'
import { useThemeStore } from '@/stores/theme'

const props = defineProps<{
  records: TestRecord[]
}>()

const theme = useThemeStore()
const chartEl = ref<HTMLElement | null>(null)

const sorted = computed(() =>
  [...props.records].sort((a, b) => a.completedAt.localeCompare(b.completedAt)),
)

const hasDimensions = computed(
  () => sorted.value.length > 0 && sorted.value[0].result.dimensions.length > 0,
)

const mode = ref<'total' | 'dimensions'>('total')

watch(
  () => props.records.length,
  () => {
    mode.value = 'total'
  },
)

function getOption() {
  const xData = sorted.value.map((r) => {
    const d = new Date(r.completedAt)
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
  })
  const textColor = theme.isDark ? '#94a3b8' : '#64748b'
  const splitLineColor = theme.isDark ? '#1e293b' : '#e2e8f0'
  const axisLine = { lineStyle: { color: splitLineColor } }

  if (mode.value === 'total' || !hasDimensions.value) {
    return {
      tooltip: { trigger: 'axis' },
      grid: { left: 40, right: 16, top: 16, bottom: 28 },
      xAxis: { type: 'category', data: xData, axisLabel: { color: textColor }, axisLine },
      yAxis: {
        type: 'value',
        max: sorted.value[0]?.result.max,
        axisLabel: { color: textColor },
        splitLine: { lineStyle: { color: splitLineColor } },
      },
      series: [
        {
          name: '总分',
          type: 'line',
          smooth: true,
          symbolSize: 7,
          data: sorted.value.map((r) => r.result.total),
          lineStyle: { color: '#6366f1', width: 2.5 },
          itemStyle: { color: '#6366f1' },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(99,102,241,0.25)' },
                { offset: 1, color: 'rgba(99,102,241,0.02)' },
              ],
            },
          },
        },
      ],
    }
  }

  const dims = sorted.value[0].result.dimensions
  // 维度数最多可达 13（MMPI 三效度 + 十临床量表）、9（SCL-90 九因子），
  // 调色板需足够长，否则颜色循环重复会导致不同维度看起来是同一条线
  const palette = [
    '#6366f1',
    '#14b8a6',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#06b6d4',
    '#84cc16',
    '#ec4899',
    '#f97316',
    '#0ea5e9',
    '#a855f7',
    '#10b981',
    '#eab308',
    '#64748b',
  ]
  return {
    tooltip: { trigger: 'axis' },
    legend: { textStyle: { color: textColor }, top: 0 },
    grid: { left: 40, right: 16, top: 32, bottom: 28 },
    xAxis: { type: 'category', data: xData, axisLabel: { color: textColor }, axisLine },
    yAxis: {
      type: 'value',
      max: Math.max(...dims.map((d) => d.max)),
      axisLabel: { color: textColor },
      splitLine: { lineStyle: { color: splitLineColor } },
    },
    series: dims.map((dim, i) => ({
      name: dim.title,
      type: 'line',
      smooth: true,
      symbolSize: 7,
      data: sorted.value.map((r) => r.result.dimensions[i]?.score ?? null),
      lineStyle: { color: palette[i % palette.length], width: 2.5 },
      itemStyle: { color: palette[i % palette.length] },
    })),
  }
}

useChart(chartEl, getOption, [() => props.records.length, () => mode.value, () => theme.isDark])
</script>

<template>
  <div v-if="records.length >= 2">
    <div class="mb-3 flex items-center justify-between">
      <h3 class="text-sm font-semibold">复测趋势</h3>
      <div v-if="hasDimensions" class="flex gap-1 text-xs">
        <button
          class="rounded-lg px-2.5 py-1 transition"
          :class="
            mode === 'total'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          "
          @click="mode = 'total'"
        >
          总分
        </button>
        <button
          class="rounded-lg px-2.5 py-1 transition"
          :class="
            mode === 'dimensions'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          "
          @click="mode = 'dimensions'"
        >
          维度分
        </button>
      </div>
    </div>
    <p v-if="mode === 'dimensions'" class="mb-2 text-xs text-slate-400">
      已按维度拆分为多条折线，可对比各维度随时间的变化
    </p>
    <div ref="chartEl" class="h-64 w-full" />
  </div>
</template>
