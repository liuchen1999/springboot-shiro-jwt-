import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Index from '../components/Index'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'login'
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/index',
      name:'index',
      component:Index
    }
  ]
})
