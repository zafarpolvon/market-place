<template>
    <div class="search__category">
        <a href="#" class="search__text">Аккумлятор</a>
        <a href="#" class="search__text">Аккумлятор</a>
        <a href="#" class="search__text">Аккумлятор</a>
        <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text"><img src="../assets/image/Mask Group.png" alt=""> Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text"><img src="../assets/image/image 26.png" alt=""> Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text"><img src="../assets/image/gh-best-tv-brands-1587581394 1.png" alt=""> Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text"><img src="../assets/image/blazer-mid-77-vintage-mens-shoes-nw30B2.jpg" alt=""> Аккумлятор <span>От 11 999 Р</span></a>
        <a href="#" class="search__text"><img src="../assets/image/Mask Group.png" alt=""> Аккумлятор <span>От 11 999 Р</span></a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .search__category{
        position: absolute;
        width: 100%;
        left: 0;
        background: #fff;
        border-radius: 8px;
        padding: 10px 5px 10px 10px;
        margin-top: 0.5rem;
        height: 450px;
        z-index: 10;
        display: block;
        overflow-y: scroll;
    }
    .search__category::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    .search__category::-webkit-scrollbar{
        width: 10px;
        background-color: #F5F5F5;
    }
    .search__category::-webkit-scrollbar-thumb{
        background: #EE4927;
        border-radius: 30px;
    }
    .search__category .search__text{
        width: 100%;
        color: #131E3D;
        padding: 0 0.5rem;
        height: 55px;
        cursor: pointer;
        border-radius: 3px;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    .search__category .search__text span{
        color: gray;
        margin-left: 10px;
    }
    .search__category .search__text img{
        object-fit: contain;
        margin-right: 1rem;
        width: 35px;
    }
    .search__category .search__text:hover{
        background: #EE4927;
        color: #FFF;
    }
    .search__category .search__text:hover span{
        color: #FFF;
    }
    .search__category{
        display: block !important;
    }
</style>
