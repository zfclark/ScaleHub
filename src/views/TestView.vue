<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getScaleById } from '@/data/scales'
import { useAnswersStore } from '@/stores/answers'
import { useHistoryStore } from '@/stores/history'
import { computeResult, isComplete, firstUnansweredIndex } from '@/engine/scoring'
import type { ScaleConfig } from '@/types/scale'
import ProgressBar from '@/components/ProgressBar.vue'
import OptionGroup from '@/components/OptionGroup.vue'
import DisclaimerBlock from '@/components/DisclaimerBlock.vue'

const route = useRoute()
const router = useRouter()
const answersStore = useAnswersStore()
const historyStore = useHistoryStore()

const scale = ref<ScaleConfig | null>(null)
const answers = ref<Record<string, number>>({})
const currentIndex = ref(0)
const showMissing = ref(false)
const autoAdvanceTimer = ref<ReturnType<typeof setTimeout> | null>(null)

/** 取消尚未触发的自动跳转，避免它在本题已被手动切换后又把进度推前一题 */
function clearAutoAdvance() {
  if (autoAdvanceTimer.value) {
    clearTimeout(autoAdvanceTimer.value)
    autoAdvanceTimer.value = null
  }
}

/** 依据路由参数初始化答题状态；同一路由下切换量表时也需重新初始化 */
function initFromRoute() {
  const id = route.params.id as string
  const found = getScaleById(id)
  if (!found) {
    router.replace('/scales')
    return
  }
  clearAutoAdvance()
  scale.value = found
  answers.value = {}
  currentIndex.value = 0
  showMissing.value = false
  const saved = answersStore.load(id)
  if (saved) {
    answers.value = saved.answers ?? {}
    currentIndex.value = Math.min(
      Math.max(saved.currentIndex ?? 0, 0),
      found.questions.length - 1,
    )
  }
}

watch(() => route.params.id, initFromRoute, { immediate: true })

// 组件卸载后定时器仍会触发，需主动清理
onBeforeUnmount(clearAutoAdvance)

const currentQuestion = computed(() => scale.value?.questions[currentIndex.value] ?? null)
// 只统计当前量表的题目：存档里若残留已移除题目的作答，不应计入进度
const answeredCount = computed(() => {
  if (!scale.value) return 0
  return scale.value.questions.filter((q) => answers.value[q.id] !== undefined).length
})
const unansweredCount = computed(
  () => (scale.value?.questions.length ?? 0) - answeredCount.value,
)
const isLast = computed(
  () => scale.value !== null && currentIndex.value === scale.value.questions.length - 1,
)
const canSubmit = computed(
  () => scale.value !== null && isComplete(scale.value, answers.value),
)

function persist() {
  if (!scale.value) return
  answersStore.save({
    scaleId: scale.value.id,
    answers: { ...answers.value },
    currentIndex: currentIndex.value,
    updatedAt: new Date().toISOString(),
  })
}

function select(value: number) {
  if (!currentQuestion.value || !scale.value) return
  answers.value[currentQuestion.value.id] = value
  showMissing.value = false
  persist()
  // 自动进入下一题（最后一题不跳转，方便提交）
  if (!isLast.value) {
    clearAutoAdvance()
    autoAdvanceTimer.value = setTimeout(() => {
      currentIndex.value++
      autoAdvanceTimer.value = null
      // 自动跳转后的位置也要落盘，否则续答会停在上一题
      persist()
    }, 280)
  }
}

function goPrev() {
  // 手动翻页时取消待触发的自动跳转，否则会被它再推前一题
  clearAutoAdvance()
  if (currentIndex.value > 0) {
    currentIndex.value--
    showMissing.value = false
    persist()
  }
}

function goNext() {
  if (!scale.value) return
  clearAutoAdvance()
  if (answers.value[scale.value.questions[currentIndex.value].id] === undefined) {
    showMissing.value = true
    return
  }
  if (!isLast.value) {
    currentIndex.value++
    persist()
  }
}

function jumpToFirstUnanswered() {
  if (!scale.value) return
  const idx = firstUnansweredIndex(scale.value, answers.value)
  if (idx >= 0) currentIndex.value = idx
}

function submit() {
  if (!scale.value) return
  if (!canSubmit.value) {
    showMissing.value = true
    jumpToFirstUnanswered()
    return
  }
  const result = computeResult(scale.value, answers.value)
  const record = historyStore.addRecord(scale.value.id, scale.value.title, { ...answers.value }, result)
  answersStore.clear(scale.value.id)
  router.push(`/results/${record.id}`)
}
</script>

<template>
  <div v-if="scale" class="mx-auto max-w-xl space-y-6">
    <div>
      <router-link
        :to="`/scales/${scale.id}`"
        class="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← 退出测试（进度已自动保存）
      </router-link>
      <h1 class="mt-3 text-lg font-bold">{{ scale.shortTitle ?? scale.title }}</h1>
      <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ scale.instructions }}</p>
    </div>

    <ProgressBar :current="currentIndex" :total="scale.questions.length" />

    <div class="card p-6">
      <Transition name="fade" mode="out-in">
        <div :key="currentQuestion?.id" v-if="currentQuestion">
          <p class="mb-1 text-xs text-indigo-600 dark:text-indigo-400">
            Q{{ currentIndex + 1 }}
          </p>
          <h2 class="mb-5 text-base font-medium leading-relaxed">
            {{ currentQuestion.text }}
          </h2>
          <OptionGroup
            :question="currentQuestion"
            :model-value="answers[currentQuestion.id]"
            @update:model-value="select"
          />
          <p v-if="showMissing" class="mt-3 text-xs text-red-500">请先选择一个选项</p>
        </div>
      </Transition>
    </div>

    <!-- 操作栏：移动端固定底部，便于单手操作 -->
    <div
      class="sticky bottom-0 z-10 -mx-4 flex items-center justify-between gap-2 border-t border-slate-200/80 bg-slate-50/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0"
    >
      <button class="btn-secondary flex-shrink-0 !px-3.5 !py-2 sm:!px-5 sm:!py-2.5" :disabled="currentIndex === 0" @click="goPrev">
        上一题
      </button>
      <span class="text-center text-xs text-slate-400">
        已答 {{ answeredCount }}/{{ scale.questions.length }}
        <template v-if="unansweredCount > 0"> · 剩余 {{ unansweredCount }} 题</template>
      </span>
      <button v-if="!isLast" class="btn-secondary flex-shrink-0 !px-3.5 !py-2 sm:!px-5 sm:!py-2.5" @click="goNext">下一题</button>
      <button v-else class="btn-primary flex-shrink-0 !px-3.5 !py-2 sm:!px-5 sm:!py-2.5" :disabled="!canSubmit" @click="submit">
        {{ canSubmit ? '提交' : '答题后提交' }}
      </button>
    </div>

    <DisclaimerBlock />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
