<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <div class="container mx-auto px-12 pages">
            <a href="#">Главная страница / </a>
            <a href="#"> Мои заказы</a>
        </div>
        <div class="container mx-auto px-12 delivery-carts">
            <div class="delivery-cart__title">Мои заказы</div>
            <h1>Заказ №23</h1>
            <order-cart />
            <order-cart />
            <order-cart />
            <div class="total">Общая сумма: <span>2070 ₽</span></div>
            <h1>Заказ №23</h1>
            <order-cart />
            <order-cart />
            <order-cart />
            <order-cart />
            <div class="total">Общая сумма: <span>2070 ₽</span></div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'
import OrderCart from '../components/OrderCart.vue'

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
    OrderCart
  }
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
    .delivery-cart__title{
        font-size: 42px;
        color: #023047;
    }
    .delivery-carts h1{
        color: #023047;
        font-size: 32px;
        font-weight: normal;
        margin: 2rem 0 1.5rem 0;
        padding-left: 1rem;
    }
    .delivery-carts .cart.delivery__cart{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem;
        border-radius: 5px;
        margin: 1.5rem 0;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .delivery-carts .cart.delivery__cart .cart__img{
        display: flex;
        width: 40%;
    }
    .delivery-carts .cart.delivery__cart .cart__img .image{
        width: 150px;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f6f6f6;
        border-radius: 5px;
        margin-right: 2.5rem;
    }
    .delivery-carts .cart.delivery__cart .cart__img .image img{
        width: 100%;
        border-radius: 5px;
    }
    .delivery-carts .cart.delivery__cart .cart__info{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .delivery-carts .cart.delivery__cart .cart__info .title{
        color: #000;
        font-size: 24px;
        font-weight: bold;
    }
    .delivery-carts .cart.delivery__cart .cart__info p{
        color: #000;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child{
        color: #023047;
        margin-bottom: 10px;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child span{
        margin-top: auto !important;
        color: #023047;
    }
    .delivery-carts .cart.delivery__cart .order{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 1rem;
        margin-left: -10rem;
        width: 25%;
    }
    .delivery-carts .cart.delivery__cart .order p{
        color: #023047;
        font-size: 18px;
    }
    .delivery-carts .cart.delivery__cart .order p span{
        margin-left: 1rem;
    }
    .delivery-carts .cart.delivery__cart .order .payment{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .delivery-carts .cart.delivery__cart .order .payment img{
        margin-left: 1rem;
    }   
    .delivery-carts .cart.delivery__cart .price{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
    } 
    .delivery-carts .cart.delivery__cart .price #price{
        color: #0052FF;
        font-size: 32px;
        font-weight: bold;
        align-self: end;
    }
    .delivery-carts .cart.delivery__cart .price p{
        color: #023047;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .delivery-carts .cart.delivery__cart .price p span{
        margin-left: 1rem;
    }
    .delivery-carts .total{
        border-top: 1px solid #DDDDDD;
        padding-top: 1.5rem;
        color: #000;
        font-size: 30px;
        font-weight: normal;
    }
    .delivery-carts .total span{
        color: #0052FF;
        font-size: 30px;
        margin-left: 0.5rem;
        font-weight: bold;
    }
</style>