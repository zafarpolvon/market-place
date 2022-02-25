<template>
    <div class="info__menu">
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <ul>
                <router-link tag="a" class="logo__svg" to="/info"><i class="fas fa-home"></i><span>Главная</span></router-link>
                <router-link tag="a" class="logo__svg" to="/selected"><i class="far fa-heart"></i><span>Избранные</span></router-link>
                <router-link tag="a" class="logo__svg" to="/deliverycart"><i class="fas fa-shopping-bag"></i><span>Мои заказы</span></router-link>
                <router-link tag="a" class="logo__svg" to="/message"><i class="far fa-comment-alt"></i><span>Мои сообщения</span></router-link>
                <router-link tag="a" class="logo__svg" to="/payments"><i class="fas fa-credit-card"></i><span>Мои платежи</span></router-link>
                <router-link tag="a" class="logo__svg" to="/cabinet"><i class="far fa-user"></i><span>Мои данные</span></router-link>
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
        margin-bottom: 0.5rem;
        display: flex;
    }
    .info__menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: max-content;
    }
    .info__menu ul a{
        color: #959595;
        display: flex;
        align-items: center;
        margin: 0 20px;
    }
    .info__menu ul a.router-link-exact-active {
        color: #131E3D;
    }
    .active{
        color: #131E3D;
    }
    .info__menu ul a img{
        margin-right: 1rem;
    }
    .logo__svg i {
        display: block;
        margin-right: 10px;
        font-size: 20px;
    }
    .info__menu .fa.fa-bars{
        display: none;
    }
    .logo__svg span {
        display: block;
    }
    @media (max-width: 1300px) {
        .info__menu{
            width: 100%;
            overflow-x: scroll;
        }
        .logo__svg i {
            font-size: 18px;
        }
        .logo__svg span {
            font-size: 16px;
        }
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
            display: flex;
            width: 100%;
            overflow-x: scroll;
        }
        .info__menu ul a {
            margin: 0 10px 0 10px;
        }
        .info__menu ul a:first-child {
            margin: 0 10px 0 0px;
        }
        .info__menu ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .info__menu .fa.fa-bars{
            display: block;
            color: #023047;
            font-size: 20px;
        }
        .logo__svg i {
            font-size: 16px;
        }
        .logo__svg span {
            display: block;
            margin-right: 10px;
            font-size: 14px;
        }
    }

</style>
