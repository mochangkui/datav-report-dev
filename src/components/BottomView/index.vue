<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{userCount}}</div>
                <vue-echarts :option="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{searchCount}}</div>
                <vue-echarts :option="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small" @change="onCategoryChange">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <vue-echarts :option="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomView',
  data () {
    return {
      total: 200,
      pageSize: 4,
      userCount: '87,34',
      searchCount: '56,46',
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [{
          type: 'line',
          data: [100, 234, 543, 222, 56, 36, 33, 255, 178],
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          lineStyle: {
            color: 'rgb(95, 187, 255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      tableData: [{
        id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 5, rank: 5, keyword: '北京', count: 100, users: 90, range: '90%'
      }],
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  methods: {
    onCategoryChange (category) {
      console.log(category)
    },
    onPageChange (page) {
      console.log(page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;
    .view {
      flex: 1;
      /deep/.el-card__header {
        padding: 0;
        .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          box-sizing: border-box;
          font-size: 14px;
          font-weight: 500;
          padding: 0 20px;
        }
      }
      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;
          .chart {
            flex: 1;
            padding: 0 10px;
            .chart-title {
              color: #999;
              font-size: 14px;
            }
            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts {
              height: 50px;
            }
          }
        }
      }
    }
  }
</style>
