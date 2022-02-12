import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/tailwind.css'
import VueSplide from '@splidejs/vue-splide'
import VModal from 'vue-js-modal'
import Progress from 'vue-multiple-progress'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ZoomOnHover from 'vue-zoom-on-hover'
import http from './plugins/Axios'


Vue.use(VueSplide)
Vue.use(Progress)
Vue.use(ZoomOnHover)

// eslint-disable-next-line no-undef
Vue.use(VModal)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false;

Vue.prototype.$http = http;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
