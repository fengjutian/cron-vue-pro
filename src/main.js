import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//全局引入
import VueCron from 'vue-cron'
Vue.use(VueCron);

import CronVuePro from './cron-vue-pro'
Vue.use(CronVuePro);

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
