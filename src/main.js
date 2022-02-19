import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
import ECharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
