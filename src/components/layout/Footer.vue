<template>
    <div class="footer__back">
        <div class="container mx-auto px-8">
            <div class="footer__box">
                <div class="footer__logo">
                    <a href="#">NovaMarket</a>
                </div>
                <div>
                   <div class="footer__title">
                       <h5>Покупателям</h5>
                    </div>
                    <ul class="footer__ul">
                        <li class="footer__li">
                            <a href="#">Как сделать заказ</a>
                        </li>
                        <li class="footer__li">
                            <a href="#">Способы оплаты</a>
                        </li>
                        <li class="footer__li">
                            <router-link to="/delivery" tag="a" href="#">Доставка</router-link>
                        </li>
                        <li class="footer__li">
                            <router-link tag="a" to="/returnproduct">Возврат товара</router-link>
                        </li>
                        <li class="footer__li">
                            <a href="#">Откройте пункт выдачи</a>
                        </li>
                        <li class="footer__li">
                            <router-link tag="a" to="/returnproduct">Правила продажи</router-link>
                        </li>
                        <li class="footer__li">
                            <router-link tag="a" to="/questions">Вопросы и ответы</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="footer__title">
                       <h5>Компания</h5>
                    </div>
                    <ul class="footer__ul">
                        <li class="footer__li">
                            <a href="#">О нас</a>
                        </li>
                        <li class="footer__li">
                            <router-link to="/requisites" href="#">Реквизиты</router-link>
                        </li>
                        <li class="footer__li">
                            <router-link tag="a" to="/contacts" href="#">Контакты</router-link>
                        </li>
                        <li class="footer__li">
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="footer__title">
                       <h5>Мы в соцсетях</h5>
                    </div>
                    <div class="footer__soc mt-4">
                        <a href="#">
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                        <a href="#" class="ml-3">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="ml-3">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="footer__title">
                       <h5>Мы в соцсетях</h5>
                    </div>
                    <a href="#">
                        <img src="../../assets/image/a.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <i class="fa fa-chevron-up"></i>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .footer__back {
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #1C55C0 56.03%, #0A3168 99.79%);
        position: relative;
    }
    .footer__box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px 0;
    }
    .footer__li a {
        font-size: 14px;
        line-height: 21px;
        color: #D9D9D9;
    }
    .footer__li a:hover {
        color: #5E8CE2;
    }
    .footer__title h5 {
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF;
    }
    .footer__soc a i {
        font-size: 30px;
    }
    .footer__soc a {
        color: #FFFFFF;
    }
    .footer__soc a:hover {
        color: #5E8CE2;
    }
    .footer__logo a {
        font-size: 24px;
        color: #fff;
    }
    .footer__back i.fa.fa-chevron-up{
        display: none;
    }

    @media (max-width: 1000px){
        .footer__box{
            flex-direction: column !important;
        }
        .footer__logo{
            margin-bottom: 1rem;
        }
        .footer__title{
            margin-top: 1rem;
            margin-bottom: 0.5rem;
        }
        .footer__ul{
            margin: 10px 0;
        }
        .footer__back i.fa.fa-chevron-up{
            display: block;
            position: absolute;
            bottom: 50px;
            right: 50px;
            font-size: 30px;
            border-radius: 50%;
            background: #5E8CE2;
            color: #FFF;
            padding: 20px;
        }
    }

    @media (max-width: 330px){
        .footer__back i.fa.fa-chevron-up{
            bottom: 195px;
            right: 30px;
            padding: 15px;
            font-size: 26px;
        }
    }

</style>
