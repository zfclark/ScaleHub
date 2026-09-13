<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHistoryStore } from '@/stores/history'
import { getScaleById } from '@/data/scales'
import CrisisBanner from '@/components/CrisisBanner.vue'
import DisclaimerBlock from '@/components/DisclaimerBlock.vue'

const route = useRoute()
const historyStore = useHistoryStore()

const record = computed(() =>
  historyStore.records.find((r) => r.id === route.params.recordId as string),
)

const scale = computed(() => (record.value ? getScaleById(record.value.scaleId) : null))

const result = computed(() => record.value?.result)

const bandColor = computed(() => {
  if (!result.value?.band) return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
  const total = result.value.total
  const max = result.value.max
  const ratio = total / max
  if (ratio < 0.25) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
  if (ratio < 0.5) return 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
  if (ratio < 0.75) return 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300'
  return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
})

const completedAtLabel = computed(() =>
  record.value
    ? new Date(record.value.completedAt).toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '',
)
</script>

<template>
  <div v-if="record && result" class="space-y-8">
    <div>
      <router-link
        to="/history"
        class="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← 返回历史记录
      </router-link>
      <h1 class="mt-3 text-2xl font-bold">{{ result.scaleTitle }} · 测试结果</h1>
      <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
        完成时间：{{ completedAtLabel }} · 已答 {{ result.answeredCount }}/{{ result.totalCount }} 题
      </p>
    </div>

    <!-- 风险提示 -->
    <CrisisBanner
      v-for="(flag, i) in result.criticalFlags"
      :key="i"
      :message="flag.message ?? ''"
      :question-text="flag.questionText"
    />

    <!-- 总分与等级 -->
    <section class="card p-6 text-center">
      <p class="text-xs text-slate-500 dark:text-slate-400">
        {{ result.dimensions.length > 0 ? '总分（仅参考，解读以维度分为准）' : '总分' }}
      </p>
      <p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        {{ result.total }}
        <span class="text-base font-normal text-slate-400">/ {{ result.max }}</span>
      </p>
      <span v-if="result.band" class="badge mt-4 px-4 py-1.5 text-sm" :class="bandColor">
        {{ result.band.label }}
      </span>
    </section>

    <!-- 维度分 -->
    <section v-if="result.dimensions.length > 0" class="card space-y-4 p-5">
      <h2 class="text-sm font-semibold">维度得分</h2>
      <div v-for="dim in result.dimensions" :key="dim.id">
        <div class="mb-1.5 flex items-center justify-between text-sm">
          <span class="font-medium">{{ dim.title }}</span>
          <span class="text-slate-500 dark:text-slate-400">
            {{ dim.score }} / {{ dim.max }}
            <span v-if="dim.band" class="ml-2 badge bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
              {{ dim.band.label }}
            </span>
          </span>
        </div>
        <div class="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            class="h-full rounded-full bg-indigo-600 transition-all duration-500 dark:bg-indigo-500"
            :style="{ width: `${Math.min(100, (dim.score / dim.max) * 100)}%` }"
          />
        </div>
        <p v-if="dim.band?.description" class="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          {{ dim.band.description }}
        </p>
        <p v-if="dim.band?.advice" class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          建议：{{ dim.band.advice }}
        </p>
      </div>
    </section>

    <!-- 解释与建议 -->
    <section v-if="result.band" class="card space-y-3 p-5">
      <div>
        <h2 class="text-sm font-semibold">结果解释</h2>
        <p class="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {{ result.band.description ?? '您的得分处于该等级范围内。' }}
        </p>
      </div>
      <div v-if="result.band.advice">
        <h2 class="text-sm font-semibold">建议</h2>
        <p class="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {{ result.band.advice }}
        </p>
      </div>
    </section>

    <!-- 复测建议 -->
    <section class="card p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      <h2 class="mb-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">复测建议</h2>
      <p>
        建议每 1-2 周在同一条件下复测一次（相同时间、相似状态），并前往
        <router-link to="/history" class="text-indigo-600 hover:underline dark:text-indigo-400">历史记录页</router-link>
        查看趋势变化。单次结果受近期事件影响较大，趋势比单次得分更有参考价值。
      </p>
    </section>

    <DisclaimerBlock />

    <div class="flex flex-wrap gap-3">
      <router-link v-if="scale" :to="`/scales/${scale.id}/test`" class="btn-primary">再测一次</router-link>
      <router-link to="/history" class="btn-secondary">查看历史记录</router-link>
      <router-link to="/crisis" class="btn-secondary">心理援助</router-link>
    </div>
  </div>

  <div v-else class="py-20 text-center">
    <p class="text-slate-500 dark:text-slate-400">未找到该测试记录</p>
    <router-link to="/scales" class="btn-primary mt-4">去开始测试</router-link>
  </div>
</template>
