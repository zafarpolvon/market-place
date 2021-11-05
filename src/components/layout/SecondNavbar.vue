<template>
    <div class="info__menu">
        <div class="container mx-auto px-12">
            <ul>
                <router-link tag="a" class="logo__svg" to="/info"><i class="fas fa-home"></i>Главная</router-link>
                <router-link tag="a" class="logo__svg" to="/add"><i class="far fa-heart"></i>Избранные</router-link>
                <router-link tag="a" class="logo__svg" to="/deliverycart"><i class="fas fa-shopping-bag"></i>Мои заказы</router-link>
                <router-link tag="a" class="logo__svg" to="/message"><i class="far fa-comment-alt"></i>Мои сообщения</router-link>
                <router-link tag="a" class="logo__svg" to="/payments"><i class="fas fa-credit-card"></i>Мои платежи</router-link>
                <router-link tag="a" class="logo__svg" to="/cabinet"><i class="far fa-user"></i>Мои данные</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .info__menu{
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
    }
    .info__menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info__menu ul a{
        color: #023047;
        display: flex;
        align-items: center;
    }
    .info__menu ul a.router-link-exact-active {
        color: #0052FF;
    }
    .active{
        color: #0052FF;
    }
    .info__menu ul a img{
        margin-right: 1rem;
    }
    .logo__svg i {
        margin-right: 10px;
        font-size: 20px;
    }
    .info__menu .fa.fa-bars{
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        .info__menu ul a{
            font-size: 14px !important;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .info__menu{
            padding: 1rem 0 !important;
        }
        .info__menu ul a{
            font-size: 12px !important;
        }
        .info__menu ul a i{
            font-size: 14px;
            margin-right: 5px;
        }
    }

    @media (max-width: 600px){
        .info__menu{
            padding: 0.8rem 0;
        }
        .info__menu ul{
            display: none;
        }
        .info__menu .fa.fa-bars{
            display: block;
            color: #023047;
            font-size: 20px;
        }
    }

</style>
