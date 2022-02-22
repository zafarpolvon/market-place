<template>
    <div class="total__box">
        <div class="flex justify-between mt-4">
            <h5 class="total__title">Итого</h5>
            <div >
                <h3 class="total__price">{{getKorzinaTotalAmount}}₽</h3>
            </div>
        </div>
        <div class="flex justify-between mt-4" v-for="item in korzinaTotal" :key="item.id">
            <h5 class="total__left">{{ item.product.name }} ({{ item.amount }})</h5>
            <p class="total__right">{{ (item.product.price * item.amount) }}₽</p>
        </div>
        <div class="flex justify-between mt-2">
            <div class="flex">
                <h5 class="total__left">Скидка при</h5>
                <img class="h-8 w-auto" src="../assets/image/image 292.png" alt="">
            </div>
            <p class="total__right">-500 ₽</p>
        </div>
        <div class="flex justify-between mt-2">
            <div class="flex">
                <h5 class="total__left">Скидка при</h5>
                <img class="h-8 w-auto" src="../assets/image/image 30.png" alt="">
            </div>
            <p class="total__right">-500 ₽</p>
        </div>
        <div class="flex mt-2">
            <h5 class="total__delivery">Доставка: </h5>
            <button class="total__pick">Выбрать адресс доставки</button>
        </div>
        <div class="my-5">
            <button class="total__button">Заказать</button>
        </div>
        <div class="total__agree">
            <h5>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: ['korzinaTotal'],
    computed:{
        getKorzinaTotalAmount(){
            let sum = 0;
            this.korzinaTotal.find(x=>{
                sum = sum + (x.product.price * x.amount)
            })
            return sum
        }
    }
}
</script>

<style scoped>
    .total__box {
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 20px;
    }
    .total__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .total__price {
        font-weight: bold;
        font-size: 40px;
        line-height: 100%;
        color: #0052FF;
    }
    .total__left {
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        color: #666666;
    }
    .total__delivery {
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        color: #023047;
    }
    .total__pick {
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        text-align: right;
        color: #0052FF;
        margin-left: 10px;
    }
    .total__button {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FCF6F6;
        width: 100%;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #384F81 -2.67%, #49679F 56.03%, #729EDB 99.79%);
        box-sizing: border-box;
        box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
        border-radius: 5.8px;
        padding: 10px 0;
    }
    .total__button:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #49679F -2.67%, #384F81 56.03%, #729EDB 99.79%);
    }
    .total__agree h5 {
        font-weight: normal;
        font-size: 13px;
        line-height: 100%;
        color: #898989;
    }

    @media (min-width: 600px) and (max-width: 769px){
        .total__box{
            width: 500px;
            margin: 0 auto;
        }
        .total__price {
            font-size: 28px;
        }
    }
    @media (min-width: 376px) and (max-width: 600px){
        .total__price {
            font-size: 28px;
        }
        .total__left {
            font-size: 14px;
            line-height: 31px;
            margin-right: 5px;
        }
    }

    @media (max-width: 376px){
        .total__box{
            padding: 20px 10px;
        }
        .total__price {
            font-size: 26px;
        }
        .total__left {
            font-size: 14px;
            line-height: 31px;
            margin-right: 5px;
        }
    }

</style>
