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
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import GetCode from '../views/GetCode.vue'
import SellerAdres from '../views/SellerAdres.vue'
import RatingCart from '../views/RatingCart.vue'
import Paid from '../views/Paid.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'Home', auth: false }
  },
  {
    path: '/add/:id',
    name: 'Add',
    component: Add,
    meta: { layout: 'Add', auth: false }
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
    meta: { layout: 'Basket', auth: false }
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
    meta: { layout: 'Delivery', auth: false }
  },
  {
    path: '/mnews',
    name: 'Mnews',
    component: Mnews,
    meta: { layout: 'Mnews', auth: false }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: { layout: 'News', auth: false }
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller,
    meta: { layout: 'Seller', auth: false }
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: Cabinet,
    // meta: { layout: 'Cabinet', auth: true }
  },
  {
    path: '/ratingcart',
    name: 'RatingCart',
    component: RatingCart,
  },
  {
    path: '/paid',
    name: 'Paid',
    component: Paid,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { layout: 'Contacts', auth: false }
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter,
    meta: { layout: 'Filter', auth: false }
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
    // meta: { layout: 'Info', auth: false }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    // meta: { layout: 'Message', auth: true }
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments,
    // meta: { layout: 'Payments', auth: true }
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions,
    // meta: { layout: 'Questions', auth: false }
  },
  {
    path: '/requisites',
    name: 'Requisites',
    component: Requisites,
    meta: { layout: 'Requisites', auth: false }
  },
  {
    path: '/deliverycart',
    name: 'DeliveryCart',
    component: DeliveryCart,
    meta: { layout: 'DeliveryCart', auth: false }
  },
  {
    path: '/returnproduct',
    name: 'ReturnProduct',
    component: ReturnProduct,
    meta: { layout: 'ReturnProduct', auth: false }
  },
  {
    path: '/selleradres',
    name: 'SellerAdres',
    component: SellerAdres
  },
  {
    path: '/selected',
    name: 'Selected',
    component: Selected,
    // meta: { layout: 'Selected', auth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/getcode',
    name: 'GetCode',
    component: GetCode,
    meta: { layout: 'GetCode', auth: false }
  },
]

const router = new VueRouter({
  mode: 'hash',
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
