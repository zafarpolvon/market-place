<template>
    <div class="back">
        <Navbar />
        <second-navbar :active="active" />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 pb-12 xl:mt-4 md:mt-4 mt-0">
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
                <!-- <div class="box">
                    <div class="delivery">
                        <div class="delivery__title">Мои заказы</div>
                        <span class="end__order">Завершенные заказы</span>
                    </div>
                    <Expected />
                </div> -->
                <div class="box">
                    <div class="delivery">
                        <div class="delivery__title">Банковские карты</div>
                    </div>
                    <div @click="modalCard()" class="add__cart">
                        <i class="fa fa-plus"></i>
                        <p>Добавить карту</p>
                    </div>
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
                    <p class="mt-3"> 0 шт</p>
                </div>
                <div class="box">
                    <div class="box__title">Мои отзывы</div>
                    <p class="mt-3"> 20 шт</p>
                </div>
                <div class="box">
                    <div class="box__title">Местные адреса</div>
                    <p class="my-2">Россия, Москва, Хорошевский проезд 11</p>
                    <div class="add__adress">
                        <div class="svg">
                            <svg width="20" height="20" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 14.1667C12.933 14.1667 14.5 12.5997 14.5 10.6667C14.5 8.73375 12.933 7.16675 11 7.16675C9.067 7.16675 7.5 8.73375 7.5 10.6667C7.5 12.5997 9.067 14.1667 11 14.1667Z" stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 1.33337C8.52467 1.33337 6.1507 2.3167 4.40036 4.06704C2.65002 5.81738 1.66669 8.19135 1.66669 10.6667C1.66669 12.874 2.13569 14.3184 3.41669 15.9167L11 24.6667L18.5834 15.9167C19.8644 14.3184 20.3334 12.874 20.3334 10.6667C20.3334 8.19135 19.35 5.81738 17.5997 4.06704C15.8493 2.3167 13.4754 1.33337 11 1.33337V1.33337Z" stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        Добавить адрес
                    </div>
                </div>
                <div class="box">
                    <div class="box__title">Международные адреса</div>
                    <p class="my-2"> Махмуда тараби 23</p>
                    <p class="my-2"> Махмуда тараби 24</p>
                    <div class="add__adress">
                        <div class="svg">
                            <svg width="20" height="20" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 14.1667C12.933 14.1667 14.5 12.5997 14.5 10.6667C14.5 8.73375 12.933 7.16675 11 7.16675C9.067 7.16675 7.5 8.73375 7.5 10.6667C7.5 12.5997 9.067 14.1667 11 14.1667Z" stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 1.33337C8.52467 1.33337 6.1507 2.3167 4.40036 4.06704C2.65002 5.81738 1.66669 8.19135 1.66669 10.6667C1.66669 12.874 2.13569 14.3184 3.41669 15.9167L11 24.6667L18.5834 15.9167C19.8644 14.3184 20.3334 12.874 20.3334 10.6667C20.3334 8.19135 19.35 5.81738 17.5997 4.06704C15.8493 2.3167 13.4754 1.33337 11 1.33337V1.33337Z" stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        Добавить адрес
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
import ModalCard from '../components/modal/ModalCard.vue'
import Expected from '../components/layout/Expected.vue'

export default {
  name: 'Home',
  data: () => ({
  }),
  methods: {
    modalCard () {
      this.$modal.show('Modal-Card')
    },
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
    ModalCard,
    Expected
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
        /* justify-content: space-between; */
        flex-wrap: wrap;
        width: 100%;
    }
    .info__boxes .box{
        padding: 1rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 32%;
        margin-right: 2rem;
        min-height: 235px;
        display: flex;
        flex-direction: column;
    }
    .info__boxes .box:nth-child(2){
        justify-content: space-between;
        padding-bottom: 20px;
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
    .box a {
        cursor: pointer;
    }
    .add__cart{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        border: 2px solid #EE4927;
        width: 260px;
        height: 130px;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .add__cart:hover{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .add__cart i{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #EE4927;
        color: #EE4927;
        font-size: 22px;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .add__cart p{
        color: #EE4927 !important;
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
        min-height: 100px;
        min-width: 100px;
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
        padding: 1.5rem 1rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        min-height: 140px;
        margin-right: 1rem;
        width: 23%;
    }
    .info__boxes2 .box .box__title{
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1;
        color: #023047;
        font-weight: bold;
    }
    .info__boxes2 .box p{
        color: #898989;
        line-height: 1;
        display: flex;
        align-items: center;
    }
    .info__boxes2 .box p img{
        margin-right: 10px;
    }
    .info__boxes2 .box .add__adress{
        display: flex;
        align-items: center;
        color: #023047;
        margin-top: auto;
    }
    .info__boxes2 .box .add__adress .svg{
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
            padding: 2rem 1.5rem;
        }
    }
    @media (min-width: 600px) and (max-width: 769px){
        .add__cart{
            width: 190px;
            height: 100px;
        }
    }
    @media (min-width: 415px) and (max-width: 600px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .add__cart{
            width: 100%;
            height: 90px;
        }
        .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .add__cart p{
            font-size: 14px;
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
        .info__boxes2{
            margin: 0;
        }
        .info__boxes2 .box{
            padding: 1.2rem;
            height: 110px;
        }
        .info__boxes2 .box .svg svg{
            width: 16px;
            height: 16px;
        }
        .info__boxes2 .box .add__adress{
            font-size: 14px;
        }
    }

    @media (max-width: 415px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }   
        .add__cart{
            width: 60%;
            height: 90px;
        }
        .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .add__cart p{
            font-size: 14px;
        }
        .end__order{
            font-size: 14px;
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
        .info__boxes2 .box .svg svg{
            width: 16px;
            height: 16px;
        }
        .info__boxes2 .box .add__adress{
            font-size: 14px;
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
            height: 80px;
            margin-bottom: 0.5rem;
        }
        .info__boxes .box .user .user__name{
            font-size: 18px;
            line-height: 18px;
        }
        .info__boxes .box{
            height: auto;
            min-height: auto;
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
            min-height: auto;
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
