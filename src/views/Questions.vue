<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-12 pages">
            <router-link to="/" tag="a">Главная страница / </router-link>
            <a href="#"> FAQ</a>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="questions__title">Часто задаемевый вопросы</div>
            <div class="questions__box">
                <div class="box">
                    <div v-for="(item,index) in questions" :key="index">
                        <div class="questions__text">
                            <div class="text2" data-bs-toggle="collapse" :href="'#multiCollapseExample'  + `${index}`" role="button" aria-expanded="false" :aria-controls=" 'multiCollapseExample'  + `${index}`">
                                <i class="fa fa-play"></i>
                                <div v-html="item.question"></div>
                            </div>
                            <div class="text__box collapse multi-collapse" :id="'multiCollapseExample' + `${index}`">
                                <div  v-html="item.answer"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <form class="c__box" @submit.prevent="sendFeedback">
                    <div class="box__title">У вас есть вопросы</div>
                    <input type="text" placeholder="Ваше имя" v-model="name"/>
                    <input type="email" placeholder="Ваш  e-mail"  v-model="email" />
                    <textarea placeholder="Ваш отзыв" v-model="message"></textarea>
                    <button type="submit" @click="sendFeedback">Отправить вопрос</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'Home',
  data: () => ({
questions:[],
      name:'',
      email:'',
      message:''
  }),
  methods: {
      async getQuestions () {
          try {
              await axios
                  .get(this.$_http + 'api/question')
                  .then(response=>{
                      this.questions = response.data.data;
                  })
          }
          catch (e){
              this.errorNotify(e.response.data)
          }
      },
      async sendFeedback () {
          let form = new FormData();
          form.append('name', this.name)
          form.append('email', this.email)
          form.append('message', this.message)

          try {
              await axios
                  .post(this.$_http + 'api/feedback/send', form)
                  .then(response=>{
                      this.successNotify()
                      this.name = '';
                      this.email = '';
                      this.message = '';
                  })
          }
          catch (e){
              this.errorNotify(e.response.data.errors)
          }
      }
  },

    created(){
      this.getQuestions()
    },
    components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.questions__text.active .fa-play{
    transform: rotate(90deg);
}
    .pages a{
        color: #023047;
        text-decoration: none;
        cursor: pointer;
    }
    .pages a:hover{
        color: #023999;
    }
    .questions__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
        line-height: 1;
    }
    .questions__box{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .questions__box .box{
        width: 65%;
    }

    .questions__box .box .questions__text{
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        cursor: pointer;
        position: relative;
    }
    .questions__box .box .questions__text .text2{
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }
    .questions__box .box .questions__text .text2:hover{
        color: #023999;
    }
    .questions__box .box .questions__text .text2 i{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 1.5rem;
        color: #FFF;
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #384F81 -2.67%, #49679F 56.03%, #729EDB 99.79%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 0.5s linear;
    }
    .questions__box .box .questions__text .text2 p{
        font-weight: bold;
        font-size: 22px;
    }
    .questions__box .box .questions__text .text__box{
        background: #F1EFED;
        border-radius: 10px;
        margin-top: 1.5rem;
        width: 85%;
        /*max-height: 0;*/
        /*overflow: hidden;*/
        /*transition: max-height 1.4s ease !important;*/
    }
    .questions__box .box .questions__text .text__box div{
        color: #666666;
        margin-bottom: 1.5rem;
        font-size: 17px;
        padding: 15px;
    }
    .c__box{
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));
        background: rgba(0, 82, 255, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 450px;
        padding: 1rem 2rem;
        width: 30%;
        margin-left: 4rem;
    }
    .c__box .box__title{
        color: #023047;
        font-size: 26px;
        font-weight: bold;
    }
    .c__box input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    .c__box textarea{
        padding: 10px 10px 3rem 10px;
        outline: none;
        border-radius: 8px;
    }
    .c__box button{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        color: #FFF;
        padding: 15px 30px;
        margin: 0 auto;
    }
    .c__box button:hover{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #2267C7 86.59%, #377AF9 99.79%);
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px){
        .questions__box .box{
            width: auto;
        }
        .questions__box .c__box{
            margin-left: 0;
            padding: 1rem 1.2rem;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 7px 10px;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 40px;
            width: 40px;
            margin-right: 1rem;
            font-size: 20px;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 15px !important;
        }
    }

    @media only screen and (max-width: 769px){
        .questions__box{
            flex-wrap: wrap;
        }
        .questions__box .box{
            width: 100%;
            margin: auto;
        }
        .questions__box .c__box{
            width: 80%;
            margin: 2rem auto !important;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .questions__title{
            font-size: 32px;
            margin-bottom: 0;
        }
        .questions__box .c__box{
            margin-left: 0;
            padding: 1rem 1.2rem;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 7px 10px;
        }
        .questions__box .box .questions__text .text2 p{
            font-size: 16px !important;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 40px;
            width: 50px;
            margin-right: 0.5rem;
            font-size: 18px;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 15px !important;
        }
        .questions__box .box .questions__text .text__box{
            width: 100%;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 12px !important;
        }
    }

    @media only screen and (max-width: 376px) {
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .questions__title{
            font-size: 32px;
            margin-bottom: 0;
        }
        .questions__box .c__box{
            padding: 1rem 1.2rem;
            margin: 1rem auto;
            width: 100%;
            height: 420px;
        }
        .questions__box .c__box .box__title{
            font-size: 20px;
        }
        .c__box input{
            padding: 3px 10px;
            border-radius: 4px;
        }
        .questions__box .box .questions__text .text2 p{
            font-size: 14px !important;
        }
        .questions__box .box .questions__text p{
            font-size: 18px !important;
        }
        .questions__box .box .questions__text .text__box{
            width: 100%;
            padding: 1rem;
        }
        .questions__box .box .questions__text .text__box p{
            font-size: 12px !important;
        }
        .questions__box .box .questions__text .text2 i{
            height: 30px;
            width: 40px;
            margin-right: 0.5rem;
            font-size: 11px;
        }
        .c__box textarea{
            border-radius: 4px;
        }
        .c__box button{
            padding: 10px 30px;
        }
    }
</style>
