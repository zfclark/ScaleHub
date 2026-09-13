<template>
  <div
    class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
  >
    <p class="flex items-start gap-2">
      <svg class="mt-0.5 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
      <span>
        <strong>重要提示：</strong>
        ScaleHub 是自我了解与自我觉察工具，所有量表结果均<strong>不构成医学诊断</strong>。若结果提示中重度困扰，或您的状态持续影响生活，请及时寻求精神科医生或心理咨询师的专业帮助。
        <router-link to="/crisis" class="font-medium underline">如遇紧急情况请点击此处获取危机资源。</router-link>
      </span>
    </p>
  </div>
</template>
