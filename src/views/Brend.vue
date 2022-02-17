<template>
<div class="brend-list">
    <div class="brend__title">Бренды</div>
    <div class="brend-content">
        <div class="flex" v-for="(brend,i) in brends" :key="i" cla>
            <img :src="'https://novamarket.qwertyuz.ru/' + brend.photo" alt="">
        </div>
    </div>
</div>
</template>

<script>
import         VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Brend",
  components: { VueSlickCarousel },
  data(){
    return{
      settings:{
          "dots": true,
          "infinite": true,
          "initialSlide": 2,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "swipeToSlide": true
            },
            brends:[]
        }
    },
    methods:{
        async getBrends () {
            try {
                await axios
                    .get(this.$_http + 'api/category', {
                        params:{
                            type:'brand'
                        }
                    })
                    .then(response=>{
                        this.brends = response.data.data;
                    })
            }
            catch (e){
                this.errorNotify(e.response.data)
            }
        }
    },
    created() {
        this.getBrends()
    }
}
</script>

<style scoped>
.brend-list{
    margin-top: 50px;
    cursor: pointer;
}
.brend-content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.brend-content div:not(:first-child){
    margin-left: 30px;
}
.brend-content img{
    width: 100px;
    height: 100px;
}
.brend__title{
    margin-bottom: 20px;
    color: #023047;
    font-size: 42px;
}
</style>
