<script setup lang="ts">
import type { ScaleConfig } from '@/types/scale'

defineProps<{ scale: ScaleConfig }>()

const licenseLabel: Record<string, string> = {
  'public-domain': '公有领域',
  'free-with-citation': '免费使用（需引用来源）',
  'permission-required': '需获得授权',
}
</script>

<template>
  <router-link
    :to="`/scales/${scale.id}`"
    class="card group flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:hover:border-indigo-500/50"
  >
    <div class="mb-2 flex flex-wrap items-center gap-1.5">
      <span
        v-for="tag in scale.meta.tags ?? []"
        :key="tag"
        class="badge bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="text-base font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
      {{ scale.title }}
    </h3>
    <p class="mt-2 line-clamp-2 flex-1 text-sm text-slate-500 dark:text-slate-400">
      {{ scale.description }}
    </p>
    <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
      <span>{{ scale.questions.length }} 题</span>
      <span>约 {{ scale.meta.timeMinutes }} 分钟</span>
      <span>{{ licenseLabel[scale.license.status] ?? scale.license.status }}</span>
    </div>
  </router-link>
</template>
