<script setup lang="ts">
import { APP_VERSION_NAME } from '@/version'
</script>

<template>
  <footer class="border-t border-slate-200 py-6 dark:border-slate-800">
    <div class="mx-auto w-full max-w-4xl space-y-2 px-4 text-center text-xs text-slate-500 sm:px-6 dark:text-slate-400">
      <p>
        ScaleHub {{ APP_VERSION_NAME }} · 本工具仅供自我了解参考，不构成医学诊断或治疗建议
      </p>
      <p>
        如您正处于情绪危机中，请访问
        <router-link to="/crisis" class="text-indigo-600 hover:underline dark:text-indigo-400">
          危机资源页
        </router-link>
        或立即联系专业援助
      </p>
      <p>
        <router-link to="/privacy" class="hover:underline">隐私说明</router-link>
        ·
        <router-link to="/about" class="hover:underline">关于项目</router-link>
      </p>
    </div>
  </footer>
</template>
