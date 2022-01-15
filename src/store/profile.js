import axios from 'axios'
import 'core-js'

const TOKEN = localStorage.getItem('token')
const API = 'http://localhost:8080/api/user/profile'

export default {
  state: {
  },
  mutations: {
    loadUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async getUser ({ commit }) {
      const info = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
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

  }
}
