"use strict";
import Vue from "vue";
const vm = Vue.prototype;
import axios from "axios";
import router from "../router";
import staticCinfig from "../utils/static-config.js";

Vue.prototype.$url = staticCinfig.url;

const _axios = axios.create({ baseURL: staticCinfig.serverUrl });
// const options = {

// };

_axios.interceptors.request.use(
  (req) => {
    const token = vm.$cookies.get("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    // req.headers["Access-Control-Allow-Origin"] = "*";
    // debugger;
    return req;
  },

  (config) => {
    const token = vm.$cookies.get("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // config.headers["Access-Control-Allow-Origin"] = "*";
    // debugger;
    return config;
  },

  (error) => {
    if (error.response && error.response.status != undefined) {
      const status = error.response?.status || 0;
      const isNotAuth = status == 401 || status == 0;
      if (isNotAuth) {
        vm.$cookies.remove("token");
        if (router.currentRoute.path != "/") router.push("/");
      }
    }

    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error.response);
    if (!axios.isCancel(error)) {
      if (error.response && error.response.status != undefined) {
        const status = error.response?.status || 0;
        const isNotAuth = status == 401 || status == 0;

        if (isNotAuth) {
          vm.$cookies.remove("token");
          if (router.currentRoute.path != "/") router.push("/");
        }
      } else if (!error.response) {
        // store.dispatch("SET_SNACKBAR", {
        //   text: "No internet connection",
        //   color: "error"
        // });
      }
    }

    return Promise.reject(error);
  }
);

const $get = async (url, params, cf) => {
  try {
    const config = cf || {};
    config.params = params;
    return (await _axios.get(url, config)).data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const $post = async (url, data) => {
  try {
    return (await _axios.post(url + "/", data)).data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const $put = async (url, data) => {
  try {
    return (await _axios.put(url + "/", data)).data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const $delete = async (url, data) => {
  try {
    return (await _axios.put(url + "/", data)).data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const _$axios = { $get, $post, $put, $delete, ..._axios };

const plugin = {
  install: (Vue) => {
    Vue.axios = _$axios;
    window.axios = _$axios;
    Object.defineProperties(Vue.prototype, {
      _axios: { get: () => _$axios },
      $axios: { get: () => _$axios },
    });
  },
};

Vue.use(plugin);
export default plugin;
