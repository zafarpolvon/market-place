import Vue from "vue";
const vm = Vue.prototype;

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  INIT_CART_ITEMS(state, payload) {
    state.cartItems = vm.$array(payload);
  },

  ADD_CART_ITEM(state, payload) {
    const cartItems = state.cartItems;
    if (cartItems.some((x) => x.id == payload.id)) {
      state.cartItems = cartItems.map((x) => {
        if (x.id == item.id) return payload;
        return x;
      });
    } else state.cartItems.push(payload);
  },
};

export const actions = {
  INIT_CART_ITEMS({ commit }) {
    const items = [];
    if (vm.$array(items).length) commit("INIT_CART_ITEMS", items);
  },

  ADD_CART_ITEM({ commit }, payload) {
    if ((payload || {}).id) commit("INIT_CART_ITEMS", payload);
  },
};

export const getters = {
  GET_CART_ITEMS: (state) => state.cartItems,
};
