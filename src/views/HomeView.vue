<script setup lang="ts">
import { scales } from '@/data/scales'
import { APP_SLOGAN } from '@/version'
import DisclaimerBlock from '@/components/DisclaimerBlock.vue'
import ScaleCard from '@/components/ScaleCard.vue'

const featured = scales.slice(0, 6)
</script>

<template>
  <div class="space-y-12">
    <!-- Hero -->
    <section class="pt-6 text-center sm:pt-10">
      <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
        <span class="text-indigo-600 dark:text-indigo-400">ScaleHub</span>
        心理自测量表集合
      </h1>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">{{ APP_SLOGAN }}</p>
      <p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        精选 {{ scales.length }} 个国际通用的心理自测量表，在线答题、自动计分、即时解读。
        所有数据仅保存在您的浏览器本地，不上传任何服务器。
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <router-link to="/scales" class="btn-primary">浏览全部量表</router-link>
        <router-link to="/about" class="btn-secondary">了解项目</router-link>
      </div>
    </section>

    <!-- 特性 -->
    <section class="grid gap-4 sm:grid-cols-3">
      <div class="card p-5">
        <div class="mb-2 text-2xl">🔒</div>
        <h3 class="text-sm font-semibold">数据完全本地</h3>
        <p class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          答题与历史记录仅存储在您浏览器的 localStorage 中，无账号、无上传、无追踪。
        </p>
      </div>
      <div class="card p-5">
        <div class="mb-2 text-2xl">⚡</div>
        <h3 class="text-sm font-semibold">即答即得分</h3>
        <p class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          标准化计分与分级解释，答完立即查看等级、维度分与个性化建议，支持断点续答。
        </p>
      </div>
      <div class="card p-5">
        <div class="mb-2 text-2xl">📈</div>
        <h3 class="text-sm font-semibold">趋势可追踪</h3>
        <p class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          历史记录以时间线呈现，绘制复测趋势图，直观了解情绪与状态的变化。
        </p>
      </div>
    </section>

    <!-- 量表入口 -->
    <section>
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-lg font-semibold">量表入口</h2>
        <router-link
          to="/scales"
          class="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
        >
          查看全部 {{ scales.length }} 个 →
        </router-link>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ScaleCard v-for="scale in featured" :key="scale.id" :scale="scale" />
      </div>
    </section>

    <DisclaimerBlock />
  </div>
</template>
