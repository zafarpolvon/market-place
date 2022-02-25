<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 pb-8">
        <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg get__code">
            <form action="">
                <div class="mt-4">
                    <div>
                        <label class="block font-size" for="email">Введите sms-код полученный через sms</label>
                        <input type="password" placeholder="Ваше код"
                            class="w-full px-4 py-2 mt-2 border rounded-md">
                    </div>
                    <span class="mt-2 time">-0.59</span>
                    <div class="flex mt-4">
                        <button class="text-gray w-full py-2">Переотправить</button>
                    </div>
                    <div class="flex items-baseline justify-between mt-2">
                        <button class="px-6 py-2 w-full mt-4 text-white reg">Регистрация</button>
                    </div>
                    <div class="flex mt-2">
                        <a to="" class="registered">Уже зарегистрирован?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    input:focus{
        border: 1.16px solid #0F3E44;
    }
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
.get__code{
    min-width: 380px;
    width: 380px;
}
.time{
    color: #131E3D;
    font-size: 14px;
}
.font-size{
    color: #A7A7A7;
    font-size: 14px;
}
.text-gray{
    border: 1px solid #999999;
    box-sizing: border-box;
    box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
    border-radius: 5.8px;
    color: #666;
    transition: 0.3s linear;
}
.text-gray:hover{
    box-shadow: unset;
}
.reg{
    background: #131E3D;
    border: 1px solid #B9D5FD;
    box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: 0.3s linear;
}
.reg:hover{
    background: #fff;
    border: 1px solid #08235C;
    color: #08235C;
    box-shadow: unset;
}
.registered{
    font-size: 14px;
    color: #EE4927;
    text-decoration: underline;
    cursor: pointer;
}
.registered:hover{
    text-decoration: none;
}

    @media (max-width: 400px){
        .get__code{
            min-width: 98%;
            width: 98%;
        }
    }

</style>
