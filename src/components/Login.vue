<template>
    <div class="login__box">
        <div class="login__title">
            <h4>Ваши данные</h4>
            <button>Войти</button>
        </div>
        <div class="message mt-4">
            <label for="input6">Получать буду не я</label>
            <input id="input6" type="checkbox" />
        </div>
        <div class="flex justify-between mt-4">
            <div class="login__item mr-2">
                <h5>Имя</h5>
                <input type="text" placeholder="Ваш имя">
            </div>
            <div class="login__item ml-2">
                <h5>Фамилия</h5>
                <input type="text" placeholder="Ваш фамилия">
            </div>
        </div>
        <div class="login__item mt-4">
            <h5>Контактный телефон</h5>
            <input type="text" placeholder="Телефон">
        </div>
        <div class="login__item mt-4">
            <h5>Электронная почта</h5>
            <input type="text" placeholder="Емаил">
        </div>
        <div class="login__agree mt-4">
            <input id="input5" type="checkbox" />
            <label for="input5">Получать эксклюзивные скидки вSMS‑рассылке от Wildberries</label>
        </div>
    </div>
</template>

<script>
export default {

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
    .login__title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .login__title h4 {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .login__title button {
        box-sizing: border-box;
        border-radius: 15px;
        font-weight: normal;
        font-size: 13px;
        line-height: 100%;
        background: #EE4927;
        color: #fff;
        padding: 8px 12px;
    }
    .login__title button:hover{
        background: #E14111;
        color: #FFF;
    }
    .message{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .message p{
        color: #666;
    }
    .message input{
        width: 22px;
        height: 22px;
    }
    .login__box {
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-top: 2rem;
        padding: 30px 20px;
    }
    .login__item input {
        background: #FFFFFF;
        border-radius: 4.9px;
        height: 40px;
        border: 2px solid #E0E0E0;
        width: 100%;
        padding: 0 10px;
    }
    .login__item input:focus {
        border: 2px solid #131E3D;
        outline: none !important;
    }
    .login__item h5 {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
    }
    .login__agree{
        display: flex;
        align-items: center;
    }
    .login__agree input{
        width: 22px;
        height: 22px;
        margin-right: 0.5rem;
    }
    .login__agree label {
        font-weight: normal;
        font-size: 13px;
        line-height: 24px;
        color: #898989;
    }

    @media (max-width: 600px){
        .login__title{
            align-items: center;
        }
        .message p{
            font-size: 14px;
        }
        .login__item input, label{
            font-size: 14px;
        }
        .login__title h4{
            font-size: 16px;
        }
    }

    @media (max-width: 376px){
        .login__box{
            padding: 20px 10px;
        }
    }

</style>
