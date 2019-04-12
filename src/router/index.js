import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
import Main from '@/components/layouts/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/',
      name: '_home',
      redirect: '/home',
      component: Main,
      children:[
        {
          path:'/home',
          component:Home
        }
      ]
    }
  ]
})
