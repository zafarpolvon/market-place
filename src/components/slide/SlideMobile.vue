<template>
    <div class="container mx-auto">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-show="cart.photo">
          <img :src="cart.photo" alt="">
        </swiper-slide>
        <swiper-slide v-for="cart in cart.gallery" :key="cart.id">
          <img :src="cart" alt="">
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  props: ['cart'],
  data: () => ({
    images: [],
    swiperOption: {
      loop: true
    }
  }),
  async mounted () {
    // console.log('Current Swiper instance object', this.swiper)
  },
  computed: {
  },
  components: {
    Swiper,
    SwiperSlide
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
