<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg login__box">
            <form @submit.prevent="submitHandler">
                <div class="mt-4">
                    <div class="mt-4">
                        <label class="block">Номер</label>
                        <input v-model="phone" type="text" placeholder="Ваш номер"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none">
                    </div>
                    <div class="mt-4">
                        <label class="block">Пароль</label>
                        <input v-model="password" type="text" placeholder="Ваш пароль"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none">
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button type="submit" class="px-6 py-2 w-full mt-4 text-white">Авторизоваться</button>
                    </div>
                    <div class="flex justify-between mt-2">
                        <a to="" class="forget">Забыли пароль?</a>
                        <a to="" class="no-recording">Нет учетной записи?</a>
                    </div>
                    <div class="flex items-baseline justify-between">
                        <router-link to="/register" tag="button" class="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Регистрация</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    phone: '+998977584224',
    password: 'test123'
  }),
  methods: {
    async submitHandler () {
      const phone = this.phone
      const password = this.password
      await this.$store.dispatch('login', { phone, password })
      this.$router.push('/info')
      this.$router.go()
    }
  }
}
</script>
<style scoped>
button{
    background: #131E3D;
    border: 1px solid #B9D5FD;
    box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: 0.3s linear;
}
button:hover{
    background: #fff;
    border: 1px solid #08235C;
    color: #08235C;
    box-shadow: unset;
}
.login__box{
    min-width: 380px;
    width: 380px;
}
.forget{
    text-decoration: underline;
    color: #131E3D;
    font-size: 14px;
    cursor: pointer;
}
.forget:hover{
    text-decoration: none;
}
.no-recording{
    color: #000;
    font-size: 14px;
    cursor: pointer;
}

@media (max-width: 400px){
    .login__box{
        min-width: 98%;
        width: 98%;
    }
}

</style>
