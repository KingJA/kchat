// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*Element*/
import Axios from '../static/js/http';
import store from './store'//相当于'./store/index'

import Element from 'element-ui';
Vue.use(Element, { size: 'small' });
import 'element-ui/lib/theme-chalk/index.css';




Vue.prototype.$http = Axios;
Vue.prototype.$baseUrl = process.env.API_ROOT
Vue.prototype.$websocketUrl = process.env.WEBSOCKET_URL

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})





// const deviceCode = () => {
//   const localCode = window.localStorage.getItem('deviceCode')
//   if(localCode !== undefined && localCode !== null && localCode !== ''){
//     console.info('deviceCode:'+deviceCode)
//     return localCode
//   }else{
//     new Fingerprint2().get(function(result, components) {
//       window.localStorage.setItem('deviceCode', result)
//       console.info('deviceCode:'+deviceCode)
//       return result
//     })
//   }
// }
//
// Vue.$deviceCode = Vue.prototype.$deviceCode = deviceCode
