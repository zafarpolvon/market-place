import axios from 'axios'

const TOKEN = localStorage.getItem('token')
export default {
  state: {
    korzina: []
  },
  mutations: {
    setCart (state, korzina) {
      state.korzina = korzina
    }
  },
  actions: {
    async addCart ({ commit }, cart) {
      const info = await axios
        .post('api/cart/add', {
          product_id: cart.product_id,
          amount: cart.amount
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
        return info.data.data
      } catch (e) {
        console.log(e)
      }
    },
    async getCartItem ({ commit }) {
      const info = await axios
        .get('/api/cart',
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              'Access-Control-Allow-Origin': '*'
            }
          }
        )
      try {
        commit('setCart', info.data.data)
        return info.data.data
      } catch (e) {
        console.log(e)
      }
    },
      async removeCartItem ({ commit }, item) {
          const info = await axios
              .post('/api/cart/remove',{
                      product_id: item
                  },
                  {
                      headers: {
                          Authorization: `Bearer ${TOKEN}`,
                          'Access-Control-Allow-Origin': '*'
                      }
                  }
              )
          try {
              commit('setCart', info.data.data)
              return info.data.data
          } catch (e) {
              console.log(e)
          }
      }
  },
  getters: {
    CART_INFO: state => {
      return state.korzina
    }
  }
}
