<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-12 mb-10">
            <div class="basket__href mt-5">
                <a href="#">Главная страница /  Корзина</a>
            </div>
            <div class="basket__title mt-5">
                <h4>Корзина</h4>
            </div>
            <div class="grid grid-cols-10 gap-4">
                <div class="col-span-7 mt-8">
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
</style>
