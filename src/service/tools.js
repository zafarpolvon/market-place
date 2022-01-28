export const tools = {
  array: (array) => (Array.isArray(array) ? array : []),
  number: number,
};

import Vue from "vue";

Vue.prototype.$tools = tools;
Vue.prototype.$array = tools.array;
Vue.prototype.$number = tools.number;

function number(num, def) {
  const n = Number(num);
  return n > 0 ? n : def || 0;
}
