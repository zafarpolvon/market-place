/* eslint-disable no-useless-catch */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = `http://izleshop.uz/api/getProducts`
const CATEGORY = `http://localhost:3000/category`
const ID = `http://izleshop.uz/api/getProductDetails?id=`

export default new Vuex.Store({
  state: {
    carts: [],
    category: []
  },
  mutations: {
    updateCart (state, carts) {
      state.carts = carts
    },
    updateCategory (state, category) {
      state.category = category
    }
  },
  actions: {
    async loadData () {
      try {
        const info = await axios.get(URL)
        return info.data.data
      } catch (e) {
        throw e
      }
    },
    async loadDataById ({ commit }, id) {
      try {
        const { data } = await axios.get(ID + id)
        commit('updateCart', data)
        return data
      } catch (e) {
        throw e
      }
    },
    async loadCategory ({ commit }) {
      try {
        const info = await axios.get(CATEGORY)
        const cats = []
        Object.keys(info.data).forEach(key => {
          cats.push({
            name: info.data[key].name,
            subcategory: info.data[key].subcategory,
            id: key
          })
        })
        commit('updateCategory', info.data)
        return cats
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
    CATEGORY: state => {
      return state.category
    },
    getShoesBySite: (state) => (id) => {
      console.log(id)
      return state.carts.find(shoe => shoe.id === id)
    }
  }
})
