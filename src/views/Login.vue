<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg">
            <form @submit.prevent="submitHandler">
                <div class="mt-4">
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
                        <button type="submit" class="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Авторизоваться</button>
                    </div>
                    <div class="flex justify-between mt-2">
                        <a to="" class="forget" @click="forgotPassword">Забыли пароль?</a>
                        <a to="" class="no-recording">Нет учетной записи?</a>
                    </div>
                    <div class="flex items-baseline justify-between">
                        <router-link to="/register" tag="button" class="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Регистрация</router-link>
                    </div>
                </div>
            </form>
            <modal class="modal__card" :height="'auto'" :adaptive="true" name="Modal-Card">
                <div class="debit__modal">
                    <div class="mt-4 p-3">
                        <label class="block">Номер</label>
                        <input v-model="forgotPasswordPhone" type="text" placeholder="Ваш номер"
                               class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                @keyup.enter="forgotPasswords"
                        >
                    </div>
                    <div class=" p-3" v-if="ifCode">
                        <label class="block">код</label>
                        <input v-model="code" type="text" placeholder="код"
                               class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" disabled>
                    </div>
                    <div class=" p-3" v-if="ifNewPassword">
                        <label class="block">Новый пароль</label>
                        <input v-model="newPassword" type="text" placeholder="Новый пароль"
                               class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" disabled>
                    </div>
                    <div class="flex items-baseline justify-between mb-3 p-3" v-if="!ifCode">
                        <button type="submit" class="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" @click="forgotPasswords"> Продолжить </button>
                    </div>

                    <div class="flex items-baseline justify-between mb-3 p-3" v-else>
                        <button type="submit" class="px-6 py-2 w-full mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" @click="newPasswords"> Подтвердить </button>
                    </div>
                </div>
            </modal>
        </div>
    </div>
</template>
<script>
import TokenService from '../services/TokenService'
export default {
  name: 'Login',
  data: () => ({
      users:[],
    phone: '',
    password: '',
      device_id: '123123',
      forgotPasswordPhone:'',
      ifCode:false,
      code:'',
      ifNewPassword:false,
      newPassword:''
  }),
  methods: {
      forgotPassword(){
          this.$modal.show('Modal-Card')
          this.forgotPasswordPhone=''
              this.ifCode=false
              this.code=''
              this.ifNewPassword=false
              this.newPassword =''
      },
    async submitHandler () {
        let form = new FormData()
        form.append('phone', this.phone)
        form.append('password', this.password)
        form.append('device_id', this.device_id)

        try {
           await axios
            .post(this.$_http + 'api/user/sign-in', form)
            .then(async response => {
                if (response) {
                    TokenService.setToken(response.data.token)
                    localStorage.setItem('name', response.data.name)
                    await this.$router.push('/')
                }
            })
      } catch (e) {
            this.errorNotify(e.response.data.errors.password[0])
      }
    },
      async forgotPasswords(){
          let form = new FormData()
          form.append('phone', this.forgotPasswordPhone)

          try {
              await axios
                  .post(this.$_http + 'api/user/recover-password', form)
                  .then(async response => {
                      if (response) {
                          this.ifCode = true;
                          this.code = response.data.data.code
                          this.successNotify('код отправлен!!!')
                      }
                  })
          } catch (e) {
              this.errorNotify(e.response.data.errors.phone)
          }
      },
      async newPasswords(){
          let form = new FormData()
          form.append('phone', this.forgotPasswordPhone)
          form.append('code', this.code)

          try {
              await axios
                  .post(this.$_http + 'api/user/accept-recover-code',form)
                  .then(response => {
                          this.newPassword = response.data.data.password
                      this.ifNewPassword = true
                      this.successNotify('пароль изменен!!!')
                  })
          } catch (e) {
              // this.errorNotify(e.response.data.errors.phone)
              console.log(e.response)
          }
      }

  },

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
.forget{
    text-decoration: underline;
    color: #0052FF;
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
</style>
