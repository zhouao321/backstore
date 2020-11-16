
import Vue from 'vue'
import App from './App'
import router from './router'

//上传图片添加的前缀
Vue.prototype.$preImg = 'http://localhost:3000'

//引入静态资源
import './assets/css/reset.css'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//导入store
import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
