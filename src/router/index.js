import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/login'},
    { path: '/login', component: Login },   //可以不用配置name属性，用path也可
  ]
})
