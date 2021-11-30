<template>
    <div class="back">
        <Navbar />
        <second-navbar :active="active" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pb-12">
            <div class="info__boxes">
                <div class="box">
                    <div class="user">
                        <img src="../assets/image/boy-1031527_1920 1.png" alt="not found">
                        <div class="user__name">Javohir Akramjonov</div>
                    </div>
                    <div class="email">Э-маил: <span>mironshohnasimov@gmail.com</span></div>
                    <div class="b__user">
                        <div class="phone">Телефон: <span>+99899 739 3538</span></div>
                    </div>
                </div>
                <div class="box">
                    <div class="delivery">
                        <img src="../assets/image/Vector (21).png" alt="not found">
                        <div class="delivery__title">Доставка</div>
                    </div>
                    <p><span>Ближайшая</span> не ожидается</p>
                </div>
                <div class="box">
                    <div class="delivery">
                        <div class="discount">11%</div>
                        <div class="delivery__title">Скидка покупателя</div>
                    </div>
                    <p><span>Сумма выкупа</span> 0 ₽</p>
                </div>
            </div>
            <div class="info__boxes2">
                <div class="box">
                    <div class="box__title">Банковские карты</div>
                    <p>Добавыть карту</p>
                </div>
                <div class="box">
                    <div class="box__title">Покупки</div>
                    <p>0 товаров</p>
                </div>
                <div class="box">
                    <div class="box__title">Любимые бренды</div>
                    <p>1 бренд</p>
                </div>
                <div class="box">
                    <div class="box__title">Уведомления</div>
                    <p> 0 шт</p>
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

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    SecondNavbar
  }
}
</script>

<style scoped>
    .info__boxes{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
    }
    .info__boxes .box{
        padding: 2.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 31%;
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .info__boxes .box .user{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .info__boxes .box .user img{
        border-radius: 50%;
        width: 100px;
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
        align-items: center;
        margin-bottom: 1.5rem;
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
    .info__boxes .box:nth-child(2){
        background: rgba(0, 82, 255, 0.2);
    }
    .info__boxes .box:nth-child(2) p{
        color: #2C2C2C;
    }
    .info__boxes .box:nth-child(2) p span{
        color: #898989;
    }
    .info__boxes .box:nth-child(3) p{
        color: #2C2C2C;
    }
    .info__boxes .box:nth-child(3) p span{
        color: #898989;
    }
    .info__boxes .box:nth-child(3) .delivery .discount{
        border-radius: 50%;
        height: 100px;
        width: 100px;
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
        justify-content: space-around;
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
        width: 23%;
    }
    .info__boxes2 .box:first-child{
        background: rgba(0, 82, 255, 0.2);
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

    @media (max-width: 1025px){
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

    @media (min-width: 415px) and (max-width: 600px) {
        .info__boxes .box{
            padding: 1.2rem;
            height: 220px;
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
        .px-4 xl:px-12 md:px-12{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .info__boxes .box{
            padding: 1.2rem;
            height: 220px;
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
            height: 180px;
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
        .px-4 xl:px-12 md:px-12{
            padding-left: 10px;
            padding-right: 10px;
        }
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
