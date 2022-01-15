import axios from 'axios'
import 'core-js'

const TOKEN = localStorage.getItem('token')
const API = 'http://novamarket.qwertyuz.ru/api/user/profile'

export default {
  state: {
    profile: {}
  },
  mutations: {
    loadUser (state, profile) {
      state.profile = profile
    }
  },
  actions: {
    async getUser ({ commit }) {
      const info = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
      })
      try {
        commit('loadUser', info.data.data)
        return info.data.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    LOADUSER: state => {
      return state.profile
    }
  }
}
