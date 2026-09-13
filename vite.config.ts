import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// 部署平台 base 自适应：
// - GitHub Pages：子路径部署，使用 /scalehub/
// - Cloudflare Pages：根路径部署（构建时平台会注入 CF_PAGES=1），使用 /
export default defineConfig({
  base: process.env.CF_PAGES ? '/' : '/scalehub/',
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
})
