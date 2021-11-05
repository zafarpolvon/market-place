<template>
    <div class="login__box">
        <div class="login__title">
            <h4>Ваши данные</h4>
            <button>Войти</button>
        </div>
        <div class="flex justify-between mt-4">
            <div class="login__item mr-2">
                <h5>Имя</h5>
                <input type="text">
            </div>
            <div class="login__item ml-2">
                <h5>Фамилия</h5>
                <input type="text">
            </div>
        </div>
        <div class="login__item mt-4">
            <h5>Контактный телефон</h5>
            <input type="text">
        </div>
        <div class="login__item mt-4">
            <h5>Электронная почта</h5>
            <input type="text">
        </div>
        <div class="login__agree mt-4">
            <p>Получать эксклюзивные скидки вSMS‑рассылке от Wildberries</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
        border: 1px solid #5E8CE2;
        box-sizing: border-box;
        border-radius: 15px;
        font-weight: normal;
        font-size: 13px;
        line-height: 100%;
        color: #0052FF;
        padding: 8px 12px;
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
        border: 1.5px solid #5E8CE2;
        width: 100%;
        padding: 0 10px;
    }
    .login__item input:focus {
        border: 1.5px solid #456fbe;
        outline: none !important;
    }
    .login__item h5 {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
    }
    .login__agree p {
        font-weight: normal;
        font-size: 13px;
        line-height: 24px;
        color: #898989;
    }
</style>
