<template>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="always">
        <total-sales />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <total-orders />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never">
        <today-users />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never">
        <total-users />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalUsers from '../TotalUsers'
import TodayUsers from '../TodayUsers'
import TotalOrders from '../TotalOrders'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalUsers,
    TodayUsers,
    TotalOrders
  }
}
</script>

<style lang="scss" scoped>

</style>
