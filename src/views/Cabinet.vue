<template>

    <div class="back">
        <Navbar />
        <second-navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mb-12">
            <div class="user__cabinet">
                <div class="user">
                    <div class="user__img">
                        <img src="../assets/image/boy-1031527_1920 1.png" alt="not found">
                        <i class="fa fa-plus"></i>
                    </div>
                    <div class="user__name">Javohir Akramjonov</div>
                    <img src="../assets/image/Vector (19).png" alt="not found">
                </div>
                <div class="info__box">
                    <div class="info__user">
                    <div class="title">Э-маил</div>
                    <div class="change">
                        <p>mironshohnasimov@gmail.com</p>
                        <img src="../assets/image/Vector (19).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Телефон</div>
                    <div class="change">
                        <p>+99899 739 3538</p>
                        <img src="../assets/image/Vector (19).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Дата рождения</div>
                    <div class="change">
                        <p>11.12.2000</p>
                        <img src="../assets/image/Vector (19).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Пол</div>
                    <div class="change inputs">
                        <input type="radio" name="name" />
                        <span>Муж.</span>
                        <input type="radio" name="name" />
                        <span>Жен.</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="user__boxes2">
                <div class="box">
                    <div class="title">Банковские карты</div>
                    <div class="add__cart">
                        <i class="fa fa-plus"></i>
                        <p>Добавить карту</p>
                    </div>
                </div>
                <div class="box">
                    <div class="title">Адреса клиента</div>
                    <div class="gps__text">
                        <img src="../assets/image/Vector (15).png" alt="not found">
                        Москва
                    </div>
                </div>
                <div class="box">
                    <div class="title">Удаление личново кабинета</div>
                    <p>Как только Ваш личный кабинет будет удален</p>
                    <a href="#">Удаление личново кабинета</a>
                </div>
                <div class="box">
                    <div class="title">Восстановления пароля</div>
                    <a href="#">Данные для восстановления пароля и sms</a>
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
    .user__cabinet{
        width: 100%;
        height: 260px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        align-items: center;
        justify-content: space-between;
        padding-right: 3rem;
    }
    .user__cabinet .info__user{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .info__user .title{
        color: #898989 !important;
        font-size: 19px;
        padding-bottom: 0.5rem;
    }
    .user__cabinet .info__user .change{
        display: flex;
    }
    .user__cabinet .info__user .change.inputs{
        display: flex;
        align-items: center;
    }
    .user__cabinet .info__user .change.inputs span{
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
    .user__boxes2 .box:first-child{
        cursor: pointer;
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
        border: 2px solid #0052FF;
        width: 260px;
        height: 130px;
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
        border: 1px solid #0052FF;
        color: #0052FF;
        font-size: 22px;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .user__boxes2 .box .add__cart p{
        color: #0052FF;
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

    @media (min-width: 769px) and (max-width: 1025px){
        .user__cabinet{
            padding: 1.5rem;
        }
        .user__boxes2 .box{
            padding: 1.5rem;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .user__cabinet{
            padding: 1.5rem;
            height: auto;
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
        .user__cabinet .info__user .change.inputs span{
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
        .user__cabinet .info__user:first-child, .user__cabinet .info__user:nth-child(3){
            width: 60%;
        }
        .user__cabinet .info__user:nth-child(2){
            width: 40%;
        }
        .user__cabinet .info__user:last-child{
            width: 40%;
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
            padding: 1.5rem;
            height: auto;
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
        .user__cabinet .info__user .change.inputs span{
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
    }

    @media (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .user__cabinet{
            padding: 1rem;
            height: auto;
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
        .user__cabinet .info__user .change.inputs span{
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