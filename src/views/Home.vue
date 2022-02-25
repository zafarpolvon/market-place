<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <Slide />
        <Magazin />
        <div class="container mx-auto mt-8 px-4 xl:px-12 md:px-4">
            <Title />
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <router-link class="show__all" tag="a" to="/filter">Показать еще</router-link>
            </div>
        </div>
        <div class="delivery">
            <div class="container mx-auto mt-8 px-4 xl:px-12 md:px-4">
                <div class="delivery__text">
                    <div class="text__title">Доставка</div>
                    <p>ПО ВСЕМ УЗБЕКИСТАНУ</p>
                </div>
                <img src="../assets/image/11 122001.png" alt="not found">
            </div>
        </div>
        <div class="container mx-auto mt-12 px-4 xl:px-12 md:px-4">
            <div class="news__title">Недавно добавленные товары</div>
            <div class="grid grid-cols-5 gap-3">
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <router-link class="show__all" tag="a" to="/filter">Показать еще</router-link>
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
            <div class="news__title">Товары со скидкой</div>
            <div class="grid grid-cols-5 gap-3">
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
                <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <router-link class="show__all" tag="a" to="/filtler">Показать еще</router-link>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="news__title">Новости</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="news__boxes">
                <div class="box">
                    <img src="../assets/image/unsplash_JskqEILt-ds (1).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <router-link tag="a" to="/news">Подробно</router-link>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/unsplash_JskqEILt-ds (1).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <router-link tag="a" to="/news">Подробно</router-link>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/unsplash_JskqEILt-ds (1).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <router-link tag="a" to="/news">Подробно</router-link>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
            <div class="recently-products">
                <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                    <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
            </div>
        </div>
        <Adventage />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
            <div class="brands__title">Бренды</div>
        </div>
        <Brands />
        <div class="container mx-auto mt-12 px-4 xl:px-12 md:px-4 mb-12">
            <div class="brands__title">Lorem ipsum</div>
            <div class="seo__subtitle">Широкий ассортимент и высокое качество</div>
            <div class="seo__text">Интернет-магазин Wildberries – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге Wildberries представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал изготовления, сезонность, бренд.</div>
            <a class="seo__link" to="">Читать далее</a>
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
import Adventage from '../components/layout/Adventage.vue'
import Brands from '../components/slide/Brands.vue'
import MainMenu from '../components/layout/MainMenu.vue'

export default {
  name: 'Home',
  data: () => ({
    tovar: []
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

  },
  computed: {
  },
  components: {
    Navbar,
    Slide,
    Magazin,
    Cart,
    Title,
    Footer,
    Adventage,
    Brands,
    MainMenu
  }
}

</script>
<style scoped>
    .back {
        background-color: #FFF;
    }
    .show__all {
        background: #131E3D;
        border-radius: 8px;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 12px 80px;
        cursor: pointer;
    }
    .show__all:hover{
        background: #11113D;
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
    .delivery{
        background: #131E3D;
        display: flex;
        align-items: center;
    }
    .delivery .container{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .delivery__text{
        color: #fff;
    }
    .delivery__text .text__title{
        font-size: 96px;
    }
    .delivery__text p{
        font-size: 36px;
    }
    .news__title{
        font-size: 42px;
        color: #131E3D;
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
        color: #023047;
    }
    .news__boxes .box .box__text p{
        color: #023047;
        margin-bottom: 20px;
    }
    .news__boxes .box .box__text .n__date{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .news__boxes .box .box__text .n__date a{
        background: #131E3D;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .news__boxes .box .box__text .n__date a:hover{
        box-shadow: unset !important;
        background: #11113D;
    }
    .news__boxes .box .box__text .n__date span{
        color: #999999;
    }
    .recently-products .recently__title, .brands__title{
        margin-bottom: 20px;
        color: #131E3D;
    }
    .brands__title{
        color: #131E3D;
        font-size: 42px;
        margin-bottom: 20px;
    }
    .seo__subtitle{
        color: #131E3D;
        font-weight: 900;
        font-size: 18px;
    }
    .seo__text{
        color: #434343;
        margin: 12px 0;
    }
    .seo__link{
        color: #AEAEAE;
        cursor: pointer;
    }

    @media (min-width: 1025px) and (max-width: 1500px){
        .news__boxes .box{
            width: 31%;
            margin: 10px;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        .news__boxes .box{
            width: 31% !important;
            margin: 8px;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 14px;
        }
        .news__boxes .box .box__text p{
            font-size: 13px;
        }
        .news__boxes .box .box__text .n__date a{
            font-size: 12px;
            padding: 5px 8px;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 12px;
        }
    }

    @media (max-width: 960px){
        .delivery__text{
            font-weight: 100;
        }
        .delivery__text .text__title{
            font-size: 32px;
        }
        .delivery__text p{
            font-size: 24px;
        }
        .delivery img{
            width: 30%;
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
            width: 30% !important;
            margin: 8px;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 14px;
        }
        .news__boxes .box .box__text p{
            font-size: 13px;
        }
        .news__boxes .box .box__text .n__date a{
            font-size: 12px;
            padding: 5px 8px;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 12px;
        }
        .delivery__text .text__title{
            font-size: 38px;
        }
        .delivery__text p{
            font-size: 24px;
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
            justify-content: space-between;
        }
        .news__boxes .box{
            width: 48%;
            margin: 5px 0;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 12.5px !important;
            margin-bottom: 0.4rem;
            margin-bottom: 5px;
        }
        .news__boxes .box .box__text p{
            font-size: 11px !important;
            margin-bottom: 5px;
        }
        .news__boxes .box .box__text .n__date a{
            padding: 5px 10px !important;
            font-size: 11px !important;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 11px !important;
        }
        .news__title{
            font-size: 22px !important;
            margin-bottom: 0rem !important;
        }
        .recently-products .recently__title, .brands__title{
            font-size: 22px !important;
        }
        .delivery__text .text__title{
            font-size: 26px;
        }
        .delivery__text p{
            font-size: 16px;
            line-height: 1;
        }
        .seo__subtitle{
            font-size: 16px;
        }
        .seo__text{
            font-size: 14px;
        }
        .seo__link{
            font-size: 14px;
        }
    }

    @media (max-width: 500px){
        .delivery .container{
            align-items: unset;
        }
    }

    @media (min-width: 376px) and (max-width: 415px){
        .banner .grid-cols-4{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
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
            padding: 3px 5px !important;
            font-size: 11px;
        }
        .news__boxes{
            justify-content: space-between;
        }
        .news__boxes .box{
            width: 48%;
            margin: 5px 0;
        }
        .news__boxes .box .box__text .box__title{
            font-size: 13px;
            margin-bottom: 5px;
        }
        .news__boxes .box .box__text p{
            font-size: 12px;
            margin-bottom: 5px;
        }
        .news__boxes .box .box__text .n__date a{
            font-size: 11px;
            padding: 3px 5px;
        }
        .news__boxes .box .box__text .n__date span{
            font-size: 11px;
        }
        .news__boxes .box .box__text{
            padding: 5px;
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
        .recently-products .recently__title, .brands__title{
            font-size: 22px !important;
        }
        .delivery__text .text__title{
            font-size: 18px;
        }
        .delivery__text p{
            font-size: 14px;
        }
        .seo__subtitle{
            font-size: 16px;
        }
        .seo__text{
            font-size: 14px;
        }
        .seo__link{
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .show__all {
            padding: 10px 25px;
            font-size: 16px;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        }
    }

</style>
