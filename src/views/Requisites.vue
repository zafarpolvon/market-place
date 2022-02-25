<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="order-menu">
                <ul>
                    <a href="#">Как сделать заказ</a>
                    <a href="#">Способы оплаты</a>
                    <a href="#">Доставка</a>
                    <a href="#">Возврат товара</a>
                    <a href="#">Откройте пункт выдачи</a>
                    <a href="#">Правила продажи</a>
                    <a href="#">Вопросы и ответы</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 requisites">
            <div class="requisites__title">Реквизиты</div>
            <div class="text">
                <span>Полное наименование</span>
                <p>Общество с ограниченной ответственностью «LogoName»</p>
            </div>
            <div class="text">
                <span>Генеральный директор</span>
                <p>Бакальчук Татьяна Владимировна</p>
            </div>
            <div class="text">
                <span>Наименование банка</span>
                <p>в Банк ВТБ (ПАО), г. Москва</p>
            </div>
            <div class="text">
                <span>Корреспондентский счет</span>
                <p>30101810700000000187</p>
            </div>
            <div class="text">
                <span>БИК</span>
                <p>044525187</p>
            </div>
            <div class="text">
                <span>Расчетный счет</span>
                <p>40702810500110000939</p>
            </div>
            <div class="text">
                <span>ИНН</span>
                <p>7721546864</p>
            </div>
            <div class="text">
                <span>КПП</span>
                <p>507401001</p>
            </div>
            <div class="text">
                <span>ОГРН</span>
                <p>1067746062449</p>
            </div>
            <div class="text">
                <span>Юридический адреc</span>
                <p>142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1</p>
            </div>
            <h3>Обращаем внимание, что данные реквизиты не предназначены для оплаты заказов</h3>
            <h3>Оплата заказа производится только через Личный кабинет</h3>
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
    .order-menu{
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
    }
    .order-menu ul{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .order-menu ul a{
        cursor: pointer;
        color: #023047;
    }
    .order-menu ul a:nth-child(3){
        color: #0052FF;
    }
    .order-menu ul a:hover{
        color: #0052FF;
    }
    .requisites .requisites__title{
        font-size: 42px;
        margin-bottom: 2rem;
        color: #023047;
    }
    .requisites .text{
        display: flex;
        margin: 1.5rem 0;
    }
    .requisites .text span{
        color: #898989;
        font-size: 20px;
        width: 25%;
    }
    .requisites h3{
        color: #023047;
        font-size: 20px;
        margin: 1rem 0;
    }
    .requisites .text p{
        color: #023047;
        margin-left: 5rem;
        font-size: 20px;
        width: 50%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1025px) {
        .order-menu ul a{
            font-size: 13px;
        }
        .order-menu{
            margin-bottom: 0;
        }
    }
    @media only screen and (max-width: 769px){
        .order-menu{
            display: none;
        }
        .requisites .text span{
            font-size: 18px;
            width: 31%;
        }
        .requisites .text p{
            font-size: 18px;
        }
        .requisites h3{
            font-size: 18px;
            padding: 1rem 0;
            margin: 0;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .requisites .requisites__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        .requisites .text{
            flex-direction: column;
            margin: 12px 0;
        }
        .requisites .text span{
            width: 100%;
        }
        .requisites .text p{
            font-size: 16px;
            margin-left: 0;
            width: 100%;
        }
    }
    @media only screen and (max-width: 376px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .requisites .requisites__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        .requisites .text{
            flex-direction: column;
            margin: 12px 0;
        }
        .requisites .text span{
            width: 100%;
            font-size: 16px;
        }
        .requisites .text p{
            font-size: 14px;
            margin-left: 0;
            width: 100%;
        }
        .requisites h3{
            font-size: 14px;
            padding: 0.5rem 0;
        }
    }
</style>
