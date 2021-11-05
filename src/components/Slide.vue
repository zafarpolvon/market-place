<template>
    <div>
        <splide :options="options">
            <splide-slide>
                <img class="w-full" src="../assets/image/phones 1.png">
            </splide-slide>
            <splide-slide>
                <img class="w-full" src="../assets/image/phones 1.png">
            </splide-slide>
            <splide-slide>
                <img class="w-full" src="../assets/image/phones 1.png">
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
