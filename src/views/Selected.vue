<template>
    <div class="back">
        <Navbar />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mt-8">
            <div class="selected__title mb-8">Избранное</div>
            <tabs class="selected">
                <tab title="Товары">
                    <div class="grid grid-cols-5 gap-3 my-8" >
                        <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                            <Cart :favorite="true" :cart="cart" />
                        </div>
                    </div>
                </tab>
                <tab title="Продавцы">
                    <div class="sellers">
                        <div class="seller">
                            <i class="fa fa-heart" style="font-size: 24px;"></i>
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
                        <div class="seller">
                            <i class="fa fa-heart" style="font-size: 24px;"></i>
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
                        <div class="seller">
                            <i class="fa fa-heart" style="font-size: 24px;"></i>
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
                </tab>
            </tabs>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 c-products mt-8">
            <div class="selected__title mb-8">Рекламный блок</div>
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :favorite="false" :cart="cart" />
                </div>
            </div>
            <div class="advertising__button mt-8">
                <router-link tag="a" to="/filter" class="show__button">Показать еще</router-link>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12 mt-8">
            <div class="recently-products">
                <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                        <Cart :favorite="false" :cart="cart" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'
import Cart from '../components/Cart.vue'
import LocationNavbar from '../components/layout/LocationNavbar.vue'
import { Tabs, Tab } from 'vue-slim-tabs'

export default {
  name: 'Home',
  data: () => ({
    tovar: []
  }),
  async mounted () {
    this.tovar = await this.$store.dispatch('loadData')
    this.setupPagination(this.tovar.map(person => {
      return {
        ...person
      }
    }))
  },
  methods: {

  },
  computed: {
    product () {
      return this.$store.getters.PRODUCTS
    }
  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
    Cart,
    LocationNavbar,
    Tabs,
    Tab
  }
}
</script>

<style scoped>
    .pages a{
        color: #023047;
    }
    .pages a:hover{
        color: #023999;
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
    .selected__title{
        font-size: 42px;
        color: #023047;
        line-height: 1;
    }
    .recently-products .recently__title{
        margin-bottom: 20px;
        color: #023047;
    }
    .advertising__title {
        color: #023047;
        font-size: 38px;
    }
    .sellers{
        display: flex;
        flex-wrap: wrap;
        margin: 2rem 0;
    }
    .seller{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 1rem 1rem 0;
        width: 370px;
        min-height: 275px;
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgb(0 0 0 / 25%);
        border-radius: 8px;
        position: relative;
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
    .seller .fa.fa-heart{
        position: absolute;
        top: 20px;
        right: 20px;
        color: #EE4927;
        cursor: pointer;
    }
    .seller img{
        border-radius: 50%;
        width: 110px;
    }
    .seller .name__title{
        color: #313131;
        font-size: 20px;
        line-height: 1;
        font-weight: bold;
    }
    .seller p{
        color: #666;
        font-size: 16px;
        text-align: center;
    }
    .seller .links{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .seller .links .market__link{
        color: #131E3D;
        border-bottom: 1px solid #131E3D;
        cursor: pointer;
    }
    .seller .links .market__link:hover{
        border-bottom: 1px solid #fff;
    }

    @media (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .selected__title{
            font-size: 22px;
        }
        .seller{
            width: 100%;
            min-height: auto;
            margin: 0 0 1rem 0;
        }
        .seller .name__title{
            font-size: 16px;
            margin-top: 12px;
        }
        .seller p{
            font-size: 14px;
        }
        .write__to-market{
            font-size: 14px;
        }
        .seller .links .market__link{
            font-size: 14px;
        }
        .write__to-market svg{
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }
    }

    @media (max-width: 300px){
        .delivery-cart__title{
            font-size: 22px;
        }
    }

</style>