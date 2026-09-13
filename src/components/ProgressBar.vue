<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const percent = computed(() =>
  props.total > 0 ? Math.round(((props.current + 1) / props.total) * 100) : 0,
)
</script>

<template>
  <div>
    <div class="mb-1.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span>第 {{ current + 1 }} / {{ total }} 题</span>
      <span>{{ percent }}%</span>
    </div>
    <div class="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        class="h-full rounded-full bg-indigo-600 transition-all duration-300 dark:bg-indigo-500"
        :style="{ width: `${percent}%` }"
      />
    </div>
  </div>
</template>
