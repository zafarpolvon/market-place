<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pages">
            <router-link to="/" tag="a">Главная страница / </router-link>
            <a href="#">Новости подробно</a>
        </div>
        <div v-for="(item,index) in newsdetail" :key="item.id">
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <div class="mnews__title">{{ item.name}}</div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <div class="mnews__boxes">
                    <div class="box">
                        <div class="box__image">
                            <img :src="'https://novamarket.qwertyuz.ru/' + item.photo" alt="not found">
                            <span>{{ item.date }}</span>
                        </div>
                       <div v-html="item.description"></div>
                        <div class="shows">
                            <span><i class="fa fa-eye"></i> {{ item.views }}</span>
                        </div>
                    </div>
                    <!--                <div class="box">-->
                    <!--                    <div class="box__title">Последние новости</div>-->
                    <!--                    <div class="late__box">-->
                    <!--                        <img src="../assets/image/Rectangle 621 (1).png" alt="not found">-->
                    <!--                        <div class="late__text">-->
                    <!--                            <div class="late__title">Бренды отказываются от "черной пятницы" из-за изменения климата</div>-->
                    <!--                            <p>По мнению активистов, день всемирных распродаж заставляет людей покупать ненужные вещи и тем самым вредить природе.....</p>-->
                    <!--                            <div class="n__date">-->
                    <!--                                <a href="#">Подробно</a>-->
                    <!--                                <span>09.04.2021</span>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    <div class="late__box">-->
                    <!--                        <img src="../assets/image/Rectangle 621 (2).png" alt="not found">-->
                    <!--                        <div class="late__text">-->
                    <!--                            <div class="late__title">AliExpress запустил в России интернет-магазин "Лоукостер"</div>-->
                    <!--                            <p>Новый интернет-магазин будет рассчитан на аудиторию до 25 лет, а также на тех, кто хочет купить известные бренды с доставкой из России....</p>-->
                    <!--                            <div class="n__date">-->
                    <!--                                <a href="#">Подробно</a>-->
                    <!--                                <span>15.04.2021</span>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>-->
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
newsdetail:[]
  }),
  methods: {
      async getNewsDetail(){
          try {
              await axios
                  .get(this.$_http + 'api/news/detail',{
                      params:{
                          id: this.$route.params.id
                      }
                  } )
                  .then(response => {
                      this.newsdetail = response.data
                  })
          }
          catch (e){
              this.errorNotify(e.response.data.name)
          }
      }
  },
    mounted:{
    },
    created() {
      this.getNewsDetail()
    },
    components: {
    Navbar,
    Footer
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
        color: #023999 !important;
    }
    .mnews__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .mnews__boxes{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
    }
    .mnews__boxes .box:first-child{
        width: 64%;
    }
    .mnews__boxes .box:first-child .box__image{
        position: relative;
        margin-bottom: 2.5rem;
    }
    .mnews__boxes .box:first-child .box__image img{
        width: 100%;
    }
    .mnews__boxes .box:first-child .box__image span{
        position: absolute;
        top: 35px;
        left: 35px;
        background: #374C91;
        border-radius: 2px;
        color: #FFF;
        padding: 10px;
    }
    .mnews__boxes .box:first-child p{
        margin: 22px 0;
        color: #666666;
    }
    .mnews__boxes .box:nth-child(2){
        width: 34%;
    }
    .mnews__boxes .box:first-child .sidebar{
        display: flex;
        justify-content: space-between;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__img{
        width: 58%;
        height: 440px;
        object-fit: cover;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__box{
        display: flex;
        flex-direction: column;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__box img{
        margin-bottom: 20px;
    }
    .mnews__boxes .box:first-child .shows span{
        margin: 0 5px;
        color: #374C91;
    }
    .mnews__boxes .box:first-child .shows a{
        color: #374C91;
        cursor: pointer;
    }
    .mnews__boxes .box:first-child .shows a:hover{
        text-decoration: underline;
    }
    .mnews__boxes .box:first-child .shows span:last-child{
        margin-left: 5rem;
        color: #374C91;
    }
    .mnews__boxes .box:nth-child(2) .box__title{
        font-size: 32px;
        color: #023047;
        margin: 0 0 1rem 0;
        font-weight: bold;
    }
    .mnews__boxes .box:nth-child(2) .late__box{
        padding-bottom: 15px;
        margin: 1rem 0;
    }
    .mnews__boxes .box:nth-child(2) .late__box img{
        width: 100%;
    }
    .mnews__boxes .box:nth-child(2) .late__box .late__text{
        padding-right: 15px;
    }
    .mnews__boxes .box:nth-child(2) .late__box .late__title{
        font-weight: bold;
        font-size: 18px;
        width: 90%;
        margin-top: 1rem;
    }
    .mnews__boxes .box:nth-child(2) .late__box p{
        color: #666666;
        margin: 1.5rem 0 1rem 0;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date a{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date a:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
        box-shadow: unset !important;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date span{
        color: #999999;
    }

    @media only screen and (max-width: 1025px){
        .mnews__boxes .box:nth-child(2) .late__box .late__title{
            width: 100% !important;
            line-height: 20px !important;
            margin-top: 0.5rem !important;
        }
        .mnews__boxes .box:first-child .sidebar{
            flex-wrap: wrap !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__img{
            width: 100% !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__box{
            width: 100% !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            flex-wrap: wrap !important;
            padding: 20px 0 !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__box img{
            width: 49% !important;
            margin-bottom: 10px !important;
        }
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px){
        .mnews__title{
            font-size: 32px;
            line-height: 30px !important;
        }
        .mnews__boxes .box:nth-child(2) .box__title{
            font-size: 26px !important;
            line-height: 24px !important;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 769px){
        .mnews__title{
            font-size: 24px !important;
            line-height: 22px !important;
        }
        .mnews__boxes .box:nth-child(2) .box__title{
            font-size: 22px !important;
            line-height: 22px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date a{
            font-size: 14px !important;
            padding: 3px 10px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date span{
            font-size: 14px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box p{
            margin: 0.5rem 0 1rem 0 !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .late__title{
            width: 100% !important;
            line-height: 20px !important;
            margin-top: 0.5rem !important;
        }
    }

    @media only screen and (min-width: 415px) and (max-width: 769px){
        .mnews__title{
            font-size: 24px !important;
            line-height: 22px !important;
            margin-bottom: 1rem !important;
        }
        .mnews__boxes{
            flex-wrap: wrap !important;
        }
        .mnews__boxes .box{
            width: 100% !important;
        }
        .mnews__boxes .box:first-child .box__image span{
            top: 15px !important;
            left: 15px !important;
            font-size: 12px !important;
            padding: 5px !important;
        }
        .mnews__boxes .box:first-child p{
            margin: 7px 0 !important;
        }
        .mnews__boxes .box:first-child .box__image{
            margin-bottom: 1rem !important;
        }
        .mnews__boxes .box:first-child .sidebar{
            margin-top: 1rem !important;
        }
        .mnews__boxes .box .shows{
            margin-bottom: 1rem !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__box{
            padding: 20px 0 0 0 !important;
        }
        .mnews__boxes .box:nth-child(2) .box__title{
            font-size: 22px !important;
            line-height: 22px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date a{
            font-size: 14px !important;
            padding: 3px 10px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date span{
            font-size: 14px !important;
        }
        .mnews__boxes .box:nth-child(2) .lates__boxes{
            display: flex !important;
            flex-wrap: wrap !important;
        }
        .mnews__boxes .box:nth-child(2) .lates__boxes .late__box{
            width: 48% !important;
            margin: 1rem 5px !important;
            padding-bottom: 0 !important;
            height: 410px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .late__text{
            padding-right: 0 !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box p{
            margin: 0.5rem 0 1rem 0 !important;
            font-size: 14px !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__img{
            height: 300px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .late__title{
            width: 100% !important;
            line-height: 20px !important;
            margin-top: 0.5rem !important;
            font-size: 16px !important;
        }
    }

    @media (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
    }

    @media only screen and (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .mnews__title{
            font-size: 20px !important;
            line-height: 22px !important;
            margin-bottom: 1rem !important;
        }
        .mnews__title br{
            display: none !important;
        }
        .mnews__boxes{
            flex-wrap: wrap !important;
        }
        .mnews__boxes .box{
            width: 100% !important;
        }
        .mnews__boxes .box:first-child .box__image span{
            top: 15px !important;
            left: 15px !important;
            font-size: 12px !important;
            padding: 5px !important;
        }
        .mnews__boxes .box:first-child p{
            margin: 7px 0 !important;
            font-size: 12px !important;
        }
        .mnews__boxes .box:first-child .box__image{
            margin-bottom: 1rem !important;
        }
        .mnews__boxes .box:first-child .sidebar{
            margin-top: 1rem !important;
        }
        .mnews__boxes .box .shows{
            margin-bottom: 1rem !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__box{
            padding: 20px 0 0 0 !important;
        }
        .mnews__boxes .box:nth-child(2) .box__title{
            font-size: 22px !important;
            line-height: 22px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date a{
            font-size: 14px !important;
            padding: 3px 10px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .n__date span{
            font-size: 14px !important;
        }
        .mnews__boxes .box:nth-child(2) .lates__boxes{
            display: flex !important;
            flex-wrap: wrap !important;
        }
        .mnews__boxes .box:nth-child(2) .lates__boxes .late__box{
            width: 100% !important;
            margin: 1rem 5px !important;
            padding-bottom: 0 !important;
            height: 465px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .late__text{
            padding-right: 0 !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box p{
            margin: 0.5rem 0 1rem 0 !important;
            font-size: 14px !important;
        }
        .mnews__boxes .box:first-child .sidebar .sidebar__img{
            height: 300px !important;
        }
        .mnews__boxes .box:nth-child(2) .late__box .late__title{
            width: 100% !important;
            line-height: 20px !important;
            margin-top: 0.5rem !important;
            font-size: 16px !important;
        }
    }

    @media (max-width: 376px){
        .mnews__boxes .box:nth-child(2) .lates__boxes .late__box{
            height: 435px !important;
        }
    }

    @media (max-width: 360px){
        .mnews__boxes .box:nth-child(2) .lates__boxes .late__box{
            height: 435px !important;
            margin: 5px 0 !important;
        }
        .mnews__boxes .box:first-child .shows span:last-child{
            font-size: 12px !important;
            margin-left: 1rem !important;
        }
        .mnews__boxes .box:first-child .shows a{
            font-size: 12px !important;
        }
    }
</style>
