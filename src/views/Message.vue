<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="message__title">Мои сообщения</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pb-12">
            <div class="message__shadow">
                <div class="title">Чат поддержки</div>
                <div class="message">
                    <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                    <div class="admin__text">Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</div>
                    <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                </div>
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
    .message__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
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
        color: #023047;
        background: rgba(0, 82, 255, 0.15);
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

    @media (min-width: 769px) and (max-width: 1025px){
        .send form{
            width: 91%;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .send form{
            width: 88%;
        }
        .message p, .message .admin__text{
            padding: 1rem;
            font-size: 18px;
            width: 50%;
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
        .send img.send{
            height: 45px;
        }
        .message p, .message .admin__text{
            width: 60%;
            padding: 1rem;
            font-size: 16px;
        }
    }

    @media (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .message .title{
            padding: 1rem;
            font-size: 32px;
            margin-bottom: 1rem;
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
    }

</style>
