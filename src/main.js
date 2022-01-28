import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/tailwind.css";
import VueSplide from "@splidejs/vue-splide";
import VModal from "vue-js-modal";
import Progress from "vue-multiple-progress";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ZoomOnHover from "vue-zoom-on-hover";

Vue.use(VueSplide);
Vue.use(Progress);
Vue.use(ZoomOnHover);

import "./service/tools";
import "./service/browser-store";
import "./plugins/axios";

import VueMask from "v-mask";
Vue.use(VueMask);

import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.use(VModal);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
  beforeMount() {
    this.$store.dispatch("INIT_STATES", "init");
  },
}).$mount("#app");
