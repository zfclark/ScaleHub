<script setup lang="ts">
import {
  APP_VERSION_NAME,
  APP_NAME,
  APP_SUBTITLE,
  APP_SLOGAN,
  CHANGELOG,
} from '@/version'
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-2xl font-bold">关于 {{ APP_NAME }}</h1>
      <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ APP_NAME }}（{{ APP_SUBTITLE }}）是一个纯前端的心理自测量表集合与自我了解工具。
        {{ APP_SLOGAN }}项目提供的量表均为国际通用的公开量表，
        用于帮助您更好地觉察自己的情绪、压力与自我认知状态。
      </p>
      <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span class="badge bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
          当前版本：{{ APP_VERSION_NAME }}
        </span>
        <span class="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          纯前端 · 数据本地化
        </span>
        <span class="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Vue 3 + Vite + Tailwind CSS
        </span>
      </div>
    </div>

    <section class="card space-y-3 p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      <h2 class="text-sm font-semibold text-slate-800 dark:text-slate-100">项目特点</h2>
      <ul class="list-disc space-y-1.5 pl-5">
        <li>量表配置化：评分逻辑由通用引擎驱动，支持总分、维度分、反向计分、加权与特殊触发规则</li>
        <li>数据完全本地：答题记录与历史仅存储在浏览器 localStorage，可随时导出为 JSON / CSV</li>
        <li>信息透明：每个量表标注题数、时长与适用人群</li>
        <li>复测友好：断点续答、历史时间线与趋势图，帮助追踪长期变化</li>
      </ul>
    </section>

    <section>
      <h2 class="mb-3 text-lg font-semibold">更新日志</h2>
      <div class="space-y-4">
        <article v-for="entry in CHANGELOG" :key="entry.version" class="card p-5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-base font-bold">{{ entry.name }}</span>
            <span class="font-mono text-xs text-slate-400">v{{ entry.version }}</span>
            <span class="text-xs text-slate-500 dark:text-slate-400">{{ entry.date }}</span>
            <span
              v-if="entry === CHANGELOG[0]"
              class="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
            >
              最新
            </span>
          </div>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <li v-for="(item, i) in entry.items" :key="i">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="card space-y-3 p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      <h2 class="text-sm font-semibold text-slate-800 dark:text-slate-100">免责声明</h2>
      <p>
        {{ APP_NAME }} 中的所有量表结果仅供个人自我了解参考，<strong>不构成医学诊断、处方或治疗建议</strong>。
        量表分数受作答时的状态、近期事件等多种因素影响，请避免仅凭单次结果对自己下结论。
      </p>
      <p>
        如果您正处于明显的情绪困扰中，或结果提示中重度水平，请及时寻求精神科医生、心理咨询师等专业人士的帮助。
        如遇紧急情况，请访问
        <router-link to="/crisis" class="text-indigo-600 hover:underline dark:text-indigo-400">心理援助页</router-link>。
      </p>
    </section>
  </div>
</template>
