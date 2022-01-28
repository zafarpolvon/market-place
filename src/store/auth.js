import Vue from "vue";
const vm = Vue.prototype;

export const state = () => ({
  user: {},
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user || {};
  },
};

export const actions = {
  INIT_USER({ commit, dispatch }) {
    let status = false;
    const token = vm.$cookies.get("token");
    const user = vm.$browserStore.getLocal("user");
    if (token && user) {
      commit("SET_USER", user);
      status = true;
    } else {
      dispatch("LOGOUT");
    }

    return status;
  },

  async LOGIN({ commit, dispatch }, payload) {
    const data = await vm.$axios.$post("user/sign-in", payload);
    if (data) {
      vm.$cookies.set("token", data.token);
      delete data.token;
      vm.$browserStore.setLocal("user", data);
      commit("SET_USER", data);
    } else dispatch("LOGOUT");
  },

  async REGISTER({ commit }, payload) {
    // http://localhost:8080/api/
    const data = await vm.$axios.$post("user/sign-up", payload);
    if (data) {
      vm.$cookies.set("token", data.token);
      return true;
    }
  },

  async CONFIRM_CODE(ctx, payload) {
    const data = await vm.$axios.$post("send-code", payload);
    debugger;
    if (data) return true;
  },

  async RESEND_CODE() {
    const data = await vm.$axios.$post("resend-code");
    if (data) return true;
  },

  LOGOUT({ commit }) {
    commit("SET_USER");
    vm.$cookies.remove("token");
    localStorage.removeItem("user");
  },
};

export const getters = {
  GET_USER: (state) => state.user,
};
