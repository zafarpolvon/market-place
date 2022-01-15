import axios from 'axios'

const TOKEN = window.localStorage.getItem('token')

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token.token
      state.user = token
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    async login ({ commit, dispatch }, user) {
      const info = await axios
        .post('http://novamarket.qwertyuz.ru/api/user/sign-in', {
          phone: user.phone,
          password: user.password
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        }
        )
      try {
        const token = info.data
        localStorage.setItem('token', token.token)
        axios.defaults.headers.common.Authorization = token
        commit('auth_success', token)
      } catch (err) {
        commit('auth_error')
        console.log(err)
        localStorage.removeItem('token')
      }
    },
    async register ({ commit }, user) {
      console.log(user)
      await axios
        .post('http://novamarket.qwertyuz.ru/api/user/sign-up', {
          name: user.name,
          phone: user.phone,
          password: user.password,
          device_id: user.device_id
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        }
        )
        .then(resp => {
          console.log(resp)
          const token = resp.data
          localStorage.setItem('token', token.token)
          axios.defaults.headers.common.Authorization = token
          commit('auth_success', token)
        })
        .catch(err => {
          commit('auth_error')
          console.log(err.response.data)
          localStorage.removeItem('token')
        })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
}
