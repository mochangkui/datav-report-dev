<template>
  <common-card title="累计销售额" value="￥32,039,165">
    <template>
      <div class="compare"></div>
    </template>
    <template v-slot:footer>
      <div>
        <span>昨日销售额</span>
        <span class="money">￥30,000,000</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCard from '../CommonCard'
export default {
  name: 'TotalSales',
  components: {
    CommonCard
  }
}
</script>

<style lang="scss" scoped>
  .compare {
    height: 100%;
    background: yellow;
  }
  span {
    font-size: 12px;
  }
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
