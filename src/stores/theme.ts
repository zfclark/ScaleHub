import { defineStore } from 'pinia'

const THEME_KEY = 'scalehub:theme'

type ThemeMode = 'light' | 'dark'

function detectInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(THEME_KEY)
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
      localStorage.setItem(THEME_KEY, this.mode)
      applyTheme(this.mode)
    },
  },
})
