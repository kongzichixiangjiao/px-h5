import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

/* 本地样式 开始 */
import "./assets/scss/index.scss"
import 'lib-flexible'
/* 本地样式 结束 */
Vue.config.productionTip = false
console.log(router);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')





// 2