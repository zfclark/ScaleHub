<script setup lang="ts">
import { computed, ref } from 'vue'
import { scales } from '@/data/scales'
import ScaleCard from '@/components/ScaleCard.vue'

const allTags = computed(() => {
  const set = new Set<string>()
  for (const s of scales) for (const t of s.meta.tags ?? []) set.add(t)
  return ['全部', ...set]
})

const activeTag = ref('全部')
const keyword = ref('')

const filtered = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return scales.filter((s) => {
    const tagOk =
      activeTag.value === '全部' || (s.meta.tags ?? []).includes(activeTag.value)
    if (!tagOk) return false
    if (!kw) return true
    const haystack = [s.title, s.shortTitle ?? '', s.description, ...(s.meta.tags ?? [])]
      .join(' ')
      .toLowerCase()
    return haystack.includes(kw)
  })
})

function clearKeyword() {
  keyword.value = ''
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold">量表列表</h1>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        共 {{ scales.length }} 个量表，支持关键词搜索与标签筛选
      </p>
    </div>

    <!-- 搜索框 -->
    <div class="relative">
      <svg
        class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        v-model="keyword"
        type="search"
        placeholder="搜索量表名称、简介或标签，如：焦虑、睡眠、自尊…"
        class="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
      <button
        v-if="keyword"
        class="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        aria-label="清空搜索"
        @click="clearKeyword"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="rounded-full px-3.5 py-1.5 text-xs font-medium transition"
        :class="
          activeTag === tag
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
        "
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <p class="text-xs text-slate-400 dark:text-slate-500">
      {{ filtered.length ? `匹配 ${filtered.length} 个量表` : '' }}
    </p>

    <div v-if="filtered.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ScaleCard v-for="scale in filtered" :key="scale.id" :scale="scale" />
    </div>
    <div v-else class="card p-12 text-center">
      <p class="text-4xl">🔍</p>
      <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">
        没有找到与「{{ keyword.trim() }}」匹配的量表
      </p>
      <button class="btn-secondary mt-4" @click="clearKeyword">清空搜索条件</button>
    </div>
  </div>
</template>
