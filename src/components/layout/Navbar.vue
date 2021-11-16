<template>
    <div class="navbar__back">
        <div class="container mx-auto px-12">
            <div class="flex justify-between py-2 relative">
                <div class="flex navbar__text ">
                    <a href="#" class="flex">
                        <img src="../../assets/svg/location.svg" alt="">
                        <span class="">Москва</span>
                    </a>
                    <a class="ml-4" href="#">Бесплатная доставка</a>
                </div>
                <div class="flex navbar__text">
                    <a href="#">
                        Продавайте на LogoName
                    </a>
                    <a class="ml-4 navbar__category" href="#">Ру</a>
                </div>
            </div>
            <div class="grid grid-cols-7 gap-4 mt-0 xl:mt-3 md:mt-3">
                <div class="col-span-2 flex navbar__category">
                    <div class="navbar__logo">
                        <a href="/">LOGO</a>
                    </div>
                    <div class="category__button ml-12">
                        <button class="flex items-center">
                            <img class="mr-3" src="../../assets/svg/menu.svg" alt="">
                            <span>Категории</span>
                            <img class="ml-3" src="../../assets/svg/dropdown.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="relative search__input">
                        <input type="search"  class="py-2 w-full text-sm text-white rounded-md pl-4 pr-12" placeholder="Я ищу" autocomplete="off">
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button type="submit" class="p-1 focus:shadow-outline">
                                <img src="../../assets/svg/search.svg" alt="">
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="flex navbar__icons">
                        <a href="#" class="flex flex-col justify-between">
                            <img class="h-6 flex flex-row items-center" src="../../assets/svg/delivery.svg" alt="">
                            <span>Доставка</span>
                        </a>
                        <a href="#" class="flex flex-col justify-between">
                            <span class="count__navbar1">2</span>
                            <img class="h-5 flex flex-row items-center" src="../../assets/svg/saved.svg" alt="">
                            <span>Избранные</span>
                        </a>
                        <router-link tag="a" to="/basket" class="flex flex-col justify-between">
                            <span class="count__navbar2">2</span>
                            <img class="h-7 flex flex-row items-center" src="../../assets/svg/cart.svg" alt="">
                            <span>Корзина</span>
                        </router-link>
                        <a @mouseover="listOne = true" @mouseleave="listOne = false"  href="#" class="flex flex-col justify-between navbar__category">
                            <img class="h-5 flex flex-row items-center" src="../../assets/svg/user.svg" alt="">
                            <span class="margin__hover">Войти</span>
                            <div v-if="listOne" @mouseleave="listOne = false" @click="listOne = false" class="profile__dropdown">
                                <a href="#" class="profile__header">
                                    <div class="profile__image">
                                        <img src="../../assets/image/carbon_user-avatar-filled-alt.png" alt="">
                                    </div>
                                    <div class="profile__title">
                                        <h5>Mironshoh Nasimov</h5>
                                    </div>
                                </a>
                                <div class="profile__bottom">
                                    <ul class="profile__ul">
                                        <li class="profile__item">
                                            <a href="#">
                                                <i class="fas fa-chevron-right"></i>
                                                Мои заказы
                                            </a>
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
                                            <a href="#">
                                                <i class="fas fa-chevron-right"></i>
                                                Избранные товара
                                            </a>
                                        </li>
                                        <li class="profile__item">
                                            <router-link tag="a" to="/info">
                                                <i class="fas fa-chevron-right"></i>
                                                Мои данные
                                            </router-link>
                                        </li>
                                        <li class="profile__item">
                                            <a href="#">
                                                <i class="fas fa-chevron-right"></i>
                                                Выйти
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hover__circle"></div>
                            </div>
                        </a>
                    </div>
                    <div class="menu__responsive">
                        <Menu :closeOnNavigation="true" right>
                            <a class="cursor-pointer" id="home" @click="openModal">
                                <span>test</span>
                            </a>
                            <router-link to="/" id="home">
                                <span>test</span>
                            </router-link>
                            <router-link to="/" id="home">
                                <span>test</span>
                            </router-link>
                            <router-link to="/" id="home">
                                <span>test</span>
                            </router-link>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from './Menu.vue'
export default {
  name: 'Home',
  data: () => ({
    listOne: false
  }),
  methods: {
    mouseEnter () {
      this.toShowOnHover = !this.toShowOnHover
    },
    mouseLeave () {
      this.toShowOnHover = !this.toShowOnHover
    }
  },
  components: {
    Menu
  }
}
</script>
<style scoped>
    .navbar__back {
        background: linear-gradient(270.08deg, #003AA8 0.04%, #022C7F 47.91%, #051E53 99.93%);
    }
    .navbar__text a {
        font-size: 14px;
        line-height: 25px;
        color: #D9D9D9;
    }
    .navbar__text a img{
        margin-right: 5px;
    }
    .search__input input {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px
    }
    .search__input input:focus {
        outline: none !important;
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
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 16px;
        line-height: 16px;
        color: #FFFFFF;
    }
    .navbar__logo {
        font-size: 20px;
        color: #ffffff;
        padding: 4px 0;
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
    .fa.fa-bars.navbar__menu{
        display: none;
    }
    .menu__responsive {
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .navbar__icons{
            padding-left: 0;
        }
        .category__button.ml-12{
            margin-left: 1.5rem;
        }
    }

    @media (max-width: 769px){
        .navbar__icons a:first-child,
        .navbar__icons a:nth-child(2),
        .navbar__icons a:nth-child(3){
            display: none;
        }
        .navbar__category{
            display: none;
        }
        .grid.grid-cols-7.gap-4.mt-3.pb-5 .col-span-3{
            display: none;
        }
        .navbar__icons{
            padding-left: 0;
            justify-content: end;
            padding-right: 65px;
        }
        .flex.navbar__text:first-child{
            display: none;
        } 
        .flex.navbar__text:last-child a:first-child{
            display: none;
        }
        .flex.navbar__text .ml-4{
            margin-left: 0;
        }
        .grid.grid-cols-7.gap-4.mt-3.pb-5{
            grid-template-columns: repeat(1, minmax(0, 1fr));
            margin-top: 0;
            padding-bottom: 0;
            padding: 1rem 0;
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
        .fa.fa-bars.navbar__menu{
            display: block;
            color: #FFF;
            font-size: 28px;
            position: absolute;
            top: 18px;
            left: 50px;
        }
        .menu__responsive {
            display: block;
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

</style>
