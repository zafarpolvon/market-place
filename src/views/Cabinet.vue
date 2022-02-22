<template>

    <div class="back">
        <Navbar />
        <second-navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 mb-12">
            <div class="user__cabinet">
                <div class="user_cabinet__edit-icon" >
                    <img src="../assets/image/Vector (19).png" alt="not found" @click="edit">
                </div>
                <div class="user">
                    <div class="user__img">
                        <img :src="getUser.photo" alt="not found">
                        <div class="mt-2">
                            <span v-if="getUser.photo" class="photo__remove">-rasm uchirish</span>
                            <span v-else class="photo__save">+rasm yuklash</span>
                        </div>
                    </div>
                    <div class="user__name">{{ getUser.name || 'Не указано'}}</div>



                                    </div>
                <div class="info__box">
                    <div class="info__user">
                    <div class="title">Э-маил</div>
                    <div class="change">
                        <p> {{ getUser.email || 'Не указано'}}</p>

                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Телефон</div>
                    <div class="change">
                        <p>{{ getUser.phone }}</p>

                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Дата рождения</div>
                    <div class="change">
                        <p>{{ 'Не указано' }}</p>

                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Пол</div>
                    <div class="change inputs">
                        <input type="radio" name="name" id="genderMan" value="1" v-model="getUser.gender" :disabled="inputGender"/>
                        <label for="genderMan" class="mr-2">Муж.</label>
                        <input type="radio" name="name" id="genderWomen" value="2" v-model="getUser.gender" :disabled="inputGender"/>
                        <label for="genderWomen">Жен.</label>

                    </div>
                </div>
                </div>
            </div>
            <div class="user__boxes2">
                <div class="box">
                    <div class="title">Банковские карты</div>
                    <div class="add__cart">
                        <i class="fa fa-plus"></i>
                        <p>Добавить карту</p>
                    </div>
                </div>
                <div class="box">
                    <div class="title">Адреса клиента</div>
                    <div class="gps__text">
                        <img src="../assets/image/Vector (15).png" alt="not found">
                        Москва
                    </div>
                </div>
                <div class="box">
                    <div class="title">Удаление личново кабинета</div>
                    <p>Как только Ваш личный кабинет будет удален</p>
                    <a href="#">Удаление личново кабинета</a>
                </div>
                <div class="box">
                    <div class="title">Восстановления пароля</div>
                    <a href="#">Данные для восстановления пароля и sms</a>
                </div>
            </div>
        </div>
        <div class="debit__box">
            <modal class="modal__card" :height="'auto'" :adaptive="true" name="Modal-Cabinet">
                <div class="debit__modal">
                    <div class="modal__header">
                        <div class="header__title">
                            <h4>izminet</h4>
                        </div>
                        <div class="header__close">
                            <button @click="hide()"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div class="modal-content">
                        <form>
                            <div class="form-item">
                                <label>Name</label>
                                <input type="text" class="text" v-model="getUser.name">
                            </div>
                            <div class="form-item">
                                <label>Э-маил
                                </label>
                                <input type="text" class="text" v-model="getUser.email">
                            </div>
                            <div class="form-item">
                                <label>Телефон</label>
                                <input type="text" class="text" v-model="getUser.phone">
                            </div>
                            <div class="form-item">
                                <label>Дата рождения
                                </label>
                                <input type="text" class="text" v-model="getUser.birthday">
                            </div>
                            <div class="form-item">
                                <label>Пол
                                </label>
                                <div class="poll__container">
                                    <input type="radio" name="poll" v-model="getUser.gender" value="1">
                                    <label class="mr-2">Муж</label>
                                    <input type="radio" name="poll" v-model="getUser.gender" value="2">
                                    <label>Жен</label>
                                </div>
                            </div>
                            <div class="modal__footer">
                                <button  type="button" class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="hide">Отмена</button>
                                <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Сохранить</button>
                            </div>
                        </form>

                    </div>
                </div>
            </modal>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'

export default {
  name: 'Home',
  data: () => ({
    inputName: false,
    inputEmail: false,
    inputPhone: false,
      inputBirth:false,
      inputGender:true,
      // form:{
      //   name:'',
      //     email:'',
      //     phone:'',
      //     dateBirth:'',
      //     pol:'',
      //     address:'',
      //     password:''
      // }
      form:null
  }),
  methods: {
    showInfoName () {
      this.inputName = true
    },
      edit(){
          this.$modal.show('Modal-Cabinet')

      },
      showInfoPhone () {
      this.inputPhone = true
    },
    showInfoEmail () {
      this.inputEmail = true
    },
      showInfoBirth(){
        this.inputBirth = true
      },
      showInfoGender(){
        this.inputGender = false
      },
      hide () {
          this.$modal.hide('Modal-Cabinet')
      },
      async saveUserProfile(){
          let form = new FormData();
          form.append('phone', this.getUser.phone)
          form.append('name', this.getUser.name)
          form.append('email', this.getUser.email)
          form.append('password', this.getUser.password)
          form.append('gender', this.getUser.gender)
          form.append('birthday', this.getUser.birthday)
          form.append('photo', this.getUser.photo)
          try {


              await axios
                  .post(this.$_http + 'api/user/update', form,{
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`

                      }
                  })
                  .then(async response => {
                      if (response) {
                            await this.getUser()
                          this.successNotify()
                      }
                  })
          } catch (e) {
              this.errorNotify(e.response.data.name)
          }
      }

  },
  computed: {
    getUser () {
      return this.$store.getters.LOADUSER.data
    }
  },
  components: {
    Navbar,
    Footer,
    SecondNavbar,
  }
}
</script>

<style scoped>
.photo__save,
.photo__remove{
    font-size: 12px;
    white-space: nowrap;
    cursor:pointer;
}
.photo__save{
    color: green;
}
.photo__remove{
    color: red;
}
.debit__box {
    width: 50%;
}
.modal__card {
    width: 80%;
}
.header__close button {
    font-size: 20px;
}
.modal__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header__title h4 {
    font-size: 20px;
    color: #0a0a0a;
    text-align: center;
    font-weight: 500;
}
.header__title {
    align-content: center;
    align-items: center;
    text-align: center;
}
.debit__modal {
    padding: 20px 20px;
}
.form-item{
    display: flex;
    flex-direction: column;

}
.form-item input.text{
    width: 100%;
    height: 40px;
    border: 1px solid rgba(59, 130, 246, 0.5);
    border-radius: 10px;
    outline: none;
    padding: 0 20px;
}
form{
    padding: 20px;
}
.poll__container{
    display: flex;
    align-items: center;
}
.poll__container label{
    font-weight: 400;
    font-size: 14px;

}
.modal__footer{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.modal__footer button{
    outline: none;
}

@media (min-width: 320px) and (max-width: 600px) {
    .header__title h4 {
        font-size: 18px;
    }
}
.user_cabinet__edit-icon{
    width: 100%;
   display: flex;
    justify-content: flex-end;
    cursor: pointer;
}
.input__name{
    width: 200px;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #1C55C0;
    border-radius: 10px;

}
    .user__cabinet{
        width: 100%;
        height: 260px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .user{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        justify-content: space-around;
    }
    .user__cabinet .user .user__img img{
        width: 100%;
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
    }
    .user__cabinet .user .user__img{
        display: flex;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        width: 100px;
        margin-right: 1rem;
    }
    .user__cabinet .user .user__img i{
        position: absolute;
        color: #FFF;
        font-size: 24px;
        cursor: pointer;
    }
    .user__cabinet .user .user__name{
        font-size: 23px;
        color: #023047;
        font-weight: bold;
        margin-right: 1rem;
        line-height: 22px;
    }
    .user__cabinet .user img:last-child{
        cursor: pointer;
    }
    .user__cabinet .info__box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 3rem;
    }
    .user__cabinet .info__user{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .info__user .title{
        color: #898989 !important;
        font-size: 19px;
        padding-bottom: 0.5rem;
    }
    .user__cabinet .info__user .change{
        display: flex;
    }
    .user__cabinet .info__user .change.inputs{
        display: flex;
        align-items: center;
    }
    .user__cabinet .info__user .change.inputs span{
        margin: 0 10px 0 5px;
    }
    .user__cabinet .info__user .change p{
        color: #2C2C2C;
    }
    .user__cabinet .info__user .change img{
        margin-left: 5px;
        cursor: pointer;
        height: 18px;
    }
    .user__boxes2{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 5rem;
    }
    .user__boxes2 .box{
        width: 48%;
        padding: 2.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-top: 2.5rem;
    }
    .user__boxes2 .box:first-child{
        cursor: pointer;
    }
    .user__boxes2 .box .title{
        font-size: 24px;
        font-weight: bold;
        color: #023047;
        margin-bottom: 1rem;
    }
    .user__boxes2 .box .add__cart{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        border: 2px solid #0052FF;
        width: 260px;
        height: 130px;
        transition: 0.3s linear;
    }
    .user__boxes2 .box .add__cart:hover{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .user__boxes2 .box .add__cart i{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #0052FF;
        color: #0052FF;
        font-size: 22px;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }

    .user__boxes2 .box .add__cart p{
        color: #0052FF;
    }
    .user__boxes2 .box:nth-child(2) .gps__text{
        display: flex;
        color: #898989;
    }
    .user__boxes2 .box:nth-child(2) .gps__text img{
        margin-right: 10px;
        object-fit: contain;
    }
    .user__boxes2 .box:nth-child(3) p{
        color: #898989;
        margin-bottom: 1.5rem;
    }
    .user__boxes2 .box:nth-child(3) a, .user__boxes2 .box:nth-child(4) a{
        color: #0052FF;
        font-weight: bold;
    }
    .user__boxes2 .box:nth-child(3) a:hover, .user__boxes2 .box:nth-child(4) a:hover{
        text-decoration: underline;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .user__cabinet{
            padding: 1.5rem;
        }
        .user__boxes2 .box{
            padding: 1.5rem;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .user__cabinet{
            padding: 1.5rem;
            height: auto;
        }
        .user__boxes2 .box{
            padding: 1.5rem;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .info__user{
            width: 48%;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs span{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 190px;
            height: 100px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 20px;
            line-height: 24px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
        .user__cabinet .info__user:first-child, .user__cabinet .info__user:nth-child(3){
            width: 60%;
        }
        .user__cabinet .info__user:nth-child(2){
            width: 40%;
        }
        .user__cabinet .info__user:last-child{
            width: 40%;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .user__cabinet{
            padding: 1.5rem;
            height: auto;
        }
        .user__boxes2 .box{
            padding: 1rem;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .user{
            flex-wrap: wrap;
            justify-content: center;
        }
        .user__cabinet .user .user__img i{
            font-size: 30px;
        }
        .user__cabinet .info__user{
            width: 100%;
            margin: 5px 0;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs span{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 100%;
            height: 90px;
        }
        .user__boxes2 .box .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 14px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 20px;
            line-height: 24px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
        .user__cabinet .user .user__img{
            width: 150px !important;
            margin-bottom: 1rem;
        }
        .user__boxes2 .box .title{
            font-size: 16px;
            line-height: 18px;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(3) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(4) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 14px;
            line-height: 16px;
        }
    }

    @media (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .user__cabinet{
            padding: 1rem;
            height: auto;
        }
        .user__boxes2 .box{
            padding: 1rem;
            width: 100%;
            min-height: 100px;
        }
        .user__cabinet .info__box{
            padding-right: 0;
            flex-wrap: wrap;
        }
        .user__cabinet .user{
            flex-wrap: wrap;
            justify-content: center;
        }
        .user__cabinet .user .user__img i{
            font-size: 24px;
        }
        .user__cabinet .info__user{
            width: 100%;
            margin: 5px 0;
        }
        .user__cabinet .info__user .title{
            padding-bottom: 0;
            font-size: 16px;
        }
        .user__cabinet .info__user .change p{
            font-size: 14px;
            word-break: break-all;
        }
        .user__cabinet .info__user .change img{
            margin-left: 10px;
            height: 16px;
        }
        .user__cabinet .info__user .change.inputs span{
            font-size: 14px;
        }
        .user__boxes2 .box .add__cart{
            width: 60%;
            height: 90px;
        }
        .user__boxes2 .box .add__cart i{
            font-size: 16px;
            height: 35px;
            width: 35px;
            margin-bottom: 5px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 14px;
        }
        .user__boxes2 .box .title{
            margin-bottom: 0.4rem;
            font-size: 14px;
            line-height: 18px;
        }
        .user__boxes2 .box:nth-child(3) p{
            margin-bottom: 0.4rem;
        }
        .user__cabinet .user .user__img{
            width: 130px !important;
            margin-bottom: 1rem;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(3) span{
            font-size: 14px;
            line-height: 16px !important;
        }
        .user__boxes2 .box:nth-child(4) span{
            font-size: 14px;
            line-height: 16px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 14px;
            line-height: 16px;
        }
        .user__cabinet .user img:last-child{
            display: none;
        }
        .user__cabinet .user .user__name{
            margin-right: 0;
            text-align: center;
            font-size: 20px;
        }
    }

    @media (max-width: 300px){
        .user__boxes2 .box .add__cart i{
            font-size: 14px;
            height: 30px;
            width: 30px;
        }
        .user__boxes2 .box .add__cart p{
            font-size: 12px;
        }
        .user__boxes2 .box:nth-child(2) .gps__text{
            font-size: 12px;
        }
        .user__boxes2 .box:nth-child(3) p{
            font-size: 12px;
        }
    }

</style>
