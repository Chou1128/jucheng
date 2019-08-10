import Vue from 'vue';
import App from './App.vue';

//全局引入
import axios from 'axios';
// Vue继承axios
Vue.prototype.$axios = axios;

import './css/base.css';

//引入ElementUI的组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 引入vant的组件
import Vant from './vant/index'


// 引入路由模块
import router from './routers/index'
import store from './store'
Vant()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')