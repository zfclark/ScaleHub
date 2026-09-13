import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
    {
      path: '/scales',
      name: 'scales',
      component: () => import('@/views/ScaleListView.vue'),
      meta: { title: '量表列表' },
    },
    {
      path: '/scales/:id',
      name: 'scale-detail',
      component: () => import('@/views/ScaleDetailView.vue'),
      meta: { title: '量表详情' },
    },
    {
      path: '/scales/:id/test',
      name: 'scale-test',
      component: () => import('@/views/TestView.vue'),
      meta: { title: '正在测试' },
    },
    {
      path: '/results/:recordId',
      name: 'result',
      component: () => import('@/views/ResultView.vue'),
      meta: { title: '测试结果' },
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/HistoryView.vue'),
      meta: { title: '历史记录' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: '关于' },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/PrivacyView.vue'),
      meta: { title: '隐私说明' },
    },
    {
      path: '/crisis',
      name: 'crisis',
      component: () => import('@/views/CrisisView.vue'),
      meta: { title: '危机资源' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} · ScaleHub` : 'ScaleHub · 心理自测量表集合'
})

export default router
