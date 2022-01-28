import Vue from "vue";
const vm = Vue.prototype;

export const state = () => ({
  categorys: [],
});

export const mutations = {
  INIT_CATEGORYS(state, payload) {
    state.categorys = vm.$array(payload);
  },
};

export const actions = {
  async INIT_CATEGORYS({ commit }) {
    const data = await vm.$axios.$get("category?type=product");
    commit("INIT_CATEGORYS", data?.data);
  },
};

export const getters = {
  GET_CATEGORYS: (state) => state.categorys,
};
