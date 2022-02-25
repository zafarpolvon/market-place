<template>
    <div class="container mx-auto mt-16 px-4 xl:px-12 md:px-12">
        <div class="brand__name">
            <h2>Ваши магазины</h2>
        </div>
        <div class="grid grid-cols-9 gap-4">
            <div class="col-span-3">
                <div class="brand__box">
                    <a href="#" class="brand__logo">
                        <img src="../assets/image/radius.png" alt="">
                    </a>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <a href="#" class="brand__one">
                            <img src="../assets/image/bfarsace_201106_4269_012 1.png" alt="">
                        </a>
                        <div href="#" class="flex flex-col justify-between brand__second">
                            <a href="#"><img src="../assets/image/gh-best-tv-brands-1587581394 1.png" alt="img"></a>
                            <a href="#"><img src="../assets/image/lg-lfcs25426d-refrigerator-product-photos-7 1.png" alt="img"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="brand__box">
                    <a href="#" class="brand__logo">
                        <img src="../assets/image/texnomart.png" alt="">
                    </a>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <a href="#" class="brand__one">
                            <img src="../assets/image/washer1 1.png" alt="">
                        </a>
                        <div href="#" class="flex flex-col justify-between brand__second">
                            <a href="#"><img src="../assets/image/microwave-wattage-what-to-look-for-before-buying-1554472332 1.png" alt="img"></a>
                            <a href="#"><img src="../assets/image/GdcaWSadcCWbt3am8Typ3E 1.png" alt="img"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="brand__box">
                    <a href="#" class="brand__logo">
                        <img src="../assets/image/clozzone.png" alt="">
                    </a>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <a href="#" class="brand__one">
                            <img src="../assets/image/11092_1592550220_0535 1.png" alt="">
                        </a>
                        <div class="flex flex-col justify-between brand__second">
                            <a href="#"><img src="../assets/image/Rectangle 649.png" alt="img"></a>
                            <a href="#"><img src="../assets/image/50 1.png" alt="img"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>
<style scoped>
    .brand__box {
        background: #F1EFED;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        padding: 15px;
        margin: 15px;
        min-height: 330px;
        height: 330px;
    }
    .brand__images {
        display: flex;
        justify-content: space-between;
    }
    .brand__text {
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin: 10px 0  ;
    }
    .brand__name {
        font-size: 48px;
        line-height: 56px;
        color: #131E3D;
        margin-left: 25px;
        margin-bottom: 20px;
    }
    .brand__one img {
        height: 210px;
    }

    @media (min-width: 1025px) and (max-width: 1500px){
        .brand__one img{
            object-fit: contain;
        }
    }

    @media (max-width: 1025px){
        .brand__name{
            margin-left: 0;
        }
    }

    @media (min-width: 769px) and (max-width: 1025px) {
        .brand__one{
            width: 95%;
        }
        .brand__box{
            padding: 0;
            margin: 0;
            height: auto !important;
            min-height: auto !important;
        }
        .brand__second a{
            height: 48%;
        }
        .brand__second img{
            height: 100%;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .brand__images{
            flex-wrap: wrap;
        }
        .brand__one{
            width: 100%;
        }
        .brand__one img{
            width: 100%;
            object-fit: contain;
        }
        .brand__box{
            height: auto;
            padding: 5px;
            margin: 0;
        }
        .brand__second{
            width: 100%;
            display: flex !important;
            flex-direction: inherit;
        }
        .brand__second a{
            margin-top: 5px;
        }
        .brand__second img{
            width: 96%;
        }
        .gap{
            gap: 10px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .brand__name{
            font-size: 32px;
        }
        .grid-cols-9{
            grid-template-columns: repeat(3, minmax(0, 1fr));;
        }
        .gap-4{
            margin: 0;
        }
        .brand__box{
            margin: 0;
        }
        .brand__one{
            width: 55%;
        }
        .brand__one img{
            width: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 415px){
        .mt-16{
            margin-top: 1rem;
        }
        .brand__name{
            font-size: 24px;
            line-height: 24px;
        }
        .grid-cols-9{
            grid-template-columns: repeat(3, minmax(0, 1fr));;
        }
        .gap-4{
            margin: 0;
        }
        .brand__box{
            margin: 0;
            padding: 5px;
            height: auto;
            min-height: auto;
        }
        .brand__one{
            width: auto;
        }
        .brand__one img{
            width: auto;
            height: 198px;
            object-fit: contain;
        }
        .brand__second a{
            height: auto;
        }
        .brand__second a img{
            height: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 300px){
        .brand__one img{
            height: 158px;
        }
    }

</style>
