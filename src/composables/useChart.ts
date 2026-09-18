import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, onBeforeUnmount, watch, type Ref, type WatchSource } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'

// 只注册实际用到的图表类型与组件，避免把未使用的 BarChart / RadarChart 打进分包
echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

/**
 * ECharts 轻量封装：按需注册组件，自动处理初始化、更新、resize 与销毁。
 */
export function useChart(
  el: Ref<HTMLElement | null>,
  getOption: () => EChartsCoreOption,
  deps: WatchSource<unknown>[] = [],
) {
  let chart: echarts.ECharts | null = null

  function render() {
    if (!el.value) return
    // 容器被 v-if 重建后，旧实例仍挂在已脱离文档的节点上，
    // 继续 setOption 不会更新界面，必须按新的容器重建
    if (chart && chart.getDom() !== el.value) {
      chart.dispose()
      chart = null
    }
    if (!chart) chart = echarts.init(el.value)
    chart.setOption(getOption(), true)
  }

  function resize() {
    chart?.resize()
  }

  onMounted(() => {
    render()
    window.addEventListener('resize', resize)
  })

  watch(deps.length ? deps : [el], () => render(), { flush: 'post' })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    chart?.dispose()
    chart = null
  })

  return { rerender: render }
}
