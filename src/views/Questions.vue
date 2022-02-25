<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 pages">
            <a href="#">Главная страница / </a>
            <a href="#"> FAQ</a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="questions__title">Часто задаемевый вопросы</div>
            <div class="questions__box">
                <div class="box">
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                        <div class="text__box">
                            <p>Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту установлена на поверхности стеклянного фасада, под козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му на каждый комплект ленты(6м). Лента укреплена с помощью кабельных стяжек. Лента, установлена по периметру фасада на уровне 6-ти и 18м. Всего уложено 84м.</p>
                            <p>После монтажных работ конструкция отработала в режиме технического прогона с сентября по 3-ю декаду ноября. В процессе монтажа выявлено, что некоторые отрезки 6-ти метровой ленты имеют мерцание. Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту установлена на поверхности стеклянного фасада, под козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му на каждый комплект ленты(6м).</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                </div>
                <div class="c__box">
                    <div class="box__title">У вас есть вопросы</div>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="email" placeholder="Ваш  e-mail" />
                    <textarea placeholder="Ваш отзыв"></textarea>
                    <button type="submit">Отправить вопрос</button>
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
    .questions__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
        line-height: 1;
    }
    .questions__box{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .questions__box .box{
        width: 65%;
    }
    .questions__box .box .questions__text{
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        cursor: pointer;
        position: relative;
    }
    .questions__box .box .questions__text .text2{
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }
    .questions__box .box .questions__text .text2:hover{
        color: #131E3D;
    }
    .questions__box .box .questions__text .text2 i{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 1.5rem;
        color: #FFF;
        background: #131E3D;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 0.5s linear;
    }
    .questions__box .box .questions__text .text2 p{
        font-weight: bold;
        font-size: 22px;
        line-height: 1;
    }
    .questions__box .box .questions__text .text__box{
        background: #F1EFED;
        border-radius: 10px;
        padding: 1.5rem 1.5rem 0 1.5rem;
        margin-top: 1.5rem;
        width: 85%;
    }
    .questions__box .box .questions__text .text__box p{
        color: #666666;
        margin-bottom: 1.5rem;
        font-size: 17px;
    }
    .c__box{
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));
        background: rgba(238, 73, 39, 0.3);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 450px;
        padding: 1rem 2rem;
        width: 30%;
        margin-left: 4rem;
    }
    .c__box .box__title{
        color: #023047;
        font-size: 26px;
        font-weight: bold;
    }
    .c__box input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    .c__box textarea{
        padding: 10px 10px 3rem 10px;
        outline: none;
        border-radius: 8px;
    }
    .c__box button{
        background: #EE4927;
        border-radius: 8px;
        color: #FFF;
        padding: 15px 30px;
        margin: 0 auto;
    }
    .c__box button:hover{
        background: #EE3111;
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px){
        .questions__box .box{
            width: auto;
        }
        .questions__box .c__box{
            margin-left: 0;
            padding: 1rem 1.2rem;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 7px 10px;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 40px;
            width: 40px;
            margin-right: 1rem;
            font-size: 20px;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 15px !important;
        }
    }

    @media only screen and (max-width: 769px){
        .questions__box{
            flex-wrap: wrap;
        }
        .questions__box .box{
            width: 100%;
            margin: auto;
        }
        .questions__box .c__box{
            width: 80%;
            margin: 2rem auto !important;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .questions__title{
            font-size: 22px;
            margin-bottom: 0;
        }
        .questions__box .c__box{
            margin-left: 0;
            padding: 1rem 1.2rem;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 7px 10px;
        }
        .questions__box .box .questions__text .text2 p{
            font-size: 16px !important;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 40px;
            width: 50px;
            margin-right: 0.5rem;
            font-size: 18px;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 15px !important;
        }
        .questions__box .box .questions__text .text__box{
            width: 100%;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 12px !important;
        }
        .questions__box .box .questions__text .text2{
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 376px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .questions__title{
            font-size: 22px;
            margin-bottom: 0;
        }
        .questions__box .c__box{
            padding: 1rem 1.2rem;
            margin: 1rem auto;
            width: 100%;
            height: 420px;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 3px 10px;
            border-radius: 4px;
        }
        .questions__box .box .questions__text .text2 p{
            font-size: 14px !important;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text__box{
            width: 100%;
            padding: 1rem;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 12px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 30px;
            width: 40px;
            margin-right: 0.5rem;
            font-size: 11px;
        }
        .c__box textarea{
            border-radius: 4px;
        }
        .c__box button{
            padding: 10px 30px;
        }
        .questions__box .box .questions__text .text2{
            padding-left: 0;
        }
    }
</style>
