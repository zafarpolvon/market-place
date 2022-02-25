<template>

    <div class="back">
        <Navbar />
        <second-navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
            <div class="user__cabinet">
                <div class="user">
                    <div class="user__img">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="not found">
                        <i class="fa fa-plus"></i>
                    </div>
                    <div class="user__name">{{ getUser.name }}</div>
                    <img v-show="!inputName" class="cursor-pointer" @click="showInfoName" src="../assets/image/Vector (31).png" alt="not found">
                    <div class="add__info absolute">
                        <input v-show="inputName" class="input__name" type="text" v-model="getUser.name">
                        <button v-show="inputName" type="button" class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="inputName = false">Отмена</button>
                        <button v-show="inputName" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                    </div>
                </div>
                <div class="info__box">
                    <div class="info__user">
                    <div class="title">Э-маил</div>
                    <div class="change">
                        <p>{{ getUser.email || 'Нет email'}}</p>
                        <img v-show="!inputEmail" @click="showInfoEmail" src="../assets/image/Vector (31).png" alt="not found">
                        <div class="add__info absolute">
                            <input placeholder="Нет ничего" v-show="inputEmail" class="input__name" type="text" v-model="getUser.email">
                            <button v-show="inputEmail" type="button" class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="inputEmail = false">Отмена</button>
                            <button v-show="inputEmail" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                        </div>
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Телефон</div>
                    <div class="change">
                        <p>{{ getUser.phone || 'Test' }}</p>
                        <img v-show="!inputPhone" @click="showInfoPhone" src="../assets/image/Vector (31).png" alt="not found">
                        <div class="add__info absolute">
                            <input v-show="inputPhone" class="input__name" type="text" v-model="getUser.email">
                            <button v-show="inputPhone" type="button" class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="inputPhone = false">Отмена</button>
                            <button v-show="inputPhone" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                        </div>
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Дата рождения</div>
                    <div class="change">
                        <p>{{ 'Не указано' }}</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                        <button v-show="inputBirth" type="button" class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="inputBirth = false">Отмена</button>
                        <button v-show="inputBirth" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Сохранить</button>
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Пол</div>
                    <div class="change inputs">
                        <input id="muj" class="mr-2" type="radio" name="name" />
                        <label for="muj">Муж.</label>
                        <input id="jen" class="mr-2" type="radio" name="name" />
                        <label for="jen">Жен.</label>
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Наименование организации / ЯТТ</div>
                    <div class="change">
                        <p>Itmaker</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Расчетный счет</div>
                    <div class="change">
                        <p>274528284</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Наименование банка</div>
                    <div class="change">
                        <p>Ипотека банк</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">МФО</div>
                    <div class="change">
                        <p>11122000</p>
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">ИНН</div>
                    <div class="change">
                        <p>274528284</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">ОКЭД</div>
                    <div class="change">
                        <p>274528284</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Юридический адрес</div>
                    <div class="change">
                        <p>Махмуда тараби 23</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">ФИО руководителя</div>
                    <div class="change">
                        <p>mironshohnasimov</p>
                        <img src="../assets/image/Vector (31).png" alt="not found">
                    </div>
                </div>
                </div>
            </div>
            <div class="user__boxes2">
                <div class="box">
                    <modal-card />
                    <div class="title">Добавить карту</div>
                    <div class="add__cart" @click="modalCard()">
                        <i class="fa fa-plus"></i>
                        <p>Добавить карту</p>
                    </div>
                </div>
                <div class="box">
                    <div class="title">Адреса</div>
                    <div class="gps__text">
                        <img src="../assets/image/Vector (15).png" alt="not found">
                        Samarqand
                    </div>
                </div>
                <!-- <div class="box">
                    <div class="title">Удаление личново кабинета</div>
                    <p>Как только Ваш личный кабинет будет удален</p>
                    <a href="#">Удаление личново кабинета</a>
                </div>
                <div class="box">
                    <div class="title">Восстановления пароля</div>
                    <a href="#">Данные для восстановления пароля и sms</a>
                </div> -->
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

export default {
  name: 'Home',
  data: () => ({
    inputName: false,
    inputEmail: false,
    inputPhone: false
  }),
  methods: {
    showInfoName () {
      this.inputName = true
    },
    showInfoPhone () {
      this.inputPhone = true
    },
    showInfoEmail () {
      this.inputEmail = true
    },
    modalCard () {
        this.$modal.show('Modal-Card')
    }
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
  }
}
</script>

<style scoped>
    input[type=radio]{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input[type=radio]:before {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid gray;
        background: #fff;
        content: "";
    }
    input[type=radio]:checked:before{
        border: 1px solid #EE4927;
    }
    input[type=radio]:checked:after {
        position: relative;
        display: inline-block;
        visibility: visible;
        border-radius: 6px;
        width: 12px;
        height: 12px;
        background: #EE4927;
        content: "";
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
    .add__info.absolute{
        position: absolute;
        bottom: 1.25rem;
        left: 2.5rem;
    }
    .add__info.absolute input{
        border: 1px solid #131E3D;
        border-radius: 3px;
        padding: 3px;
    }
    .user__cabinet{
        width: 100%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2.5rem 2.5rem 5rem 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }
    .user__cabinet .user{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .user__cabinet .user .user__img img{
        width: 100%;
        border-radius: 50%;
        filter: brightness(0.5);
        text-align: center;
        margin: 0 auto;
    }
    .user__cabinet .user .user__img{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        width: 100px;
        margin-right: 1rem;
    }
    .user__cabinet .user .user__img i{
        position: absolute;
        color: #FFF;
        font-size: 24px;
        cursor: pointer;
    }
    .user__cabinet .user .user__name{
        font-size: 23px;
        color: #023047;
        font-weight: bold;
        margin-right: 1rem;
        line-height: 22px;
    }
    .user__cabinet .user img:last-child{
        cursor: pointer;
    }
    .user__cabinet .info__box{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .user__cabinet .info__user{
        width: 25%;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .info__user .title{
        color: #898989 !important;
        font-size: 16px;
        padding-bottom: 0.5rem;
    }
    .user__cabinet .info__user .change{
        display: flex;
    }
    .user__cabinet .info__user .change.inputs{
        display: flex;
        align-items: center;
    }
    .user__cabinet .info__user .change.inputs label{
        margin: 0 10px 0 5px;
    }
    .user__cabinet .info__user .change p{
        color: #2C2C2C;
    }
    .user__cabinet .info__user .change img{
        margin-left: 5px;
        cursor: pointer;
        height: 18px;
    }
    .user__boxes2{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 5rem;
    }
    .user__boxes2 .box{
        width: 48%;
        padding: 2.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-top: 2.5rem;
    }
    .user__boxes2 .box .title{
        font-size: 24px;
        font-weight: bold;
        color: #023047;
        margin-bottom: 1rem;
    }
    .user__boxes2 .box .add__cart{
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
    .user__boxes2 .box .add__cart:hover{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .user__boxes2 .box .add__cart i{
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
    .user__boxes2 .box .add__cart p{
        color: #EE4927;
    }
    .user__boxes2 .box:nth-child(2) .gps__text{
        display: flex;
        color: #898989;
    }
    .user__boxes2 .box:nth-child(2) .gps__text img{
        margin-right: 10px;
        object-fit: contain;
    }
    .user__boxes2 .box:nth-child(3) p{
        color: #898989;
        margin-bottom: 1.5rem;
    }
    .user__boxes2 .box:nth-child(3) a, .user__boxes2 .box:nth-child(4) a{
        color: #0052FF;
        font-weight: bold;
    }
    .user__boxes2 .box:nth-child(3) a:hover, .user__boxes2 .box:nth-child(4) a:hover{
        text-decoration: underline;
    }

    @media (min-width: 769px) and (max-width: 1200px){
        .user__cabinet .info__user{
            width: 48%;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .user__cabinet{
            padding: 1.5rem 1.5rem 3rem 1.5rem;
        }
        .user__boxes2 .box{
            padding: 1.5rem;
        }
        .add__info.absolute{
            bottom: 0.5rem;
            left: 20px;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .user__cabinet{
            padding: 1.5rem 1.5rem 3rem 1.5rem;
            height: auto;
        }
        .add__info.absolute{
            bottom: 5px;
            left: 20px;
        }
        .user__boxes2 .box{
            padding: 1.5rem;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .info__user{
            width: 48%;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs label{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 190px;
            height: 100px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 20px;
            line-height: 24px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .user__cabinet{
            padding: 1.5rem 1.5rem 3rem 1.5rem;
            height: auto;
        }
        .add__info.absolute{
            bottom: 5px;
            left: 1.5rem;
        }
        .user__boxes2{
            padding-bottom: 0;
        }
        .user__boxes2 .box{
            padding: 1rem;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .user{
            flex-wrap: wrap;
            justify-content: center;
        }
        .user__cabinet .user .user__img i{
            font-size: 30px;
        }
        .user__cabinet .info__user{
            width: 100%;
            margin: 5px 0;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs label{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 100%;
            height: 90px;
        }
        .user__boxes2 .box .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 14px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 20px;
            line-height: 24px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
        .user__cabinet .user .user__img{
            width: 150px !important;
            margin-bottom: 1rem;
        }
        .user__boxes2 .box .title{
            font-size: 16px;
            line-height: 18px;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(3) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(4) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 14px;
            line-height: 16px;
        }
        input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .user__cabinet{
            padding: 1rem 1rem 8rem 1rem;
            height: auto;
        }
        .add__info.absolute{
            display: flex;
            flex-direction: column;
            bottom: 0.5rem;
            left: 1rem;
        }
        .add__info.absolute input{
            margin-bottom: 10px;
            font-size: 14px;
        }
        .add__info.absolute button{
            font-size: 14px;
            padding: 5px 10px;
            width: max-content;
        }
        .user__boxes2{
            padding-bottom: 0;
        }
        .user__boxes2 .box{
            padding: 1rem;
            width: 100%;
            min-height: 100px;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .user{
            flex-wrap: wrap;
            justify-content: center;
        }
        .user__cabinet .user .user__img i{
            font-size: 24px;
        }
        .user__cabinet .info__user{
            width: 100%;
            margin: 5px 0;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
            word-break: break-all;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs label{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 60%;
            height: 90px;
        }
        .user__boxes2 .box .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 14px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 14px;
            line-height: 18px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
        .user__cabinet .user .user__img{
            width: 130px !important;
            margin-bottom: 1rem;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(3) span{
            font-size: 14px;
            line-height: 16px !important;
        }
        .user__boxes2 .box:nth-child(4) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 14px;
            line-height: 16px;
        }
        .user__cabinet .user img:last-child{
            display: none;
        }
        .user__cabinet .user .user__name{
            margin-right: 0;
            text-align: center;
            font-size: 20px;
        }
        input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media (max-width: 300px){
        .user__boxes2 .box .add__cart i{
            font-size: 14px;
            height: 30px;
            width: 30px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 12px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 12px;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 12px;
        }
    }

</style>
