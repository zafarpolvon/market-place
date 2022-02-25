<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <!-- <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="delivery-menu">
                <ul>
                    <li>Как сделать заказ</li>
                    <li>Способы оплаты</li>
                    <li>Доставка</li>
                    <li>Возврат товара</li>
                    <li>Откройте пункт выдачи</li>
                    <li>Правила продажи</li>
                    <li>Вопросы и ответы</li>
                </ul>
            </div>
        </div> -->
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="delivery">
                <div class="delivery__title">Доставка</div>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="delivery-boxes">
                <div class="delivery__box">
                    <div class="box_title">Быстро доставим любой Ваш заказ по всей России</div>
                    <div class="d__boxes">
                        <div class="d__box">
                            <img src="../assets/image/Vector (28).png" alt="not found">
                            <p>Бесплатная доставка</p>
                        </div>
                        <div class="d__box">
                            <img src="../assets/image/Vector (29).png" alt="not found">
                            <p>Доставка круглый год в России</p>
                        </div>
                        <div class="d__box">
                            <img src="../assets/image/Vector (30).png" alt="not found">
                            <p>Возврат товара при примерке</p>
                        </div>
                    </div>
                </div>
                <div class="delivery__box">
                    <img src="../assets/image/image 39.png" alt="not found">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import MainMenu from '../components/layout/MainMenu.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    MainMenu
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
    .delivery-menu{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0 3rem 0;
    }
    .delivery-menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .delivery-menu ul li{
        list-style-type: none;
        color: #131E3D;
        cursor: pointer;
    }
    .delivery-menu ul li:hover{
        color: #EE4927;
    }
    .delivery-menu ul li:nth-child(3){
        color: #EE4927;
    }
    .delivery .delivery__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .delivery-boxes{
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        padding: 3rem;
        margin-bottom: 5rem;
    }
    .delivery-boxes .delivery__box:first-child{
        width: 55%;
    }
    .delivery-boxes .delivery__box:first-child .box_title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .delivery-boxes .delivery__box:nth-child(2){
        width: 45%;
        display: flex;
        align-items: end;
    }
    .delivery-boxes .delivery__box .d__boxes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .delivery-boxes .delivery__box .d__boxes .d__box{
        width: 50%;
        display: flex;
        align-items: center;
        padding: 1.8rem 0;
    }
    .delivery-boxes .delivery__box .d__boxes .d__box p{
        color: #898989;
        font-size: 20px;
        margin-left: 1rem;
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px) {
        .delivery-menu ul li{
            font-size: 13px;
        }
        .delivery-menu{
            margin-bottom: 0;
        }
    }

    @media only screen and (max-width: 769px){
        .delivery-menu{
            display: none;
        }
        .delivery-boxes{
            flex-wrap: wrap;
        }
        .delivery-boxes .delivery__box{
            width: 100% !important;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .delivery-boxes{
            padding: 1.5rem;
        }
        .delivery-boxes .delivery__box .box_title{
            font-size: 24px !important;
            margin-bottom: 0 !important;
        }
        .delivery-boxes .delivery__box .d__boxes{
            padding: 1rem 0 !important;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box{
            width: 100%;
            padding: 1rem 0;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box img{
            width: 20px;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box p{
            font-size: 14px;
        }
        .delivery .delivery__title{
            font-size: 22px;
        }
    }

    @media only screen and (max-width: 376px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .delivery-boxes{
            padding: 1rem;
        }
        .delivery-boxes .delivery__box .box_title{
            font-size: 18px !important;
            margin-bottom: 0 !important;
        }
        .delivery-boxes .delivery__box .d__boxes{
            padding: 1rem 0 !important;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box{
            width: 100%;
            padding: 0.5rem 0;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box img{
            width: 20px;
        }
        .delivery-boxes .delivery__box .d__boxes .d__box p{
            font-size: 14px;
        }
        .delivery .delivery__title{
            font-size: 22px;
        }
    }
</style>
