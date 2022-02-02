import axios from 'axios'

const TOKEN = localStorage.getItem('token')
const API = 'http://localhost:8080/api/user/profile'

export default {
  state: {
    profile: {},
    favorite: []
  },
  mutations: {
    loadUser (state, profile) {
      state.profile = profile
    },
    setFavorite (state) {
      state.favorite = state
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
    },
    async addFavorite ({ commit }, user) {
      console.log(user)
      const info = await axios
        .post('/api/product/set-favorite', {
          product_id: user
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        }
        )

      try {
        commit('loadUser', info.data.data)
        return info.data.data
      } catch (e) {
        console.log(e)
      }
    },
    async getFavorite ({ commit }) {
      const info = await axios
        .get('http://localhost:8080/api/product/favorites',
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              'Access-Control-Allow-Origin': '*'
            }
          }
        )
      try {
        commit('setFavorite', info.data)
        return info.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    LOADUSER: state => {
      return state.profile
    },
    LOADFAV: state => {
      return state.favorite
    }
  }
}
