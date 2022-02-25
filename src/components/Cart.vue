<template>
    <div class="cart__box shadow-xl">
        <div class="cart__image" @mouseover="listOne = true" @mouseleave="listOne = false">
            <img :src="cart.photo" alt="not found">
            <!-- <router-link tag="span" @click.native="$router.go()" :key="cart.id" :to="{ name: 'Add', params: { id: cart.id }, }" v-if="listOne" @click="listOne = false" class="fast__review">Быстрый просмотр</router-link> -->
            <span class="skidka">21 %</span>
            <icon-love v-if="!favorite" v-on:click.native="saveCart" :love="love" />
            <icon-trash v-else v-on:click.native="deleteCart(cart.id)" />
        </div>
        <div class="cart__info">
            <div class="flex justify-between mt-3">
                <a class="cart__cat">Lorem ipsum dolor</a>
                <a class="cart__brand" href="#">Nike</a>
            </div>
            <div class="cart__title">
                <router-link tag="a" @click.native="$router.go()" :key="cart.id" :to="{ name: 'Add', params: { id: cart.id }, }" >{{ cart.name.slice(0, 20) }}</router-link>
                <div class="cart__price">
                    <h5>1400 Сум</h5>
                    <p>2000 Сум</p>
                </div>
            </div>
            <div class="cart__add">
                <button><span>В корзину</span></button>
                <router-link tag="a" to="/basket" class="buy">Купить</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import IconLove from './Icon/IconLove.vue'
import IconTrash from './Icon/IconTrash.vue'

export default {
  props: ['cart', 'favorite'],
  data: () => ({
    listOne: false,
    love: false
  }),
  methods: {
    saveCart () {
      const addShoes = {
        image: this.cart.image,
        price: this.cart.price,
        name: this.cart.name,
        id: this.cart.id
      }
      this.$store.commit('addToCart', addShoes)
      this.$store.commit('saveData')
    },
    deleteCart (item) {
      this.$store.commit('removeFromCart', item)
    }
  },
  components: {
    IconLove,
    IconTrash
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
        min-height: 400px;
    }
    .shadow-xl{
        transition: 0.3s linear;
    }
    .shadow-xl:hover{
        box-shadow: none;
    }
    .cart__add {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cart__add button {
        display: flex;
        background: #131E3D;
        border-radius: 8px;
        width: 48%;
        font-size: 16px;
        justify-content: center;
        color: #fff;
        font-weight: 500;
        padding: 10px 0;
    }
    .cart__add .buy{
        width: 48%;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 0;
        text-align: center;
        background: rgba(238, 73, 39, 0.6);
        border-radius: 8px;
        cursor: pointer;
    }
    .cart__add .buy:hover{
        background: #EE4927;
    }
    .cart__add button:hover {
        background: #11113d;
        color: #ffffff;
    }
    .cart__add button:hover span{
        color: #FFF !important;
    }
    .cart__info {
        padding: 0 10px 15px 10px;
    }
    .cart__cat {
        font-size: 14px;
        line-height: 16px;
        color: #999;
    }
    .cart__brand {
        font-size: 12px;
        line-height: 14px;
        color: #999;
    }
    .cart__title {
        margin-top: 10px;
    }
    .cart__title a {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #313131;
        height: 40px;
    }
    .cart__title a:hover{
        color: #919191;
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
        color: #313131;
        margin-top: 10px;
    }
    .cart__price p {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-top: 14px;
        color: #EE4927;
        text-decoration: line-through;
    }
    .fast__review {
        position: absolute;
        top: 0;
        margin-top: 0px;
        font-weight: normal;
        font-size: 12px !important;
        line-height: 22px;
        color: #023047;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        background: #F8F8FA;
        border-radius: 25px;
        width: max-content;
        padding: 5px 10px;
        text-align: center;
        white-space: nowrap;
    }
    .skidka {
        position: absolute;
        bottom: 0;
        margin-top: 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #fff;
        right: 0;
        cursor: pointer;
        background: rgba(238, 73, 39, 0.2);
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
            padding: 0;
        }
        .cart__add{
            flex-direction: column;
        }
        .cart__add button {
            font-size: 12px;
            padding: 4px;
            margin-bottom: 5px;
            border-radius: 3px;
            width: 100%;
        }
        .cart__add .buy{
            width: 100%;
            padding: 4px;
            border-radius: 3px;
            font-size: 12px;
        }
        .cart__add button span{
            font-size: 12px;
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
            min-height: 350px;
        }
    }
</style>
