<template>
    <div class="container mx-auto mt-16 px-4 xl:px-12 md:px-4">
        <div class="adventage">
            <div class="adventage__box">
                <img src="../../assets/image/approved111 .png" alt="not found">
                <div class="adventage__title">Lorem Ipsum is simply dummy text</div>
                <div class="text">У нас выгодные цены</div>
            </div>
            <div class="adventage__box">
                <img src="../../assets/image/Group222.png" alt="not found">
                <div class="adventage__title">Lorem Ipsum is </div>
                <div class="text">Быстрое оформление и гарантия на возврат в случае неисправности</div>
            </div>
            <div class="adventage__box">
                <img src="../../assets/image/credit-card333.png" alt="not found">
                <div class="adventage__title">Lorem Ipsum is </div>
                <div class="text">Без предоплаты на 12 или 18 месяцев</div>
            </div>
            <div class="adventage__box">
                <img src="../../assets/image/Group222.png" alt="not found">
                <div class="adventage__title">Lorem Ipsum is </div>
                <div class="text">Быстрое оформление и гарантия на возврат в случае неисправности</div>
            </div>
            <div class="adventage__box">
                <img src="../../assets/image/credit-card333.png" alt="not found">
                <div class="adventage__title">Lorem Ipsum is </div>
                <div class="text">Без предоплаты на 12 или 18 месяцев</div>
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
    .adventage{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 3rem 0;
    }
    .adventage__box{
        display: flex;
        width: 19%;
        margin: 1rem 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .adventage__box .adventage__title{
        color: #383838;
        margin: 12px 0;
        font-weight: bold;
    }
    .adventage__box .text{
        font-size: 14px;
        color: #616161;
    }
    @media (min-width: 600px) and (max-width: 1000px){
        .adventage{
            justify-content: center;
        }
        .adventage__box{
            width: 50%;
        }
    }
    @media (max-width: 600px){
        .adventage{
            justify-content: center;
        }
        .adventage__box{
            width: 100%;
        }
        .adventage__box .text{
            width: 50%;
        }
    }
    @media (max-width: 460px){
        .adventage__box .text{
            width: 80%;
        }
    }
</style>