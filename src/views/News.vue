<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pages">
            <router-link to="/" tag="a">Главная страница / </router-link>
            <a href="#">Новости</a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="news__title">Новости</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="news__boxes">
                <div class="box" v-for="(item,index) in news" :key="index">
                    <img :src="'https://novamarket.qwertyuz.ru/' + item.photo" alt="not found">
                    <div class="box__text">
                        <div class="box__title">{{item.name}}</div>
                        <div v-html="item.description_mini"></div>
                        <div class="n__date">
                            <router-link :to="{name:'Mnews', params:{id:item.id}}" tag="a">Подробно</router-link>
                            <span>{{ item.date }}</span>
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
news:[]
  }),
  methods: {
      async getNews(){
          try {
              await axios
                  .get(this.$_http + 'api/news', )
                  .then(response => {
                      this.news = response.data.data;
                  })
          }
          catch (e){
              this.errorNotify(e.response.data)
          }
      }
  },
    created(){
      this.getNews()
    },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
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
        filter: brightness(0.8);
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
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
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
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
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
