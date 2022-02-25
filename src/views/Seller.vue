<template>
    <div class="back">
        <Navbar />
        <div class="seller">
            <div class="header">
                <div class="container mx-auto px-4 xl:px-12 md:px-4">
                    <h1>Продажи на LogoName <br> по системе FBS (маркетплейс)</h1>
                    <p>Получайте заказы от клиентов, привозите товар и получайте большую комиссию от продаж</p>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="aside">
                    <div class="aside__box">
                        <img src="../assets/image/image 5.png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Выгодно</div>
                            <p>Комиссия 1–5%, отсутствие оплаты за складские операции, не надо замораживать сток на складе LogoName</p>
                        </div>
                    </div>
                    <div class="aside__box">
                        <img src="../assets/image/image 5 (1).png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Быстро</div>
                            <p>Быстрая загрузка товара на сайт LogoName</p>
                        </div>
                    </div>
                    <div class="aside__box">
                        <img src="../assets/image/image 5 (2).png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Удобно</div>
                            <p>Получайте заказ от клиента и привозите нам заказанный товар в удобный временной диапазон</p>
                        </div>
                    </div>
                </div>
                <div class="seller__title">Станьте продавцом и зарабатывайте <br>на Birmakon</div>
                <router-link tag="a" to="/selleradres" class="seller__link">Стать продавцом</router-link>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer
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
    .seller .header{
        background: url("../assets/image/image 37.png") no-repeat;
        background-position: cover;
        background-size: cover;
        margin-top: 1rem;
        height: 460px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .seller .header .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        padding-top: 5rem;
    }
    .seller .header h1{
        font-size: 52px;
        line-height: 64px;
        color: #131E3D;
    }
    .seller .header p{
        color: #131E3D;
        font-size: 20px;
        width: 50%;
        font-weight: 100;
    }
    .seller__title{
        font-size: 42px;
        color: #131E3D;
        text-align: center;
    }
    .seller__link{
        margin: 1rem auto 2rem auto;
        background: #131E3D;
        border-radius: 8px;
        font-size: 17px;
        color: #FFF;
        width: 255px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s linear;
        cursor: pointer;
    }
    .seller__link:hover{
        background: #11113D;
    }
    .aside{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 5rem 0 3rem 0;
    }
    .aside .aside__box{
        width: 31%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    }
    .aside .aside__box img{
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .aside .aside__box .aside__text{
        padding: 10px 10px 30px 10px;
    }
    .aside .aside__box .aside__text .text__title{
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
    }
    .aside .aside__box .aside__text p{
        color: #666666;
    }
    .last h1{
        font-size: 54px;
        line-height: 66px;
        font-weight: bold;
        text-align: center;
    }
    .last{
        padding-bottom: 5rem;
    }
    .last a{
        background: #131E3D;
        border-radius: 8px;
        font-size: 17px;
        color: #FFF;
        width: 255px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto 0 auto;
        transition: 0.2s linear;
    }
    .last a:hover{
        background: #11113D;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .aside{
            justify-content: space-around;
        }
        .aside .aside__box{
            width: 48%;
            margin-bottom: 1rem;
        }
        .seller .header{
            background-size: auto !important;
        }
        .seller .header h1{
            font-size: 46px;
        }
        .seller .header p{
            font-size: 18px;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .seller .header{
            background-size: cover;
            background-position-x: center;
        }
        .seller .header h1 br{
            display: none !important;
        }
        .seller .header h1{
            font-size: 37px;
            line-height: 46px;
        }
        .seller .header p{
            width: 80%;
        }
        .seller .header .container{
            height: 50%;
            padding-top: 0;
            margin: auto 0;
        }
        .aside{
            justify-content: space-around;
        }
        .aside .aside__box{
            width: 48%;
            margin-bottom: 1rem;
        }
        .aside .aside__box .aside__text .text__title{
            font-size: 18px;
        }
        .aside .aside__box .aside__text p{
            font-size: 14px;
        }
        .last h1{
            font-size: 36px;
            line-height: 40px;
        }
    }

    @media (max-width: 600px){
        .seller__title{
            font-size: 24px;
        }
        .seller__link{
            width: 185px;
            height: 40px;
            font-size: 14px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .seller .header{
            background-size: cover;
            background-position-x: 47% !important;
            height: auto !important;
        }
        .seller .header .container{
            padding-top: 0;
            padding: 7rem 3rem;
        }
        .seller .header h1{
            font-size: 30px;
            line-height: 34px;
        }
        .seller .header h1 br{
            display: none;
        }
        .seller .header p{
            width: 80%;
            font-size: 14px;
            margin-top: 1rem;
        }
        .seller .header a{
            height: 40px;
            width: 155px;
            font-size: 14px;
            margin-top: 1rem;
        }
        .aside .aside__box{
            width: 80%;
            margin: 10px auto;
        }
        .last h1{
            font-size: 36px;
            line-height: 36px;
        }
        .last a{
            width: 155px;
            height: 40px;
            font-size: 14px;
        }
    }

    @media (max-width: 416px) {
        .seller .header{
            background-size: cover;
            background-position-x: 51% !important;
            height: auto !important;
        }
        .seller .header .container{
            padding-top: 0;
            padding: 5rem 2rem;
        }
        .seller .header h1{
            font-size: 26px;
            line-height: 26px;
        }
        .seller .header h1 br{
            display: none;
        }
        .seller .header p{
            width: 90%;
            font-size: 12px;
            margin-top: 1rem;
        }
        .seller .header a{
            height: 35px;
            width: 155px;
            font-size: 13px;
            margin-top: 1rem;
        }
        .aside .aside__box{
            width: 90%;
            margin: 10px auto;
        }
        .aside .aside__box .aside__text .text__title{
            font-size: 17px;
        }
        .aside .aside__box .aside__text p{
            font-size: 14px;
            line-height: 17px;
        }
        .last h1{
            font-size: 28px;
            line-height: 28px;
        }
        .last a{
            width: 155px;
            height: 35px;
            font-size: 13px;
        }
    }

    @media only screen and (max-width: 360px){
        .seller .header{
            background-position-x: 40% !important;
        }
        .seller .header h1{
            font-size: 22px;
            line-height: 26px;
        }
        .aside .aside__box{
            width: 100%;
        }
    }

</style>
