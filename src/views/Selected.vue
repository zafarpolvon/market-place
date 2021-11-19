<template>
    <div class="back">
        <Navbar />
        <second-navbar />
        <div class="container mx-auto px-12 pages">
            <a href="#">Главная страница / </a>
            <a href="#"> Мои заказы</a>
        </div>
        <div class="container mx-auto px-12">
            <div class="selected__title">Избранное</div>
        </div>
        <div class="container mx-auto px-12">
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
        </div>
        <div class="container mx-auto px-12 c-products">
            <div class="advertising__title">Рекламный блок</div>
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="advertising__button mt-8">
                <button type="submit" class="show__button">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-12 mb-12">
            <div class="recently-products">
                <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">
                        <Cart :cart="cart" />
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

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
    Cart
  },
  
}
</script>

<style scoped>
    .pages{
        padding: 0rem 4rem 1rem 4rem;
    }
    .pages a{
        color: #023047;
    }
    .pages a:hover{
        color: #023999;
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

    @media (max-width: 300px){
        .delivery-cart__title{
            font-size: 32px;
        }
    }

</style>