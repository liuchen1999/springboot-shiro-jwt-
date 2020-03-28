// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'api'
Vue.config.productionTip = false
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/404') {//判断是否需要登录
    next()
  } else {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      console.log('没有token，拦截')
      next("/login")
    }
  }
})
//请求拦截
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      //console.log(localStorage.getItem('AdminToken'));
      config.headers.Authorization = sessionStorage.getItem('token')

    }

    return config
  },
  error => {
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  function (response) {
// 对响应数据做点什么

    return response
  },
  function (err) {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)'
          break
        case 401:
          err.message = '未授权，请重新登录(401)'
          router.push('/login')
          sessionStorage.removeItem('token')
          // $router.push('/login');
          console.log("未授权，请重新登录")
          break
        case 403:
          err.message = '拒绝访问(403)'
          break
        case 404:
          err.message = '请求出错(404)'
          break
        case 408:
          err.message = '请求超时(408)'
          break
        case 500:
          err.message = '服务器错误(500)'
          break
        case 501:
          err.message = '服务未实现(501)'
          break
        case 502:
          err.message = '网络错误(502)'
          break
        case 503:
          err.message = '服务不可用(503)'
          break
        case 504:
          err.message = '网络超时(504)'
          break
        case 505:
          err.message = 'HTTP版本不受支持(505)'
          break
        default:
          err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务器失败!'
    }
    Vue.prototype.$message.error(err.message)
    return Promise.reject(err)
  })
//时间格式化
Vue.prototype.getNowFormatDate = function() {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  const currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
