import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import 'ant-design-vue/dist/antd.css'
import api from './api/install'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(api)
Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
