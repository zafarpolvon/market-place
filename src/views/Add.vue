<template>
    <div class="">
        <Navbar :info="cart" />
        <MainMenu />
        <div class="add-product">
            <location-navbar :cart="cart" />
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="cart-justify">
                    <h1>{{ cart.name }} <i class="far fa-heart" style="font-size: 24px"></i></h1>
                    <router-link to="/message" class="write__to-market">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7814 12C10.7814 12.3232 10.9098 12.6332 11.1384 12.8618C11.3669 13.0903 11.6769 13.2188 12.0001 13.2188C12.3234 13.2188 12.6334 13.0903 12.8619 12.8618C13.0905 12.6332 13.2189 12.3232 13.2189 12C13.2189 11.6768 13.0905 11.3668 12.8619 11.1382C12.6334 10.9097 12.3234 10.7812 12.0001 10.7812C11.6769 10.7812 11.3669 10.9097 11.1384 11.1382C10.9098 11.3668 10.7814 11.6768 10.7814 12ZM15.8595 12C15.8595 12.3232 15.9879 12.6332 16.2165 12.8618C16.445 13.0903 16.755 13.2188 17.0783 13.2188C17.4015 13.2188 17.7115 13.0903 17.9401 12.8618C18.1686 12.6332 18.297 12.3232 18.297 12C18.297 11.6768 18.1686 11.3668 17.9401 11.1382C17.7115 10.9097 17.4015 10.7812 17.0783 10.7812C16.755 10.7812 16.445 10.9097 16.2165 11.1382C15.9879 11.3668 15.8595 11.6768 15.8595 12ZM5.70327 12C5.70327 12.3232 5.83167 12.6332 6.06023 12.8618C6.28879 13.0903 6.59879 13.2188 6.92202 13.2188C7.24525 13.2188 7.55525 13.0903 7.78381 12.8618C8.01237 12.6332 8.14077 12.3232 8.14077 12C8.14077 11.6768 8.01237 11.3668 7.78381 11.1382C7.55525 10.9097 7.24525 10.7812 6.92202 10.7812C6.59879 10.7812 6.28879 10.9097 6.06023 11.1382C5.83167 11.3668 5.70327 11.6768 5.70327 12ZM22.4916 7.59219C21.9177 6.22871 21.0951 5.00488 20.0464 3.95371C19.0051 2.90862 17.769 2.07791 16.408 1.50859C15.0115 0.92207 13.5287 0.625 12.0001 0.625H11.9494C10.4107 0.632617 8.92026 0.937305 7.5187 1.53652C6.16933 2.11168 4.94476 2.94387 3.91323 3.98672C2.87475 5.03535 2.05971 6.2541 1.49604 7.6125C0.912058 9.01914 0.617527 10.5146 0.625144 12.0533C0.63376 13.8166 1.05092 15.5539 1.84389 17.1289V20.9883C1.84389 21.298 1.96695 21.5951 2.18598 21.8142C2.40502 22.0332 2.7021 22.1562 3.01186 22.1562H6.87378C8.44874 22.9492 10.1861 23.3664 11.9494 23.375H12.0027C13.5236 23.375 14.9988 23.0805 16.3876 22.5041C17.7418 21.9416 18.9733 21.1205 20.0134 20.0869C21.0621 19.0484 21.8873 17.8348 22.4636 16.4814C23.0628 15.0799 23.3675 13.5895 23.3751 12.0508C23.3828 10.5045 23.0832 9.00391 22.4916 7.59219ZM18.655 18.7133C16.8751 20.4754 14.5138 21.4453 12.0001 21.4453H11.957C10.4259 21.4377 8.90503 21.0568 7.56186 20.3408L7.34858 20.2266H3.77358V16.6516L3.65932 16.4383C2.94331 15.0951 2.56245 13.5742 2.55483 12.0432C2.54468 9.51172 3.51206 7.13516 5.28686 5.34512C7.05913 3.55508 9.42807 2.56484 11.9595 2.55469H12.0027C13.2722 2.55469 14.5037 2.80098 15.664 3.28848C16.7964 3.76328 17.8121 4.44629 18.6855 5.31973C19.5564 6.19062 20.2419 7.20879 20.7167 8.34121C21.2093 9.51426 21.4556 10.7584 21.4505 12.0432C21.4353 14.5721 20.4425 16.941 18.655 18.7133Z" fill="#EE4927"/>
                        </svg>
                        Написать в магазин
                    </router-link>
                </div>
                <div class="product-action" style="background: #F8F8FA; padding-left: 30px;">
                    <div class="stars">
                        <star-rating :rating="cart.rating" />
                    </div>
                    <div class="comment"><a href="#">{{ cart.description.slice(3, 7)}} отзывов</a></div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="product-list">
                    <div class="product__img relative mr-8">
                        <div class="images">
                            <img @load="onImgLoad" @click="updataMain(cart.photo)" :src="cart.photo" alt="">
                            <img v-show="cart.gallery[0]" @load="onImgLoad" @click="updataMain(cart.gallery[0])" :src="cart.gallery[0]" alt="">
                            <img v-show="cart.gallery[1]" @load="onImgLoad" @click="updataMain(cart.gallery[1])" :src="cart.gallery[1]" alt="">
                            <img v-show="cart.gallery[2]" @load="onImgLoad" @click="updataMain(cart.gallery[2])" :src="cart.gallery[2]" alt="">
                        </div>
                        <div class="image">
                            <img :src="static.photo" alt="">
                        </div>
                        <slide-mobile :cart="cart" class="mobile__slide" />
                        <div v-if="imageLoader" class="loader__blur">
                            <div class="loader__into">
                                <Loader />
                            </div>
                        </div>
                    </div>
                    <div class="product__information">
                        <div class="product__about">
                            <div class="product__price">{{ cart.price }} рубль <span>{{ cart.price_old }} рубль</span></div>
                            <div class="min__max-price">
                                <p>от 10 до 50: <span>800 ₽</span></p>
                                <p>от 50 до 100: <span>1000 ₽</span></p>
                            </div>
                        </div>
                        <div class="color__title" v-if="cart.filters.length > 1">Цвет</div>
                        <div class="color__boxes">
                            <div class="color__box" v-for="col in cart.colors" :key="col.id">
                                <img class="cursor-pointer" @click="updateImage(col.img, col.second, col.third, col.fourth)" :src="col.img" alt="photo">
                            </div>
                        </div>
                        <div class="product__size-title" v-if="cart.filters.length > 1">Размер</div>
                        <div class="product__size">
                            <div class="radioContainer" v-for="(size, index) in cart.filters" :key="index">
                                <input type="radio" :id="index" v-bind:value="size.value" v-model="picked" @click="temp(size)">
                                <label class="circle" :for="index">{{ size.value }}</label>
                            </div>
                        </div>
                        <div class="mt-4 mb-4">
                            <Counter />
                        </div>
                        <div class="delivery__text mb-2">Доставка: 318,94 сум</div>
                        <!-- <div class="sales">Продавец: <span>ВАЙЛДБЕРРИЗ ООО</span></div>
                        <div class="brend">
                            <a href="#"><img :src="cart.brand.photo" alt="not found"></a>
                        </div> -->
                        <p class="flex items-center mb-2" @click="show()">
                            В Uzbekistan через BTC 
                            <svg class="ml-2" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1L8.5 8.5L1 0.999999" stroke="#131E3D" stroke-width="2"/>
                            </svg>
                        </p>
                        <partner-name />
                        <p class="mb-2">Расчётное время доставки: 29-48 дней</p>
                        <div class="product__buttons">
                            <a id="buy" to="">Купить</a>
                            <button type="submit" id="korzina__button">В корзину</button>
                            <button id="delete" type="submit">Сравнить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="recommended">
                    <div class="r__box">
                        <tabs class="mini__page">
                            <tab title="Описание">
                                <span>эластан 5%,</span>
                                <span>вискоза 42%,</span>
                                <span>шерсть 53%</span>
                                <div class="r__type">Комплектация: <span>рубашка</span></div>
                                <div class="r__landing">Крой: <span>средняя посадка</span></div>
                                <span>эластан 5%,</span>
                                <span>вискоза 42%,</span>
                                <span>шерсть 53%</span>
                                <div class="r__type">Комплектация: <span>рубашка</span></div>
                                <div class="r__landing">Крой: <span>средняя посадка</span></div>
                                <span>эластан 5%,</span>
                                <span>вискоза 42%,</span>
                                <span>шерсть 53%</span>
                                <div class="r__type">Комплектация: <span>рубашка</span></div>
                                <div class="r__landing">Крой: <span>средняя посадка</span></div>
                                <p>{{ cart.description.slice(3, -4) }}</p>
                            </tab>
                            <tab title="Характеристики">
                                <span>эластан 5%,</span>
                                <span>вискоза 42%,</span>
                                <span>шерсть 53%</span>
                                <div class="r__type">Комплектация: <span>рубашка</span></div>
                                <div class="r__landing">Крой: <span>средняя посадка</span></div>
                                <div class="r__type">Комплектация: <span>рубашка</span></div>
                                <div class="r__landing">Крой: <span>средняя посадка</span></div>
                                <p>{{ cart.description.slice(3, -4) }}</p>
                            </tab>
                        </tabs>
                    </div>
                    <div class="r__box">
                        <i class="far fa-heart" style="font-size: 24px;"></i>
                        <img src="../assets/image/unsplash_OhKElOkQ3RE.png" alt="not found">
                        <div class="name__title mt-2">Mironshoh Nasimov</div>
                        <p>12545 отзывов (94% положительных)</p>
                        <p>Москва</p>
                        <div class="links">
                            <router-link tag="a" to="/message" class="write__to-market">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.7814 12C10.7814 12.3232 10.9098 12.6332 11.1384 12.8618C11.3669 13.0903 11.6769 13.2188 12.0001 13.2188C12.3234 13.2188 12.6334 13.0903 12.8619 12.8618C13.0905 12.6332 13.2189 12.3232 13.2189 12C13.2189 11.6768 13.0905 11.3668 12.8619 11.1382C12.6334 10.9097 12.3234 10.7812 12.0001 10.7812C11.6769 10.7812 11.3669 10.9097 11.1384 11.1382C10.9098 11.3668 10.7814 11.6768 10.7814 12ZM15.8595 12C15.8595 12.3232 15.9879 12.6332 16.2165 12.8618C16.445 13.0903 16.755 13.2188 17.0783 13.2188C17.4015 13.2188 17.7115 13.0903 17.9401 12.8618C18.1686 12.6332 18.297 12.3232 18.297 12C18.297 11.6768 18.1686 11.3668 17.9401 11.1382C17.7115 10.9097 17.4015 10.7812 17.0783 10.7812C16.755 10.7812 16.445 10.9097 16.2165 11.1382C15.9879 11.3668 15.8595 11.6768 15.8595 12ZM5.70327 12C5.70327 12.3232 5.83167 12.6332 6.06023 12.8618C6.28879 13.0903 6.59879 13.2188 6.92202 13.2188C7.24525 13.2188 7.55525 13.0903 7.78381 12.8618C8.01237 12.6332 8.14077 12.3232 8.14077 12C8.14077 11.6768 8.01237 11.3668 7.78381 11.1382C7.55525 10.9097 7.24525 10.7812 6.92202 10.7812C6.59879 10.7812 6.28879 10.9097 6.06023 11.1382C5.83167 11.3668 5.70327 11.6768 5.70327 12ZM22.4916 7.59219C21.9177 6.22871 21.0951 5.00488 20.0464 3.95371C19.0051 2.90862 17.769 2.07791 16.408 1.50859C15.0115 0.92207 13.5287 0.625 12.0001 0.625H11.9494C10.4107 0.632617 8.92026 0.937305 7.5187 1.53652C6.16933 2.11168 4.94476 2.94387 3.91323 3.98672C2.87475 5.03535 2.05971 6.2541 1.49604 7.6125C0.912058 9.01914 0.617527 10.5146 0.625144 12.0533C0.63376 13.8166 1.05092 15.5539 1.84389 17.1289V20.9883C1.84389 21.298 1.96695 21.5951 2.18598 21.8142C2.40502 22.0332 2.7021 22.1562 3.01186 22.1562H6.87378C8.44874 22.9492 10.1861 23.3664 11.9494 23.375H12.0027C13.5236 23.375 14.9988 23.0805 16.3876 22.5041C17.7418 21.9416 18.9733 21.1205 20.0134 20.0869C21.0621 19.0484 21.8873 17.8348 22.4636 16.4814C23.0628 15.0799 23.3675 13.5895 23.3751 12.0508C23.3828 10.5045 23.0832 9.00391 22.4916 7.59219ZM18.655 18.7133C16.8751 20.4754 14.5138 21.4453 12.0001 21.4453H11.957C10.4259 21.4377 8.90503 21.0568 7.56186 20.3408L7.34858 20.2266H3.77358V16.6516L3.65932 16.4383C2.94331 15.0951 2.56245 13.5742 2.55483 12.0432C2.54468 9.51172 3.51206 7.13516 5.28686 5.34512C7.05913 3.55508 9.42807 2.56484 11.9595 2.55469H12.0027C13.2722 2.55469 14.5037 2.80098 15.664 3.28848C16.7964 3.76328 17.8121 4.44629 18.6855 5.31973C19.5564 6.19062 20.2419 7.20879 20.7167 8.34121C21.2093 9.51426 21.4556 10.7584 21.4505 12.0432C21.4353 14.5721 20.4425 16.941 18.655 18.7133Z" fill="#EE4927"/>
                                </svg>
                                Написать
                            </router-link>
                            <router-link tag="a" to="/filter" class="market__link">Перейти в магазин</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4 c-products">
                <div class="advertising__title">Товары продавца</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <router-link tag="a" to="/filter" class="show__button">Перейти в магазин</router-link>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4 c-products">
                <div class="advertising__title">Похожие товары</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <router-link tag="a" to="/filter" class="show__button">Показать еще</router-link>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="question__title">Отзывы и вопросы</div>
                <div class="q__comments">
                    <a>Правила оформления отзывов</a>
                </div>
                <div class="question">
                    <div class="q__box">
                        <div class="comment">
                            <div class="order">4.5</div>
                            <p class="pb-5">На основании 105 отзыва</p>
                            <div class="stars">
                                <star-rating :rating="4" />
                            </div>
                        </div>
                        <div class="place">
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>5</h6>
                                    </div>
                                    <progress-line :val="83" class="progress__align" />
                                </div>
                                <div class="percent">83%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>4</h6>
                                    </div>
                                    <progress-line :val="15" class="progress__align" />
                                </div>
                                <div class="percent">15%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>3</h6>
                                    </div>
                                    <progress-line :val="prot" class="progress__align" />
                                </div>
                                <div class="percent">{{ prot }}%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>2</h6>
                                    </div>
                                    <progress-line :val="8" class="progress__align" />
                                </div>
                                <div class="percent">8%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>1</h6>
                                    </div>
                                    <progress-line :val="7" class="progress__align" />
                                </div>
                                <div class="percent">7%</div>
                            </div>
                        </div>
                    </div>
                    <div class="q__box">
                        <div class="box">
                            <div class="protsent">
                                <Progress :value="70.5" />
                            </div>
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <Progress :value="48.8" />
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <Progress :value="50.5" />
                            <p>Barcha sotuvlar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4 p-customer">
                <span>Сортировать по: </span>
                <span>Дате <i class="fa fa-arrow-down"></i></span>
                <span>Оценке</span>
                <div class="customer pt-4">
                    <Comments />
                    <div class="c__box">
                        <div class="box__title">Оставьте ваш отзыв</div>
                        <input type="text" placeholder="Ваше имя" />
                        <input type="email" placeholder="Ваш  e-mail" />
                        <textarea placeholder="Ваш отзыв"></textarea>
                        <button type="submit">Отправить отзыв</button>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
                <div class="recently-products">
                    <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import LocationNavbar from '../components/layout/LocationNavbar.vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/layout/Footer.vue'
import Counter from '../components/Counter.vue'
import Progress from '../components/progress/Progress.vue'
import StarRating from '../components/StarRating.vue'
import ProgressLine from '../components/progress/ProgressLine.vue'
import Loader from '../components/Loader.vue'
import SlideMobile from '../components/slide/SlideMobile.vue'
import Comments from '../components/Comments.vue'
import MainMenu from '../components/layout/MainMenu.vue'
import PartnerName from '../components/modal/PartnerName.vue'
import { Tabs, Tab } from 'vue-slim-tabs'

export default {
  name: 'Home',
  data: () => ({
    prot: 80,
    cart: {},
    tovar: [],
    picked: '',
    quantity: 1,
    static: {},
    imageLoader: true
  }),
  async mounted () {
    const id = this.$route.params.id
    this.cart = await this.$store.dispatch('loadDataById', id)
    this.static = await this.$store.dispatch('loadDataById', id)

    this.tovar = await this.$store.dispatch('loadData')
    this.imageLoader = false

    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i)
    }
    if (this.$props.basket.quantity > 1) {
      this.selected = this.$props.basket.quantity
    }
  },
  methods: {
    updateImage (first, second, third, fourth) {
      this.imageLoader = true
      this.cart.img = first
      this.cart.second = second
      this.cart.third = third
      this.cart.fourth = fourth
    },
    updataMain (index) {
      this.static.photo = index
    },
    temp (index) {
      console.log(index)
    },
    onImgLoad () {
      this.imageLoader = false
    },
    show () {
      this.$modal.show('Partner-Name')
    },
  },
  computed: {

  },
  components: {
    Navbar,
    Cart,
    Footer,
    Counter,
    StarRating,
    Progress,
    ProgressLine,
    LocationNavbar,
    Loader,
    SlideMobile,
    Comments,
    MainMenu,
    Tabs,
    Tab,
    PartnerName,
  }
}

</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style>
    .back {
        background-color: #fff;
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
    .web__slide {
        display: block;
    }
    .loader__blur {
        backdrop-filter: blur(15px);
        background: #ebebeb7a;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
    .loader__into {
        position: absolute;
        top: 38%;
        left: 43%;
    }
    .pages a{
        color: #023047;
        text-decoration: none;
    }
    .pages a:hover{
        color: #023999;
    }
    .stars span {
        margin-right: 5px !important;
    }
    .progress__align {
        align-self: center;
        width: 75%;
        margin-left: 15px;
    }
    .add-product .product__information .brend{
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
    }
    .brend a img {
        width: auto;
        height: 60px;
        object-fit: contain;
    }
    .add-product .product__information .brend a{
        margin: 0.2rem 0;
        margin-right: 0.5rem !important;
        text-decoration: none;
    }
    .add-product .product-list{
        background: #F8F8FA;
        padding: 30px;
    }
    .cart-justify{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 30px 16px 30px;
        background: #F8F8FA;
    }
    .write__to-market{
        display: flex;
        align-items: center;
        color: #EE4927;
        cursor: pointer;
    }
    .write__to-market:hover{
        text-decoration: underline;
    }
    .write__to-market svg{
        margin-right: 10px;
    }
    .add-product .product__information .product__about .product__price{
        color: #434343;
    }
    .product-list .product__img .image{
        filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1));
        width: 450px !important;
        height: 450px !important;
        position: relative;
    }
    .product-list .product__img .image .fa.fa-chevron-left,
    .product-list .product__img .image .fa.fa-chevron-right{
        display: none;
    }
    .product-list .product__img .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .min__max-price span{
        color: #999999;
    }
    .product-list .product__img .image .far.fa-heart{
        position: absolute;
        top: 15px;
        right: 15px;
        color: #FC7D00;
        font-size: 25px;
        cursor: pointer;
    }
    .delivery__text{
        font-weight: bold;
    }
    .add-product .product__information .product__size{
        margin-top: 1rem;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
    }
    .add-product .product-list .product__img .images{
        justify-content: unset !important;
    }
    .add-product .product-list .product__img .images img{
        margin-bottom: 8px;
        width: 106px;
        height: 106px;
        object-fit: cover;
    }
    .add-product .container:nth-child(2) h1{
        line-height: 1;
        color: #434343;
    }
    .q__comments a{
        margin-left: auto;
        border-bottom: 1px solid #898989;
        color: #131E3D;
        cursor: pointer;
    }
    .q__comments a:hover{
        opacity: 0.7;
    }
    .question .q__box .box{
        background: #EE4927;
    }
    .q__comments span:first-child{
        border-bottom: 2px solid #0052FF !important;
    }
    .p-customer > span{
        margin-right: 2rem !important;
    }
    .p-customer > span:nth-child(2){
        border-bottom: 1px solid #313131
    }
    .p-customer span:nth-child(2) i{
        color: #313131;
    }
    .p-customer .customer .c__box .user__comment .date__sale{
        display: flex !important;
    }
    .p-customer .customer .c__box .user__comment .date__sale .date{
        font-size: 14px !important;
        color: #999999;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled{
        display: flex !important;
        padding-left: 12rem;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled img{
        object-fit: scale-down;
        margin-right: 5px !important;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled .p__saled{
        color: #999999;
    }
    .customer .user__comment{
        margin: 1.5rem 0;
    }
    .customer .user__comment p{
        font-size: 16px;
    }
    .p__saled{
        font-size: 14px;
    }
    .c__box:first-child{
        padding-bottom: 3rem;
    }
    .customer .user__comment .user .stars{
        margin-left: 0 !important;
    }
    .mobile__slide {
        display: none;
    }
    .add-product .product__information .color__title{
        color: #434343;
    }
    .add-product .product__information .product__size-title{
        color: #434343;
    }
    .add-product .product__information .product__buttons{
        width: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: unset;
    }
    .add-product .product__information .product__buttons button:not(:last-child){
        background: #131E3D !important;
        border-radius: 5px !important;
        box-shadow: unset !important;
        margin-right: 16px !important;
    }
    .add-product .product__information .product__buttons button:not(:last-child):hover{
        opacity: 0.8;
    }
    .add-product .product__information .product__buttons button:last-child{
        background: rgba(238, 73, 39, 0.6);
        border-radius: 5px;
        padding: 5px 15px;
        color: #fff;
        cursor: pointer;
    }
    .add-product .product__information .product__buttons button:last-child:hover{
        background: rgba(238, 73, 39, 1);
    }
    .add-product .product__information .product__buttons #buy{
        background: #131E3D !important;
        border-radius: 5px !important;
        padding: 5px 15px !important;
        color: #fff !important;
        margin-right: 16px !important;
        cursor: pointer !important;
    }
    .add-product .product__information .product__buttons #buy:hover{
        opacity: 0.8;
    }
    .customer .user__comment .user .user__name{
        width: 30%;
        font-size: 19px;
        line-height: 1;
    }
    .comment__btn{
        border: 1px solid #666666;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: 14px;
        color: #666666;
        margin-top: 1rem;
        padding: 6px 25px;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .comment__btn:hover{
        color: #000;
        background: #f6f6f6;
    }
    .c__box:last-child{
        background: #131E3D;
        border-radius: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 450px;
        padding: 1rem 2rem;
        width: 30%;
        margin-left: 4rem;
    }
    .customer .c__box:first-child .c__box-title{
        line-height: 1;
    }
    .c__box:last-child .box__title{
        color: #D9D9D9;
        font-size: 26px;
        font-weight: bold;
    }
    .c__box:last-child input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    .c__box:last-child textarea{
        padding: 10px 10px 3rem 10px;
        outline: none;
        border-radius: 8px;
    }
    .c__box:last-child textarea{
        resize: none;
    }
    .c__box:last-child button{
        background: #fff;
        border-radius: 8px;
        color: #313131;
        padding: 10px 30px;
        margin: 0 auto;
    }
    .radioContainer {
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .radioContainer input {
        display: none;
    }
    .radioContainer .circle {
        display: inline-block;
        width: auto;
        height: 48px;
        background-color: white;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 4px;
        text-align: center;
        padding: 10.5px 15px 0 15px;
    }
    .radioContainer:hover .circle {
        border: 1px solid black;
    }
    .radioContainer input:checked + .circle {
        background: #131E3D;
        color: white;
        border: 1px solid #131E3D;
    }
    .add-product .product__information .color__boxes {
        display: flex;
        flex-wrap: wrap;
    }
    .add-product .product__information .color__boxes .color__box{
        margin-bottom: 15px;
        width: 76px;
    }
    .mini__pages{
        display: flex;
        align-items: center;
    }
    .mini__pages span{
        border-radius: 8px;
        color: #313131;
        background: #F8F8FA;
        padding: 10px 25px;
        font-size: 18px !important;
        margin-right: 1rem !important;
        cursor: pointer;
    }
    .mini__pages span:hover{
        background: rgba(238, 73, 39, 0.6);
        color: #fff !important;
    }
    .add-product .recommended .r__box:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 370px;
        height: 275px;
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        position: relative;
    }
    .r__box:nth-child(2) .far.fa-heart{
        position: absolute;
        top: 20px;
        right: 20px;
        color: #EE4927;
        cursor: pointer;
    }
    .add-product .recommended .r__box:nth-child(2) img{
        border-radius: 50%;
        width: 110px;
    }
    .add-product .recommended .r__box:nth-child(2) .name__title{
        color: #313131;
        font-size: 20px;
        line-height: 1;
        font-weight: bold;
    }
    .add-product .recommended .r__box:nth-child(2) p{
        color: #666;
        text-align: center;
    }
    .add-product .recommended .r__box:nth-child(2) .links{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .add-product .recommended .r__box:nth-child(2) .links .market__link{
        color: #131E3D;
        border-bottom: 1px solid #131E3D;
        cursor: pointer;
    }
    .add-product .recommended .r__box:nth-child(2) .links .market__link:hover{
        border-bottom: 1px solid #fff;
    }
    .add-product .container span.skidka{
        margin-right: 10px;
    }
    .show__button{
        background: #131E3D !important;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) !important;
        cursor: pointer;
    }
    .show__button:hover{
        background: #11113D !important;
        box-shadow: none !important;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-5 {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }
        .web__slide {
            display: none;
        }
        .add-product .product__information .product__about .product__price{
            display: grid;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 0;
        }
        .add-product .product__information .brend a{
            width: 30%;
        }
        .add-product .product__information .color__boxes img{
            width: 100%;
            height: auto;
        }
        .add-product .product__information .color__boxes .color__box{
            height: 63px;
        }
        .product-list .product__img .image img{
            height: unset !important;
        }
        .add-product .product-list .product__img .images img{
            margin-top: 4px;
        }
        .images img {
            width: 106px;
        }
        .product-list .product__img .image{
            height: 382px !important;
        }
        .add-product .product-list .product__img .images{
            height: 382px !important;
        }
        .add-product .recommended .r__box{
            width: 50%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 54%;
        }
        .question .q__box:first-child{
            width: 49%;
            padding: 1rem;
        }
        .q__comments{
            width: 95%;
        }
        .question .q__box .comment p {
            line-height: 1;
        }
        .question .q__box .box{
            width: 100px;
            height: 110px;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 45%;
        }
        .c__box:last-child{
            width: 38%;
            margin-left: 0;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        .image {
            display: none;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: 400px !important;
        }
        .add-product .product-list .product__img .images{
            height: 400px;
        }
        .add-product .product-list .product__img .images img{
            height: 23%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-around;
        }
        .add-product .product__information .product__buttons{
            width: auto;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
        }
        .question{
            display: block;
        }
        .question .q__box{
            width: 100% !important;
        }
        .question .q__box:nth-child(2){
            width: 100% !important;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .q__comments p{
            margin: 1rem auto;
        }
        .question .q__box:first-child{
            margin: 0;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 45%;
        }
        .customer .c__box:first-child{
            width: 100%;
        }
        .c__box:last-child{
            width: 60%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .question .q__box .box{
            width: 100px;
            height: 110px;
        }
    }

    @media (min-width: 376px) and (max-width: 600px){
        .image {
            display: none;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: 350px !important;
            width: auto !important;
        }
        .product-list .product__img .image img{
            margin-right: 0 !important;
        }
        .add-product .product-list .product__img .images{
            height: 350px;
        }
        .add-product .product-list .product__img .images img{
            height: 22.7%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-between;
        }
        .add-product .product__information .product__buttons{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .add-product .product__information .product__about .product__price{
            display: grid;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 0;
        }
        .add-product .product__information .color__boxes .color__box{
            height: 66px !important;
            width: 73px;
        }
        .add-product .product__information .color__title{
            margin: 0.5rem 0;
            font-size: 14px !important;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .add-product .product__information .brend a{
            width: 30%;
        }
        .question{
            display: block;
        }
        .question .q__box{
            width: 100% !important;
        }
        .question .q__box:nth-child(2){
            width: 100% !important;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1rem !important;
        }
        .q__comments p{
            margin: 1rem auto;
        }
        .question .q__box:first-child{
            margin: 0;
            padding: 1rem;
        }
        .question .q__box .comment p{
            line-height: 1;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 60%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 60%;
        }
        .customer .c__box:first-child{
            width: 100%;
        }
        .c__box:last-child{
            width: 80%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .mobile__slide {
            display: block;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
    }

    @media (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .add-product .product-list .product__img{
            display: block !important;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .add-product .product-list .product__img .images{
            display: none;
        }
        .add-product .product-list .product__img .images img{
            width: 24% !important;
            height: auto !important;
            margin: 0 2px !important;
        }
        .product-list .product__img .image{
            height: auto !important;
            width: auto !important;
            display: flex;
        }
        .product-list .product__img .image img{
            width: 100%;
            height: auto !important;
            margin-right: 0 !important;
            display: none;
        }
        .product-list .product__img .image .fa.fa-chevron-left,
        .product-list .product__img .image .fa.fa-chevron-right{
            display: block !important;
            color: #023999 !important;
            font-size: 28px !important;
            position: absolute;
        }
        .product-list .product__img .image .fa.fa-chevron-left{
            top: 50%;
            left: 15px;
        }
        .product-list .product__img .image .fa.fa-chevron-right{
            top: 50%;
            right: 15px;
        }
        .add-product .product__information .product__size-title{
            margin: 0.5rem 0;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about .product__price{
            flex-direction: column !important;
            line-height: 1 !important;
            font-size: 28px !important;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 5px;
        }
        .add-product .product__information .product__about{
            justify-content: space-between !important;
            margin-top: 1rem !important;
        }
        .add-product .product__information .color__boxes .color__box{
            width: 70px !important;
            height: 63px !important;
        }
        .add-product .product__information .brend a{
            width: 30%;
            margin: 3px 5px;
            margin-right: 0 !important;
        }
        .q__comments span{
            margin-right: 20px !important;
        }
        .question .q__box:nth-child(2){
            flex-direction: row;
        }
        .question .q__box .box {
            margin: 10px 0;
        }
        .question .q__box:first-child{
            display: block;
        }
        .question .q__box .comment{
            width: 100%;
            align-items: center;
            margin-bottom: 1rem;
        }
        .question .q__box .comment p{
            padding-bottom: 0;
        }
        .question .q__box .place{
            width: 100%;
        }
        .question .q__box:first-child {
            padding: 0 1rem 1rem 1rem;
        }
        .add-product .advertising__title {
            margin-top: 30px;
            font-size: 22px;
            line-height: 1;
        }
        .recently-products .recently__title{
            font-size: 24px;
            line-height: 1;
        }
        .question__title{
            margin-top: 30px;
            font-size: 22px;
            line-height: 1;
        }
        .add-product .recommended .r__box .box__title{
            font-size: 24px;
            line-height: 1;
            margin-bottom: 2rem;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 74%;
        }
        .customer .c__box:first-child{
            width: 100%;
            margin-top: 20px;
        }
        .customer .c__box:first-child .c__box-title {
            font-size: 20px;
        }
        .customer .user__comment p {
            font-size: 18px !important;
        }

        .c__box:last-child{
            width: 100%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .mobile__slide {
            display: block;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
        .question .q__box .box{
            width: 29%;
            height: 110px;
        }
        .customer .c__box:first-child .c__box-title{
            font-size: 20px;
        }
        .customer .c__box:first-child .c__box-title span{
            font-size: 20px;
        }
        .customer .user__comment .user .user__name{
            font-size: 16px;
        }
        .customer .user__comment p{
            font-size: 14px !important;
        }
        .p-customer .customer .c__box .user__comment .date__sale{
            justify-content: space-between;
        }
        .cart-justify{
            flex-direction: column;
            align-items: unset;
            padding: 10px;
        }
        .add-product .product-list{
            padding: 10px;
        }
        .add-product .product-list .product__img{
            margin-right: 0 !important;
        }
        .add-product .product__information .product__about{
            flex-direction: column !important;
        }
        .add-product .product__information .product__about .product__price{
            margin-bottom: 1rem;
        }
        .add-product .product__information .product__buttons{
            align-items: flex-start !important;
            justify-content: space-between !important;
        }
        .add-product .product__information .product__buttons *{
            margin-bottom: 10px;
            margin-right: 5px !important;
            font-size: 12px;
            padding: 5px 8px;
        }
        .add-product .product__information .product__buttons button:not(:last-child){
            margin-right: 5px !important;
        }
        .add-product .product__information .product__buttons #buy{
            margin-right: 5px !important;
        }
        .mini__pages .comment__page{
            font-size: 14px !important;
            padding: 8px 15px !important;
        }
        .mini__pages .character__page{
            font-size: 14px !important;
            padding: 8px 15px !important;
        }
        .add-product .recommended .r__box:nth-child(2) p{
            font-size: 14px;
        }
        .q__comments a{
            margin-left: 0 !important;
            margin-bottom: 1rem !important;
        }
        .comment__btn{
            padding: 6px 10px !important;
        }
        .c__box:last-child .box__title{
            font-size: 20px !important;
        }
        .c__box:last-child{
            height: 370px !important;
        }
        .c__box:last-child input{
            font-size: 14px !important;
        }
        .c__box:last-child textarea{
            font-size: 14px !important;
        }
        .c__box:last-child button{
            font-size: 14px !important;
        }
    }

    /* @media (min-width: 380px) and (max-width: 400px){
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 60%;
        }
    } */

    @media (max-width: 376px){
        .question .q__box .box p {
            font-size: 10px;
        }
        .image {
            display: none;
        }
        .mobile__slide {
            display: block;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: auto !important;
        }
        .add-product .product-list .product__img .images{
            height: 400px;
        }
        .add-product .product-list .product__img .images img{
            height: 23%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-around;
        }
        .add-product .product__information .product__buttons{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .add-product .product__information .color__title{
            margin: 0.5rem 0;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .q__comments span{
            margin-right: 20px !important;
        }
        .q__comments p{
            margin-left: unset;
            text-align: center;
            font-size: 14px; 
            margin: 1rem 0;
        }
        .question{
            display: block;
        }
        .question .q__box:nth-child(2){
            flex-direction: row;
        }
        .question .q__box .box {
            margin: 10px 0;
        }
        .question .q__box:first-child{
            display: block;
            margin: 0;
        }
        .question .q__box .comment{
            width: 100%;
            align-items: center;
            margin-bottom: 1rem;
        }
        .question .q__box .comment p{
            padding-bottom: 0;
        }
        .question .q__box .place{
            width: 100%;
        }
        .question .q__box:first-child {
            padding: 0 1rem 1rem 1rem;
        }
        .question .q__box{
            width: 100% !important;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 74%;
        }
        .c__box:last-child {
            padding: 1rem;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
        .question__title {
            font-size: 24px;
        }
        .add-product .recommended .r__box:nth-child(2) .links .market__link{
            font-size: 14px;
        }
        .write__to-market{
            font-size: 14px;
        }
        .write__to-market svg{
            width: 16px;
        }
    }

    @media (max-width: 360px){
        .add-product .product__information .color__boxes .color__box{
            margin: 6px !important;
        }
        .image {
            display: none;
        }
        .radioContainer{
            margin: 4px !important;
        }
        .q__comments{
            flex-direction: column;
        }
        .add-product .advertising__title {
            font-size: 24px;
            line-height: 1;
        }
        .recently-products .recently__title{
            font-size: 24px;
            line-height: 1;
        }
        .question__title{
            font-size: 24px;
            line-height: 1;
        }
        .add-product .recommended .r__box .box__title{
            font-size: 24px;
            line-height: 1;
            margin-bottom: 1rem;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 60%;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
        .add-product .product__information .product__buttons button:last-child{
            padding: 5px 8px !important;
        }
        .add-product .product__information .product__buttons #korzina__button{
            padding: 5px 8px !important;
        }
        .add-product .product__information .product__buttons #buy{
            padding: 5px 8px !important;
        }
    }

    @media (max-width: 300px){
        .radioContainer{
            margin: 2px !important;
        }
        .add-product .product__information .payment{
            display: block;
            text-align: center;
        }
        .product__information .sales{
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .add-product .product__information .warehouse{
            text-align: center;
        }
        .customer .user__comment .user{
            display: block;
        }
        .customer .user__comment .user .user__name{
            width: 100%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer > span{
            width: 100% !important;
            margin-right: 5rem !important;
        }
        .customer .c__box:first-child .c__box-title{
            margin-top: 1rem;
        }
        .comment__btn{
            padding: 6px 10px;
            font-size: 12px;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        }
        .radioContainer .circle {
            width: auto;
            height: 35px;
            padding: 6px 15px 0 15px;
            font-size: 14px;
        }
        .question .q__box .box{
            width: 85px;
            height: 95px;
        }
    }

</style>
