import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Basket from '../views/Basket.vue'
import Delivery from '../views/Delivery.vue'
import Mnews from '../views/Mnews.vue'
import News from '../views/News.vue'
import Seller from '../views/Seller.vue'
import Contacts from '../views/Contacts.vue'
import Cabinet from '../views/Cabinet.vue'
import Filter from '../views/Filter.vue'
import Info from '../views/Info.vue'
import Message from '../views/Message.vue'
import Payments from '../views/Payments.vue'
import Questions from '../views/Questions.vue'
import Requisites from '../views/Requisites.vue'
import ReturnProduct from '../views/ReturnProduct.vue'
import DeliveryCart from '../views/DeliveryCart.vue'
import Selected from '../views/Selected.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add/:id',
    name: 'Add',
    component: Add
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/mnews',
    name: 'Mnews',
    component: Mnews
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: Cabinet
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/requisites',
    name: 'Requisites',
    component: Requisites
  },
  {
    path: '/deliverycart',
    name: 'DeliveryCart',
    component: DeliveryCart
  },
  {
    path: '/returnproduct',
    name: 'ReturnProduct',
    component: ReturnProduct
  },
  {
    path: '/selected',
    name: 'Selected',
    component: Selected
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'router-link-exact-active'
})

export default router
