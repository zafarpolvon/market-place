<template>
    <div class="cart__box shadow-xl">
        <div class="cart__image" @mouseover="listOne = true" @mouseleave="listOne = false">
            <img :src="cart.brand.photo" alt="">
            <router-link tag="span" @click.native="$router.go()" :key="cart.id" :to="{ name: 'Add', params: { id: cart.id }, }" v-if="listOne" @click="listOne = false" class="fast__review">просмотр</router-link>
            <span class="skidka">21 %</span>
            <icon-love :getFav="getFav" @favevent="favevent(cart.id)" />
        </div>
        <div class="cart__info">
            <div class="flex justify-between mt-3">
                <a class="cart__cat">{{ cart.category.name }}</a>
                <a class="cart__brand" href="#">{{ cart.brand.name }}</a>
            </div>
            <div class="cart__title">
                <router-link tag="a" @click.native="$router.go()" :key="cart.id" :to="{ name: 'Add', params: { id: cart.id }, }" >{{ cart.name.slice(0, 20) }}</router-link>
                <div class="cart__price">
                    <h5>{{ cart.price }} рубль</h5>
                    <p>{{ cart.price_old }} рубль</p>
                </div>
            </div>
            <div class="cart__add">
                <button @click="addCart(cart.id)">
                    <span>В корзину</span>
                    <svg class="cart__svg" width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.35 8.56208C26.134 8.23689 25.8247 7.96589 25.4523 7.77553C25.0799 7.58516 24.657 7.48192 24.225 7.47587H8.225L7.5 5.02104C7.42675 4.78408 7.26333 4.57564 7.03635 4.42968C6.80937 4.28373 6.5322 4.20885 6.25 4.21725H3.75C3.41848 4.21725 3.10054 4.33169 2.86612 4.53539C2.6317 4.7391 2.5 5.01538 2.5 5.30346C2.5 5.59154 2.6317 5.86782 2.86612 6.07152C3.10054 6.27523 3.41848 6.38966 3.75 6.38966H5.3L8.75 17.5341C8.82325 17.7711 8.98667 17.9796 9.21365 18.1255C9.44063 18.2715 9.7178 18.3463 10 18.3379H21.25C21.4808 18.3373 21.707 18.2812 21.9033 18.1757C22.0997 18.0703 22.2586 17.9197 22.3625 17.7405L26.4625 10.615C26.6402 10.2913 26.7229 9.93447 26.7033 9.57625C26.6837 9.21804 26.5623 8.86961 26.35 8.56208Z" fill="white"/>
                        <path d="M9.375 23.769C10.4105 23.769 11.25 23.0395 11.25 22.1397C11.25 21.2398 10.4105 20.5103 9.375 20.5103C8.33947 20.5103 7.5 21.2398 7.5 22.1397C7.5 23.0395 8.33947 23.769 9.375 23.769Z" fill="white"/>
                        <path d="M21.875 23.769C22.9105 23.769 23.75 23.0395 23.75 22.1397C23.75 21.2398 22.9105 20.5103 21.875 20.5103C20.8395 20.5103 20 21.2398 20 22.1397C20 23.0395 20.8395 23.769 21.875 23.769Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import IconLove from './Icon/IconLove.vue'

export default {
  props: ['cart', 'getFav'],
  data: () => ({
    listOne: false,
    love: false
  }),
  methods: {
    async addCart (id) {
      console.log(id)
      const info = {
        product_id: id,
        amount: 1
      }
      await this.$store.dispatch('addCart', info)
      await this.$store.dispatch('getCartItem')
    },
    async favevent (item) {
      await this.$store.dispatch('addFavorite', item)
    },
    deleteCart (item) {
      this.$store.commit('removeFromCart', item)
    }
  },
  components: {
    IconLove
  }
}
</script>
<style scoped>
    .cart__image {
        position: relative;
    }
    .cart__image img {
        width: 100%;
        height: 227px;
        object-fit: contain;
        object-position: 50% 50%;
        border-radius: 10px 10px 0 0;
        padding: 20px;
    }
    .cart__box {
        background: #FFFFFF;
        border-radius: 10px;
        height: 400px;
    }
    .cart__add {
        margin-top: 15px;
    }
    .cart__add button {
        display: flex;
        background: #ffffff;
        border: 1px solid #274784;
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        justify-content: center;
        color: #274784;
        font-weight: 500;
        padding: 10px 0;
    }
    .cart__add button svg path {
        fill: #274784;
    }
    .cart__add button:hover {
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        color: #ffffff;
    }
    .cart__add button:hover span{
        color: #FFF !important;
    }
    .cart__add button:hover svg path {
        fill: #ffffff;
    }
    .cart__add button svg {
        margin-left: 15px;
    }
    .cart__info {
        padding: 0 10px 15px 10px;
    }
    .cart__cat {
        font-size: 14px;
        line-height: 16px;
        color: #666666;
    }
    .cart__brand {
        font-size: 12px;
        line-height: 14px;
        color: #898989;
    }
    .cart__title {
        margin-top: 10px;
    }
    .cart__title a {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #023047;
        height: 40px;
    }
    .cart__price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .cart__price h5 {
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        color: #0052FF;
        margin-top: 10px;
    }
    .cart__price p {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-top: 14px;
        text-decoration: line-through;
    }
    .fast__review {
        position: absolute;
        top: 0;
        margin-top: 0px;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: #023047;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        background: #F8F8FA;
        border-radius: 25px;
        width: 50%;
        padding: 5px 0;
        text-align: center;
    }
    .skidka {
        position: absolute;
        bottom: 0;
        margin-top: 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #1F3798;
        right: 0;
        cursor: pointer;
        background: #fff;
        border-radius: 8px;
        width: 40px;
        padding: 5px 0;
        text-align: center;
        margin-right: 10px;
        margin-bottom: 10px
    }
    .cart__svg {
        width: 30px;
        height: 28px;
    }
    @media (min-width: 200px) and (max-width: 600px){
        .cart__image img {
            height: 160px;
        }
        .cart__add button {
            padding: 6px 0;
            font-size: 14px;
        }
        .cart__cat {
            font-size: 12px;
        }
        .cart__brand {
            font-size: 11.5px;
        }
        .cart__title {
            margin-top: 5px;
        }
        .cart__title a {
            display: block;
            font-size: 12.5px;
            line-height: 16px;
        }
        .cart__price {
            flex-direction: column;
        }
        .cart__price h5{
            margin-bottom: 5px;
        }
        .cart__price h5 {
            font-size: 13px;
            line-height: 13px;
            margin-top: 5px;
        }
        .cart__svg {
            width: 24px;
            height: 22px;
        }
        .skidka {
            font-size: 12px;
            line-height: 14px;
        }
        .cart__add {
            margin-top: 10px;
        }
        .cart__price p {
            margin-top: 0px;
            margin-left: 0;
        }
        .cart__box {
            height: auto;
        }
    }
</style>
