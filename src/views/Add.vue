<template>
    <div class="">
        <Navbar />
        <div class="add-product">
            <location-navbar :name="'Базовая рубашка'" />
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <h1>{{ cart.name }}</h1>
                <div class="product-action">
                    <div class="stars">
                        <star-rating :rating="5" />
                    </div>
                    <div class="comment"><a href="#">545 отзывов</a></div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <div class="product-list">
                    <div class="product__img relative">
                        <div class="images">
                            <img @load="onImgLoad" @click="updataMain(cart.images[0])" :src="cart.images[0]" alt="">
                            <img @load="onImgLoad" @click="updataMain(cart.images[1])" :src="cart.images[1]" alt="">
                            <img @load="onImgLoad" @click="updataMain(cart.images[2])" :src="cart.images[2]" alt="">
                            <img @load="onImgLoad" @click="updataMain(cart.images[3])" :src="cart.images[3]" alt="">
                        </div>
                        <div class="image ">
                            <img @load="onImgLoad" :src="cart.image" alt="not found">
                            <i class="far fa-heart"></i>
                        </div>
                        <slide-mobile :cart="cart" class="mobile__slide" />
                        <div v-if="imageLoader" class="loader__blur">
                            <div class="loader__into">
                                <Loader />
                            </div>
                        </div>
                    </div>
                    <div class="product__information">
                        <div class="product__about">
                            <div class="product__price">{{ cart.price }} $ <span>2000 рубл</span></div>
                            <Counter />
                        </div>
                        <div class="color__title">Цвет</div>
                        <div class="color__boxes">
                            <div class="color__box" v-for="col in cart.colors" :key="col.id">
                                <img class="cursor-pointer" @click="updateImage(col.img, col.second, col.third, col.fourth)" :src="col.img" alt="photo">
                            </div>
                        </div>
                        <div class="product__size-title">Размер</div>
                        <div class="product__size">
                            <div class="radioContainer" v-for="(size, index) in sizes" :key="index">
                                <input type="radio" :id="index" v-bind:value="size" v-model="picked" @click="temp(size)">
                                <label class="circle" :for="index">{{ size }}</label>
                            </div>
                        </div>
                        <div class="payment">
                            Цена при оплате:
                            <a href="#"><img src="../assets/image/image 29.png" alt="not found"></a>
                        </div>
                        <div class="delivery">Доставка: 27-29 сентября</div>
                        <div class="sales">Продавец: <span>ВАЙЛДБЕРРИЗ ООО</span></div>
                        <div class="warehouse">Склад отгрузки: склад Logoname</div>
                        <div class="brend">
                            <a href="#"><img src="../assets/image/image 38.png" alt="not found"></a>
                            <a href="#"><img src="../assets/image/image 38.png" alt="not found"></a>
                            <a href="#"><img src="../assets/image/image 38.png" alt="not found"></a>
                        </div>
                        <div class="product__buttons">
                            <div>
                                <button type="submit" id="korzina__button">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <div class="recommended">
                    <div class="r__box">
                        <div class="box__title">Состав</div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <p>Информация о технических характеристиках, комплекте
                            поставки,стране изготовления и внешнем виде товара
                            носит справочный характер и основывается на 
                            последних доступных сведениях от продавца</p>
                    </div>
                    <div class="r__box">
                        <div class="box__title">Рекомендуется</div>
                        <div class="grid grid-cols-2 gap-3" >
                            <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">
                                <Cart :cart="cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12 c-products">
                <div class="advertising__title">Рекламный блок</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <button type="submit" class="show__button">Показать еще</button>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12 c-products">
                <div class="advertising__title">Похожие товары</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <button type="submit" class="show__button">Показать еще</button>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12">
                <div class="question__title">Отзывы и вопросы</div>
                <div class="q__comments">
                    <span>Отзывы 105</span>
                    <span>Вопросы 229</span>
                    <span>Статьи 2</span>
                    <p>Правила оформления отзывов и вопросов</p>
                </div>
                <div class="question">
                    <div class="q__box">
                        <div class="comment">
                            <div class="order">4.5</div>
                            <p class="pb-5">На основании 105 отзыва</p>
                            <div class="stars">
                                <star-rating :rating="4" />
                            </div>
                        </div>
                        <div class="place">
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>5</h6>
                                    </div>
                                    <progress-line :val="83" class="progress__align" />
                                </div>
                                <div class="percent">83%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>4</h6>
                                    </div>
                                    <progress-line :val="15" class="progress__align" />
                                </div>
                                <div class="percent">15%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>3</h6>
                                    </div>
                                    <progress-line :val="prot" class="progress__align" />
                                </div>
                                <div class="percent">{{ prot }}%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>2</h6>
                                    </div>
                                    <progress-line :val="8" class="progress__align" />
                                </div>
                                <div class="percent">8%</div>
                            </div>
                            <div class="lines">
                                <div class="flex flex-row w-full">
                                    <div class="w-4">
                                        <h6>1</h6>
                                    </div>
                                    <progress-line :val="7" class="progress__align" />
                                </div>
                                <div class="percent">7%</div>
                            </div>
                        </div>
                    </div>
                    <div class="q__box">
                        <div class="box">
                            <div class="protsent">
                                <Progress :value="70.5" />
                            </div>
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <Progress :value="48.8" />
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <Progress :value="50.5" />
                            <p>Barcha sotuvlar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12 p-customer">
                <span>Сортировать по: </span>
                <span>Дате <i class="fa fa-arrow-down"></i></span>
                <span>Оценке</span>
                <div class="customer">
                    <div class="c__box">
                        <div class="c__box-title">Отзывы покупателей <span>(105)</span></div>
                        <div class="user__comment">
                            <div class="user">
                                <div class="user__name">Турсунов Асрор</div>
                                <div class="stars">
                                    <star-rating :rating="3" />
                                </div>
                            </div>
                            <p>Качество ткани хорошее, но если вы предпочитаете оверсайз, выбирайте размер меньше вашего, например, слишком свободные рукава.</p>
                            <div class="date__sale">
                                <div class="date">30.04.2021</div>
                                <div class="saled">
                                    <img src="../assets/image/Vector (22).png" alt="not found">
                                    <div class="p__saled">Я купил товар</div>
                                </div>
                            </div>
                        </div>
                        <div class="user__comment">
                            <div class="user">
                                <div class="user__name">Ахмад Собиров</div>
                                <div class="stars">
                                    <star-rating :rating="5" />
                                </div>
                            </div>
                            <p>Ткань по своей фактуре - это не ткань, которая создает очень мелкие морщинки, занимает все ваше тело, качество проявляется в любом виде.</p>
                            <div class="date__sale">
                                <div class="date">21.04.2021</div>
                                <div class="saled">
                                    <img src="../assets/image/Vector (22).png" alt="not found">
                                    <div class="p__saled">Я купил товар</div>
                                </div>
                            </div>
                        </div>
                        <div class="user__comment">
                            <div class="user">
                                <div class="user__name">Улугбек Мустаков</div>
                                <div class="stars">
                                    <star-rating :rating="4" />
                                </div>
                            </div>
                            <p>Полноразмерное качество красивое</p>
                            <div class="date__sale">
                                <div class="date">26.04.2021</div>
                                <div class="saled">
                                    <img src="../assets/image/Vector (22).png" alt="not found">
                                    <div class="p__saled">Я купил товар</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="comment__btn">Показать больше комментариев</button>
                    </div>
                    <div class="c__box">
                        <div class="box__title">Оставьте ваш отзыв</div>
                        <input type="text" placeholder="Ваше имя" />
                        <input type="email" placeholder="Ваш  e-mail" />
                        <textarea placeholder="Ваш отзыв"></textarea>
                        <button type="submit">Отправить отзыв</button>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-12 md:px-12 mb-12">
                <div class="recently-products">
                    <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in tovar.slice(0, 2)" :key="cart.id">
                        <Cart :cart="cart" />
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
import LocationNavbar from '../components/layout/LocationNavbar.vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/layout/Footer.vue'
import Counter from '../components/Counter.vue'
import Progress from '../components/progress/Progress.vue'
import StarRating from '../components/StarRating.vue'
import ProgressLine from '../components/progress/ProgressLine.vue'
import Loader from '../components/Loader.vue'
import SlideMobile from '../components/slide/SlideMobile.vue'

export default {
  name: 'Home',
  data: () => ({
    prot: 80,
    sizes: [42, 46, 48, 50, 52, 54],
    cart: {},
    tovar: [],
    picked: '',
    quantity: 1,
    imageLoader: true
  }),
  async mounted () {
    const id = this.$route.params.id
    this.cart = await this.$store.dispatch('loadDataById', id)
    this.tovar = await this.$store.dispatch('loadData')
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i)
    }
    if (this.$props.basket.quantity > 1) {
      this.selected = this.$props.basket.quantity
    }
  },
  methods: {
    updateImage (first, second, third, fourth) {
      this.imageLoader = true
      this.cart.img = first
      this.cart.second = second
      this.cart.third = third
      this.cart.fourth = fourth
    },
    updataMain (index) {
      this.cart.image = index
    },
    temp (index) {
      console.log(index)
    },
    onImgLoad () {
      this.imageLoader = false
    }
  },
  computed: {

  },
  components: {
    Navbar,
    Cart,
    Footer,
    Counter,
    StarRating,
    Progress,
    ProgressLine,
    LocationNavbar,
    Loader,
    SlideMobile
  }
}

</script>
<style>
    .back {
        background-color: #fff;
    }
    .web__slide {
        display: block;
    }
    .loader__blur {
        backdrop-filter: blur(15px);
        background: #ebebeb7a;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
    .loader__into {
        position: absolute;
        top: 38%;
        left: 43%;

    }
    .pages a{
        color: #023047;
        text-decoration: none;
    }
    .pages a:hover{
        color: #023999;
    }
    .stars span {
        margin-right: 5px !important;
    }
    .progress__align {
        align-self: center;
        width: 75%;
        margin-left: 15px;
    }
    .add-product .product__information .brend{
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
    }
    .add-product .product__information .brend a{
        margin: 0.2rem 0;
        margin-right: 0.5rem !important;
        text-decoration: none;
    }
    .add-product .product__information .product__about .product__price{
        color: #0052FF;
    }
    .add-product .product__information .product__buttons #korzina__button{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        transition: 0.3s linear;
    }
    .add-product .product__information .product__buttons #korzina__button:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
    }
    .product-list .product__img .image{
        width: 458px !important;
        height: 458px !important;
        position: relative;
    }
    .product-list .product__img .image .fa.fa-chevron-left,
    .product-list .product__img .image .fa.fa-chevron-right{
        display: none;
    }
    .product-list .product__img .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .product-list .product__img .image .far.fa-heart{
        position: absolute;
        top: 15px;
        right: 15px;
        color: #FC7D00;
        font-size: 25px;
        cursor: pointer;
    }
    .add-product .product__information .product__size{
        margin-top: 1rem;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
    }
    .add-product .product-list .product__img .images{
        justify-content: unset !important;
    }
    .add-product .product-list .product__img .images img{
        margin-top: 8px;
        width: 106px;
        height: 106px;
        object-fit: cover;
    }
    .add-product .container:nth-child(2) h1{
        line-height: 1;
    }
    .q__comments a{
        margin-left: auto;
        border-bottom: 1px solid #898989;
        color: #898989;
    }
    .q__comments a:hover{
        opacity: 0.7;
    }
    .question .q__box .box{
        background: rgba(0, 82, 255, 0.2);
    }
    .q__comments span:first-child{
        border-bottom: 2px solid #0052FF !important;
    }
    .p-customer > span{
        margin-right: 2rem !important;
    }
    .p-customer > span:nth-child(2){
        border-bottom: 1px solid #0052FF;
    }
    .p-customer span:nth-child(2) i{
        color: #0052FF;
    }
    .p-customer .customer .c__box .user__comment .date__sale{
        display: flex !important;
    }
    .p-customer .customer .c__box .user__comment .date__sale .date{
        font-size: 14px !important;
        color: #999999;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled{
        display: flex !important;
        padding-left: 12rem;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled img{
        object-fit: scale-down;
        margin-right: 5px !important;
    }
    .p-customer .customer .c__box .user__comment .date__sale .saled .p__saled{
        color: #999999;
    }
    .customer .user__comment{
        margin: 1.5rem 0;
    }
    .customer .user__comment p{
        font-size: 16px;
    }
    .p__saled{
        font-size: 14px;
    }
    .c__box:first-child{
        padding-bottom: 3rem;
    }
    .customer .user__comment .user .stars{
        margin-left: 0 !important;
    }
    .mobile__slide {
        display: none;
    }
    .customer .user__comment .user .user__name{
        width: 30%;
        font-size: 19px;
        line-height: 1;
    }
    .comment__btn{
        border: 1px solid #666666;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: 14px;
        color: #666666;
        margin-top: 1rem;
        padding: 6px 25px;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .comment__btn:hover{
        color: #000;
        background: #f6f6f6;
    }
    .c__box:last-child{
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));
        background: rgba(0, 82, 255, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 450px;
        padding: 1rem 2rem;
        width: 30%;
        margin-left: 4rem;
    }
    .customer .c__box:first-child .c__box-title{
        line-height: 1;
    }
    .c__box:last-child .box__title{
        color: #023047;
        font-size: 26px;
        font-weight: bold;
    }
    .c__box:last-child input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    .c__box:last-child textarea{
        padding: 10px 10px 3rem 10px;
        outline: none;
        border-radius: 8px;
    }
    .c__box:last-child button{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        color: #FFF;
        padding: 15px 30px;
        margin: 0 auto;
    }
    .c__box:last-child button:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
    }
    .radioContainer {
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .radioContainer input {
        display: none;
    }
    .radioContainer .circle {
        display: inline-block;
        width: 58px;
        height: 48px;
        background-color: white;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 4px;
        text-align: center;
        padding-top: 8.5px;
    }
    .radioContainer:hover .circle {
        border: 1px solid black;
    }
    .radioContainer input:checked + .circle {
        background-color: black;
        color: white;
        border: 1px solid rgb(12, 11, 11);
    }
    .add-product .product__information .color__boxes {
        display: flex;
        flex-wrap: wrap;
    }
    .add-product .product__information .color__boxes .color__box{
        margin-bottom: 15px;
        width: 76px;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .grid-cols-5 {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }
        .web__slide {
            display: none;
        }
        .add-product .product__information .product__about .product__price{
            display: grid;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 0;
        }
        .add-product .product__information .brend a{
            width: 30%;
        }
        .add-product .product__information .color__boxes img{
            width: 100%;
            height: auto;
        }
        .add-product .product__information .color__boxes .color__box{
            height: 63px;
        }
        .product-list .product__img .image img{
            height: unset !important;
        }
        .add-product .product-list .product__img .images img{
            margin-top: 4px;
        }
        .images img {
            width: 106px;
        }
        .product-list .product__img .image{
            height: 382px !important;
        }
        .add-product .product-list .product__img .images{
            height: 382px !important;
        }
        .add-product .recommended .r__box{
            width: 50%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 54%;
        }
        .question .q__box:first-child{
            width: 49%;
            padding: 1rem;
        }
        .q__comments{
            width: 95%;
        }
        .question .q__box .comment p {
            line-height: 1;
        }
        .question .q__box .box{
            width: 100px;
            height: 110px;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 45%;
        }
        .c__box:last-child{
            width: 38%;
            margin-left: 0;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .grid-cols-5 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        .image {
            display: none;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            padding-left: 0;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: 400px !important;
        }
        .add-product .product-list .product__img .images{
            height: 400px;
        }
        .add-product .product-list .product__img .images img{
            height: 23%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-around;
        }
        .add-product .product__information .product__buttons{
            width: auto;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
        }
        .question{
            display: block;
        }
        .question .q__box{
            width: 100% !important;
        }
        .question .q__box:nth-child(2){
            width: 100% !important;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .q__comments p{
            margin: 1rem auto;
        }
        .question .q__box:first-child{
            margin: 0;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 45%;
        }
        .customer .c__box:first-child{
            width: 100%;
        }
        .c__box:last-child{
            width: 60%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
        .question .q__box .box{
            width: 100px;
            height: 110px;
        }
    }

    @media (min-width: 376px) and (max-width: 600px){
        .image {
            display: none;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            padding-left: 0;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: 350px !important;
            width: auto !important;
        }
        .product-list .product__img .image img{
            margin-right: 0 !important;
        }
        .add-product .product-list .product__img .images{
            height: 350px;
        }
        .add-product .product-list .product__img .images img{
            height: 22.7%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-between;
        }
        .add-product .product__information .product__buttons{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .add-product .product__information .product__about .product__price{
            display: grid;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 0;
        }
        .add-product .product__information .color__boxes .color__box{
            height: 66px !important;
            width: 73px;
        }
        .add-product .product__information .color__title{
            margin: 0.5rem 0;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .add-product .product__information .brend a{
            width: 30%;
        }
        .question{
            display: block;
        }
        .question .q__box{
            width: 100% !important;
        }
        .question .q__box:nth-child(2){
            width: 100% !important;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .q__comments p{
            margin: 1rem auto;
        }
        .question .q__box:first-child{
            margin: 0;
            padding: 1rem;
        }
        .question .q__box .comment p{
            line-height: 1;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 60%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 60%;
        }
        .customer .c__box:first-child{
            width: 100%;
        }
        .c__box:last-child{
            width: 80%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .mobile__slide {
            display: block;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
    }

    @media (max-width: 600px){
        .add-product .product-list .product__img{
            display: block !important;
        }
        .add-product .product__information .brend {
            justify-content: center;
        }
        .add-product .product-list .product__img .images{
            /* display: flex !important;
            flex-direction: row !important;
            height: auto !important;
            margin-right: 0 !important; */
            display: none;
        }
        .add-product .product-list .product__img .images img{
            width: 24% !important;
            height: auto !important;
            margin: 0 2px !important;
        }
        .product-list .product__img .image{
            height: auto !important;
            width: auto !important;
            display: flex;
        }
        .product-list .product__img .image img{
            width: 100%;
            height: auto !important;
            margin-right: 0 !important;
            display: none;
        }
        .product-list .product__img .image .fa.fa-chevron-left,
        .product-list .product__img .image .fa.fa-chevron-right{
            display: block !important;
            color: #023999 !important;
            font-size: 28px !important;
            position: absolute;
        }
        .product-list .product__img .image .fa.fa-chevron-left{
            top: 50%;
            left: 15px;
        }
        .product-list .product__img .image .fa.fa-chevron-right{
            top: 50%;
            right: 15px;
        }
        .add-product .product__information .product__size-title{
            margin: 0.5rem 0;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about .product__price{
            flex-direction: column !important;
            line-height: 1 !important;
            font-size: 28px !important;
        }
        .add-product .product__information .product__about .product__price span{
            margin-left: 0;
            padding-top: 5px;
        }
        .add-product .product__information .product__about{
            justify-content: space-between !important;
            margin-top: 1rem !important;
        }
        .add-product .product__information .color__boxes .color__box{
            width: 70px !important;
            height: 63px !important;
        }
        .add-product .product__information .brend a{
            width: 30%;
            margin: 3px 5px;
            margin-right: 0 !important;
        }
        .q__comments span{
            margin-right: 20px !important;
        }
        .question .q__box:nth-child(2){
            flex-direction: row;
        }
        .question .q__box .box {
            margin: 10px 0;
        }
        .question .q__box:first-child{
            display: block;
        }
        .question .q__box .comment{
            width: 100%;
            align-items: center;
            margin-bottom: 1rem;
        }
        .question .q__box .comment p{
            padding-bottom: 0;
        }
        .question .q__box .place{
            width: 100%;
        }
        .question .q__box:first-child {
            padding: 0 1rem 1rem 1rem;
        }
        .add-product .advertising__title {
            margin-top: 30px;
            font-size: 24px;
            line-height: 1;
        }
        .recently-products .recently__title{
            font-size: 32px;
            line-height: 1;
        }
        .question__title{
            margin-top: 30px;
            font-size: 24px;
            line-height: 1;
        }
        .add-product .recommended .r__box .box__title{
            font-size: 24px;
            line-height: 1;
            margin-bottom: 2rem;
        }
        .customer{
            display: block;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 65%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 65%;
        }
        .customer .c__box:first-child{
            width: 100%;
            margin-top: 20px;
        }
        .customer .c__box:first-child .c__box-title {
            font-size: 20px;
        }
        .customer .user__comment p {
            font-size: 18px !important;
        }

        .c__box:last-child{
            width: 100%;
            margin-left: 0;
            margin: auto;
            margin-bottom: 2rem;
        }
        .mobile__slide {
            display: block;
        }
        .product-list .product__img .image .far.fa-heart{
            bottom: 15px !important;
            top: unset !important;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
        .question .q__box .box{
            width: 29%;
            height: 110px;
        }
    }

    @media (max-width: 376px){
        .question .q__box .box p {
            font-size: 10px;
        }
        .image {
            display: none;
        }
        .mobile__slide {
            display: block;
        }
        .px-4 xl:px-12 md:px-12{
            padding-left: 15px !important;
            padding-right: 15px !important;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
        .add-product .recommended{
            display: block;
        }
        .add-product .recommended .r__box{
            width: 100%;
        }
        .add-product .recommended .r__box:nth-child(2){
            width: 100%;
            padding-left: 0;
            margin-top: 1rem;
        }
        .r__box .grid.grid-cols-2.gap-3{
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .add-product .product-list .product__img{
            justify-content: center;
        }
        .add-product .product-list{
            display: block;
        }
        .product-list .product__img .image{
            height: auto !important;
        }
        .add-product .product-list .product__img .images{
            height: 400px;
        }
        .add-product .product-list .product__img .images img{
            height: 23%;
        }
        .add-product .product__information{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .add-product .product__information .product__about{
            width: 100%;
            justify-content: space-around;
        }
        .add-product .product__information .product__buttons{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .add-product .product__information .color__title{
            margin: 0.5rem 0;
        }
        .add-product .container:nth-child(2) h1{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .q__comments{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .q__comments span{
            margin-right: 20px !important;
        }
        .q__comments p{
            margin-left: unset;
            text-align: center;
            font-size: 14px;
            margin: 1rem 0;
        }
        .question{
            display: block;
        }
        .question .q__box:nth-child(2){
            flex-direction: row;
        }
        .question .q__box .box {
            margin: 10px 0;
        }
        .question .q__box:first-child{
            display: block;
            margin: 0;
        }
        .question .q__box .comment{
            width: 100%;
            align-items: center;
            margin-bottom: 1rem;
        }
        .question .q__box .comment p{
            padding-bottom: 0;
        }
        .question .q__box .place{
            width: 100%;
        }
        .question .q__box:first-child {
            padding: 0 1rem 1rem 1rem;
        }
        .question .q__box{
            width: 100% !important;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 62%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 62%;
        }
        .c__box:last-child {
            padding: 1rem;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
        .question__title {
            font-size: 24px;
        }
    }

    @media (max-width: 360px){
        .add-product .product__information .color__boxes .color__box{
            margin: 6px !important;
        }
        .image {
            display: none;
        }
        .radioContainer{
            margin: 4px !important;
        }
        .q__comments{
            flex-direction: column;
        }
        .add-product .advertising__title {
            font-size: 24px;
            line-height: 1;
        }
        .recently-products .recently__title{
            font-size: 24px;
            line-height: 1;
        }
        .question__title{
            font-size: 24px;
            line-height: 1;
        }
        .add-product .recommended .r__box .box__title{
            font-size: 24px;
            line-height: 1;
            margin-bottom: 1rem;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 60%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .saled{
            padding-left: 0;
        }
        .customer .user__comment .user .user__name{
            width: 60%;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .radioContainer{
            margin: 2px !important;
        }
        .add-product .product__information .payment{
            display: block;
            text-align: center;
        }
        .product__information .sales{
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .add-product .product__information .warehouse{
            text-align: center;
        }
        .customer .user__comment .user{
            display: block;
        }
        .customer .user__comment .user .user__name{
            width: 100%;
        }
        .p-customer .customer .c__box .user__comment .date__sale .date{
            width: 45%;
        }
        .p-customer > span{
            width: 100% !important;
            margin-right: 5rem !important;
        }
        .customer .c__box:first-child .c__box-title{
            margin-top: 1rem;
        }
        .comment__btn{
            padding: 6px 10px;
            font-size: 12px;
        }
        .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        }
        .radioContainer .circle {
            width: 35px;
            height: 35px;
            padding-top: 6px;
            font-size: 14px;
        }
        .question .q__box .box{
            width: 85px;
            height: 95px;
        }
    }

</style>
