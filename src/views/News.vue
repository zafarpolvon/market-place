<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pages">
            <a href="#">Главная страница / </a>
            <a href="#">Новости</a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="news__title">Новости</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="news__boxes">
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="n-video-title">Видео новости</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="n-video">
                <div class="videos">
                    <div class="video__box">
                        <div class="video__box-img">
                            <img src="../assets/image/image 3.png" alt="not found">
                            <i class="fa fa-play"></i>
                        </div>
                        <div class="box__title">Российская компания NameLogo планирует выход на рынок Узбекистана</div>
                        <p>Стороны обсудили возможное сотрудничество в сфере экспортных интернет-продаж текстильной и швейно-трикотажной промышленности с производителями Узбекистана.</p>
                        <a href="#">Подробно</a>
                    </div>
                </div>
                <div class="video__boxes">
                    <div class="box">
                        <div class="box__image">
                            <img src="../assets/image/Rectangle 621.png" alt="not found">
                            <i class="fa fa-play"></i>
                        </div>
                        <div class="box__text">
                            <div class="text__title">В топ-10 российских онлайн-магазинов впервые вошла интернет-аптека</div>
                            <p>OВ десятку крупнейших интернет-магазинов России по версии аналитического агентства Data Insight впервые вошла онлайн-аптека – apteka.ru. По итогам 2019 г. она поднялась с 13-го на 7-е место.</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>30.04.2021</span>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box__image">
                            <img src="../assets/image/image 9.png" alt="not found">
                        </div>
                        <div class="box__text">
                            <div class="text__title">В топ-10 российских онлайн-магазинов впервые вошла интернет-аптека</div>
                            <p>OВ десятку крупнейших интернет-магазинов России по версии аналитического агентства Data Insight впервые вошла онлайн-аптека – apteka.ru. По итогам 2019 г. она поднялась с 13-го на 7-е место.</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>30.04.2021</span>
                            </div>
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
        padding: 2.5rem 3rem !important;
    }
    .pages a{
        color: #023047 !important;
        cursor: pointer;
    }
    .pages a:hover{
        color: #023999 !important;
    }
    .news__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .news__boxes{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3rem;
    }
    .news__boxes .box{
        width: 31%;
        margin: 16px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .news__boxes .box img{
        width: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: 0.2s linear;
    }
    .news__boxes .box img:hover{
        transform: scale(1.01);
    }
    .news__boxes .box .box__text{
        padding: 15px 10px 10px 10px;
    }
    .news__boxes .box .box__text .box__title{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 1rem;
    }
    .news__boxes .box .box__text p{
        color: #666666;
        margin-bottom: 20px;
    }
    .news__boxes .box .box__text .n__date{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .news__boxes .box .box__text .n__date a{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .news__boxes .box .box__text .n__date a:hover{
        box-shadow: unset !important;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
    }
    .news__boxes .box .box__text .n__date span{
        color: #999999;
    }
    .n-video-title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .n-video{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
    }
    .video1__boxes{
        width: 45.5% !important;
    }
    .video1__boxes .video__box{
        width: 100% !important;
    }
    .n-video .video__box{
        width: 98%;
        padding-bottom: 20px;
    }
    .n-video .video__boxes{
        width: 53%;
    }
    .n-video .video__box .video__box-img{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .n-video .video__box .video__box-img i{
        position: absolute;
        color: #FFF;
        padding: 30px;
        border-radius: 50%;
        border: 2px solid #FFF;
        font-size: 28px;
        cursor: pointer;
    }
    .n-video .video__box .video__box-img img{
        width: 100%;
        object-fit: cover;
    }
    .n-video .video__box .box__title{
        font-weight: bold;
        font-size: 18px;
        margin: 10px 0 20px 0;
    }
    .n-video .video__box p{
        color: #666666;
        padding-bottom: 20px;
        width: 95%;
    }
    .n-video .video__box a{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%) !important;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .n-video .video__box a:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%) !important;
        box-shadow: unset !important;
    }
    .n-video .video__boxes .box{
        display: flex;
        padding-bottom: 1.8rem;
    }
    .n-video .video__boxes .box .box__image{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.8rem;
        width: 1000px;
    }
    .n-video .video__boxes .box .box__image img{
        margin-right: 0 !important;
    }
    .n-video .video__boxes .box img{
        margin-right: 1.8rem;
    }
    .n-video .video__boxes .box .box__image i{
        position: absolute;
        color: #FFF;
        padding: 20px;
        border-radius: 50%;
        border: 2px solid #FFF;
        font-size: 20px;
        cursor: pointer;
    }
    .n-video .video__boxes .box .box__text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .n-video .video__boxes .box .box__text .text__title{
        font-weight: bold;
        font-size: 18px;
    }
    .n-video .video__boxes .box .box__text p{
        color: #666666;
    }
    .n-video .video__boxes .box .box__text .n__date{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .n-video .video__boxes .box .box__text .n__date a{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%) !important;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .n-video .video__boxes .box .box__text .n__date a:hover{
        box-shadow: unset !important;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%) !important;
    }
    .n-video .video__boxes .box .box__text .n__date span{
        color: #999999;
    }

    @media (max-width: 1025px){
        .n-video{
            flex-direction: column;
        }
        .n-video .video__box{
            width: 100% !important;
        }
        .n-video .video__boxes .box{
            flex-direction: column !important;
        }
        .n-video .video__boxes .box .box__image{
            width: auto !important;
            margin-right: 0 !important;
        }
        .n-video .video__boxes .box .box__image img{
            width: 100% !important;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .news__boxes .box{
            width: 32% !important;
        }
        .n-video .video__boxes{
            width: 100% !important;
            display: flex !important;
            flex-wrap: wrap !important;
        }
        .n-video .video__boxes .box{
            width: 48% !important;
            margin: 0 9px !important;
            min-height: 660px !important;
        }
        .n-video .video__boxes .box .box__text{
            height: 100% !important;
            padding-top: 10px !important;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .news__boxes .box{
            width: 47% !important;
            margin: 10px !important;
        }
        .n-video .video__boxes{
            width: 100% !important;
            display: flex !important;
            flex-wrap: wrap !important;
            padding: 1rem 0 !important;
        }
        .n-video .video__boxes .box{
            width: 47% !important;
            margin: 0 10px !important;
            min-height: 625px !important;
        }
        .n-video .video__boxes .box .box__text{
            height: 100% !important;
            padding-top: 10px !important;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .news__boxes .box{
            width: 48% !important;
            margin: 5px !important;
        }
        .n-video .video__boxes{
            width: 100% !important;
            display: flex !important;
            flex-wrap: wrap !important;
            padding: 1rem 0 !important;
        }
        .n-video .video__boxes .box{
            width: 47% !important;
            margin: 0 7px !important;
            min-height: unset !important;
            padding-bottom: 1rem !important;
        }
        .news__boxes .box .box__text{
            padding: 5px !important;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 14px !important;
            margin-bottom: 0.4rem;
        }
        .news__boxes .box .box__text p{
            font-size: 13px !important;
        }
        .news__boxes .box .box__text .n__date a{
            padding: 5px 10px !important;
            font-size: 13px !important;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 13px !important;
        }
        .news__title{
            font-size: 32px !important;
            margin-bottom: 1rem !important;
        }
        .n-video-title{
            font-size: 32px !important;
            margin-bottom: 1rem !important;
        }
        .n-video .video__boxes .box .box__text .text__title{
            font-size: 14px !important;
            margin-bottom: 0.4rem !important;
        }
        .n-video .video__boxes .box .box__text p{
            font-size: 13px !important;
            margin-bottom: 20px !important;
        }
        .n-video .video__boxes .box .box__text .n__date a{
            padding: 5px 10px !important;
            font-size: 13px !important;
        }
        .n-video .video__boxes .box .box__text .n__date span{
            font-size: 13px !important;
        }
        .n-video .video__box .box__title{
            font-size: 16px !important;
            margin: 10px 0 0.4rem 0 !important;
        }
        .n-video .video__box p{
            width: 100% !important;
            font-size: 14px !important;
            margin-bottom: 0.4rem !important;
        }
        .n-video .video__box a{
            padding: 7px 13px !important;
            font-size: 14px !important;
        }
    }

    @media (max-width: 415px){
        .pages{
            padding: 1rem 1.25rem !important;
        }
        .news__boxes .box{
            width: 100% !important;
            margin: 10px 0 !important;
        }
        .news__title{
            font-size: 32px !important;
            margin-bottom: 0rem !important;
        }
        .n-video-title{
            font-size: 32px !important;
            margin-bottom: 0 !important;
        }
        .n-video .video__box p{
            width: 100% !important;
            margin-bottom: 20px !important;
            padding-bottom: 0 !important;
        }
        .n-video .video__box .box__title{
            margin: 10px 0 !important;
        }
        .n-video .video__box .video__box-img i{
            padding: 20px !important;
            font-size: 20px !important;
        }
        .n-video .video__boxes .box .box__image i{
            padding: 20px !important;
            font-size: 20px !important;
        }
        .n-video .video__box{
            margin: 10px 0 !important;
        }
        .n-video .video__boxes{
            width: 100% !important;
        }
        .n-video .video__boxes .box .box__text .text__title{
            margin-bottom: 0.4rem !important;
            margin-top: 10px !important;
        }
        .n-video .video__boxes .box .box__text p{
            padding-bottom: 20px !important;
        }
        .n-video .video__boxes .box .box__text .n__date a{
            padding: 7px 15px !important;
        }
        .news__boxes .box .box__text .n__date a{
            padding: 7px 15px !important;
        }
    }

    @media (max-width: 300px){
        .pages{
            padding: 1rem 1.25rem !important;
        }
        .news__boxes .box{
            width: 100% !important;
            margin: 10px 0 !important;
        }
        .news__title{
            font-size: 32px !important;
            margin-bottom: 0rem !important;
        }
        .n-video-title{
            font-size: 32px !important;
            margin-bottom: 0 !important;
        }
        .n-video .video__box p{
            width: 100% !important;
            margin-bottom: 20px !important;
            padding-bottom: 0 !important;
        }
        .n-video .video__box .box__title{
            margin: 10px 0 !important;
        }
        .n-video .video__box .video__box-img i{
            padding: 20px !important;
            font-size: 20px !important;
        }
        .n-video .video__boxes .box .box__image i{
            padding: 20px !important;
            font-size: 20px !important;
        }
        .n-video .video__box{
            margin: 10px 0 !important;
        }
        .n-video .video__boxes{
            width: 100% !important;
        }
        .n-video .video__boxes .box .box__text .text__title{
            margin-bottom: 0.4rem !important;
            margin-top: 10px !important;
        }
        .n-video .video__boxes .box .box__text p{
            padding-bottom: 20px !important;
        }
        .n-video .video__boxes .box .box__text .n__date a{
            padding: 5px 10px !important;
            font-size: 12px !important;
        }
        .news__boxes .box .box__text .n__date a{
            padding: 5px 10px !important;
            font-size: 12px !important;
        }
        .px-5{
            padding-left: 5px !important;
            padding-right: 5px !important;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 15px !important;
            margin-bottom: 10px !important;
        }
        .news__boxes .box .box__text p{
            font-size: 14px !important;
            margin-bottom: 10px !important;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 12px !important;
        }
        .n-video .video__box .box__title{
            font-size: 15px !important;
        }
        .n-video .video__box p{
            font-size: 14px !important;
        }
        .n-video .video__box a{
            padding: 5px 10px !important;
            font-size: 12px !important;
        }
        .n-video .video__boxes .box .box__text .n__date span{
            font-size: 12px !important;
        }
    }

</style>
