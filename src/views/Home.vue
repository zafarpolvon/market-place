<template>
    <div class="back">
        <Navbar />
        <Slide />
        <Magazin />
        <div class="container mx-auto mt-8 px-12">
            <Title />
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in carts.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-12 mt-12 banner">
            <div class="grid grid-cols-4 gap-4">
                <a href="#" class="col-span-2">
                    <img class="w-full h-64" src="../assets/image/image 25.png" alt="">
                </a>
                <a href="#" class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 26.png" alt="">
                </a>
                <a href="#" class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 27.png" alt="">
                </a>
            </div>
        </div>
        <div class="container mx-auto mt-12 px-12">
            <div class="grid grid-cols-5 gap-3">
                <div v-for="cart in carts" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import Slide from '../components/Slide.vue'
import Magazin from '../components/Magazin.vue'
import Cart from '../components/Cart.vue'
import Title from '../components/Title.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  computed: {
    carts () {
      return this.$store.getters.CARTS
    }
  },
  components: {
    Navbar,
    Slide,
    Magazin,
    Cart,
    Title,
    Footer
  }
}

</script>
<style scoped>
    .back {
        background-color: #E5E5E5;
    }
    .show__all {
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 12px 80px;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-5 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
    }

    @media (min-width: 376px) and (max-width: 600px){
        .px-12{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .brand__name{
            font-size: 32px;
        }
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .banner img.h-64{
            height: auto;
        }
    }

    @media (min-width: 376px) and (max-width: 415px){
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
    }

    @media (max-width: 376px){
        .px-12{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .brand__name{
            font-size: 28px;
            line-height: 28px;
        }
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .banner img.h-64{
            height: auto;
        }
        .banner .gap-4{
            gap: 5px;
        }
    }

    @media (max-width: 300px){
        .show__all{
            padding: 12px 55px;
        }
    }

</style>
