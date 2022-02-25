<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <!-- <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="order-menu">
                <ul>
                    <a href="#">Как сделать заказ</a>
                    <a href="#">Способы оплаты</a>
                    <a href="#">Доставка</a>
                    <a href="#">Возврат товара</a>
                    <a href="#">Откройте пункт выдачи</a>
                    <a href="#">Правила продажи</a>
                    <a href="#">Вопросы и ответы</a>
                </ul>
            </div>
        </div> -->
        <div class="border-bottom">
            <div class="container mx-auto px-4 xl:px-12 md:px-4 r-product">
                <div class="r-product__title">Правила возврата товаров</div>
                <div class="product__title">Возврат товара надлежащего качества</div>
                <h1>Срок возврата товара</h1>
                <p>Срок возврата товара надлежащего качества составляет 21 день с момента получения товара, если иное не было оговорено при продаже товара.</p>
                <p>Причинами для возврата товара со стороны Покупателя могут быть следующие:</p>
                <p>--- Не подошел размер, фасон, цвет, длина и т.п.</p>
                <p>--- Оттенок полученного товара отличается от оттенка модели с фотографии на сайте.</p>
                <div class="warning">
                    <span>!</span>
                    <p>Товар принимается к возврату только в полной комплектации, со всеми упаковками и наклейками, в неношеном/неиспользованном виде</p>
                </div>
                <h1>Возврат товара надлежащего качества осуществляется двумя способами:</h1>
                <p>Возврат в фирменные пункты выдачи/возврата NameLogo</p>
                <p>Вызов курьера LogoName  (услуга предоставляется жителям городов, где есть курьерская доставка).</p>
                <h1>1. Самостоятельный возврат</h1>
                <p>Возврат в фирменные пункты выдачи/возврата NameLogo</p>
                <h1>2. Возврат курьером</h1>
                <p>Услуга доступна для населенных пунктов, куда осуществляется доставка курьером.</p>
                <p>На один день возможно оформить на возврат с помощью курьера не более 10 позиций. Количество товаров для возврата в пунктах выдачи не ограничено.</p>
                <div class="product__title">Возврат товара надлежащего качества</div>
                <h1>Срок возврата товара</h1>
                <p>Срок возврата товара надлежащего качества составляет 21 день с момента получения товара, если иное не было оговорено при продаже товара.</p>
                <h1>Возврат товара ненадлежащего качества осуществляется следующим способом:</h1>
                <p>--- Возврат товара осуществляется посредством оформления заявки в Личном кабинете.</p>
                <p>--- Срок рассмотрения заявки не превышает 7 (семь) рабочих дней.</p>
                <p>--- В случае, если по результату рассмотрения заявки Продавцом принято положительное решение, покупатель может передать товар для возврата в Пункт выдачи заказов Logoname.</p>
                <p>--- В случае отклонения заявки, покупатель вправе обратиться в независимую экспертизу. В случае, если независимой экспертизой будет подтверждено право покупателя на возврат товара, все расходы покупателя, связанные с проведением независимой экспертизы подлежат возмещению Продавцом.</p>
            </div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 r-product__footer">
            <span>*</span>
            <p>Настоящие правила носят рекомендательный характер и не ограничивают покупателя в правах, связанных с предъявлением требований Продавцу, предусмотренных действующим законодательством.</p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import MainMenu from '../components/layout/MainMenu.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    MainMenu
  }
}
</script>

<style scoped>
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
    .order-menu{
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
    }
    .order-menu ul{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .order-menu ul a{
        cursor: pointer;
        color: #023047;
    }
    .order-menu ul a:nth-child(3){
        color: #0052FF;
    }
    .order-menu ul a:hover{
        color: #0052FF;
    }
    .border-bottom{
        border-bottom: 2px solid #898989;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
    }
    .r-product__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
        line-height: 1;
    }
    .r-product .product__title{
        font-size: 30px;
        color: #023047;
        margin-bottom: 2rem;
        line-height: 1;
    }
    .r-product h1{
        font-size: 22px;
        color: #023047;
        margin-bottom: 1.7rem;
        font-weight: bold;
        line-height: 1;
    }
    .r-product p{
        color: #023047;
        margin: 1rem 0;
        font-size: 18px;
    }
    .r-product .warning{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0px 1rem 0px 1.5rem;
        background: #EE4927;
        border-radius: 8px;
        margin: 2rem 0 1rem 0;
    }
    .r-product .warning span{
        border-radius: 50%;
        background: #FFF;
        width: 35px;
        height: 35px;
        color: #EE4927;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }
    .r-product .warning p{
        color: #FFF;
        font-weight: bold;
    }
    .r-product__footer{
        display: flex;
        padding-bottom: 5rem;
    }
    .r-product__footer span{
        color: #C211A7;
        margin-right: 10px;
    }
    .r-product__footer p{
        color: #898989;
        font-size: 13px;
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px) {
        .order-menu ul a{
            font-size: 13px;
        }
        .order-menu{
            margin-bottom: 0;
        }
    }
    @media only screen and (max-width: 769px){
        .order-menu{
            display: none;
        }
        .requisites .text span{
            font-size: 18px;
            width: 31%;
        }
        .requisites .text p{
            font-size: 18px;
        }
        .requisites h3{
            font-size: 18px;
            padding: 1rem 0;
            margin: 0;
        }
        .r-product .warning span{
            width: 70px !important;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .border-bottom{
            margin-bottom: 1.5rem;
        }
        .r-product .r-product__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        .r-product .product__title{
            font-size: 16px;
            margin-bottom: 0.8rem;
        }
        .r-product h1{
            margin-bottom: 0.2rem;
            font-size: 14px;
        }
        .r-product p{
            font-size: 14px;
            margin: 0.5rem 0;
        }
        .r-product .warning span{
            display: none;
        }
        .r-product .warning p{
            font-size: 12px;
        }
        .r-product .warning{
            padding: 0 1rem;
        }
        .r-product__footer{
            padding-bottom: 1.5rem;
        }
        .r-product__footer p{
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 376px) {
        .border-bottom{
            margin-bottom: 1.5rem;
        }
        .r-product__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        .r-product .product__title{
            font-size: 16px;
            margin-bottom: 0.7rem;
        }
        .r-product h1{
            font-size: 14px;
            margin-bottom: 0;
        }
        .r-product p{
            font-size: 14px;
            margin: 5px 0;
        }
        .r-product .warning span{
            display: none;
        }
        .r-product .warning p{
            font-size: 14px;
        }
        .r-product__footer{
            padding-bottom: 1.5rem;
        }
    }
</style>
