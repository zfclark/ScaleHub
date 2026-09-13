<script setup lang="ts">
import { APP_NAME } from '@/version'
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-2xl font-bold">隐私说明</h1>
      <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ APP_NAME }} 高度重视您的隐私。本说明解释您的数据如何被处理。
      </p>
    </div>

    <section class="card space-y-4 p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      <div>
        <h2 class="mb-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">我们不收集任何数据</h2>
        <p>
          本项目为纯前端应用，没有后端服务器。您的答案、测试结果与历史记录<strong>全部存储在您自己浏览器
          的 localStorage 中</strong>，不会上传到任何服务器，也不会与任何第三方共享。
        </p>
      </div>
      <div>
        <h2 class="mb-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">数据存放位置</h2>
        <ul class="list-disc space-y-1 pl-5">
          <li>进行中的答题进度：<code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">scalehub:progress:&lt;量表id&gt;</code></li>
          <li>历史测试记录：<code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">scalehub:history</code></li>
          <li>主题偏好：<code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">scalehub:theme</code></li>
        </ul>
      </div>
      <div>
        <h2 class="mb-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">如何控制您的数据</h2>
        <ul class="list-disc space-y-1 pl-5">
          <li>在「历史记录」页可删除任意单条记录，或导出全部数据为 JSON / CSV 备份</li>
          <li>清除浏览器数据（或本站点的站点数据）将彻底删除所有相关记录</li>
          <li>请注意：若使用无痕模式或清除浏览器数据，历史记录将无法找回，建议定期导出备份</li>
        </ul>
      </div>
      <div>
        <h2 class="mb-1.5 text-sm font-semibold text-slate-800 dark:text-slate-100">重要提醒</h2>
        <p>
          心理自评数据属于敏感的个人信息。请勿在他人共用或不可信任的设备上使用本工具；
          如需分享结果，请自行确认内容中不包含您不希望公开的信息。
        </p>
      </div>
    </section>
  </div>
</template>
