import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// 部署平台 base 切换：
// - npm run build（默认）：GitHub Pages 子路径部署，base = /scalehub/
// - npm run build:cf：Cloudflare 根路径部署（Workers 静态资产），base = /
export default defineConfig(({ mode }) => ({
  base: mode === 'cloudflare' ? '/' : '/scalehub/',
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
