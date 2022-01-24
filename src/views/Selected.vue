<template>
    <div class="back">
        <Navbar />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mt-8">
            <div class="selected__title">Избранное</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mt-6">
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in product" :key="cart.id">
                    <Cart :favorite="true" :cart="cart" />
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12 c-products mt-8">
            <div class="advertising__title">Рекламный блок</div>
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :favorite="false" :cart="cart" />
                </div>
            </div>
            <div class="advertising__button mt-8">
                <button type="submit" class="show__button">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mb-12 mt-8">
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
    LocationNavbar
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

    @media (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
    }

    @media (max-width: 300px){
        .delivery-cart__title{
            font-size: 32px;
        }
    }

</style>