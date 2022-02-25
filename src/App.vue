<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    user: {}
  }),
  async mounted () {
    this.user = await this.$store.dispatch('getUser')
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  }
}
</script>
<style>
@font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: local('Montserrat'), url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
    }
    #app {
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
    }
    body::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    body::-webkit-scrollbar{
        width: 10px;
        background-color: #F5F5F5;
    }
    body::-webkit-scrollbar-thumb{
        background: #131E3D !important;
        border-radius: 30px !important;
    }
    #app {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
    }
    .add-product .container:first-child{
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }
    .add-product .container span{
        margin-right: 0px;
        font-size: 15px;
    }
    .add-product .container:nth-child(2) h1{
        font-size: 40px;
        color: #023047;
    }
    .add-product .product-action{
        display: flex;
    }
    .add-product .product-action .stars{
        margin-right: 15px;
        display: flex;
    }
    .add-product .product-action .stars img{
        margin-right: 5px;
    }
    .add-product .product-action .comment span{
        margin-right: 3px;
        color: #666666;
    }
    .add-product .product-action .comment{
        color: #666666;
    }
    .add-product .product-list{
        display: flex;
        padding: 1rem 0 2rem 0;
        width: 100%;
    }
    .add-product .product-list .product__img{
        display: flex;
    }
    .add-product .product-list .product__img .images{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 460px;
        margin-right: 15px;
    }
    .add-product .product__information{
        width: 48%;
    }
    .add-product .product__information .product__about{
        display: flex;
        justify-content: space-between;
    }
    .add-product .product__information .product__about .product__price{
        color: #0052FF;
        font-size: 32px;
        font-weight: 700;
        display: flex;
    }
    .add-product .product__information .product__about .product__price span{
        text-decoration: line-through;
        color: #444444;
        margin-left: 10px;
        padding-top: 12px;
    }
    .add-product .product__information .product__about .product__order{
        display: flex;
        align-items: center;
    }
    .add-product .product__information .product__about .product__order span{
        align-self: center;
    }
    .add-product .product__information .product__about .product__order .product__increment{
        background: #EDE9E9;
        color: #000;
        cursor: pointer;
        font-size: 24px;
        padding: 0 10px;
        border-radius: 5px 0px 0px 5px;
    }
    .add-product .product__information .product__about .product__order input{
        width: 70px;
        padding: 5px 10px;
        outline: none;
        border: 1px solid #C4C4C4;
    }
    .add-product .product__information .product__about .product__order .product__decrement{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        color: #FFF;
        cursor: pointer;
        font-size: 24px;
        padding: 0 10px;
        border-radius: 0 5px 5px 0;
    }
    .add-product .product__information .color__title{
        font-size: 22px;
        color: #023047;
        margin: 1rem 0 0.5rem 0;
    }
    .add-product .product__information .color__boxes{
        display: flex;
    }
    .add-product .product__information .color__boxes img{
        border-radius: 5px;
    }
    .add-product .product__information .color__boxes .color__box{
        height: 69px;
        width: 76px;
        border-radius: 5px;
        margin-right: 15px;
        background: #C4C4C4;
    }
    .add-product .product__information .product__size-title{
        font-size: 22px;
        color: #023047;
        margin: 1rem 0 0.5rem 0;
    }
    .add-product .product__information .product__size{
        margin: 1rem 0 1.5rem 0;
    }
    .add-product .product__information .product__size span{
        border: 1px solid #898989;
        color: #898989;
        font-size: 16px;
        border-radius: 5px;
        margin-right: 15px;
        padding: 10px;
    }
    .add-product .product__information .payment{
        display: flex;
        align-items: center;
        font-size: 15px;
    }
    .add-product .product__information .payment img{
        margin-left: 10px;
    }
    .add-product .product__information .delivery{
        font-size: 15px;
        margin: 3px 0;
    }
    .add-product .product__information .sales span{
        color: #898989;
        font-size: 15px;
        margin: 3px 0;
    }
    .add-product .product__information .warehouse{
        font-size: 15px;
        margin: 3px 0;
    }
    .add-product .product__information .brend{
        margin: 1rem 0;
    }
    .add-product .product__information .product__buttons{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .add-product .product__information .product__buttons #korzina__button{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: #FFF;
        padding: 5px 15px;
    }
    .add-product .product__information .product__buttons #sale{
        border-radius: 5px;
        color: #FFF;
        padding: 5px 15px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);
    }
    .add-product .product__information .product__buttons div i{
        margin-left: 2.5rem;
        cursor: pointer;
        color: #FF1B1B;
    }
    .add-product .recommended{
        padding: 3rem 0 0 0;
        display: flex;
    }
    .add-product .recommended .r__box{
        width: 70%;
    }
    .add-product .recommended .r__box .box__title{
        font-size: 42px;
        color: ддд жжзщдщшл#023047;
        margin-bottom: 0.8rem;
    }
    .add-product .recommended .r__box span{
        color: #666666;
    }
    .add-product .recommended .r__box p{
        color: #666666;
    }
    .add-product .recommended .r__box .r__type{
        margin: 1.5rem 0 0.1rem 0;
    }
    .add-product .recommended .r__box .r__landing{
        margin-bottom: 1rem;
    }
    .add-product .recommended .r__box:nth-child(2){
        padding-left: 15px;
        width: 48%;
    }
    .add-product .recommended .r__box:nth-child(2) .products{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .add-product .recommended .r__box:nth-child(2) .products .cart__box.shadow-xl{
        margin-right: 15px;
        width: 47%;
    }
    .add-product .advertising__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .advertising{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }
    .advertising .cart__box.shadow-xl{
        margin-right: 15px;
        width: 18.5%;
        margin-bottom: 15px;
    }
    .advertising__button{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .advertising__button .show__button{
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        color: #FFF;
        padding: 8px 30px;
    }
    .container.px-4 xl:px-12 md:px-12.c-products{
        padding-top: 4rem !important;
        padding-bottom: 2.5rem;
    }
    .recently-products .recently__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .recently-products .products{
        display: flex;
        flex-wrap: wrap;
    }
    .recently-products .products .cart__box.shadow-xl{
        width: 18.5%;
        margin-right: 15px;
    }
    .question__title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 1.5rem;
    }
    .q__comments{
        width: 90%;
        display: flex;
    }
    .q__comments span:first-child{
        border-bottom: 2px solid #C211A7;
    }
    .q__comments span{
        margin-right: 3rem !important;
        color: #898989;
        cursor: pointer;
    }
    .q__comments p{
        margin-left: auto;
        border-bottom: 1px solid #898989;
        color: #898989;
    }
    .question{
        display: flex;
        justify-content: space-between;
    }
    .question .q__box:nth-child(2){
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 2rem 0;
    }
    .question .q__box:first-child{
        background: rgba(217, 217, 217, 0.2);
        border-radius: 8px;
        padding: 2rem 1.5rem;
        margin: 2rem 0;
        display: flex;
        width: 45%;
    }
    .question .q__box .comment{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
    }
    .question .q__box .comment p{
        color: #898989;
    }
    .question .q__box .place{
        width: 70%;
    }
    .question .q__box .comment .order{
        font-size: 56px;
        color: #000;
    }
    .question .q__box .comment .stars{
        display: flex;
    }
    .question .q__box .comment .stars img{
        margin-right: 5px;
    }
    .question .q__box .place{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .question .q__box .place .lines{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .question .q__box .place .lines .number{
        color: 898989;
    }
    .question .q__box .place .lines .line{
        background: #898989;
        height: 2px;
        border-radius: 3px;
        width: 75%;
    }
    .question .q__box .place .lines .percent{
        color: #898989;
    }
    .question .q__box .box{
        height: 130px;
        width: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: #0052FF;
        border-radius: 16px;
        box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
        color: #FFF;
    }
    .question .q__box .box p{
        font-size: 12px;
    }
    .p-customer span{
        color: #898989 !important;
    }
    .p-customer span:nth-child(2) i{
        color: #C211A7;
    }
    .customer{
        display: flex;
    }
    .customer .c__box:first-child{
        width: 62%;
    }
    .customer .c__box:first-child .c__box-title{
        font-size: 24px;
    }
    .customer .c__box:first-child .c__box-title span{
        color: #005964 !important;
        font-size: 24px;
    }
    .customer .user__comment{
        margin-top: 1rem;
    }
    .customer .user__comment .user{
        display: flex;
    }
    .customer .user__comment .user .user__name{
        font-size: 18px;
    }
    .customer .user__comment .user .stars{
        display: flex;
        margin-left: 5rem;
    }
    .customer .user__comment .user .stars img{
        margin-right: 5px;
    }
    .customer .user__comment p{
        color: #666666 !important;
        font-size: 15px;
        margin: 0.5rem 0 1rem 0;
    }
</style>
