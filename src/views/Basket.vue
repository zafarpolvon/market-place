<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-12 mb-10 pages">
            <div class="basket__href mt-5">
                <a href="#">Главная страница / </a>
                <a href="#">Корзина</a>
            </div>
            <div class="basket__title mt-5">
                <h4>Корзина</h4>
            </div>
            <div class="grid grid-cols-10 gap-4 pb-6">
                <div class="col-span-7">
                    <Korzina />
                    <div class="basket__delivery mt-8">
                        <h5>Способ доставки</h5>
                        <button class="mt-4" @click="show()">Выбрать адрес доставки</button>
                        <Modal-Delivery />
                        <Modal-Address />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <Payment />
                        <Login />
                    </div>
                </div>
                <div class="col-span-3">
                    <Total />
                    <div class="basket__spec mt-8">
                        <a href="#" @click="address()">Правил пользования торговой площадкой и правилами возврата</a>
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
import Korzina from '../components/Korzina.vue'
import Total from '../components/Total.vue'
import Payment from '../components/Payment.vue'
import Login from '../components/Login.vue'
import ModalDelivery from '../components/modal/ModalDelivery.vue'
import ModalAddress from '../components/modal/ModalAddress.vue'

export default {
  mount () {
    this.show()
  },
  methods: {
    show () {
      this.$modal.show('Modal-Delivery')
    },
    address () {
      this.$modal.show('Modal-Address')
    }
  },
  components: {
    Navbar,
    Footer,
    Korzina,
    Total,
    Payment,
    Login,
    ModalDelivery,
    ModalAddress
  }
}
</script>

<style scoped>
    .back {
        background-color: #E5E5E5;
    }
    .pages a{
        color: #023047;
    }
    .pages a:hover{
        color: #023999;
    }
    .basket__href a {
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        color: #023047;
    }
    .basket__title h4 {
        font-weight: 600;
        font-size: 48px;
        line-height: 130%;
        color: #023047;
        margin-bottom: 1rem;
    }
    .basket__delivery {
        padding: 39px 20px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
    .basket__delivery h5 {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .basket__delivery button {
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        color: #0052FF;
    }
    .basket__spec {
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 25px;
    }
    .basket__spec a {
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        color: #023047;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-10 {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-10 {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
        .col-span-3 {
            grid-column: span 7 / span 7;
        }
    }

    @media (max-width: 600px){
        .px-12{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid-cols-10{
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
        .grid-cols-2{
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .col-span-3{
            grid-column: span 7 / span 7;
        }
    }

    @media (max-width: 415px){
        .basket__title h4{
            font-size: 24px !important;
        }
    }

    @media (max-width: 376px){
        .basket__title h4{
            font-size: 24px !important;
        }
        .basket__delivery{
            padding: 20px 10px;
        }
        .basket__delivery h5{
            font-size: 20px;
        }
        .payment__item{
            padding: 20px 10px;
        }
    }

</style>
