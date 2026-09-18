<script setup lang="ts">
import { APP_NAME, APP_VERSION_NAME, CHANGELOG } from '@/version'
</script>

<template>
  <div class="space-y-8">
    <div>
      <router-link
        to="/about"
        class="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← 返回关于页
      </router-link>
      <h1 class="mt-3 text-2xl font-bold">更新日志</h1>
      <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ APP_NAME }} 的完整版本变更记录，当前版本为
        <strong>{{ APP_VERSION_NAME }}</strong>，共 {{ CHANGELOG.length }} 个版本。
        版本号遵循语义化版本规范，条目按「新增 / 修复 / 变更 / 文档」分类。
      </p>
    </div>

    <div class="space-y-5">
      <article v-for="(entry, index) in CHANGELOG" :key="entry.version" class="card p-5">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-base font-bold">{{ entry.name }}</span>
          <span class="font-mono text-xs text-slate-400">v{{ entry.version }}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400">{{ entry.date }}</span>
          <span
            v-if="index === 0"
            class="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
          >
            最新
          </span>
        </div>
        <ul
          class="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
        >
          <li v-for="(item, i) in entry.items" :key="i">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div class="flex flex-wrap gap-3">
      <router-link to="/about" class="btn-secondary">返回关于页</router-link>
      <router-link to="/scales" class="btn-primary">浏览全部量表</router-link>
    </div>
  </div>
</template>
