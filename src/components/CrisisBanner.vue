<script setup lang="ts">
defineProps<{
  message: string
  questionText?: string
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-red-300 bg-red-50 p-5 text-sm text-red-800 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300"
  >
    <p class="mb-2 flex items-center gap-2 text-base font-semibold">
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM10 15a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
      请关注您此刻的安全
    </p>
    <p v-if="questionText" class="mb-2 text-xs opacity-80">相关条目：{{ questionText }}</p>
    <p class="mb-3 leading-relaxed">{{ message }}</p>
    <p>
      您此刻的感受值得被认真对待。请访问
      <router-link to="/crisis" class="font-bold underline">危机资源页</router-link>
      获取心理援助热线，或拨打 120 / 前往最近医院的急诊科。痛苦是可以缓解的，您不必独自承受。
    </p>
  </div>
</template>
