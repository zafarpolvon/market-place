<template>
    <div class="back">
        <Navbar />
        <second-navbar :active="active" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pb-12 xl:mt-4 md:mt-4 mt-0">
            <div class="info__boxes">
                <div class="box">
                    <div class="user">
                        <!-- <img :src="getUser.photo" alt="not found"> -->
                        <img src="../assets/image/unsplash_OhKElOkQ3RE (1).png" alt="">
                        <div class="user__name">{{ getUser.name || 'Not found' }}</div>
                    </div>
                    <div class="email">Э-маил: <span>{{ getUser.email || 'Not found' }}</span></div>
                    <div class="b__user">
                        <div class="phone">Телефон: <span>{{ getUser.phone }}</span></div>
                    </div>
                </div>
                <div class="box">
                    <div class="delivery">
                        <div class="delivery__title">Мои заказы</div>
                        <span class="end__order">Завершенные заказы</span>
                    </div>
                    <ul class="cart__list py-4 mt-4">
                        <li>
                            <div class="svg">
                                <svg width="22" height="22" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.5 28.5185H3.5C1.567 28.5185 0 26.9225 0 24.9537V3.56481C0 1.59602 1.567 0 3.5 0H31.5C33.433 0 35 1.59602 35 3.56481V24.9537C35 26.9225 33.433 28.5185 31.5 28.5185ZM3.5 12.4769V24.9537H31.5V12.4769H3.5ZM3.5 3.56481V8.02083H31.5V3.56481H3.5ZM19.25 21.3889H7V17.8241H19.25V21.3889Z" fill="#898989"/>
                                </svg>
                                <span>1</span>
                            </div>
                            Ожидается оплата
                        </li>
                        <li>
                            <div class="svg">
                                <svg width="22" height="22" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.17529 4.54983C2.451 2.48151 4.19044 0.96875 6.22352 0.96875H24.7752C26.8083 0.96875 28.5477 2.48151 28.8234 4.54983C29.1993 7.36941 29.7648 11.9605 29.9533 15.3737C30.139 18.7344 30.0876 23.2774 30.027 26.1094C29.9817 28.2305 28.3703 29.9603 26.2917 30.121C23.4653 30.3395 18.89 30.6471 15.4994 30.6471C12.1087 30.6471 7.53345 30.3395 4.70696 30.121C2.62841 29.9603 1.01701 28.2305 0.971675 26.1094C0.911143 23.2774 0.859727 18.7344 1.04538 15.3737C1.23392 11.9605 1.79944 7.36941 2.17529 4.54983ZM6.22352 3.2517C5.29476 3.2517 4.52091 3.93855 4.39852 4.85668C4.02285 7.67495 3.46853 12.1872 3.28543 15.5018C3.10516 18.7651 3.15424 23.2294 3.21473 26.0598C3.23496 27.0059 3.94898 27.7729 4.87692 27.8446C7.70201 28.063 12.2021 28.3642 15.4994 28.3642C18.7966 28.3642 23.2967 28.063 26.1218 27.8446C27.0497 27.7729 27.7637 27.0059 27.784 26.0598C27.8445 23.2294 27.8935 18.7651 27.7133 15.5018C27.5302 12.1872 26.9759 7.67495 26.6002 4.85668C26.4778 3.93855 25.7039 3.2517 24.7752 3.2517H6.22352Z" fill="#898989"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51644 7.05662C10.136 7.05662 10.6382 7.56768 10.6382 8.1981C10.6382 10.9299 12.8146 13.1445 15.4993 13.1445C18.1841 13.1445 20.3605 10.9299 20.3605 8.1981C20.3605 7.56768 20.8627 7.05662 21.4823 7.05662C22.1018 7.05662 22.604 7.56768 22.604 8.1981C22.604 12.1908 19.4232 15.4274 15.4993 15.4274C11.5755 15.4274 8.39465 12.1908 8.39465 8.1981C8.39465 7.56768 8.89689 7.05662 9.51644 7.05662Z" fill="#898989"/>
                                </svg>
                                <span>1</span>
                            </div>
                            Ожидается отправка
                        </li>
                        <li>
                            <div class="svg">
                                <svg width="22" height="22" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.53 12.3504L29.9675 4.6171C29.7817 4.20888 29.3515 3.94355 28.875 3.94319H25.3125V1.73367C25.3125 1.12352 24.7808 0.628906 24.125 0.628906H1.5625C0.906662 0.628906 0.375 1.12352 0.375 1.73367V20.5146C0.375 21.1248 0.906662 21.6194 1.5625 21.6194H4.10375C4.66591 23.5438 6.5439 24.8795 8.6875 24.8795C10.8311 24.8795 12.7091 23.5438 13.2712 21.6194H20.7287C21.2909 23.5438 23.1689 24.8795 25.3125 24.8795C27.4561 24.8795 29.3341 23.5438 29.8963 21.6194H32.4375C33.0933 21.6194 33.625 21.1248 33.625 20.5146V12.7813C33.6247 12.6332 33.5924 12.4867 33.53 12.3504ZM25.3125 6.15272H28.0912L30.6325 11.6765H25.3125V6.15272ZM8.6875 22.7241C7.37582 22.7241 6.3125 21.7349 6.3125 20.5146C6.3125 19.2943 7.37582 18.3051 8.6875 18.3051C9.99918 18.3051 11.0625 19.2943 11.0625 20.5146C11.0625 21.7349 9.99918 22.7241 8.6875 22.7241ZM20.7288 19.4099H13.2712C12.7091 17.4854 10.8311 16.1497 8.6875 16.1497C6.5439 16.1497 4.66591 17.4854 4.10375 19.4099H2.75V2.83843H22.9375V16.7142C21.8454 17.3039 21.0506 18.2739 20.7288 19.4099ZM25.3125 22.7241C24.0008 22.7241 22.9375 21.7349 22.9375 20.5146C22.9375 19.2943 24.0008 18.3051 25.3125 18.3051C26.6242 18.3051 27.6875 19.2943 27.6875 20.5146C27.6875 21.7349 26.6242 22.7241 25.3125 22.7241ZM31.25 19.4099H29.8962C29.3562 17.4639 27.4727 16.1021 25.3125 16.0956V13.8861H31.25V19.4099Z" fill="#898989"/>
                                </svg>
                            </div>
                            Заказ отправлен
                        </li>
                        <li>
                            <div class="svg">
                                <svg width="22" height="22" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30 20.7662V26.9961H2V14.5363V2.07662H19.2V0H3.2C1.43269 0 0 0.929734 0 2.07662V26.9961C0 28.1429 1.43269 29.0727 3.2 29.0727H28.8C30.5673 29.0727 32 28.1429 32 26.9961V20.7662H30ZM31.0463 3.99329L27.8293 0.486089C27.2228 -0.16203 26.2522 -0.16203 25.6457 0.486089L11.998 15.3651V21.253H17.3889L31.0365 6.37393C31.631 5.71272 31.631 4.6545 31.0365 3.99329H31.0463ZM16.5774 19.1277H13.9453V16.2582L23.1477 6.21484L25.7895 9.095L16.5774 19.1277ZM24.5254 4.71722L27.1672 7.59737L29.38 5.18484L26.7383 2.30469L24.5254 4.71722Z" fill="#898989"/>
                                </svg>
                                <span>1</span>
                            </div>
                            Ожидается отзыв
                        </li>
                        <li>
                            <div class="svg">
                                <svg width="22" height="22" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3285 6.14846L24.3754 0.74843C23.4416 -0.249477 21.9471 -0.249477 21.0133 0.74843L0 23.6576V32.7231H8.30024L29.3135 9.81393C30.2288 8.79586 30.2288 7.16653 29.3135 6.14846H29.3285ZM7.05256 29.4522H3V25.034L17.1689 9.57031L21.2365 14.0049L7.05256 29.4522ZM19.2891 7.26535L23.3566 11.6999L26.7638 7.98535L22.6962 3.55078L19.2891 7.26535Z" fill="#898989"/>
                                </svg>
                                <span>1</span>
                            </div>
                            Возвраты
                        </li>
                    </ul>
                </div>
                <div class="box">
                    <div class="delivery">
                        <div class="delivery__title">Банковские карты</div>
                    </div>
                    <p @click="modalCard()">Добавыть карту</p>
                    <modal-card />
                </div>
            </div>
            <div class="info__boxes2">
                <!-- <div class="box">
                    <div class="box__title">Банковские карты</div>
                    <a @click="modalCard()">Добавить карту</a>
                    <modal-card />
                </div>
                <div class="box">
                    <div class="box__title">Покупки</div>
                    <p>0 товаров</p>
                </div>
                <div class="box">
                    <div class="box__title">Любимые бренды</div>
                    <p>1 бренд</p>
                </div> -->
                <div class="box">
                    <div class="box__title">Уведомления</div>
                    <p> 0 шт</p>
                </div>
                <div class="box">
                    <div class="box__title">Мои отзывы</div>
                    <p> 20 шт</p>
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
import ModalCard from '../components/modal/ModalCard.vue'

export default {
  name: 'Home',
  data: () => ({
  }),
  methods: {
    modalCard () {
      this.$modal.show('Modal-Card')
    }
  },
  computed: {
    getUser () {
      return this.$store.getters.LOADUSER
    }
  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
    ModalCard
  }
}
</script>

<style scoped>
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
    .info__boxes{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
    .info__boxes .box{
        padding: 2.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 31%;
        height: 235px;
        display: flex;
        flex-direction: column;
    }
    .info__boxes .box .user{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .info__boxes .box .user img{
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-right: 1rem;
    }
    .info__boxes .box .user .user__name{
        color: #023047;
        font-size: 23px;
        font-weight: bold;
    }
    .info__boxes .box .email{
        color: #898989;
    }
    .cart__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .cart__list li{
        width: 20%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .cart__list .svg{
        width: max-content;
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
    .box a {
        cursor: pointer;
    }
    .info__boxes .box .email span{
        color: #2C2C2C;
    }
    .info__boxes .box .b__user{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info__boxes .box .b__user .phone{
        color: #898989;
    }
    .info__boxes .box .b__user .phone span{
        color: #2C2C2C;
    }
    .info__boxes .box .delivery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .end__order{
        color: #999;
    }
    .info__boxes .box .delivery img{
        border-radius: 50%;
        object-fit: none;
        height: 100px;
        width: 100px;
        background: #FFF;
        margin-right: 1rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .info__boxes .box .delivery .delivery__title{
        font-size: 23px;
        color: #023047;
        font-weight: bold;
    }
    .info__boxes .box:nth-child(2) p{
        color: #2C2C2C;
    }
    .info__boxes .box:nth-child(2) p span{
        color: #898989;
    }
    .info__boxes .box:nth-child(3) p{
        color: #999;
        cursor: pointer;
    }
    .info__boxes .box:nth-child(3) p span{
        color: #898989;
    }
    .info__boxes .box:nth-child(3) .delivery .discount{
        display: block;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        min-width: 100px;
        background: #FFF;
        margin-right: 1rem;
        color: #0052FF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 42px;
        font-weight: bold;
    }
    .info__boxes2{
        display: flex;
        flex-wrap: wrap;
        margin: 2rem 0 5rem 0;
    }
    .info__boxes2 .box{
        padding: 2rem 1.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 140px;
        margin-right: 2rem;
        width: 23%;
    }
    .info__boxes2 .box .box__title{
        font-size: 23px;
        color: #023047;
        font-weight: bold;
    }
    .info__boxes2 .box p{
        color: #898989;
        display: flex;
        align-items: center;
    }
    .info__boxes2 .box p img{
        margin-right: 10px;
    }

    @media (min-width: 415px) and (max-width: 1300px){
        .info__boxes2{
            justify-content: space-between;
        }
    }

    @media (max-width: 1300px){
        .info__boxes{
            flex-direction: column;
        }
        .info__boxes .box{
            width: 100%;
            margin-bottom: 1rem;
        }
        .info__boxes2{
            margin: 2rem 0 0;
            flex-wrap: wrap;
        }
        .info__boxes2 .box{
            width: 48%;
            margin: 10px 0;
        }
    }
    @media (min-width:1025px) {
        .info__boxes .box:nth-child(3) .delivery .discount {
            font-size: 32px;
            margin-right: 0.5rem;
        }
        .info__boxes .box {
            padding: 2rem;
        }
    }
    @media (min-width: 415px) and (max-width: 600px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .info__boxes .box .delivery{
            align-items: flex-start;
        }
        .cart__list{
            margin-top: 0;
            padding: 0;
            justify-content: center;
        }
        .cart__list li{
            width: 48%;
            margin-bottom: 12px;
        }
        .info__boxes .box{
            padding: 1.2rem;
            height: auto;
            margin: 10px 0;
        }
        .info__boxes2 .box .box__title{
            font-size: 18px;
            line-height: 18px;
        }
        .info__boxes .box .user{
            margin-bottom: 10px;
        }
        .info__boxes2{
            margin: 0;
        }
        .info__boxes2 .box{
            padding: 1.2rem;
            height: 110px;
        }
    }

    @media (max-width: 415px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .cart__list{
            margin-top: 0;
            padding: 0;
        }
        .cart__list li{
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            width: 100%;
            margin-bottom: 12px;
        }
        .info__boxes .box .delivery{
            align-items: flex-start;
        }
        .info__boxes .box{
            padding: 1.2rem;
            height: auto;
            margin: 10px 0;
        }
        .info__boxes2 .box .box__title{
            font-size: 18px;
            line-height: 18px;
        }
        .info__boxes .box .user{
            margin-bottom: 10px;
        }
        .info__boxes .box .user .user__name{
            font-size: 20px;
            line-height: 20px;
        }
        .info__boxes .box .delivery .delivery__title{
            font-size: 20px;
            line-height: 20px;
        }
        .info__boxes2{
            margin: 0;
        }
        .info__boxes2 .box{
            width: 100%;
            padding: 1.2rem;
            height: 110px;
        }
    }

    @media (max-width: 376px){
        .info__boxes .box .email{
            font-size: 14px;
        }
        .info__boxes .box .b__user .phone{
            font-size: 14px;
        }
        .info__boxes .box .b__user #back{
            font-size: 14px;
        }
        .info__boxes .box .user img{
            width: 80px;
            margin-bottom: 0.5rem;
        }
        .info__boxes .box .user .user__name{
            font-size: 18px;
            line-height: 18px;
        }
        .info__boxes .box{
            height: auto;
        }
        .info__boxes .box .delivery .delivery__title{
            font-size: 18px;
            line-height: 18px;
        }
        .info__boxes .box .delivery img{
            width: 80px;
            height: 80px;
        }
        .info__boxes .box:nth-child(3) .delivery .discount{
            width: 80px;
            min-width: 80px;
            height: 80px;
            font-size: 36px;
        }
        .info__boxes .box:nth-child(2) p{
            font-size: 14px;
        }
        .info__boxes .box:nth-child(3) p{
            font-size: 14px;
        }
        .info__boxes2 .box .box__title{
            font-size: 16px;
            line-height: 16px;
        }
        .info__boxes2 .box p{
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .info__boxes .box{
            height: auto;
            padding: 10px;
        }
        .info__boxes .box .user{
            flex-direction: column;
        }
        .info__boxes .box .delivery{
            flex-direction: column;
        }
        .info__boxes .box .delivery img{
            margin-bottom: 10px;
        }
        .info__boxes .box:nth-child(3) .delivery .discount{
            margin-bottom: 10px;
        }
        .info__boxes2 .box{
            height: 75px;
        }
        .info__boxes2 .box{
            padding: 10px;
        }
        .info__boxes .box .email{
            display: flex;
            flex-direction: column;
        }
        .info__boxes .box .b__user{
            align-items: flex-end;
        }
        .info__boxes .box .b__user .phone{
            display: flex;
            flex-direction: column;
        }
    }

</style>
