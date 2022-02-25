<template>
    <modal :top="0" :width="'100%'" :height="'100%'" name="Modal-Menu" class="search__box">
        <i class="close__icon fas fa-times" @click="closeMenu()"></i>
        <ul>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Телефоны и аксессуары</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Электроника</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Бытовая техника</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Одежда для женщин</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Одежда для мужчин</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="filter">Всё для детей</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="filter">Женская обувь</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="filter">Босоножки, сандалии</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Ботильоны</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Ботфорты</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Кроссовки и кеды</router-link></li>
            <li><router-link tag="a" @click="closeMenu()" to="/filter">Лоферы</router-link></li>
        </ul>
    </modal>
</template>

<script>
export default {
    methods: {
        closeMenu () {
            this.$modal.hide("Modal-Menu")
        }
    }
}
</script>

<style scoped>
    .close__icon{
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 5px 10px;
        font-size: 24px;
        color: #fff;
        border-radius: 50%;
    }
    .close__icon:hover{
        background: rgba(155,155,155,0.3);
    }
    ul{
        background: #131E3D;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 4rem;
    }
    ul li{
        color: #fff;
        padding: 12px;
    }
    ul li:hover{
        background: #EE4927;
    }
</style>
