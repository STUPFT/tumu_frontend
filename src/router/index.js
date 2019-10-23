import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/',
      component: Home
    }
  ]
})
