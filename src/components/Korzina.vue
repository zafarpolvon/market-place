<template>
    <div class="basket__item">
        <div class="basket__left">
            <div class="basket__image">
                <img src="../assets/image/outdoors-3176153_1920 1 (1).png" alt="">
            </div>
            <div class="basket__box">
                <h4>POLO  рубашка</h4>
                <h5>Цвет: <span class="basket__gray">Белый</span></h5>
                <h5>Размер: <span class="basket__gray">XXL - 44</span></h5>
                <h5>Склад отгрузки:  <span class="basket__gray">склад Logoname</span></h5>
                <h5>ИП Иван Дияров</h5>
            </div>
        </div>
        <div class="basket__count">
            <Counter />
            <h5>Осталось 2 шт</h5>
        </div>
        <div class="basket__price">
            <h3>500 ₽</h3>
            <h4>2000 рубл</h4>
            <p>кредит от 50 ₽/мес</p>
        </div>
    </div>
</template>

<script>
import Counter from '../components/Counter.vue'
export default {
  components: {
    Counter
  }
}
</script>

<style scoped>
    .basket__left {
        display: flex;
        flex-direction: row;
    }
    .basket__image {
        width: 150px;
        height: 150px;
        display: flex;
    }
    .basket__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 1rem;
        position: relative;
    }
    .basket__box {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .basket__box h4 {
        font-size: 18px;
        line-height: 1;
        font-weight: bold;
        text-transform: uppercase;
        color: #000000;
    }
    .basket__box h5 {
        font-weight: normal;
        font-size: 16px;
        line-height: 1;
        color: #023047;
    }
    .basket__gray {
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #898989;
    }
    .basket__count h5 {
        margin-top: 15px;
        font-size: 14px;
        line-height: 100%;
        color: #0052FF;
    }
    .basket__price h3 {
        font-weight: bold;
        font-size: 40px;
        line-height: 100%;
        color: #0052FF;
    }
    .basket__price {
        text-align: right;
    }
    .basket__price h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-decoration: line-through;
    }
    .basket__price p {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #898989;
    }

    @media (min-width: 600px) and (max-width: 769px){
        .basket__item{
            flex-direction: column;
        }
        .basket__price{
            text-align: left;
            position: absolute;
            right: 15px;
            bottom: 23px;
        }
        .basket__count{
            margin: 1rem 0;
            width: 70%;
        }
        .basket__gray {
            font-size: 14px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .basket__item{
            flex-direction: column;
        }
        .basket__price{
            text-align: left;
            position: absolute;
            right: 15px;
            bottom: 23px;
        }
        .basket__count{
            margin: 1rem 0;
            width: 70%;
        }
        .basket__image{
            width: 130px;
            height: 130px;
        }
        .basket__gray {
            font-size: 14px;
        }
        .basket__price h3{
            font-size: 24px;
        }
    }

    @media (max-width: 415px){
        .basket__item{
            flex-direction: column;
        }
        .basket__box{
            margin-left: 0;
        }
        .basket__box h5{
            margin: 0.5rem 0;
        }
        .basket__box h4{
            text-align: center;
            margin-top: 10px;
        }
        .basket__left{
            flex-direction: column;
        }
        .basket__image{
            width: 100%;
            height: auto;
            margin: auto;
        }
        .basket__count{
            margin: 1rem 0;
        }
        .basket__price{
            position: absolute;
            bottom: 28px;
            right: 15px;
        }
        .basket__price h3{
            font-size: 24px;
        }
        .basket__price h4{
            font-size: 14px;
        }
        .basket__gray {
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .basket__price{
            position: relative;
            bottom: unset;
            right: unset;
            text-align: left;
        }
        .basket__box h5{
            margin: 0.2rem 0;
        }
        .basket__gray {
            font-size: 12px;
        }
    }

</style>
