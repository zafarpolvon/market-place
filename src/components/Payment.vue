<template>
    <div class="payment__item">
        <div class="payment__box">
            <h5>Способ оплаты</h5>
            <p>Для оформления  заказа , выбрат адрес доставки</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .payment__item {
        height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 30px 20px;
        margin-top: 2rem;
    }
    .payment__box h5 {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .payment__box p {
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        color: #898989;
        margin-top: 20px;
    }

    @media (max-width: 600px){
        .payment__item{
            height: auto;
        }
    }

    @media (max-width: 376px){
        .payment__box h5{
            font-size: 20px !important;
        }
    }

</style>
