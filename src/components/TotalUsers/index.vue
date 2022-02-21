<template>
  <common-card title="累计用户数" value="1,087,503">
    <template>
      <v-chart :style="{ width: '100%', height: '100%' }" :option="getOptions()" />
      <!-- <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div> -->
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">5.14%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">5.14%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCard from '../CommonCard'
export default {
  name: 'TotalUsers',
  components: {
    CommonCard
  },
  methods: {
    getOptions () {
      return {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          name: '上月平台用户数',
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          name: '今日平台用户数',
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])

            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      }
    }
  },
  mounted () {
    // 使用原生echarts
    // const chartDom = document.getElementById('total-users-chart')
    // const chart = this.$echarts.init(chartDom)
    // chart.setOption({
    //   grid: {
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0
    //   },
    //   xAxis: {
    //     type: 'value',
    //     show: false
    //   },
    //   yAxis: {
    //     type: 'category',
    //     show: false
    //   },
    //   series: [{
    //     name: '上月平台用户数',
    //     type: 'bar',
    //     stack: '总量',
    //     data: [200],
    //     barWidth: 10,
    //     itemStyle: {
    //       color: '#45c946'
    //     }
    //   }, {
    //     name: '今日平台用户数',
    //     type: 'bar',
    //     stack: '总量',
    //     data: [250],
    //     barWidth: 10,
    //     itemStyle: {
    //       color: '#eee'
    //     }
    //   }, {
    //     type: 'custom',
    //     stack: '总量',
    //     data: [200],
    //     renderItem: (params, api) => {
    //       const value = api.value(0)
    //       const endPoint = api.coord([value, 0])
    //       return {
    //         type: 'group',
    //         position: endPoint,
    //         children: [{
    //           type: 'path',
    //           shape: {
    //             d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
    //             x: -5,
    //             y: -20,
    //             width: 10,
    //             height: 10,
    //             layout: 'cover'
    //           },
    //           style: {
    //             fill: '#45c946'
    //           }
    //         }, {
    //           type: 'path',
    //           shape: {
    //             d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
    //             x: -5,
    //             y: 10,
    //             width: 10,
    //             height: 10,
    //             layout: 'cover'
    //           },
    //           style: {
    //             fill: '#45c946'
    //           }
    //         }]
    //       }
    //     }
    //   }]
    // })
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .increase {
      width: 0;
      height: 0;
      border-width: 3px;
      border-color: transparent transparent red transparent;
      border-style: solid;
      margin: 0 0 3px 5px;
    }
    .decrease {
      width: 0;
      height: 0;
      border-width: 3px;
      border-color: green transparent transparent transparent;
      border-style: solid;
      margin: 3px 0 0 5px;
    }
    .month {
      margin-left: 10px;
    }
    .emphasis {
      margin-left: 5px;
      color: #333;
      font-weight: 700;
    }
  }
</style>
