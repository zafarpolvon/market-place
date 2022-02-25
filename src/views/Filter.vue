<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 pages">
            <a href="#">Главная страница / </a>
            <a href="#">Мужчинам / </a>
            <a href="#">Одежда / </a>
            <a href="#">Свитшоты </a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="filter__title mt-8">Свитшоты</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="filter">
                <div class="sidebar__filter">
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="filter__price">
                                    <div class="price__title md14">Диапазон цена</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <div class="price__range1">
                                    <price-range @minValue="minValue" @maxValue="maxValue" />
                                </div>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="brand">
                                    <div class="brand__title md14">Бренд</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <input type="search" placeholder="Я ищу..." class="brand__search">
                                <form class="brand__inputs">
                                    <div class="brand__input">
                                        <input id="zara" type="checkbox" name="name" />
                                        <label for="zara">Zara</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="legendr" type="checkbox" name="name" />
                                        <label for="legendr">Legendr</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="abb" type="checkbox" name="name" />
                                        <label for="abb">ABB</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="navigator" type="checkbox" name="name" />
                                        <label for="navigator">Navigator</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="telfor" type="checkbox" name="name" />
                                        <label for="telfor">TELFOR</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="wago" type="checkbox" name="name" />
                                        <label for="wago">Wago</label>
                                    </div>
                                    <div class="brand__input">
                                        <input id="universal" type="checkbox" name="name" />
                                        <label for="universal">UniVersal</label>
                                    </div>
                                </form>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="discount">
                                    <div class="discount__title md14">Скидка</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <div class="discount__inputs">
                                    <div class="discount__input">
                                        <input id="10" type="radio" name="name" />
                                        <label for="10">от 10% и выше</label>
                                    </div>
                                    <div class="discount__input">
                                        <input id="20" type="radio" name="name" />
                                        <label for="20">от 20% и выше</label>
                                    </div>
                                    <div class="discount__input">
                                        <input id="30" type="radio" name="name" />
                                        <label for="30">от 30% и выше</label>
                                    </div>
                                    <div class="discount__input">
                                        <input id="40" type="radio" name="name" />
                                        <label for="40">от 40% и выше</label>
                                    </div>
                                </div>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                            <div class="color">
                                <div class="color__title md14">Цвет</div>
                            </div>
                            </vsa-heading>
                            <vsa-content>
                            <div class="colors">
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                    <div class="box"></div>
                                </div>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="gender">
                                    <div class="gender__title md14">Пол</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <div class="gender__inputs">
                                    <div class="gender__input">
                                        <input id="gender" type="checkbox" name="g__name" />
                                        <label for="gender">мужской (37)</label>
                                    </div>
                                </div>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="size">
                                    <div class="size__title md14">Размер</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <input type="search" class="size__input" placeholder="Я ищу..."/>
                                <div class="size__boxes">
                                    <div class="box">42</div>
                                    <div class="box">44</div>
                                    <div class="box">48</div>
                                    <div class="box">50</div>
                                    <div class="box">52</div>
                                    <div class="box">S</div>
                                    <div class="box">SM</div>
                                    <div class="box">M</div>
                                    <div class="box">L</div>
                                    <div class="box">2XL</div>
                                    <div class="box">3XL</div>
                                </div>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <vsa-list>
                        <vsa-item>
                            <vsa-heading>
                                <div class="season">
                                    <div class="season__title md14">Сезон</div>
                                </div>
                            </vsa-heading>
                            <vsa-content>
                                <form class="season__inputs">
                                    <div class="season__input">
                                        <input id="season1" type="checkbox" name="s__name" />
                                        <label for="season1">(сезон не задан) (34)</label>
                                    </div>
                                    <div class="season__input">
                                        <input id="season2" type="checkbox" name="s__name" />
                                        <label for="season2">демисезон (16)</label>
                                    </div>
                                    <div class="season__input">
                                        <input id="season3" type="checkbox" name="s__name" />
                                        <label for="season3">зима (120)</label>
                                    </div>
                                    <div class="season__input">
                                        <input id="season4" type="checkbox" name="s__name" />
                                        <label for="season4">круглогодичный (14)</label>
                                    </div>
                                    <div class="season__input">
                                        <input id="season5" type="checkbox" name="s__name" />
                                        <label for="season5">лето (62)</label>
                                    </div>
                                </form>
                            </vsa-content>
                        </vsa-item>
                    </vsa-list>
                    <div class="filter__buttons flex">
                        <button type="submit" @click="check()" class="filter">Фильтр</button>
                        <button type="submit" class="reset">Сбросить</button>
                    </div>
                </div>
                <div class="all__products">
                    <div class="products__menu">
                        <ul>
                            <span>Сортировать по:</span>
                        </ul>
                    </div>
                    <tabs class="filter__tab">
                        <tab title="Ид продукта">
                            <div class="products">
                                <div class="grid grid-cols-4 gap-4">
                                    <div v-for="cart in tovar" :key="cart.id">
                                        <Cart :favorite="false" :cart="cart" />
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab title="Цене">
                            <div class="products">
                                <div class="grid grid-cols-4 gap-4">
                                    <div v-for="cart in tovar" :key="cart.id">
                                        <Cart :favorite="false" :cart="cart" />
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab title="Названию продукта">
                            <div class="products">
                                <div class="grid grid-cols-4 gap-4">
                                    <div v-for="cart in tovar" :key="cart.id">
                                        <Cart :favorite="false" :cart="cart" />
                                    </div>
                                </div>
                            </div>
                        </tab>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Cart from '../components/Cart.vue'
import PriceRange from '../components/PriceRange.vue'
import _ from 'lodash'
import MainMenu from '../components/layout/MainMenu.vue'
import { Tabs, Tab } from 'vue-slim-tabs'
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: 'Home',
  el:"#app",
  data:{},
  data: () => ({
    sortedProducts: [],
    min: 50,
    max: 10000,
    tovar: [],
    test: []
  }),
  async mounted () {
    this.tovar = await this.$store.dispatch('loadData')
  },
  computed: {
    carts () {
      return this.$store.getters.CARTS
    },
    filterProducts () {
      return this.filterProductsByRange(this.carts)
    },
    all () {
      return this.carts
    },
    uniqProducts () {
      return _.uniqBy(this.carts, 'property')
    }
  },
  methods: {
    minValue (value) {
      this.min = value
    },
    maxValue (value) {
      this.max = value
    },
    filterProductsByRange (products) {
      var self = this
      return products.filter(product => (product.price >= self.min && product.price <= self.max) ? product : '')
    },
    filterProductsByCategory: function (products) {
      return products.filter(product => !product.category.indexOf(this.category))
    },
    filterProductsByName: function (products) {
      return products.filter(product => !product.name.indexOf(this.name))
    },
    check () {
      console.log(this.min)
    },
    activate:function(el){
        this.active_el = el;
        console.log(this.active_el);
    }
  },
  components: {
    Navbar,
    Cart,
    PriceRange,
    MainMenu,
    PriceRange,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    Tabs,
    Tab,
  },
}
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style scoped>
    .pages a{
        color: #023047;
    }
    .pages a:hover{
        color: #023999;
    }
    input[type=radio]{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input[type=radio]:before {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid gray;
        background: #fff;
        content: "";
    }
    input[type=radio]:checked:before{
        border: 1px solid #EE4927;
    }
    input[type=radio]:checked:after {
        position: relative;
        display: inline-block;
        visibility: visible;
        border-radius: 6px;
        width: 12px;
        height: 12px;
        background: #EE4927;
        content: "";
    }
    input[type="checkbox"]{
        position: relative;
    }
    input[type="checkbox"]:checked::after{
        content: "\2713";
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        position: absolute;
        color: #fff;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #131E3D;
    }
    .active{
        box-shadow: 5px 5px 5px rgba(155, 155, 155, 0.5);
        transform: scale(1.05);
        transition: 0.2s linear;
    }
    .filter__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
        line-height: 1;
    }
    .filter{
        display: flex;
        justify-content: space-between;
    }
    .filter .sidebar__filter{
        width: 18%;
    }
    .filter .sidebar__filter .filter__price .price__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .filter__price i{
        color: #898989;
    }
    .filter .sidebar__filter .price__inputs{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0 0.7rem 0;
    }
    .filter .sidebar__filter .price__inputs input{
        width: 48%;
        color: #000;
        border: 1px solid #C4C4C4;
        padding: 0 5px;
        outline: none;
    }
    .filter .sidebar__filter .price__inputs input::placeholder{
        color: #000;
    }
    .price__range1{
        padding-top: 2rem;
        padding-bottom: 10px;
    }
    .filter .sidebar__filter .price__range{
        width: 90%;
    }
    .filter .sidebar__filter .brand .brand__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .brand i{
        color: #898989;
    }
    .filter .sidebar__filter .brand__search{
        margin-top: 10px;
        width: 100%;
        border: 1px solid #B5B0A1;
        border-radius: 8px;
        outline: none;
        padding: 7px 10px;
    }
    .filter .sidebar__filter .brand__inputs{
        padding: 10px 0;
    }
    .filter .sidebar__filter .brand__inputs .brand__input{
        display: flex;
        align-items: center;
        margin: 12px 0;
    }
    .filter .sidebar__filter .brand__inputs .brand__input input{
        margin-right: 12px;
        width: 18px;
        height: 18px;
        border-radius: 1px;
        border: 1px solid #666666;
    }
    .filter .sidebar__filter .discount .discount__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .discount i{
        color: #898989;
    }
    .filter .sidebar__filter .discount__inputs{
        padding: 10px 0;
    }
    .filter .sidebar__filter .discount__inputs .discount__input{
        display: flex;
        align-items: center;
        margin: 12px 0;
    }
    .filter .sidebar__filter .discount__inputs .discount__input input{
        margin-right: 12px;
        width: 12px;
        height: 12px;
        border-radius: 1px;
        border: 1px solid #666666;
    }
    .filter .sidebar__filter .color .color__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .color i{
        color: #898989;
    }
    .filter .sidebar__filter .colors{
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
    }
    .filter .sidebar__filter .colors .box{
        height: 38px;
        width: 38px;
        border-radius: 50%;
        margin: 7px 13px 7px 0;
        background: #C211A7;
    }
    .filter .sidebar__filter .gender .gender__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .gender i{
        color: #898989;
    }
    .filter .sidebar__filter .gender__inputs{
        padding: 10px 0;
    }
    .filter .sidebar__filter .gender__inputs .gender__input{
        display: flex;
        align-items: center;
        margin: 12px 0;
    }
    .filter .sidebar__filter .gender__inputs .gender__input input{
        margin-right: 12px;
        height: 24px;
        width: 24px;
    }
    .filter .sidebar__filter .size .size__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .size i{
        color: #898989;
    }
    .filter .sidebar__filter .size__input{
        margin-top: 10px;
        width: 100%;
        border-radius: 8px;
        outline: none;
        padding: 7px 10px;
        border: 1px solid #B5B0A1;
    }
    .filter .sidebar__filter .size__boxes{
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
    }
    .filter .sidebar__filter .size__boxes .box{
        height: 38px;
        width: 38px;
        border: 1px solid #898989;
        border-radius: 8px;
        color: #898989;
        margin: 7px 13px 7px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter .sidebar__filter .season .season__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .season i{
        color: #898989;
    }
    .filter .sidebar__filter .season__inputs{
        padding: 10px 0;
    }
    .filter .sidebar__filter .season__inputs .season__input{
        display: flex;
        align-items: center;
        margin: 12px 0;
    }
    .filter .sidebar__filter .season__inputs input{
        margin-right: 12px;
        width: 18px;
        height: 18px;
    }
    .filter .sidebar__filter .filter{
        background: #131E3D;
        color: #FFF;
        cursor: pointer;
    }
    .filter .sidebar__filter .filter:hover{
        background: #11113D;
    }
    .filter .sidebar__filter .reset{
        background: rgba(238, 73, 39, 0.6);
        color: #FFF;
        cursor: pointer;
    }
    .filter .sidebar__filter .reset:hover{
        background: rgba(238, 73, 39, 1);
    }
    .filter .all__products{
        width: 80%;
    }
    .filter .all__products .products__menu ul{
        display: flex;
        align-items: center;
    }
    .filter .all__products .products__menu ul li{
        border-bottom: 1px solid rgba(137, 137, 137, 0.5);
        color: #898989;
        cursor: pointer;
    }
    .filter .products{
        width: 100%;
    }
    .filter .products .cart__box.shadow-xl{
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .filter__buttons{
        justify-content: space-between;
    }
    .filter__buttons button{
        width: 48%;
        height: 45px;
        border-radius: 5px;
        margin: 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    label{
        line-height: 1;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .filter .sidebar__filter{
            width: 33%;
            margin-right: 4rem;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .filter{
            display: block;
        }
        .filter .sidebar__filter{
            width: 100%;
        }
        .filter .all__products{
            width: 100%;
        }
        .grid-cols-4{
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .filter__buttons{
            display: flex;
        }
        .filter__buttons button{
            margin: 16px 1rem 16px 0 !important;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .filter{
            display: block;
        }
        .filter .sidebar__filter{
            width: 100%;
        }
        .filter .all__products{
            width: 100%;
        }
        .filter__buttons{
            display: flex;
        }
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .filter .all__products .products__menu ul{
            justify-content: space-between;
        }
        .filter .all__products .products__menu ul *{
            margin-right: 0;
            font-size: 14px;
        }
        .filter__title{
            font-size: 22px;
        }
        .filter__buttons button{
            font-size: 14px;
        }
        .md14{
            font-size: 16px !important;
        }
        label{
            font-size: 14px !important;
        }
        input{
            font-size: 14px !important;
        }
        input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media (max-width: 415px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .filter{
            display: block;
        }
        .filter .sidebar__filter{
            width: 100%;
        }
        .filter .all__products{
            width: 100%;
        }
        .filter__buttons{
            display: flex;
        }
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .filter .all__products .products__menu ul{
            flex-direction: column;
            align-items: flex-start !important;
        }
        .filter .all__products .products__menu ul *{
            margin-right: 0;
            font-size: 18px;
        }
        .filter__title{
            font-size: 22px;
        }
        .filter .all__products .products__menu ul *{
            font-size: 16px;
            margin-top: 12px;
        }
        .filter__buttons button{
            font-size: 14px;
            height: 35px;
        }
        .md14{
            font-size: 14px !important;
        }
        label{
            font-size: 14px !important;
        }
        input{
            font-size: 14px !important;
        }
        input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media (max-width: 300px){
        .grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

</style>
