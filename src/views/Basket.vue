<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mb-10 pages">
            <div class="basket__href mt-5">
                <a href="#">Главная страница / </a>
                <a href="#">Корзина</a>
            </div>
            <div class="basket__title mt-5">
                <h4>Корзина</h4>
            </div>
            <div class="grid grid-cols-10 gap-4 pb-6">
                <div class="col-span-7">
                    <div class="basket__title">ИП Иван Дияров</div>
                    <Korzina />
                    <div class="basket__delivery mt-8">
                        <div>
                            <h5>Способ доставки</h5>
                            <button class="mt-4" @click="show()">Выбрать адрес доставки</button>
                        </div>
                        <div>
                            <h5>Способ получения товара</h5>
                            <div class="inputs mt-4">
                                <div>
                                    <input class="mr-2" type="radio" name="delivery" />
                                    <span>Самовывоз</span>
                                </div>
                                <div>
                                    <input class="mr-2" type="radio" name="delivery" />
                                    <span>Доставка</span>
                                </div>
                            </div>
                        </div>
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
import MainMenu from '../components/layout/MainMenu.vue'

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
    ModalAddress,
    MainMenu
  }
}
</script>

<style scoped>
    .back {
        background-color: #fff;
    }
    .pages a{
        color: #023047;
    }
    .pages a:hover{
        color: #023999;
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
        top: -2px;
        left: 4px;
        display: inline-block;
        visibility: visible;
        border-radius: 6px;
        width: 12px;
        height: 12px;
        background: #EE4927;
        content: "";
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
    .inputs{
        display: flex;
        align-items: center;
    }
    .inputs div{
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    .inputs input{
        width: 18px;
        height: 18px;
    }
    .basket__delivery button {
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        color: #131E3D;
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
    .basket__gray {
        font-size: 14px;
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
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
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
        .basket__title h4 {
            font-size: 28px
        }
        .basket__price h3 {
            font-size: 28px;
        }
        .basket__price h4 {
            font-size: 16px;
        }
        .basket__price p {
            font-size: 12px;
        }
    }

    @media (max-width: 415px){
        .basket__title h4{
            font-size: 24px !important;
        }
        .basket__gray {
            font-size: 14px;
        }
    }

    @media (max-width: 376px){
        .basket__title h4{
            font-size: 24px !important;
        }
        .basket__delivery{
            padding: 20px 10px;
        }
        .basket__gray {
            font-size: 14px;
        }
        .basket__delivery h5{
            font-size: 20px;
        }
        .payment__item{
            padding: 20px 10px;
        }
    }

</style>
