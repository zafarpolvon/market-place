<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="my__message">
                <div class="message__title">Мои сообщения</div>
                <ul>
                    <li class="ml-4">По товару</li>
                    <li class="ml-4">По поставщикам</li>
                    <li class="ml-4">Поддержка</li>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pb-12">
            <div class="lists">
                <div class="list mr-4">
                    <div class="new__list">
                        <i class="next__page fa fa-chevron-right"></i>
                    </div>
                    <div class="new__list">
                        <div class="rectangle"></div>
                        <p>Поставщик 1</p>
                    </div>
                    <div class="new__list">
                        <div class="rectangle"></div>
                        <p>Поставщик 2</p>
                    </div>
                    <div class="new__list">
                        <div class="rectangle"></div>
                        <p>Поставщик 3</p>
                    </div>
                </div>
                <div class="message__shadow">
                    <div class="title">Чат поддержки</div>
                    <div class="message">
                        <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                        <div class="admin__text">Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</div>
                        <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                    </div>
                    <div class="container mx-auto px-0">
                    <div class="send">
                        <form>
                            <img src="../assets/image/Vector (10).png" alt="not found">
                            <input type="text" placeholder="Ваше сообщение"/>
                        </form>
                        <img src="../assets/image/Vector (11).png" alt="not found" class="send">
                    </div>
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
import LocationNavbar from '../components/layout/LocationNavbar.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
    LocationNavbar
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
    .my__message{
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }
    .my__message ul{
        display: flex;
        align-items: center;
    }
    .my__message ul li{
        background: #F8F8FA;
        border-radius: 8px;
        padding: 10px 15px;
        color: #313131;
        cursor: pointer;
    }
    .my__message ul li:hover{
        background: #f1f1f1;
        color: #000;
    }
    .my__message ul li:first-child{
        background: rgba(238, 73, 39, 0.6);
        border-radius: 8px;
        padding: 10px 15px;
        color: #fff;
        cursor: pointer;
    }
    .my__message ul li:first-child:hover{
        background: rgba(238, 73, 39, 1);
    }
    .lists{
        display: flex;
    }
    .next__page{
        background: rgba(238, 73, 39, 0.6);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }
    .next__page:hover{
        background: rgba(238, 73, 39, 1);
    }
    .rectangle{
        background: #C4C4C4;
        width: 140px;
        height: 120px;
        margin-bottom: 12px;
    }
    .new__list{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .new__list p{
        font-size: 14px;
    }
    .message__title{
        font-size: 42px;
        color: #023047;
    }
    .message{
        background: #F8F8FA;
        border-radius: 0px;
        height: 480px;
        overflow-y: scroll;
    }
    .message::-webkit-scrollbar {
        display: none;
    }
    .title{
        color: #D9D9D9;
        background: #131E3D;
        font-size: 23px;
        padding: 1.5rem 1.5rem 1.5rem 3rem;
        border-radius: 8px 8px 0px 0px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .message p{
        color: #023047;
        background: rgba(212, 212, 212, 0.5);
        border-radius: 12px 12px 12px 0px;
        padding: 1.5rem;
        margin: 1.5rem;
        width: 40%;
        font-size: 18px;
    }
    .message .admin__text{
        color: #023047;
        background: rgba(212, 212, 212, 0.5);
        border-radius: 12px 12px 0px 12px;
        padding: 1.5rem;
        margin: 1.5rem;
        width: 40%;
        font-size: 18px;
        margin-left: auto;
    }
    .message__shadow {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: 8px ;
    }
    .send{
        background: #F8F8FA;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 0px 0px 8px 8px;
        width: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .send form{
        display: flex;
        width: 93%;
        padding: 1rem 2rem;
        border-radius: 0px 0px 8px 8px;
        background: rgba(217, 217, 217, 0.5);
    }
    .send form img{
        margin-right: 1rem;
    }
    .send form input{
        background: transparent;
        color: #898989;
        width: 100%;
        outline: none;
        font-size: 18px;
    }
    .send form input::placeholder{
        color: #898989;
    }
    .send img.send{
        border-radius: 50%;
        background: rgba(217, 217, 217, 0.5);
        width: auto;
        height: 60px;
        padding: 0;
        object-fit: none;
        cursor: pointer;
    }

    @media (max-width: 1200px){
        .my__message{
            flex-direction: column;
        }
        .lists{
            flex-direction: column;
        }
        .lists .list{
            display: flex;
            overflow-x: scroll;
        }
        .lists .list::-webkit-scrollbar{
            display: none;
        }
        .new__list{
            margin-right: 2rem;
            margin-top: 0;
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .send form{
            width: 91%;
        }
        .message p, .message .admin__text{
            width: 70%;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .send form{
            width: 88%;
        }
        .message p, .message .admin__text{
            padding: 1rem;
            font-size: 14px;
            width: 80%;
        }
        .title {
            font-size: 20px;
            padding-left: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .send form input {
            font-size: 14px;
        }
    }

    @media (max-width: 500px){
        .my__message{
            align-items: flex-start;
        }
        .my__message ul{
            flex-direction: column;
            align-items: flex-start;
        }
        .my__message ul li{
            width: 200px;
            font-size: 14px;
            margin-left: 0;
            text-align: center;
            margin-bottom: 12px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .send form{
            padding: 0.8rem 1rem;
            width: 85%;
        }
        .message .title{
            padding: 1rem 1rem 1rem 2rem;
        }
        .message__title {
            font-size: 28px;
            margin-bottom: 1rem;
        }
        .send img.send{
            height: 45px;
        }
        .message p, .message .admin__text{
            width: 60%;
            padding: 1rem;
            font-size: 14px;
        }
        .title {
            font-size: 20px;
            padding-left: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .send form input {
            font-size: 14px;
        }
    }

    @media (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .my__message{
            margin-bottom: 1rem;
        }
        .message .title{
            padding: 1rem;
            font-size: 32px;
        }
        .send{
            padding: 0.5rem;
        }
        .send img.send{
            border-radius: unset;
            background: none;
            box-shadow: unset;
            margin: auto;
            width: auto;
            height: auto;
            padding: 0;
            cursor: pointer;
        }
        .send form{
            padding: 0.7rem 1rem;
            width: 80%;
        }
        .message p, .message .admin__text{
            width: 75%;
            padding: 1rem;
            font-size: 16px;
        }
        .message__title {
            font-size: 24px;
        }
        .send form input {
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .message p, .message .admin__text{
            margin: 0.5rem;
            width: 80%;
            font-size: 14px;
        }
        .send img.send{
            height: 40px;
        }
        .send form input {
            font-size: 14px;
        }
    }

</style>
