import { defineStore } from 'pinia'
import { safeGetItem, safeSetItem } from '@/utils/storage'

const THEME_KEY = 'scalehub:theme'

type ThemeMode = 'light' | 'dark'

function detectInitialTheme(): ThemeMode {
  const saved = safeGetItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: detectInitialTheme() as ThemeMode,
  }),
  getters: {
    isDark: (state) => state.mode === 'dark',
  },
  actions: {
    init() {
      applyTheme(this.mode)
    },
    toggle() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
      safeSetItem(THEME_KEY, this.mode)
      applyTheme(this.mode)
    },
  },
})
