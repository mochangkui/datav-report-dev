import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('vue-charts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
