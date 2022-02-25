<template>
    <div class="brands">
        <splide :options="options">
            <splide-slide>
                <img src="../../assets/image/nike_PNG12 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/zara-logo-1 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/nike_PNG12 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/zara-logo-1 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/nike_PNG12 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/zara-logo-1 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/nike_PNG12 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/zara-logo-1 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/nike_PNG12 1.png" alt="brand">
            </splide-slide>
            <splide-slide>
                <img src="../../assets/image/zara-logo-1 1.png" alt="brand">
            </splide-slide>
        </splide>
    </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'  
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  data: () => ({
    options: {
      rewind: true,
      width: '100%',
      gap: '1rem',
      perPage: 8,
      arrows: false,
      pagination : false,
      breakpoints : {
        '1300': {
            perPage: 6,
        },
        '900': {
            perPage: 4,
        },
        '600': {
            perPage: 3,
        
            }
        },
    }
  }),
  components: {
    Splide,
    SplideSlide
  }
}
</script>
<style scoped>
    .brands{
        display: flex;
        overflow: hidden;
        margin: 6rem 0;
    }
    .brands img{
        margin-right: 6rem;
        width: 95px;
    }
</style>
