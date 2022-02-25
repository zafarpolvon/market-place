<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-4 xl:px-12 md:px-4 mb-8 mt-8">
            <div class="box">
                <div class="rating__box">
                    <div class="rating__about padding">
                        <img class="rating__image mr-4" src="../assets/image/unsplash_XZ3EmAIWuz0.png" alt="not found">
                        <div class="rating">
                            <div class="rating__title">Lorem Ipsum</div>
                            <div class="rating__number">
                                <span>4.3</span>
                                <span>Общая оценка</span>
                            </div>
                            <a class="rating__link" to="">
                                название магазина
                                <svg class="ml-2" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.6875 7.3125L15.625 1.375" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.667 1.375H15.6253V5.33333" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.625 10.0833V14.0417C15.625 14.4616 15.4582 14.8643 15.1613 15.1613C14.8643 15.4582 14.4616 15.625 14.0417 15.625H2.95833C2.53841 15.625 2.13568 15.4582 1.83875 15.1613C1.54181 14.8643 1.375 14.4616 1.375 14.0417V2.95833C1.375 2.53841 1.54181 2.13568 1.83875 1.83875C2.13568 1.54181 2.53841 1.375 2.95833 1.375H6.91667" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="character padding border-top">
                        <div class="character__title mb-4">Характеристики</div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                    </div>
                </div>
                <div class="rating__box">
                    <div class="rating__about padding">
                        <img class="rating__image mr-4" src="../assets/image/unsplash_XZ3EmAIWuz0.png" alt="not found">
                        <div class="rating">
                            <div class="rating__title">Lorem ipsum dolor sit amet.</div>
                            <div class="rating__number">
                                <span>4.3</span>
                                <span>Общая оценка</span>
                            </div>
                            <a class="rating__link" to="">
                                название магазина
                                <svg class="ml-2" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.6875 7.3125L15.625 1.375" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.667 1.375H15.6253V5.33333" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.625 10.0833V14.0417C15.625 14.4616 15.4582 14.8643 15.1613 15.1613C14.8643 15.4582 14.4616 15.625 14.0417 15.625H2.95833C2.53841 15.625 2.13568 15.4582 1.83875 15.1613C1.54181 14.8643 1.375 14.4616 1.375 14.0417V2.95833C1.375 2.53841 1.54181 2.13568 1.83875 1.83875C2.13568 1.54181 2.53841 1.375 2.95833 1.375H6.91667" stroke="#EE4927" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="character padding border-top">
                        <div class="character__title mb-4">Характеристики</div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import StarRating from '../components/StarRating.vue'
import Loader from '../components/Loader.vue'

export default {
  components: {
    Navbar,
    Footer,
    StarRating,
    Loader,
  }
}

</script>

<style scoped>
    .border-top{
        border-top:  1px solid #D9D9D9;
    }
    .padding{
        padding: 22px 16px;
    }
    .radioContainer {
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .radioContainer input {
        display: block;
        opacity: 0;
        position: absolute;
        background: red;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .radioContainer .circle {
        display: inline-block;
        width: auto;
        height: 48px;
        background-color: white;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 4px;
        text-align: center;
        padding: 10.5px 15px 0 15px;
    }
    .radioContainer:hover .circle {
        border: 1px solid black;
    }
    .radioContainer input:checked + .circle {
        background: #131E3D;
        color: white;
        border: 1px solid #131E3D;
    }
    .box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
    .rating__box{
        width: 50%;
    }
    .rating__image{
        height: 157px;
        width: 157px;
        object-fit: contain;
        border-radius: 8px;
    }
    .rating__about{
        display: flex;
    }
    .rating__title{
        color: #313131;
        font-size: 18px;
        font-weight: bold;
    }
    .rating__number{
        display: flex;
        align-items: center;
    }
    .rating__number span:first-child{
        background: #EE4927;
        border-radius: 8px;
        color: #fff;
        padding: 8px 14px;
    }
    .rating__number span:last-child{
        color: #313131;
        margin-left: 10px;
    }
    .rating{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .rating__link{
        display: flex;
        align-items: center;
        color: #EE4927;
        border: 1px solid #EE4927;
        border-radius: 8px;
        width: max-content;
        padding: 8px 14px;
        transition: 0.2s linear;
        cursor: pointer;
    }
    .rating__link:hover{
        background: #EE4927;
        color: #fff;
    }
    .rating__link svg, .rating__link svg path{
        transition: 0.2s linear;
    }
    .rating__link:hover svg path{
        stroke: #fff;
    }
    .size__title{
        font-weight: bold;
        font-size: 20px;
        color: #131E3D;
    }
    .description__title{
        color: #313131;
        font-size: 20px;
    }
    .description__text{
        color: #313131;
    }
    .character__title{
        color: #313131;
        font-size: 20px;
    }
    .character span{
        color: #666;
    }
    .character .r__type{
        margin: 1.5rem 0 0.1rem 0;
    }
    .character .r__landing{
        margin-bottom: 1rem;
    }

    @media (max-width: 1025px){
        .rating__about{
            flex-direction: column;
        }
        .rating{
            align-items: center;
            text-align: center;
        }
        .rating__image{
            margin: auto;
        }
        .rating__title{
            margin-top: 6px;
            height: 75px !important;
        }
        .rating__number{
            margin-top: 6px;
            margin-bottom: 12px;
        }
    }

    @media (max-width: 600px){
        .rating__box{
            width: 50%;
        }
        .padding{
            padding: 12px 0;
        }
        .rating__title{
            font-size: 12px;
        }
        .rating__image{
            width: 120px;
            height: 120px;
        }
        .rating__number span:first-child{
            padding: 4px 8px;
            font-size: 12px;
        }
        .rating__number span:last-child{
            font-size: 12px;
        }
        .rating__link{
            font-size: 12px;
            padding: 4px 8px;
        }
        .rating__link svg{
            width: 12px;
            height: 12px;
        }
        .character{
            padding: 12px 5px;
        }
        .character__title{
            font-size: 14px;
        }
        .character span{
            font-size: 12px;
        }
        .character .r__type, .character .r__landing{
            font-size: 14px;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
        }
        .mb-4{
            margin-bottom: 0;
        }
    }

    @media (max-width: 376px){
        .rating__title{
            height: 80px;
        }
    }

</style>