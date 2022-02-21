<template>
  <common-card title="累计订单量" value="32,039,165">
    <template>
      <v-chart :style="{ width: '100%', height: '100%' }" :option="getOptions()" />
      <!-- <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }" /> -->
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from '../CommonCard'
export default {
  name: 'TotalSales',
  components: {
    CommonCard
  },
  methods: {
    // 使用百度vue-echarts
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 890, 657, 990, 345],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  },
  mounted () {
    // 使用原生echarts
    // const chartDom = document.getElementById('total-orders-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption({
    //   xAxis: {
    //     type: 'category',
    //     show: false,
    //     boundaryGap: false
    //   },
    //   yAxis: {
    //     show: false
    //   },
    //   series: [{
    //     type: 'line',
    //     data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 890, 657, 990, 345],
    //     areaStyle: {
    //       color: 'purple'
    //     },
    //     lineStyle: {
    //       width: 0
    //     },
    //     itemStyle: {
    //       opacity: 0
    //     },
    //     smooth: true
    //   }],
    //   grid: {
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
  .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
