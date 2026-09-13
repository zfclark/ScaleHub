import * as echarts from 'echarts/core'
import { LineChart, BarChart, RadarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, onBeforeUnmount, watch, type Ref, type WatchSource } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'

echarts.use([LineChart, BarChart, RadarChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

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
