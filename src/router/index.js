import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
    , {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
export default router
