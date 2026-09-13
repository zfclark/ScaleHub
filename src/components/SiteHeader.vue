<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

const faviconUrl = `${import.meta.env.BASE_URL}favicon.svg`

const navItems = [
  { to: '/', label: '首页', shortLabel: '首页' },
  { to: '/scales', label: '量表列表', shortLabel: '量表' },
  { to: '/history', label: '历史记录', shortLabel: '历史' },
  { to: '/about', label: '关于', shortLabel: '关于' },
]
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
  >
    <div class="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-2 px-4 sm:px-6">
      <router-link to="/" class="flex flex-shrink-0 items-center gap-2">
        <img :src="faviconUrl" alt="ScaleHub" class="h-7 w-7" />
        <span class="text-base font-bold tracking-tight">ScaleHub</span>
        <span class="hidden text-xs text-slate-500 sm:inline dark:text-slate-400">
          心理自测量表集合
        </span>
      </router-link>
      <nav class="flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex-shrink-0 whitespace-nowrap rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:px-3 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          active-class="!text-indigo-600 dark:!text-indigo-400 font-medium"
        >
          <span class="hidden sm:inline">{{ item.label }}</span>
          <span class="sm:hidden">{{ item.shortLabel }}</span>
        </router-link>
        <button
          class="ml-1 rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          :title="theme.isDark ? '切换为浅色' : '切换为深色'"
          aria-label="切换主题"
          @click="theme.toggle()"
        >
          <svg
            v-if="theme.isDark"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>
