<template>
    <div class="navbar__back">
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="flex justify-between py-2 relative">
                <div class="flex navbar__text ">
                    <a href="#" class="flex img-center">
                        <img src="../../assets/image/Vector (27).png" alt="">
                        <select name="" id="">
                            <option value="">Ташкент</option>
                            <option value="">Ташкент</option>
                            <option value="">Ташкент</option>
                        </select>
                        
                    </a>
                    <router-link tag="a" class="sale" to="/seller">Продавайте на Birmakon</router-link>
                    <router-link tag="a" class="delivery" to="/delivery">Доставка</router-link>
                    <div class="call">Call center: +998 (98) 989-98-98</div>
                </div>
                <div class="flex navbar__text">
                    <a href="#">
                        <select>
                            <option value="USD">USD</option>
                            <option value="RUB">RUB</option>
                            <option value="UZS">UZS</option>
                        </select>
                    </a>
                    <a class="ml-4 navbar__category" href="#">
                        <select>
                            <option value="RU">Ру</option>
                            <option value="UZ">Уз</option>
                            <option value="EN">Ен</option>
                        </select>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 mt-0 xl:mt-3 md:mt-3">
                <div class="col-span-2 flex navbar__category">
                    <div class="navbar__logo">
                        <a href="/"><img class="navbar__logo" src="../../assets/image/BR 3443-01 2.png" alt="LOGO"></a>
                    </div>
                    <div class="category__button ml-10 relative">
                        <button @click="categoryToggle" class="items-center relative">
                            <svg v-if="!category" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.28955" y="1.14062" width="4.26316" height="4.11156" rx="2.05578" fill="#131E3D" stroke="#131E3D"/>
                                <rect x="9.18262" y="1.14062" width="4.26316" height="4.11156" rx="2.05578" fill="#131E3D" stroke="#131E3D"/>
                                <rect x="1.28955" y="8.80859" width="4.26316" height="4.11156" rx="2.05578" fill="#131E3D" stroke="#131E3D"/>
                                <rect x="9.18262" y="8.80859" width="4.26316" height="4.11156" rx="2.05578" fill="#131E3D" stroke="#131E3D"/>
                            </svg>
                            <i v-else class="fas fa-times"></i>
                            <span class="px-2">Категории</span>
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.134277 0.117188L5.39743 5.22875L10.6606 0.117188" fill="#131E3D"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="col-span-3 media-ml">
                    <div class="relative search__input">
                        <input @click="closeCategory" type="search" v-model="searchweb" class="py-2 w-full text-sm text-white rounded-md pl-4 pr-12 text-gray-900" placeholder="Я ищу..." autocomplete="off">
                        <transition name="fade">
                            <search-web v-if="searchweb.length > 2" />
                        </transition>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button type="submit" class="p-1 focus:shadow-outline">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0052 11.9139L20.6093 16.7837C20.8063 16.955 20.9169 17.1873 20.9168 17.4294C20.9167 17.6716 20.8059 17.9038 20.6088 18.0749C20.4117 18.2461 20.1444 18.3422 19.8657 18.3421C19.5871 18.342 19.3199 18.2458 19.1229 18.0745L13.5187 13.2046C11.8434 14.3322 9.73671 14.8628 7.62718 14.6885C5.51764 14.5143 3.56374 13.6482 2.16296 12.2665C0.762183 10.8849 0.0197434 9.09137 0.0866824 7.25092C0.153621 5.41046 1.02491 3.66129 2.5233 2.35924C4.02169 1.05719 6.03463 0.300066 8.15261 0.241899C10.2706 0.183731 12.3345 0.828885 13.9246 2.04612C15.5146 3.26335 16.5112 4.96122 16.7118 6.79433C16.9123 8.62744 16.3017 10.4581 15.0041 11.9139H15.0052ZM8.41663 12.9105C10.0742 12.9105 11.6639 12.3383 12.836 11.3198C14.0081 10.3012 14.6666 8.91983 14.6666 7.47943C14.6666 6.03903 14.0081 4.65762 12.836 3.63911C11.6639 2.62059 10.0742 2.04839 8.41663 2.04839C6.75902 2.04839 5.16931 2.62059 3.99721 3.63911C2.82511 4.65762 2.16663 6.03903 2.16663 7.47943C2.16663 8.91983 2.82511 10.3012 3.99721 11.3198C5.16931 12.3383 6.75902 12.9105 8.41663 12.9105Z" fill="#131E3D" fill-opacity="0.5"/>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="flex navbar__icons">
                        <router-link to="/ratingcart" tag="a" class="flex flex-col justify-between">
                            <!-- <img class="h-6 flex flex-row items-center" src="../../assets/svg/delivery.svg" alt=""> -->
                            <svg class="h-6 flex flex-row items-center mx-auto" width="26" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5127 0.5C2.1002 0.5 0.137695 2.4625 0.137695 4.875C0.137695 6.85 1.4627 8.50375 3.2627 9.04625V17.9963C3.26145 18.22 3.29645 20.2225 4.7302 21.66C5.6152 22.55 6.8002 23 8.25019 23V25.5L13.2502 21.75L8.25019 18V20.5C5.97145 20.5 5.7702 18.5825 5.7627 18V9.04625C7.5627 8.50375 8.8877 6.85 8.8877 4.875C8.8877 2.4625 6.92395 0.5 4.5127 0.5ZM4.5127 6.75C3.47895 6.75 2.6377 5.90875 2.6377 4.875C2.6377 3.84125 3.47895 3 4.5127 3C5.54645 3 6.3877 3.84125 6.3877 4.875C6.3877 5.90875 5.54645 6.75 4.5127 6.75ZM20.7627 16.9538V7.99625C20.7564 5.98875 19.4164 3 15.7502 3V0.5L10.7502 4.25L15.7502 8V5.5C18.0364 5.5 18.2514 7.42375 18.2627 8V16.9538C16.4627 17.4963 15.1377 19.15 15.1377 21.125C15.1377 23.5375 17.1002 25.5 19.5127 25.5C21.9252 25.5 23.8877 23.5375 23.8877 21.125C23.8877 19.15 22.5627 17.4963 20.7627 16.9538ZM19.5127 23C18.4789 23 17.6377 22.1588 17.6377 21.125C17.6377 20.0912 18.4789 19.25 19.5127 19.25C20.5464 19.25 21.3877 20.0912 21.3877 21.125C21.3877 22.1588 20.5464 23 19.5127 23Z" fill="#131E3D"/>
                            </svg>
                            <span>Сравнить</span>
                        </router-link>
                        <router-link to="/selected" tag="a" class="flex flex-col justify-between">
                            <span v-if="product > 0" class="count__navbar1">{{ product }}</span>
                            <span v-else class="count__navbar1">0</span>
                            <!-- <img class="h-5 flex flex-row items-center" src="../../assets/svg/saved.svg" alt=""> -->
                            <svg class="h-6 flex flex-row items-center mx-auto" width="26" height="26" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.618 0.488281C16.1995 0.488281 14.133 2.21213 12.9976 3.40059C11.8622 2.21213 9.80031 0.488281 7.383 0.488281C3.21646 0.488281 0.307617 3.39251 0.307617 7.54982C0.307617 12.1306 3.92031 15.0914 7.41531 17.9552C9.06531 19.3087 10.773 20.7071 12.0826 22.2579C12.303 22.5175 12.6261 22.6675 12.9653 22.6675H13.0322C13.3726 22.6675 13.6945 22.5164 13.9138 22.2579C15.2257 20.7071 16.9322 19.3075 18.5834 17.9552C22.0772 15.0925 25.6922 12.1317 25.6922 7.54982C25.6922 3.39251 22.7834 0.488281 18.618 0.488281Z" fill="#131E3D"/>
                            </svg>
                            <span>Избранные</span>
                        </router-link>
                        <router-link tag="a" to="/basket" class="flex flex-col justify-between">
                            <span class="count__navbar2">2</span>
                            <!-- <img class="h-7 flex flex-row items-center" src="../../assets/svg/cart.svg" alt=""> -->
                            <svg class="h-6 flex flex-row items-center mx-auto" width="26" height="26" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.35 4.56031C24.134 4.23512 23.8247 3.96412 23.4523 3.77376C23.0799 3.58339 22.657 3.48015 22.225 3.4741H6.225L5.5 1.01927C5.42675 0.782305 5.26333 0.573868 5.03635 0.427912C4.80937 0.281956 4.5322 0.207081 4.25 0.215481H1.75C1.41848 0.215481 1.10054 0.32992 0.866116 0.533623C0.631696 0.737327 0.5 1.01361 0.5 1.30169C0.5 1.58977 0.631696 1.86605 0.866116 2.06975C1.10054 2.27346 1.41848 2.38789 1.75 2.38789H3.3L6.75 13.5324C6.82325 13.7693 6.98667 13.9778 7.21365 14.1237C7.44063 14.2697 7.7178 14.3446 8 14.3362H19.25C19.4808 14.3356 19.707 14.2794 19.9033 14.174C20.0997 14.0685 20.2586 13.9179 20.3625 13.7388L24.4625 6.61324C24.6402 6.28957 24.7229 5.9327 24.7033 5.57448C24.6837 5.21627 24.5623 4.86784 24.35 4.56031Z" fill="#131E3D"/>
                                <path d="M7.375 19.7664C8.41053 19.7664 9.25 19.037 9.25 18.1371C9.25 17.2373 8.41053 16.5078 7.375 16.5078C6.33947 16.5078 5.5 17.2373 5.5 18.1371C5.5 19.037 6.33947 19.7664 7.375 19.7664Z" fill="#131E3D"/>
                                <path d="M19.875 19.7664C20.9105 19.7664 21.75 19.037 21.75 18.1371C21.75 17.2373 20.9105 16.5078 19.875 16.5078C18.8395 16.5078 18 17.2373 18 18.1371C18 19.037 18.8395 19.7664 19.875 19.7664Z" fill="#131E3D"/>
                            </svg>
                            <span>Корзина</span>
                        </router-link>
                        <router-link @click.native="$router.go()" tag="a" to="/info"  class="flex flex-col justify-between navbar__category">
                            <li class="flex flex-col justify-between navbar__category" @mouseover="listOne = true" @mouseleave="listOne = false">
                                <!-- <img class="h-5 flex flex-row items-center" src="../../assets/svg/user.svg" alt=""> -->
                                <svg class="h-6 flex flex-row items-center mx-auto" width="26" height="26" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.625 5.01684C5.625 7.71172 8.14875 9.90477 11.25 9.90477C14.3512 9.90477 16.875 7.71172 16.875 5.01684C16.875 2.32196 14.3512 0.128906 11.25 0.128906C8.14875 0.128906 5.625 2.32196 5.625 5.01684ZM21.25 20.7668H22.5V19.6806C22.5 15.489 18.5737 12.0772 13.75 12.0772H8.75C3.925 12.0772 0 15.489 0 19.6806V20.7668H21.25Z" fill="#131E3D"/>
                                </svg>
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
                    <a href="/"><img class="h-8 my-3" src="../../assets/image/BR 3443-01 2.png" alt=""></a>
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
                    <svg class="bars__menu" @click="showMenu" width="32" height="24" viewBox="0 0 32 24" fill="#131E3D" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H30" stroke="#131E3D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H30" stroke="#131E3D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 22H30" stroke="#131E3D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
export default {
  name: 'Home',
  data: () => ({
    listOne: false,
    search: true,
    category: false,
    searchweb: ''
  }),
  methods: {
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
    product () {
      return this.$store.getters.PRODUCTS.length
    },
    getUser () {
      return this.$store.getters.LOADUSER
    }
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
        background: #FFF;
    }
    .margin__hover {
        margin-top: 10px;
    }
    .navbar__text a {
        font-size: 14px;
        line-height: 25px;
        color: #131E3D;
    }
    .navbar__text a img{
        margin-right: 5px;
        object-fit: contain;
    }
    .navbar__text .sale, .navbar__text .delivery{
        background: #131E3D;
        color: #fff;
        text-align: center;
        padding: 2px 12px;
        margin-left: 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .navbar__text .sale:hover, .navbar__text .delivery:hover{
        background: #11113D;
    }
    .navbar__text .call{
        font-size: 14px;
        color: #131E3D;
        margin-left: 12px;
        align-self: center;
    }
    .img-center{
        align-items: center;
    }
    .search__input{
        background: rgba(19, 30, 61, 0.1);
        border-radius: 8px;
        position: relative;
    }
    .search__input input::placeholder {
        color: rgba(19, 30, 61, 0.5);
    }
    .search__input input {
        background: transparent;
        border-radius: 8px;
        border: 1px solid transparent;
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
        margin-bottom: 17px;
    }
    .category__button button {
        display: flex;
        flex-direction: row;
        width: 100%;
        border: 1px solid #131E3D;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 16px;
        line-height: 16px;
        color: #131E3D;
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
        background: #EE4927;
        color: #FFF;
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
        background: #EE4927;
        color: #FFF;
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
        background: #131E3D;
        padding: 10px 15px 10px 15px;
    }
    .profile__title {
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #fff;
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
        color: #131E3D;
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
        min-width: 215px;
        margin-top: -3px;
    }

    @media (min-width: 1500px){
        .media-ml{
            margin-left: 2rem;
        }
    }

    @media (min-width: 1200px) and (max-width: 1500px){
        .navbar__icons{
            padding-left: 0px;
        }
        .media-ml{
            margin-left: 4rem;
        }
        .category__button{
            margin-left: 1.5rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .navbar__icons{
            padding-left: 0;
        }
        .category__button.ml-12{
            margin-left: 1.5rem;
        }
    }

    @media (max-width: 1300px){
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
            fill: #131E3D;
            margin-right: 12px;
        }
        .menu__mobile .navbar__menu svg:nth-child(2){
            fill: #131E3D;
            margin-right: 12px;
        }
        .menu__mobile .menu__logo svg{
            fill: #131E3D;
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
