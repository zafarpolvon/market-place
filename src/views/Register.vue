<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg">
            <div class="flex float-right">
                <a href=""><i class="fas fa-times"></i></a>
            </div>
            <form @submit.prevent="submitHandler">
                <div class="mt-4">
                    <div>
                        <label class="block" for="email">Имя</label>
                        <input v-model="name" type="text" placeholder="Ваше имя"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Номер</label>
                        <input v-model="phone" type="text" placeholder="Ваш номер"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Пароль</label>
                        <input v-model="password" type="text" placeholder="Ваш пароль"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
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
    name: '',
    phone: '',
    password: ''
  }),
  methods: {
    async submitHandler () {
      let form = new FormData()
        form.append('name', this.name)
        form.append('phone', this.phone)
        form.append('password', this.password)
        form.append('device_id', this.device_id)
      try {
          await axios
              .post(this.$_http + 'api/user/sign-up', form)
          .then(response =>{
              this.successNotify()
          })
        this.$router.push('/info')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
button{
    background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
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
    background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
    border-radius: 8px;
    padding: 5px 20px;
    cursor: pointer;
}
</style>
