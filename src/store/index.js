import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: getModules(),

  state: {
    snackbar: {
      text: false,
      color: "success",
      isShow: false,
    },

    loading: false,
  },

  mutations: {
    SET_SNACKBAR(state, snackbar) {
      snackbar.isShow = true;
      state.snackbar = snackbar;
    },

    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    async INIT_STATES({ dispatch, commit }, status) {
      commit("SET_LOADING", true);
      if (await dispatch("auth/INIT_USER")) {
        await dispatch("product/INIT_FAVORITES");
      }

      if (status == "init") {
        await dispatch("category/INIT_CATEGORYS");
        await dispatch("product/INIT_PRODUCTS");
      }

      commit("SET_LOADING", false);
    },

    SET_SNACKBAR({ commit }, payload) {
      commit("SET_SNACKBAR", payload);
    },

    SET_LOADING({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
  },

  getters: {
    GET_SNACKBAR: (state) => state.snackbar,
    GET_LOADING: (state) => state.loading,
  },
});

function getModules() {
  const modulesCtx = require.context("./", true, /[A-Za-z0-9-_,\s]+\.js$/i);

  const modules = {};
  const ignores = [];

  modulesCtx.keys().forEach((key) => {
    if (ignores.indexOf(key) < 0 && key != "./index.js") {
      const name = key.replace("./", "").replace(".js", "");
      let module = modulesCtx(key);
      module.namespaced = true;
      modules[name] = module;
    }
  });

  return modules;
}
