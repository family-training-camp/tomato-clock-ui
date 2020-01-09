import Vue from 'vue'
import VueRouter from 'vue-router'
import SystemHomePage from './views/SystemHomePage'
import HomePage from './views/home/HomePage'
import StartCount from './views/StartCount'
import DataCharts from './views/DataCharts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/startCount',
    name: 'StartCount',
    component: StartCount,
    meta: { notRequireAuth: true }
  },
  {
    path: '/dataCharts',
    name: 'DataCharts',
    component: DataCharts,
    meta: { notRequireAuth: true }
  },
  {
    path: '/system',
    name: 'SystemHomePage',
    component: SystemHomePage,
    meta: { notRequireAuth: true }
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { notRequireAuth: true }
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
