import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import EditTable from '@/page/table/EditTable'
import SearchTable from '@/page/table/SearchTable'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/editTable',
        name: '可编辑表格',
        component: EditTable
      },
      {
        path: '/searchTable',
        name: '可查询表格',
        component: SearchTable
      }
    ]
  }]
})
