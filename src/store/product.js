import Vue from "vue";
import router from "../router";
const vm = Vue.prototype;

import axios from "axios";
const CancelToken = axios.CancelToken;
let source = null;

export const state = () => ({
  products: [],
  favorites: [],
});

export const mutations = {
  INIT_PRODUCTS(state, payload) {
    state.products = vm.$array(payload);
  },
  INIT_FAVORITES(state, payload) {
    state.favorites = vm.$array(payload);
  },
  ADD_FAVORITE(state, payload) {
    state.favorites = vm.$array(payload);

    const favorites = state.favorites;
    if (favorites.some((x) => x.id == payload.id)) {
      state.favorites = favorites.map((x) => {
        if (x.id == item.id) return payload;
        return x;
      });
    } else state.favorites.push(payload);
  },
};

export const actions = {
  async INIT_PRODUCTS({ commit }) {
    const data = await vm.$axios.$get("product");
    commit("INIT_PRODUCTS", data?.data);
  },

  async SEARCH(ctx, payload) {
    source?.cancel();
    source = CancelToken.source();
    const cf = { progress: false, cancelToken: source.token };
    const data = await vm.$axios.$get("product/search", payload, cf);
    return vm.$array(data?.data);
  },

  async INIT_FAVORITES({ commit }, payload) {
    const data = await vm.$axios.$get("product/favorites");
    commit("INIT_FAVORITES", data?.data);
  },

  async ADD_FAVORITE({ commit }, payload) {
    const token = vm.$cookies.get("token");
    if (token) {
      const status = await vm.$axios.$post("product/set-favorite", payload);
      if (status) commit("ADD_FAVORITE", payload);
    } else router.push("/register");
  },
};

export const getters = {
  GET_PRODUCTS: (state) => state.products,
  GET_FAVORITES: (state) => state.favorites,
  IS_FAVORITE: (state) => (id) => !!state.favorites.find((x) => x.id == id),
};
