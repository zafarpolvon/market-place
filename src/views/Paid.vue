<template>
    <div class="back">
        <Navbar />
        <MainMenu />
        <location-navbar :cart="cart" />
        <div class="container mx-auto px-4 xl:px-12 md:px-12">
            <div class="paid">
                <svg class="mb-8" width="199" height="200" viewBox="0 0 199 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.016 0.625L55.7906 136.136L20.0156 109.04H0.140625L55.7906 199.375L198.891 0.625H179.016Z" fill="#EE4927"/>
                </svg>
                <div class="paid__title mb-8">ЗАКАЗ ОПЛАЧЕН</div>
                <a class="back__link" to="">Перейти на главную</a>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import MainMenu from '../components/layout/MainMenu.vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import LocationNavbar from '../components/layout/LocationNavbar.vue'

export default {
    components: {
        Navbar,
        MainMenu,
        Footer,
        LocationNavbar
    }
}

</script>

<style scoped>
    .paid{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .paid__title{
        color: #313131;
        font-size: 42px;
    }
    .back__link{
        background: #131E3D;
        color: #fff;
        box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
        border-radius: 5.8px;
        padding: 15px 25px;
        cursor: pointer;
    }
    .back__link:hover{
        background: #11113D;
        box-shadow: none;
    }

    @media (max-width: 1300px){
        .paid{
            height: max-content;
            margin: 2rem 0;
        }
        .paid svg{
            width: 100px;
            margin-bottom: 0;
        }
        .paid__title{
            font-size: 24px;
            text-align: center;
        }
        .back__link{
            padding: 10px 15px;
            font-size: 14px;
        }
    }

</style>
