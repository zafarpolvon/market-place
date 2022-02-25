<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 delivery-carts">
            <div class="delivery-cart__title">Мои заказы</div>
            <ul class="cart__list py-4 mt-4">
                <li>
                    <a to="" >
                        <div class="svg">
                            <svg width="32" height="32" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5 28.5185H3.5C1.567 28.5185 0 26.9225 0 24.9537V3.56481C0 1.59602 1.567 0 3.5 0H31.5C33.433 0 35 1.59602 35 3.56481V24.9537C35 26.9225 33.433 28.5185 31.5 28.5185ZM3.5 12.4769V24.9537H31.5V12.4769H3.5ZM3.5 3.56481V8.02083H31.5V3.56481H3.5ZM19.25 21.3889H7V17.8241H19.25V21.3889Z" fill="#898989"/>
                            </svg>
                            <span>1</span>
                        </div>
                        Ожидается оплата
                        <!-- <payment-expected /> -->
                    </a>
                </li>
                <li>
                    <a to=""  >
                        <div class="svg">
                            <svg width="32" height="32" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.17529 4.54983C2.451 2.48151 4.19044 0.96875 6.22352 0.96875H24.7752C26.8083 0.96875 28.5477 2.48151 28.8234 4.54983C29.1993 7.36941 29.7648 11.9605 29.9533 15.3737C30.139 18.7344 30.0876 23.2774 30.027 26.1094C29.9817 28.2305 28.3703 29.9603 26.2917 30.121C23.4653 30.3395 18.89 30.6471 15.4994 30.6471C12.1087 30.6471 7.53345 30.3395 4.70696 30.121C2.62841 29.9603 1.01701 28.2305 0.971675 26.1094C0.911143 23.2774 0.859727 18.7344 1.04538 15.3737C1.23392 11.9605 1.79944 7.36941 2.17529 4.54983ZM6.22352 3.2517C5.29476 3.2517 4.52091 3.93855 4.39852 4.85668C4.02285 7.67495 3.46853 12.1872 3.28543 15.5018C3.10516 18.7651 3.15424 23.2294 3.21473 26.0598C3.23496 27.0059 3.94898 27.7729 4.87692 27.8446C7.70201 28.063 12.2021 28.3642 15.4994 28.3642C18.7966 28.3642 23.2967 28.063 26.1218 27.8446C27.0497 27.7729 27.7637 27.0059 27.784 26.0598C27.8445 23.2294 27.8935 18.7651 27.7133 15.5018C27.5302 12.1872 26.9759 7.67495 26.6002 4.85668C26.4778 3.93855 25.7039 3.2517 24.7752 3.2517H6.22352Z" fill="#898989"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51644 7.05662C10.136 7.05662 10.6382 7.56768 10.6382 8.1981C10.6382 10.9299 12.8146 13.1445 15.4993 13.1445C18.1841 13.1445 20.3605 10.9299 20.3605 8.1981C20.3605 7.56768 20.8627 7.05662 21.4823 7.05662C22.1018 7.05662 22.604 7.56768 22.604 8.1981C22.604 12.1908 19.4232 15.4274 15.4993 15.4274C11.5755 15.4274 8.39465 12.1908 8.39465 8.1981C8.39465 7.56768 8.89689 7.05662 9.51644 7.05662Z" fill="#898989"/>
                            </svg>
                            <span>1</span>
                        </div>
                        Ожидается отправка
                        <!-- <send-expected /> -->
                    </a>
                </li>
                <li>
                    <a to=""  >
                        <div class="svg">
                            <svg width="32" height="32" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.53 12.3504L29.9675 4.6171C29.7817 4.20888 29.3515 3.94355 28.875 3.94319H25.3125V1.73367C25.3125 1.12352 24.7808 0.628906 24.125 0.628906H1.5625C0.906662 0.628906 0.375 1.12352 0.375 1.73367V20.5146C0.375 21.1248 0.906662 21.6194 1.5625 21.6194H4.10375C4.66591 23.5438 6.5439 24.8795 8.6875 24.8795C10.8311 24.8795 12.7091 23.5438 13.2712 21.6194H20.7287C21.2909 23.5438 23.1689 24.8795 25.3125 24.8795C27.4561 24.8795 29.3341 23.5438 29.8963 21.6194H32.4375C33.0933 21.6194 33.625 21.1248 33.625 20.5146V12.7813C33.6247 12.6332 33.5924 12.4867 33.53 12.3504ZM25.3125 6.15272H28.0912L30.6325 11.6765H25.3125V6.15272ZM8.6875 22.7241C7.37582 22.7241 6.3125 21.7349 6.3125 20.5146C6.3125 19.2943 7.37582 18.3051 8.6875 18.3051C9.99918 18.3051 11.0625 19.2943 11.0625 20.5146C11.0625 21.7349 9.99918 22.7241 8.6875 22.7241ZM20.7288 19.4099H13.2712C12.7091 17.4854 10.8311 16.1497 8.6875 16.1497C6.5439 16.1497 4.66591 17.4854 4.10375 19.4099H2.75V2.83843H22.9375V16.7142C21.8454 17.3039 21.0506 18.2739 20.7288 19.4099ZM25.3125 22.7241C24.0008 22.7241 22.9375 21.7349 22.9375 20.5146C22.9375 19.2943 24.0008 18.3051 25.3125 18.3051C26.6242 18.3051 27.6875 19.2943 27.6875 20.5146C27.6875 21.7349 26.6242 22.7241 25.3125 22.7241ZM31.25 19.4099H29.8962C29.3562 17.4639 27.4727 16.1021 25.3125 16.0956V13.8861H31.25V19.4099Z" fill="#898989"/>
                            </svg>
                        </div>
                        Заказ отправлен
                        <!-- <send-order /> -->
                    </a>
                </li>
                <li>
                    <a to=""  >
                        <div class="svg">
                            <svg width="32" height="32" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 20.7662V26.9961H2V14.5363V2.07662H19.2V0H3.2C1.43269 0 0 0.929734 0 2.07662V26.9961C0 28.1429 1.43269 29.0727 3.2 29.0727H28.8C30.5673 29.0727 32 28.1429 32 26.9961V20.7662H30ZM31.0463 3.99329L27.8293 0.486089C27.2228 -0.16203 26.2522 -0.16203 25.6457 0.486089L11.998 15.3651V21.253H17.3889L31.0365 6.37393C31.631 5.71272 31.631 4.6545 31.0365 3.99329H31.0463ZM16.5774 19.1277H13.9453V16.2582L23.1477 6.21484L25.7895 9.095L16.5774 19.1277ZM24.5254 4.71722L27.1672 7.59737L29.38 5.18484L26.7383 2.30469L24.5254 4.71722Z" fill="#898989"/>
                            </svg>
                            <span>1</span>
                        </div>
                        Ожидается отзыв
                        <!-- <review-pending /> -->
                    </a>
                </li>
                <li>
                    <a to=""  >
                        <div class="svg">
                            <svg width="32" height="32" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3285 6.14846L24.3754 0.74843C23.4416 -0.249477 21.9471 -0.249477 21.0133 0.74843L0 23.6576V32.7231H8.30024L29.3135 9.81393C30.2288 8.79586 30.2288 7.16653 29.3135 6.14846H29.3285ZM7.05256 29.4522H3V25.034L17.1689 9.57031L21.2365 14.0049L7.05256 29.4522ZM19.2891 7.26535L23.3566 11.6999L26.7638 7.98535L22.6962 3.55078L19.2891 7.26535Z" fill="#898989"/>
                            </svg>
                            <span>1</span>
                        </div>
                        Возвраты
                        <!-- <returns /> -->
                    </a>
                </li>
            </ul>
            <div class="zakaz">
                <h1>Заказ №23  Продавец: Mironshoh Nasimov</h1>
                <span>20.10.2021</span>
            </div>
            <div class="order__carts">
                <order-cart />
                <order-cart />
                <order-cart />
            </div>
            <div class="total">Общая сумма: <span>2070 ₽</span></div>
            <div class="zakaz">
                <h1>Заказ №23  Продавец: Mironshoh Nasimov</h1>
                <span>20.10.2021</span>
            </div>
            <div class="order__carts">
                <order-cart />
                <order-cart />
                <order-cart />
                <order-cart />
            </div>
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
import LocationNavbar from '../components/layout/LocationNavbar.vue'
// import PaymentExpected from '../components/modal/PaymentExpected.vue'
// import SendExpected from '../components/modal/SendExpected.vue'
// import SendOrder from '../components/modal/SendOrder.vue'
// import ReviewPending from '../components/modal/ReviewPending.vue'
// import Returns from '../components/modal/Returns.vue'
import $ from "jquery";

export default {
  name: 'Home',
  data: () => ({
    active: false
  }),
  mounted: function() {
    $(".cart__list li").click(function () {
        $(".cart__list li").removeClass("active");
        $(this).addClass("active");
    });
    },
  methods: {
    //  paymentExpected () {
    //     this.$modal.show('Payment-Expected')
    // },
    // sendExpected () {
    //     this.$modal.show('Send-Expected')
    // },
    // sendOrder () {
    //     this.$modal.show('Send-Order')
    // },
    // reviewPending () {
    //     this.$modal.show('Review-Pending')
    // },
    // returns () {
    //     this.$modal.show('Returns')
    // }
  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
    OrderCart,
    LocationNavbar,
    // PaymentExpected,
    // SendExpected,
    // SendOrder,
    // ReviewPending,
    // Returns,
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
    .delivery-cart__title{
        font-size: 42px;
        color: #131E3D;
        line-height: 1;
    }
    .delivery-carts h1{
        color: #313131;
        font-size: 24px;
        font-weight: normal;
        line-height: 1;
        margin: 2rem 0 0.8rem 0;
        padding-left: 1rem;
    }
    .cart__list{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cart__list li{
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    .active a{
        color: #EE4927;
    }
    .active .svg svg path{
        fill: #EE4927;
    }
    .cart__list li a{
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }
    .cart__list .svg{
        margin-right: 12px;
        position: relative;
        display: flex;
        align-items: center;
    }
    .cart__list .svg span{
        padding: 1px 5px;
        background: #EE4927;
        color: #fff;
        font-size: 10px;
        border-radius: 50%;
        position: absolute;
        top: -3px;
        right: -3px;
    }
    .zakaz{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .zakaz span{
        font-size: 18px;
        color: #313131;
    }
    .delivery-carts .order__carts{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .delivery-carts .cart.delivery__cart{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem;
        border-radius: 5px;
        margin: 1.5rem 0;
        /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25); */
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
        color: #313131 !important;
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
        margin-bottom: 2rem;
        color: #000;
        font-size: 24px;
        font-weight: normal;
    }
    .delivery-carts .total span{
        color: #EE4927;
        font-size: 24px;
        margin-left: 0.5rem;
        line-height: 1;
        font-weight: bold;
    }

    @media (max-width: 1300px){
        .cart__list{
            flex-direction: column;
            align-items: flex-start;
        }
        .cart__list li{
            margin-bottom: 12px;
        }
        .delivery-carts h1{
            padding-left: 0;
        }
    }

    @media (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .delivery-carts h1{
            font-size: 18px;
            margin: 0 0 1rem 0;
        }
        .zakaz span{
            font-size: 14px;
        }
        .delivery-carts .total{
            font-size: 18px;
            padding-top: 0;
            padding-bottom: 1rem;
        }
        .delivery-carts .total span{
            font-size: 18px;
        }
        .cart__list li .svg svg{
            width: 22px !important;
            height: 22px;
        }
        .delivery-cart__title{
            font-size: 22px;
        }
    }

    @media (max-width: 300px){
        .delivery-cart__title{
            font-size: 22px;
        }
    }

</style>