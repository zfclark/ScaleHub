<script setup lang="ts">
import type { ScaleQuestion } from '@/types/scale'

defineProps<{
  question: ScaleQuestion
  modelValue?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
  <div class="space-y-2.5">
    <button
      v-for="option in question.options"
      :key="option.value"
      type="button"
      class="flex min-h-[52px] w-full touch-manipulation select-none items-center rounded-xl border px-4 py-3 text-left text-sm transition active:scale-[0.99]"
      :class="
        modelValue === option.value
          ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-700 dark:border-indigo-400 dark:bg-indigo-500/15 dark:text-indigo-300'
          : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10'
      "
      :aria-pressed="modelValue === option.value"
      @click="emit('update:modelValue', option.value)"
    >
      <span
        class="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[11px]"
        :class="
          modelValue === option.value
            ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-900'
            : 'border-slate-300 dark:border-slate-600'
        "
      >
        {{ modelValue === option.value ? '✓' : '' }}
      </span>
      {{ option.label }}
    </button>
  </div>
</template>
