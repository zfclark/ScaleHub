import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// 部署平台 base 切换：
// - npm run build（默认）：GitHub Pages 子路径部署，base = /ScaleHub/
//   注意：必须与 GitHub 仓库名大小写完全一致（zfclark/ScaleHub），
//   否则资源请求 404 导致页面空白。
// - npm run build:cf：Cloudflare 根路径部署（Workers 静态资产），base = /
export default defineConfig(({ mode }) => ({
  base: mode === 'cloudflare' ? '/' : '/ScaleHub/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // ECharts 独立分包，仅在访问历史记录页（趋势图）时按需加载
        manualChunks: {
          echarts: ['echarts/core', 'echarts/charts', 'echarts/components', 'echarts/renderers'],
        },
      },
    },
  },
}))
