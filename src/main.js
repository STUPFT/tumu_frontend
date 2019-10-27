import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
