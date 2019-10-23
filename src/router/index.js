import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Home from '@/components/home/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
    , {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '聊天室'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.meta.checkLogin) {
  //   if (checkLogined()) {
  //     next();
  //   } else {
  //     // alert('用户还没未登录');
  //     element.alert('提示', "用户还没未登录", function () {
  //       next({path: '/login'});
  //     });
  //   }
  // } else {
  //   next();
  // }
})
export default router
