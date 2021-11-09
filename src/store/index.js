/* eslint-disable no-useless-catch */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = `http://localhost:3000/carts`

export default new Vuex.Store({
  state: {
    carts: []
  },
  mutations: {
    updateCart (state, carts) {
      state.carts = carts
    }
  },
  actions: {
    async loadData () {
      try {
        const info = await axios.get(URL)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadData1 () {
      try {
        const info = await axios.get(test)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadDataById ({ commit }, id) {
      try {
        const { data } = await axios.get(URL + '/' + id)
        commit('updateCart', data)
        return data
      } catch (e) {
        throw e
      }
    }
  },
  modules: {
  },
  getters: {
    CARTS: state => {
      return state.carts
    },
    getShoesBySite: (state) => (id) => {
      console.log(id)
      return state.carts.find(shoe => shoe.id === id)
    }
  }
})
