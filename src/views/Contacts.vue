<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 pages">
            <a href="#">Главная страница / </a>
            <a href="#"> Контакты</a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="contacts__title">Контакты</div>
            <div class="contacts__boxes">
                <div class="box">
                    <img src="../assets/image/Screenshot_1 1.png" class="map" alt="not found">
                    <div class="boxes">
                        <div class="contact__box">
                            <h1>Телефон номер:</h1>
                            <h3>+7 237 181 181</h3>
                            <h3>+7 210 181 191</h3>
                        </div>
                        <div class="contact__box">
                            <h1>Юридический адрес:</h1>
                            <h3>Россия , Петербург</h3>
                        </div>
                        <div class="contact__box">
                            <h1>E-mail:</h1>
                            <h3>info@tujjor.uz</h3>
                        </div>
                        <div class="contact__box">
                            <h1>Партнерам</h1>
                            <h3>Узнайте подробные условия для сотрудничества</h3>
                        </div>
                    </div>
                </div>
                <div class="r__box">
                    <div class="title">Отпавте нам сообщение</div>
                    <div class="input">
                        <label for="">Имя</label>
                        <input class="mt-2" type="text" placeholder="Ваше имя">
                    </div>
                    <div class="input">
                        <label for="">E-mail</label>
                        <input class="mt-2" type="email" placeholder="Ваш e-mail"/>
                    </div>
                    <div class="input">
                        <label for="">Номер</label>
                        <input class="mt-2" type="number" placeholder="Ваш номер"/>
                    </div>
                    <label for="">Комментарий</label>
                    <textarea class="textarea mt-2" placeholder="Оставьте отзыв"></textarea>
                    <div class="r__box-button">
                        <button type="submit" class="mx-auto">Отправить сообщение</button>
                    </div>
                </div>
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
    .pages a{
        color: #023047;
        text-decoration: none;
        cursor: pointer;
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
    .contacts__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .contacts__boxes{
        display: flex;
        justify-content: space-between;
    }
    .contacts__boxes .box{
        width: 56%;
    }
    .contacts__boxes .box .map{
        width: 100%;
    }
    .contacts__boxes .box .boxes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem 0;
    }
    .contacts__boxes .box .boxes .contact__box{
        width: 48%;
        background: #F8F8FA;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 1rem 1rem 2rem 1rem;
        margin: 0.8rem 0;
    }
    .contacts__boxes .box .boxes .contact__box h1{
        color: #666666;
        margin-bottom: 0.5rem;
    }
    .contacts__boxes .box .boxes .contact__box h3{
        font-size: 18px;
        color: #1E1C1C;
        margin: 0px;
        line-height: 22px;
    }
    .contacts__boxes .box .boxes .contact__box h3:first-child{
        margin-top: 1rem;
    }
    .contacts__boxes .r__box{
        width: 40%;
        height: 690px;
        background: #FAC8BE;
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        padding: 2rem 2.5rem;
        border-radius: 5px;
    }
    .contacts__boxes .r__box .title{
        color: #023047;
        font-size: 28px;
        font-weight: bold;
        line-height: 1;
    }
    .contacts__boxes .r__box .input{
        margin: 1.5rem 0;
    }
    .contacts__boxes .r__box .input .input__title{
        color: #023047;
        margin-bottom: 5px;
        font-size: 18px;
    }
    .contacts__boxes .r__box .input input{
        width: 100%;
        border: 1px solid #374C91;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 8px 10px;
        outline: none;
    }
    .textarea{
        resize: none;
        padding-bottom: 5rem !important;
        outline: none;
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid #374C91;
        width: 100%;
    }
    .contacts__boxes .r__box .r__box-button{
        width: 100%;
        text-align: center;
    }
    .contacts__boxes .r__box button{
        width: 100%;
        height: 45px;
        background: #EE4927;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: #FCF6F6;
        font-size: 18px;
        margin-top: 2rem;
    }
    .contacts__boxes .r__box button:hover{
        box-shadow: unset !important;
        background: #EE3111;
    }
    @media only screen and (min-width: 800px) and (max-width: 1025px){
        .contacts__boxes .r__box{
            height: 100%;
        }
        .contacts__boxes .r__box .title{
            font-size: 21px;
        }
        .contacts__boxes .r__box .input{
            margin: 1rem 0;
        }
        .contacts__boxes .r__box .input input{
            padding: 5px 10px;
        }
        .textarea{
            padding-bottom: 6rem !important;
        }
        .contacts__boxes .r__box button{
            margin-top: 0.8rem;
            width: 70%;
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 769px){
       .contacts__boxes{
           flex-wrap: wrap;
       }
       .contacts__boxes .box{
           width: 100%;
       }
       .contacts__boxes .r__box{
           width: 80% !important;
           margin: auto !important;
           height: 680px;
           margin-bottom: 3rem !important;
       }
       .contacts__boxes .r__box button{
           width: 80%;
       }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .contacts__boxes .box .boxes .contact__box{
            width: 100%;
            margin: 1rem auto;
        }
        .contacts__boxes .r__box{
            height: auto;
            padding: 1.5rem;
        }
        .contacts__boxes .r__box .title{
            font-size: 24px;
            line-height: 24px;
        }
        .contacts__boxes .r__box .input{
            margin: 12px 0;
        }
        .contacts__boxes .r__box button{
            margin-top: 1rem;
            width: 100%;
        }
        .textarea{
            padding-bottom: 5rem !important;
        }
        .contacts__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
    }

    @media only screen and (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .contacts__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        .contacts__boxes .box .boxes .contact__box{
            width: 100%;
            margin: 8px auto;
            padding: 10px;
        }
        .contacts__boxes .box .boxes .contact__box h3{
            font-size: 14px;
        }
        .contacts__boxes .r__box{
            width: 100% !important;
            height: auto !important;
            padding: 1.5rem;
        }
        .contacts__boxes .r__box .title{
            font-size: 22px;
        }
        .contacts__boxes .r__box .input .input__title{
            font-size: 15px;
            margin-bottom: 2px;
        }
        .contacts__boxes .r__box .input{
            margin: 12px 0;
        }
        .contacts__boxes .r__box .input input{
            padding: 3px 10px;
        }
        .contacts__boxes .r__box button{
            margin-top: 1rem;
            font-size: 13px;
        }
        .textarea{
            padding-bottom: 3rem !important;
        }
    }

    @media (max-width: 300px){
        .contacts__boxes .r__box{
            width: 100% !important;
            padding: 10px !important;
        }
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
