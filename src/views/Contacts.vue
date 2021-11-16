<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-12 pages">
            <a href="#">Главная страница / </a>
            <a href="#"> Контакты</a>
        </div>
        <div class="container mx-auto px-12">
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
                        <input type="text" placeholder="Ваше имя">
                    </div>
                    <div class="input">
                        <input type="email" placeholder="Ваш e-mail"/>
                    </div>
                    <div class="input">
                        <input type="number" placeholder="Ваш номер"/>
                    </div>
                    <textarea placeholder="Оставьте отзыв" class="textarea"></textarea>
                    <div class="r__box-button">
                        <button type="submit" class="mx-auto">Отправить сообщение</button>
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
    .pages{
        padding: 2.5rem 3rem;
    }
    .pages a{
        color: #023047;
        text-decoration: none;
        cursor: pointer;
    }
    .pages a:hover{
        color: #023999;
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
        background: rgba(0, 82, 255, 0.2);
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
        width: 50%;
        height: 45px;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: #FCF6F6;
        font-size: 18px;
        margin-top: 2rem;
    }
    .contacts__boxes .r__box button:hover{
        box-shadow: unset !important;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
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
    }

    @media only screen and (max-width: 415px){
        .pages{
            padding: 1rem 1.25rem !important;
        }
        .px-12{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .contacts__title{
            font-size: 32px;
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

</style>
