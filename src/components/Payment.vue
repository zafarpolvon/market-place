<template>
    <div class="payment__item">
        <div class="payment__box">
            <h5>Способ оплаты</h5>
            <p>Для оформления  заказа , выбрат адрес доставки</p>
            <div class="inputs">
                <div>
                    <input class="mr-2" type="radio" name="payments" />
                    <span>Онлайн</span>
                </div>
                <div>
                    <input class="mr-2" type="radio" name="payments" />
                    <span>Наличными </span>
                </div>
                <div>
                    <input class="mr-2" type="radio" name="payments" />
                    <span>Картой при получении</span>
                </div>
                <div>
                    <input class="mr-2" type="radio" name="payments" />
                    <span>По договору</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainMenu from '../components/layout/MainMenu.vue'

export default {
    components: {
        MainMenu
    }
}
</script>

<style scoped>
    input[type=radio]:before {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid gray;
        background: #fff;
        content: "";
    }
    input[type=radio]:checked:before{
        border: 1px solid #EE4927;
    }
    input[type=radio]:checked:after {
        position: relative;
        top: -2px;
        left: 4px;
        display: inline-block;
        visibility: visible;
        border-radius: 6px;
        width: 12px;
        height: 12px;
        background: #EE4927;
        content: "";
    }
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
    .inputs{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .inputs div{
        display: flex;
        align-items: center;
        margin: 1.5rem 2rem 1.5rem 0;
    }
    .inputs input{
        width: 18px;
        height: 18px;
    }
    .inputs span{
        font-size: 16px;
    }

    @media (max-width: 600px){
        .payment__item{
            height: auto;
        }
        .inputs div{
            margin: 1rem 1rem 0 0;
        }
    }

    @media (max-width: 376px){
        .payment__box h5{
            font-size: 20px !important;
        }
    }

</style>
