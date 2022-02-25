<template>
    <div>
        <splide :options="options">
            <splide-slide>
                <img class="w-full image__responsive" src="../../assets/image/orig.jpg">
            </splide-slide>
            <splide-slide>
                <img class="w-full image__responsive" src="../../assets/image/orig.jpg">
            </splide-slide>
            <splide-slide>
                <img class="w-full image__responsive" src="../../assets/image/orig.jpg">
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
      gap: '1rem'
    }
  }),
  components: {
    Splide,
    SplideSlide
  }
}
</script>
<style scoped>
  .image__responsive {
    height: auto;
    object-fit: cover;
  }
  @media (min-width: 320px) and (max-width: 600px){
    .image__responsive {
      height: 280px !important;
      object-fit: cover;
    }
  }
</style>
