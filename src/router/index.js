import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import Search from '@/components/search/Search'
import create from '@/components/create/create'
import connect from '@/components/connect/connect'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/connect',
      name: 'connect',
      component: connect,
      meta: {
        title: '连接'
      }
    }, {
      path: '/create',
      name: 'create',
      component: create,
      meta: {
        title: '创建'
      }
    },
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
      },
      children: [
        {
          path: '/search',
          name: 'Search',
          component: Search,
          meta: {
            title: '搜索'
          }
        }
        , {
          path: '/user',
          name: 'User',
          component: User,
          meta: {
            title: '用户'
          }
        }
      ]
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
