<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-12 pages">
            <span>Главная страница / </span>
            <span>Мужчинам / </span>
            <span>Одежда / </span>
            <span>Свитшоты </span>
        </div>
        <div class="container mx-auto px-12">
            <div class="filter__title">Мужские свитшоты</div>
        </div>
        <div class="container mx-auto px-12">
            <div class="filter">
                <div class="sidebar__filter">
                    <div class="filter__price">
                        <div class="price__title">Диапазон цена</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <div class="price__range1">
                        <price-range @minValue="minValue" @maxValue="maxValue" />
                    </div>
                    <div class="brand">
                        <div class="brand__title">Бренд</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <input type="search" placeholder="Я ищу..." class="brand__search">
                    <form class="brand__inputs">
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>Zara</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>Legendr</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>ABB</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>Navigator</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>TELFOR</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>Wago</p>
                        </div>
                        <div class="brand__input">
                            <input type="checkbox" name="name" />
                            <p>UniVersal</p>
                        </div>
                    </form>
                    <div class="discount">
                        <div class="discount__title">Скидка</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <div class="discount__inputs">
                        <div class="discount__input">
                            <input type="radio" name="name" />
                            <p>от 10% и выше</p>
                        </div>
                        <div class="discount__input">
                            <input type="radio" name="name" />
                            <p>от 20% и выше</p>
                        </div>
                        <div class="discount__input">
                            <input type="radio" name="name" />
                            <p>от 30% и выше</p>
                        </div>
                        <div class="discount__input">
                            <input type="radio" name="name" />
                            <p>от 40% и выше</p>
                        </div>
                    </div>
                    <div class="color">
                        <div class="color__title">Цвет</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <div class="colors">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>
                    <div class="gender">
                        <div class="gender__title">Пол</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <div class="gender__inputs">
                        <div class="gender__input">
                            <input type="checkbox" name="g__name" />
                            <p>мужской (37)</p>
                        </div>
                    </div>
                    <div class="size">
                        <div class="size__title">Размер</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
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
                    <div class="season">
                        <div class="season__title">Сезон</div>
                        <i class="fa fa-chevron-up"></i>
                    </div>
                    <form class="season__inputs">
                        <div class="season__input">
                            <input type="checkbox" name="s__name" />
                            <p>(сезон не задан) (34)</p>
                        </div>
                        <div class="season__input">
                            <input type="checkbox" name="s__name" />
                            <p>демисезон (16)</p>
                        </div>
                        <div class="season__input">
                            <input type="checkbox" name="s__name" />
                            <p>зима (120)</p>
                        </div>
                        <div class="season__input">
                            <input type="checkbox" name="s__name" />
                            <p>круглогодичный (14)</p>
                        </div>
                        <div class="season__input">
                            <input type="checkbox" name="s__name" />
                            <p>лето (62)</p>
                        </div>
                    </form>
                    <button type="submit" @click="check()" class="filter">Фильтр</button>
                    <button type="submit" class="reset">Сбросить</button>
                </div>
                <div class="all__products">
                    <div class="products__menu">
                        <ul>
                            <span>Сортировать по:</span>
                            <li>Ид продукта</li>
                            <li>Цене</li>
                            <li>Названию продукта</li>
                        </ul>
                    </div>
                    <div class="products">
                        <div class="grid grid-cols-4 gap-4">
                            <div v-for="cart in filterProducts" :key="cart.id">
                                <Cart :cart="cart" />
                            </div>
                        </div>
                    </div>
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

export default {
  name: 'Home',
  data: () => ({
    sortedProducts: [],
    min: 50,
    max: 10000

  }),
  mounted () {

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
    }
  },
  components: {
    Navbar,
    Cart,
    PriceRange
  }
}
</script>,
    PriceRange

<style scoped>
    .pages{
        padding: 2.5rem 1.25rem;
    }
    .pages span{
        color: #023047;
    }
    .filter__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .filter{
        display: flex;
        justify-content: space-between;
    }
    .filter .sidebar__filter{
        width: 18%;
    }
    .filter .sidebar__filter .filter__price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
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
    .filter .sidebar__filter .price__range{
        width: 90%;
    }
    .filter .sidebar__filter .brand{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        width: 100%;
        border-bottom: 1px solid #B5B0A1;
        margin-top: 10px;
        margin-bottom: 16px;
    }
    .filter .sidebar__filter .brand .brand__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .brand i{
        color: #898989;
    }
    .filter .sidebar__filter .brand__search{
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
    .filter .sidebar__filter .discount{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
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
        width: 18px;
        height: 18px;
        border-radius: 1px;
        border: 1px solid #666666;
    }
    .filter .sidebar__filter .color{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
        width: 100%;
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
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin: 7px 13px 7px 0;
        background: #C211A7;
    }
    .filter .sidebar__filter .gender{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
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
    .filter .sidebar__filter .size{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
        margin-bottom: 16px;
    }
    .filter .sidebar__filter .size .size__title{
        font-size: 20px;
    }
    .filter .sidebar__filter .size i{
        color: #898989;
    }
    .filter .sidebar__filter .size__input{
        width: 100%;
        border: 1px solid #B5B0A1;
        border-radius: 8px;
        outline: none;
        padding: 7px 10px;
    }
    .filter .sidebar__filter .size__boxes{
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
    }
    .filter .sidebar__filter .size__boxes .box{
        height: 40px;
        width: 40px;
        border: 1px solid #898989;
        border-radius: 8px;
        color: #898989;
        margin: 7px 13px 7px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter .sidebar__filter .season{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #B5B0A1;
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
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);
        border-radius: 5px;
        color: #FFF;
        width: 160px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px 0;
        cursor: pointer;
    }
    .filter .sidebar__filter .reset{
        background: linear-gradient(90deg, #C311A7 3.86%, #A91BA5 100.16%);
        border-radius: 5px;
        color: #FFF;
        width: 160px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px 0;
        cursor: pointer;
    }
    .filter .all__products{
        width: 80%;
    }
    .filter .all__products .products__menu ul{
        display: flex;
        align-items: center;
        padding-bottom: 10px;
    }
    .filter .all__products .products__menu ul li{
        border-bottom: 1px solid rgba(137, 137, 137, 0.5);
        color: #898989;
        cursor: pointer;
    }
    .filter .all__products .products__menu ul :nth-child(2){
        color: #C211A7;
        border-bottom: 1px solid #C211A7;
    }
    .filter .all__products .products__menu ul li:hover{
        color: #C211A7;
        border-bottom: 1px solid #C211A7;
    }
    .filter .all__products .products__menu ul *{
        margin-right: 2rem;
    }
    .filter .products{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .filter .products .cart__box.shadow-xl{
        margin-top: 12px;
        margin-bottom: 12px;
    }
</style>
