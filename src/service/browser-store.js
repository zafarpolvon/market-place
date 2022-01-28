import Vue from "vue";

const browserStore = {
  delLocal(a) {
    localStorage.removeItem(a);
  },

  setLocal(a, v) {
    localStorage.setItem(a, JSON.stringify(v));
  },

  getLocal(v) {
    const u = localStorage.getItem(v);
    if (u && u != "undefined") return JSON.parse(u);
  },

  localClear() {
    localStorage.clear();
  },

  delSession(a) {
    sessionStorage.removeItem(a);
  },

  setSession(a, v) {
    sessionStorage.setItem(a, JSON.stringify(v));
  },

  getSession(a) {
    const u = sessionStorage.getItem(a);
    if (u) return JSON.parse(u);
  },

  sessionClear() {
    sessionStorage.clear();
  }
};

export default browserStore;
Vue.prototype.$browserStore = browserStore;
