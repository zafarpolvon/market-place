<template>
    <div class="container mx-auto">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img :src="cart.image" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="cart.images[0]" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="cart.images[1]" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="cart.images[2]" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="cart.images[3]" alt="">
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  props: ['cart'],
  data: () => ({
    images: [],
    swiperOptions: {
      pagination: {
        el: '.swiper-pagination'
      }
      // Some Swiper option/callback...
    }
  }),
  async mounted () {
    console.log(this.cart)
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>
<style scoped>
  .image__responsive {
    height: auto;
    object-fit: fill;
  }
  @media (min-width: 320px) and (max-width: 600px){
    .image__responsive {
      height: 300px !important;
      object-fit: fill;
    }
  }
</style>
