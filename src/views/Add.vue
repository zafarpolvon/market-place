<template>
    <div class="">
        <Navbar />
        <div class="add-product">
            <location-navbar :name="'Базовая рубашка'" />
            <div class="container mx-auto px-12">
                <h1>{{ cart.name }}</h1>
                <div class="product-action">
                    <div class="stars">
                        <star-rating :rating="5" />
                    </div>
                    <div class="comment"><a href="#">545 отзывов</a></div>
                </div>
            </div>
            <div class="container mx-auto px-12">
                <div class="product-list">
                    <div class="product__img">
                        <div class="images">
                            <img src="../assets/image/unnamed 7.png" alt="not found">
                            <img src="../assets/image/outdoors-3176145_1920 1.png" alt="not found">
                            <img src="../assets/image/outdoors-3179821_1920 3.png" alt="not found">
                            <img src="../assets/image/outdoors-3176153_1920 1.png" alt="not found">
                        </div>
                        <div class="image">
                            <img src="../assets/image/outdoors-3176153_1920 1 (1).png" alt="not found">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="product__information">
                        <div class="product__about">
                            <div class="product__price">500 ₽ <span>2000 рубл</span></div>
                            <Counter />
                        </div>
                        <div class="color__title">Цвет</div>
                        <div class="color__boxes">
                            <div class="color__box"><img src="../assets/image/6d6d202a7b1173e28f43c02b7daf816e 1.png" alt=""></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
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
            <div class="container mx-auto px-12">
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
            <div class="container mx-auto px-12 c-products">
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
            <div class="container mx-auto px-12 c-products">
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
            <div class="container mx-auto px-12">
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
            <div class="container mx-auto px-12 p-customer">
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
            <div class="container mx-auto px-12 mb-12">
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

export default {
  name: 'Home',
  data: () => ({
    prot: 80,
    sizes: [42, 46, 48, 50, 52, 54],
    cart: {},
    tovar: []
  }),
  async mounted () {
    const id = this.$route.params.id
    this.cart = await this.$store.dispatch('loadDataById', id)
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
    Cart,
    Footer,
    Counter,
    StarRating,
    Progress,
    ProgressLine,
    LocationNavbar
  }
}

</script>
<style>
    .back {
        background-color: #fff;
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
        height: 458px !important;
        position: relative;
    }
    .product-list .product__img .image img{
        height: 100%;
    }
    .product-list .product__img .image .far.fa-heart{
        position: absolute;
        top: 15px;
        right: 15px;
        color: #FC7D00;
        font-size: 25px;
        cursor: pointer;
    }
    .add-product .product-list .product__img .images{
        justify-content: unset !important;
    }
    .add-product .product-list .product__img .images img{
        margin-top: 8px;
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
    .customer .user__comment .user .user__name{
        font-size: 19px;
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
    .customer .user__comment .user .user__name{
        width: 30%;
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
</style>
