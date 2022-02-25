<template>
    <div class="back">
        <Navbar />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="payment__title">Мои платежи</div>
        </div>
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-12">
            <table style="width:100%">
                <tr>
                    <th>ID заказа</th>
                    <th>Дата платежа</th>
                    <th>Сумма заказа</th>
                    <th>Способ оплаты</th>
                    <th>Статус платежа</th>
                </tr>
                <Order v-for="order in orders" :key="order.id" :order="order" />
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'
import Order from '../components/Order.vue'
import LocationNavbar from '../components/layout/LocationNavbar.vue'

export default {
  name: 'Home',
  data: () => ({
    orders: [
      {
        id: 30,
        date: '23.09.21',
        price: '1000',
        info: 'Не исполнено'
      },
      {
        id: 45,
        date: '23.09.21',
        price: '1000',
        info: 'Не исполнено'
      },
      {
        id: 53,
        date: '23.09.21',
        price: '2000',
        info: 'Не исполнено'
      },
      {
        id: 65,
        date: '23.09.21',
        price: '3000',
        info: 'Исполнен'
      },
      {
        id: 67,
        date: '23.09.21',
        price: '2000',
        info: 'Не исполнено'
      },
      {
        id: 69,
        date: '23.09.21',
        price: '4000',
        info: 'Исполнен'
      },
      {
        id: 90,
        date: '23.09.21',
        price: '15000',
        info: 'Исполнен'
      }
    ]
  }),
  methods: {

  },
  components: {
    Navbar,
    SecondNavbar,
    Footer,
    Order,
    LocationNavbar
  }
}
</script>

<style scoped>
    .pages a{
        color: #023047;
        text-decoration: none;
    }
    .pages a:hover{
      color: #023999;
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
    .payment__title{
        font-size: 42px;
        color: #131E3D;
        margin-bottom: 2rem;
    }
    table{
        border-radius: 8px;
    }
    table tr th{
        background: rgba(238, 73, 39, 0.2);
        color: #131E3D;
        font-size: 20px;
        padding: 1.5rem 0;
        font-weight: 500;
    }
    table tr th:first-child{
        border-radius: 8px 0px 0px 0px;
    }
    table tr th:last-child{
        border-radius: 0px 8px 0px 0px;
    }

    @media (min-width: 415px) and (max-width: 600px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
      table tr th{
        font-size: 17px;
        line-height: 18px;
      }
      .payment__title{
        font-size: 22px;
      }
      input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media only screen and (max-width: 415px){
        .pages {
            padding: 20px 16px !important;
        }
        .pages a {
            font-size: 12px !important;
        }
        .payment__title{
            font-size: 22px;
            margin-bottom: 1rem;
        }
        table tr th{
          font-size: 10px;
          line-height: 16px;
          padding: 4px 0;
        }
        input[type=radio]{
            width: 14px;
            height: 14px;
        }
        input[type=radio]:before {
            width: 14px;
            height: 14px;
        }
        input[type=radio]:checked:after {
            width: 8px;
            height: 8px;
        }
    }

    @media (max-width: 300px){
      table tr th{
        font-size: 12px;
        padding: 0.8rem 0;
      }
    }
</style>
