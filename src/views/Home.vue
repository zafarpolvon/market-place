<template>
    <div class="back">
        <Navbar />
        <Slide />
        <Magazin />
        <div class="container mx-auto mt-8 px-4 xl:px-12 md:px-4">
            <Title />
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart v-if="cart" :getFav="getFav" :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mt-12 banner">
            <div class="grid grid-cols-4 gap-4">
                <a href="#" class="col-span-2">
                    <img class="w-full h-64" src="../assets/image/image 25.png" alt="">
                </a>
                <a href="#" class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 26.png" alt="">
                </a>
                <a href="#" class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 27.png" alt="">
                </a>
            </div>
        </div>
        <div class="container mx-auto mt-12 px-4 xl:px-12 md:px-4">
            <div class="grid grid-cols-5 gap-3">
                <div v-for="cart in tovar" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="news__title">Новости</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="news__boxes">
                <div class="box" v-for="(item,index) in news" :key="index">
                    <img :src="'https://novamarket.qwertyuz.ru/' + item.photo" alt="not found">
                    <div class="box__text">
                        <div class="box__title" >{{ item.name }}</div>
                        <div v-html="item.description_mini"></div>
                        <div class="n__date">
                            <router-link tag="a" to="/news">Подробно</router-link>
                            <span>{{ item.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
<!--            <div class="recently-products">-->
<!--                <div class="recently__title">Вы недавно смотрели</div>-->
<!--                <div class="grid grid-cols-5 gap-3" >-->
<!--                    <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">-->
<!--                        <Cart :cart="cart" />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <Brend/>
        </div>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import Slide from '../components/slide/Slide.vue'
import Magazin from '../components/Magazin.vue'
import Cart from '../components/Cart.vue'
import Title from '../components/Title.vue'
import Brend from "@/views/Brend";

export default {
  name: 'Home',
  data: () => ({
    tovar: [],
      news:[]
  }),
  async mounted () {
    this.tovar = await this.$store.dispatch('loadData')
    this.setupPagination(this.tovar.map(person => {
      return {
        ...person
      }
    }))
  },
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
  computed: {
    getFav () {
      return this.$store.getters.LOADFAV
    }
  },
  components: {
    Navbar,
    Slide,
    Magazin,
    Cart,
    Title,
    Footer,
    Brend
  },

}

</script>
<style scoped>
    .back {
        background-color: #E5E5E5;
    }
    .show__all {
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 12px 80px;
    }
    .news__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 20px;
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
        position: relative;
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
    .recently-products .recently__title{
        margin-bottom: 20px;
        color: #023047;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-5 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .news__boxes .box{
            width: 48% !important;
            margin: 6px;
        }
        .news__boxes {
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow-x: scroll;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .news__boxes .box{
            width: 70% !important;
            margin: 1rem auto;
        }
        .news__boxes {
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow-x: scroll;
        }
    }

    @media (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .brand__name{
            font-size: 22px !important;
        }
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .banner img.h-64{
            height: auto;
        }
        .news__boxes {
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow-x: scroll;
        }
        .news__boxes .box{
            width: 100% !important;
            margin: 1rem auto !important;
        }
        .news__title{
            font-size: 22px !important;
            margin-bottom: 0rem !important;
        }
        .recently-products .recently__title{
            font-size: 22px !important;
        }
    }

    @media (min-width: 376px) and (max-width: 415px){
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .news__boxes {
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow-x: scroll;
        }
        .news__boxes .box{
            width: 100% !important;
            margin: 10px 0 !important;
        }
        .news__title{
            font-size: 22px !important;
            margin-bottom: 0rem !important;
        }
    }

    @media (max-width: 376px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .news__boxes .box .box__text .n__date a{
            padding: 7px 15px !important;
            font-size: 16px;
        }
        .news__boxes .box{
            width: 100% !important;
            margin: 10px 0 !important;
        }
        .news__title{
            font-size: 22px !important;
            margin-bottom: 0rem !important;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .brand__name{
            font-size: 22px !important;
            line-height: 28px;
        }
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .banner img.h-64{
            height: auto;
        }
        .banner .gap-4{
            gap: 5px;
        }
        .show__all {
            padding: 10px 25px;
            font-size: 16px;
        }
        .recently-products .recently__title{
            font-size: 22px !important;
        }
    }

    @media (max-width: 300px){
        .show__all {
            padding: 10px 25px;
            font-size: 16px;
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
        .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        }
    }

</style>
