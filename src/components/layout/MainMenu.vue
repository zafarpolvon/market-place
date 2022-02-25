<template>
    <div class="container mx-auto mt-8 mb-8 px-4 xl:px-12 md:px-4">
        <ul class="menu-list">
            <li><router-link tag="a" to="/filter">Одежда</router-link></li>
            <li><router-link tag="a" to="/filter">Электроника</router-link></li>
            <li><router-link tag="a" to="/filter">Игрушки</router-link></li>
            <li><router-link tag="a" to="/filter">Все для дома</router-link></li>
            <li><router-link tag="a" to="/filter">Зоотовары</router-link></li>
            <li><router-link tag="a" to="/filter">Покупателям</router-link></li>
            <li><router-link tag="a" to="/filter">Магазинам</router-link></li>
        </ul>
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
    .menu-list{
        display: flex;
        overflow: scroll;
    }
    .menu-list::-webkit-scrollbar{
        display: none;
    }
    .menu-list li{
        margin-left: 6rem;
    }
    .menu-list li a{
        color: #313131;
        white-space: nowrap;
        cursor: pointer;
    }
    .menu-list li a:hover{
        color: #919191;
    }
    @media (min-width: 600px) and (max-width: 960px){
        .menu-list li{
            margin-left: 3rem;
        }
    }
    @media (max-width: 600px){
        .menu-list li{
            margin-left: 1rem;
        }
        .menu-list li a{
            font-size: 14px;
        }
        .mt-8{
            margin-top: 1rem;
        }
        .mb-8{
            margin-bottom: 1rem;
        }
    }
</style>
