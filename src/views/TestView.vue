<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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

onMounted(() => {
  const id = route.params.id as string
  const found = getScaleById(id)
  if (!found) {
    router.replace('/scales')
    return
  }
  scale.value = found
  const saved = answersStore.load(id)
  if (saved) {
    answers.value = saved.answers ?? {}
    currentIndex.value = Math.min(saved.currentIndex ?? 0, found.questions.length - 1)
  }
})

const currentQuestion = computed(() => scale.value?.questions[currentIndex.value] ?? null)
const answeredCount = computed(() => Object.keys(answers.value).length)
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
    if (autoAdvanceTimer.value) clearTimeout(autoAdvanceTimer.value)
    autoAdvanceTimer.value = setTimeout(() => {
      currentIndex.value++
    }, 280)
  }
}

function goPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    showMissing.value = false
    persist()
  }
}

function goNext() {
  if (!scale.value) return
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
