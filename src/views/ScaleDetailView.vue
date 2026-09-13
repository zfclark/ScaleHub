<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getScaleById } from '@/data/scales'
import { useAnswersStore } from '@/stores/answers'
import DisclaimerBlock from '@/components/DisclaimerBlock.vue'

const route = useRoute()
const router = useRouter()
const answersStore = useAnswersStore()

const scale = computed(() => getScaleById(route.params.id as string))

const progress = computed(() =>
  scale.value ? answersStore.load(scale.value.id) : null,
)

const progressCount = computed(() =>
  progress.value ? Object.keys(progress.value.answers).length : 0,
)

const licenseLabel: Record<string, string> = {
  'public-domain': '公有领域',
  'free-with-citation': '免费使用（需引用来源）',
  'permission-required': '需获得授权',
}

function startTest(fresh: boolean) {
  if (!scale.value) return
  if (fresh) answersStore.clear(scale.value.id)
  router.push(`/scales/${scale.value.id}/test`)
}
</script>

<template>
  <div v-if="scale" class="space-y-8">
    <div>
      <router-link
        to="/scales"
        class="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← 返回量表列表
      </router-link>
      <h1 class="mt-3 text-2xl font-bold">{{ scale.title }}</h1>
      <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ scale.description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        <span
          v-for="tag in scale.meta.tags ?? []"
          :key="tag"
          class="badge bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 基本信息 -->
    <section class="card grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
      <div>
        <div class="text-xs text-slate-500 dark:text-slate-400">题数</div>
        <div class="mt-1 text-lg font-semibold">{{ scale.questions.length }}</div>
      </div>
      <div>
        <div class="text-xs text-slate-500 dark:text-slate-400">预计时长</div>
        <div class="mt-1 text-lg font-semibold">约 {{ scale.meta.timeMinutes }} 分钟</div>
      </div>
      <div>
        <div class="text-xs text-slate-500 dark:text-slate-400">总分范围</div>
        <div class="mt-1 text-lg font-semibold">{{ scale.scoring.min ?? 0 }} - {{ scale.scoring.max }}</div>
      </div>
      <div>
        <div class="text-xs text-slate-500 dark:text-slate-400">版权/许可</div>
        <div class="mt-1 text-sm font-semibold">
          {{ licenseLabel[scale.license.status] ?? scale.license.status }}
        </div>
      </div>
      <div class="col-span-2 text-xs text-slate-500 sm:col-span-4 dark:text-slate-400">
        适用人群：{{ scale.meta.audience }}
      </div>
    </section>

    <!-- 指导语与计分 -->
    <section class="card space-y-4 p-5">
      <div>
        <h2 class="text-sm font-semibold">指导语</h2>
        <p class="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {{ scale.instructions }}
        </p>
      </div>
      <div>
        <h2 class="text-sm font-semibold">计分方式</h2>
        <p class="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          各题按选项分值求和得到总分
          <template v-if="scale.scoring.dimensions?.length">
            ；并按维度分别计算维度分<template v-if="scale.scoring.dimensions.some((d) => d.multiplier)">
              （维度分需乘以 {{ scale.scoring.dimensions.find((d) => d.multiplier)?.multiplier }} 折算）</template>。
          </template>
          <template v-if="scale.scoring.reverse.length">
            第 {{ scale.scoring.reverse.map((r) => r.replace('q', '')).join('、') }} 题为反向计分，系统自动处理。
          </template>
        </p>
        <div
          v-if="scale.scoring.bands?.length"
          class="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200 text-sm dark:divide-slate-800 dark:border-slate-700"
        >
          <div
            v-for="band in scale.scoring.bands"
            :key="band.label"
            class="flex items-center gap-3 px-3.5 py-2"
          >
            <span class="w-20 flex-shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
              {{ band.min }}-{{ band.max }}
            </span>
            <span class="font-medium">{{ band.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 开始测试 -->
    <section class="card p-5">
      <div v-if="progress && progressCount > 0" class="flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm text-slate-600 dark:text-slate-300">
          检测到未完成的测试（已答 {{ progressCount }}/{{ scale.questions.length }} 题）
        </p>
        <div class="flex gap-2">
          <button class="btn-primary" @click="startTest(false)">继续上次测试</button>
          <button class="btn-secondary" @click="startTest(true)">重新开始</button>
        </div>
      </div>
      <div v-else class="flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm text-slate-600 dark:text-slate-300">
          准备好后即可开始，答案会自动保存
        </p>
        <button class="btn-primary" @click="startTest(true)">开始测试</button>
      </div>
    </section>

    <DisclaimerBlock />

    <!-- 来源 -->
    <section class="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
      <span class="font-medium">来源 / 引用：</span>{{ scale.license.source }}
    </section>
  </div>

  <div v-else class="py-20 text-center">
    <p class="text-slate-500 dark:text-slate-400">未找到该量表</p>
    <router-link to="/scales" class="btn-primary mt-4">返回量表列表</router-link>
  </div>
</template>
