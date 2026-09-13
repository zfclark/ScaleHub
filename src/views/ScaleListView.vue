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

const filtered = computed(() =>
  activeTag.value === '全部'
    ? scales
    : scales.filter((s) => (s.meta.tags ?? []).includes(activeTag.value)),
)
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold">量表列表</h1>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        共 {{ scales.length }} 个量表，按标签筛选，点击卡片查看详情
      </p>
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

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ScaleCard v-for="scale in filtered" :key="scale.id" :scale="scale" />
    </div>
  </div>
</template>
