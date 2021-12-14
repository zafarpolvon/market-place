/* eslint-disable no-useless-catch */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = `http://izleshop.uz/api/getProducts`
const CATEGORY = `http://localhost:3000/category`
const ID = `http://izleshop.uz/api/getProductDetails?id=`
let cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    carts: [],
    category: []
  },
  mutations: {
    addToCart (state, product) {
      let isProductExists = false
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.name === product.name) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          return state.cart.push(product)
        }
      } else {
        return state.cart.push(product)
      }
      this.commit('saveData')
    },
    removeFromCart (state, item) {
      let product = state.cart.findIndex(c => c.id === item)
      state.cart.splice(product, 1)
      this.commit('saveData')
    },
    updateCart (state, carts) {
      state.carts = carts
    },
    updateCategory (state, category) {
      state.category = category
    },
    saveData (state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
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
    },
    PRODUCTS: state => {
      return state.cart
    }
  }
})
