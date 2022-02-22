<template>
    <div class="navbar__back">
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="flex justify-between py-2 relative">
                <div class="flex navbar__text ">
                    <a href="#" class="flex">
                        <img src="../../assets/svg/location.svg" alt="">
                        <span class="">Москва</span>
                    </a>
                </div>
                <div class="flex navbar__text">
                    <a href="#">
                        Продавайте на NovaMarkt
                    </a>
                    <a class="ml-4 navbar__category" href="#">Ру</a>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 mt-0 xl:mt-3 md:mt-3">
                <div class="col-span-2 flex navbar__category">
                    <div class="navbar__logo">
                        <a href="/"><img class="navbar__logo" src="../../assets/image/logo.png" alt=""></a>
                    </div>
                    <div class="category__button ml-10">
                        <button @click="categoryToggle" class="items-center">
                            <img v-if="!category" class="" src="../../assets/svg/menu.svg" alt="">
                            <i v-else class="fas fa-times"></i>
                            <span class="px-2">Категории</span>
                            <img class="" src="../../assets/svg/dropdown.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="relative search__input">
                        <input @click="closeCategory" type="search" v-model="searchweb" class="py-2 w-full text-sm text-white rounded-md pl-4 pr-12 text-gray-900" placeholder="Я ищу" autocomplete="off">
                        <transition name="fade">
                            <search-web v-if="searchweb.length > 2" />
                        </transition>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button type="submit" class="p-1 focus:shadow-outline">
                                <img src="../../assets/svg/search.svg" alt="">
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="flex navbar__icons">
                        <router-link to="/delivery" tag="a" class="flex flex-col justify-between">
                            <img class="h-6 flex flex-row items-center" src="../../assets/svg/delivery.svg" alt="">
                            <span>Доставка</span>
                        </router-link>
                        <router-link to="/selected" tag="a" class="flex flex-col justify-between">
                            <span class="count__navbar1">{{ getFav.length }}</span>
                            <img class="h-5 flex flex-row items-center" src="../../assets/svg/saved.svg" alt="">
                            <span>Избранные</span>
                        </router-link>
                        <router-link tag="a" to="/basket" class="flex flex-col justify-between">
                            <span class="count__navbar2">{{ cartProduct.length }}</span>
                            <img class="h-7 flex flex-row items-center" src="../../assets/svg/cart.svg" alt="">
                            <span>Корзина</span>
                        </router-link>
                        <router-link @click.native="$router.go()" tag="a" to="/info"  class="flex flex-col justify-between navbar__category">
                            <li class="flex flex-col justify-between navbar__category" @mouseover="listOne = true" @mouseleave="listOne = false">
                                <img class="h-5 flex flex-row items-center" src="../../assets/svg/user.svg" alt="">
                                <span class="margin__hover">Войти</span>
                                <transition name="fade">
                                    <div v-if="listOne" @mouseleave="listOne = false" @click="listOne = false" class="profile__dropdown">
                                        <a  href="#" class="profile__header">
                                            <div class="profile__image">
                                                <img src="../../assets/image/carbon_user-avatar-filled-alt.png" alt="">
                                            </div>
                                            <div class="profile__title">
                                                <h5>{{ getUser.name || 'Нету данных' }}</h5>
                                            </div>
                                        </a>
                                        <div class="profile__bottom">
                                            <ul class="profile__ul">
                                                <li class="profile__item">
                                                    <router-link to="/basket" tag="a" >
                                                        <i class="fas fa-chevron-right"></i>
                                                        Мои заказы
                                                    </router-link>
                                                </li>
                                                <li class="profile__item">
                                                    <router-link tag="a" to="/payments">
                                                        <i class="fas fa-chevron-right"></i>
                                                        Мои платежи
                                                    </router-link>
                                                </li>
                                                <li class="profile__item">
                                                    <router-link tag="a" to="/message">
                                                        <i class="fas fa-chevron-right"></i>
                                                        Мои сообщения
                                                    </router-link>
                                                </li>
                                                <li class="profile__item">
                                                    <router-link tag="a" to="/selected">
                                                        <i class="fas fa-chevron-right"></i>
                                                        Избранные товара
                                                    </router-link>
                                                </li>
                                                <li class="profile__item">
                                                    <router-link tag="a" to="/info">
                                                        <i class="fas fa-chevron-right"></i>
                                                        Мои данные
                                                    </router-link>
                                                </li>
                                                <li class="profile__item">
                                                    <a @click="logout" href="#">
                                                        <i class="fas fa-chevron-right"></i>
                                                        Выйти
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </li>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="menu__mobile">
                <div class="menu__logo">
                    <a href="/"><img class="h-8 my-3" src="../../assets/image/logo.png" alt=""></a>
                </div>
                <div class="navbar__menu">
                    <router-link tag="a" to="/basket">
                        <svg width="28px" height="28px" fill="#111" viewBox="0 0 24 24">
                            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                        </svg>
                    </router-link>
                    <svg @click="showSearch" class="pre-search-input-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
                        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                    </svg>
                    <svg @click="showMenu" width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 22H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <Menu />
        <Search />
        <Category v-show="category" />
    </div>
</template>
<script>
import Menu from './Menu.vue'
import Search from '../modal/Search.vue'
import Category from '../Category.vue'
import SearchWeb from '../SearchWeb.vue'
import axios from "axios";
export default {
  name: 'Home',
  data: () => ({
    listOne: false,
    search: true,
    category: false,
    searchweb: '',
    test: [],
      cartItem:[]
  }),

  methods: {
      async getCartItem () {
          try {
              await axios
                  .get(this.$_http + 'api/news', )
                  .then(response => {
                      this.news = response.data.data;
                  })
          }
          catch (e){
              this.errorNotify(e.response.data)
          }


      },

    mouseEnter () {
      this.toShowOnHover = !this.toShowOnHover
    },
    mouseLeave () {
      this.toShowOnHover = !this.toShowOnHover
    },
    showSearch () {
      this.$modal.show('Modal-Search')
    },
    showMenu () {
      this.$modal.show('Modal-Menu')
    },
    categoryToggle () {
      this.category = !this.category
      this.searchWeb = ''
    },
    closeAll () {
      this.searchWeb = ''
    },
    closeCategory () {
      this.category = false
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    cartProduct () {
      return this.$store.getters.CART_INFO
    },
    getUser () {
      return this.$store.getters.LOADUSER.data
    },
      getFav(){
          return this.$store.getters.LOADFAV

      }
  },
    created() {
        this.$store.dispatch('getCartItem')
        console.log(this.$store.getters.LOADFAV)
    },
    components: {
    Menu,
    Search,
    Category,
    SearchWeb
  }
}
</script>
<style scoped>
    .navbar__back {
        background: linear-gradient(270.08deg, #003AA8 0.04%, #022C7F 47.91%, #051E53 99.93%);
    }
    .margin__hover {
        margin-top: 10px;
    }
    .navbar__text a {
        font-size: 14px;
        line-height: 25px;
        color: #fff;
    }
    .navbar__text a img{
        margin-right: 5px;
    }
    .search__input{
        border-radius: 8px;
        position: relative;
    }
    .search__input input::placeholder {
        color: #fff;
    }
    .search__input input {
        background: transparent;
        border-radius: 8px;
        border: 1px solid #fff;
        height: 40px;
    }
    .search__input input:focus {
        outline: none !important;
        background: #FFF !important;
    }
    .navbar__icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 40px;
    }
    .navbar__icons a span {
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
        margin-bottom: 17px;
    }
    .category__button button {
        display: flex;
        flex-direction: row;
        width: 100%;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 16px;
        line-height: 16px;
        color: #FFFFFF;
        height: 40px;
    }
    .navbar__logo {
        font-size: 20px;
        color: #ffffff;
        padding: 0;
    }
    .count__navbar1 {
        position: absolute;
        margin-left: 40px;
        margin-top: -8px;
        width: 20px;
        height: 20px;
        padding-top: 3px;
        text-align: center;
        border-radius: 50%;
        background: #FC7D00;
    }
    .count__navbar2 {
        position: absolute;
        margin-top: -8px;
        margin-left: 30px;
        width: 20px;
        height: 20px;
        padding-top: 3px;
        text-align: center;
        border-radius: 50%;
        background: #FC7D00;
    }
    .login__hover {
        position: absolute;
        right: 0;
    }
    .profile__dropdown {
        position: absolute;
        background: #ffffff;
        z-index: 9999;
        margin-top: 60px;
        margin-left: -160px;
    }
    .profile__header {
        display: flex;
        flex-direction: row;
        background: linear-gradient(270.08deg, #074BCE 0.04%, #022C7F 47.91%, #00329D 99.93%);
        padding: 10px 15px 10px 15px;
    }
    .profile__title {
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #D9D9D9;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    .profile__bottom {
        position: relative;
        padding: 15px 15px;
        z-index: 9999;
    }
    .profile__ul {
        padding-left: 5px;
    }
    .profile__item {
        margin-top: 5px;
    }
    .profile__item a {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #565656;
    }
    .profile__item a:hover {
        color: #274784;
    }
    .profile__item a i {
        margin-right: 5px;
    }
    .hover__circle {
        position: absolute;
        width: 60px;
        height: 20px;
        background: #F8F8F8;
        border-radius: 50%;
        left: 0;
        right: 0;
        margin: -50px auto 0 auto;
        z-index: 0;
    }
    .menu__mobile{
        display: none;
    }
    .menu__responsive {
        display: none;
    }
    .navbar__logo {
        height: 35px;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .navbar__icons{
            padding-left: 0;
        }
        .category__button.ml-12{
            margin-left: 1.5rem;
        }
    }

    @media (max-width: 930px){
        .navbar__icons a{
            display: none !important;
        }
        .navbar__category{
            display: none !important;
        }
        .grid.grid-cols-7.gap-4.mt-3.pb-5 .col-span-3{
            display: none !important;
        }
        .navbar__icons{
            padding-left: 0;
            justify-content: end;
            padding-right: 65px;
        }
        .flex.navbar__text:first-child{
            display: none !important;
        }
        .grid.grid-cols-7.gap-4.mt-3{
            display: none !important;
        }
        .flex.navbar__text:last-child a:first-child{
            display: none !important;
        }
        .flex.navbar__text .ml-4{
            display: none !important;
        }
        .grid.grid-cols-7.gap-4.mt-3.pb-5{
            display: none !important;
        }
        .navbar__back .container{
            position: relative !important;
        }
        .flex.justify-between.py-2{
            position: absolute;
            padding: 0;
            right: 50px;
            top: 20px;
        }
        .menu__mobile .fa.fa-bars{
            display: block;
            color: #FFF;
            font-size: 28px;
        }
        .menu__mobile{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .menu__mobile .navbar__menu{
            display: flex;
            align-items: center;
        }
        .menu__mobile .navbar__menu .fa.fa-bars{
            margin-left: 1rem;
        }
        .menu__mobile .navbar__menu svg:first-child{
            fill: #FFF;
            margin-right: 12px;
        }
        .menu__mobile .navbar__menu svg:nth-child(2){
            fill: #FFF;
            margin-right: 12px;
        }
        .menu__mobile .menu__logo svg{
            fill: #FFF;
        }
        .menu__responsive {
            display: block;
        }
        .md\:mt-3{
            margin-top: 0 !important;
        }
        .menu__responsive{
            width: 0 !important;
        }
        .navbar__back{
            position: relative !important;
        }
        .grid.grid-cols-7.gap-4.mt-0 .col-span-3{
            display: none;
        }
        .responsive__logo{
            padding-left: 0 !important;
        }
        .responsive__logo svg{
            margin: auto !important;
        }
        .menu__responsive .user__name{
            background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        }
        .menu__responsive .profile__title{
            font-size: 13px;
            margin-left: 0;
        }
        .pb-1.pt-4{
            color: #D1D1D1;
        }
        .menu__responsive .my__profile{
            display: flex;
            align-items: center;
        }
        .menu__responsive .goods{
            display: flex;
            align-items: center;
        }
        .menu__responsive .management{
            display: flex;
            align-items: center;
        }
        .menu__responsive .arrow-right{
            margin-left: 15px;
            width: 16px;
            height: 16px;
            align-self: center;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .fa.fa-bars.navbar__menu{
            font-size: 28px;
            top: 18px;
            left: 1rem;
        }
        .flex.justify-between.py-2{
            right: 1rem;
        }
        .navbar__icons{
            padding-right: 10px;
        }
    }

    @media (max-width: 415px){
        .fa.fa-bars.navbar__menu{
            font-size: 28px;
            top: 18px;
            left: 20px;
        }
        .flex.justify-between.py-2{
            right: 20px;
        }
        .navbar__icons{
            padding-right: 40px;
        }
        .menu__responsive .arrow-right{
            margin-left: auto;
        }
    }

    @media (max-width: 376px){
        .fa.fa-bars.navbar__menu{
            font-size: 28px;
            top: 18px;
            left: 15px;
        }
        .flex.justify-between.py-2{
            right: 15px;
        }
        .navbar__icons{
            padding-right: 40px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
