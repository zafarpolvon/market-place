<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg register__box">
            <div class="flex float-right">
                <a href=""><i class="fas fa-times"></i></a>
            </div>
            <form @submit.prevent="submitHandler">
                <div class="mt-4">
                    <div>
                        <label class="block" for="email">Имя</label>
                        <input v-model="name" type="text" placeholder="Ваше имя"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none">
                    </div>
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
                        <button type="submit" class="px-6 py-2 w-full mt-4 text-white">Продолжить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data: () => ({
    name: 'Rasulbek',
    phone: '+998971234567',
    password: 'test123'
  }),
  methods: {
    async submitHandler () {
      const formData = {
        name: this.name,
        phone: this.phone,
        password: this.password,
        device_id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1 + '7'
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/info')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
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
    .register__box{
        min-width: 380px;
        width: 380px;
    }
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
.icons a{
    background: #131E3D;
    border-radius: 8px;
    padding: 5px 20px;
    cursor: pointer;
}

@media (max-width: 400px){
    .register__box{
        min-width: 98%;
        width: 98%;
    }
}

</style>
