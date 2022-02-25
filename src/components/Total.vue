<template>
    <div class="total__box">
        <div class="flex justify-between mt-4">
            <h5 class="total__title">Итого</h5>
            <h3 class="total__price">1890 ₽</h3>
        </div>
        <div class="flex justify-between mt-4">
            <h5 class="total__left">Товары (1)</h5>
            <p class="total__right">1890 ₽</p>
        </div>
        <div class="flex mt-2">
            <h5 class="total__delivery">Доставка: </h5>
            <button class="total__pick">Выбрать адресс доставки</button>
        </div>
        <div class="my-5">
            <button class="total__button">Заказать</button>
        </div>
        <div class="total__agree">
            <div class="basket__spec">
                <a href="#" @click="address()">Правил пользования торговой площадкой и правилами возврата</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    show () {
      this.$modal.show('Modal-Delivery')
    },
    address () {
      this.$modal.show('Modal-Address')
    }
  },
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
        color: #131E3D;
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
        color: #131E3D;
        margin-left: 10px;
    }
    .total__button {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FCF6F6;
        width: 100%;
        background: #131E3D;
        box-sizing: border-box;
        box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
        border-radius: 5.8px;
        padding: 10px 0;
    }
    .total__button:hover{
        background: #11113D;
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
            font-size: 18px;
        }
        .total__left {
            font-size: 14px;
            line-height: 31px;
            margin-right: 5px;
        }
        .total__title{
            font-size: 18px;
        }
        .total__delivery{
            font-size: 14px;
        }
        .total__button{
            font-size: 14px;
        }
    }

    @media (max-width: 376px){
        .total__box{
            padding: 20px 10px;
        }
        .total__price {
            font-size: 18px;
        }
        .total__left {
            font-size: 14px;
            line-height: 31px;
            margin-right: 5px;
        }
        .total__title{
            font-size: 18px;
        }
        .total__delivery{
            font-size: 14px;
        }
        .total__button{
            font-size: 14px;
        }
    }

</style>
