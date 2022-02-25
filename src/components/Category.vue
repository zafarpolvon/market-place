<template>
    <transition name="fade">
        <!-- <div class="category__box">
            <div class="container mx-auto px-4 xl:px-12 md:px-4">
                <div class="grid grid-cols-9 gap-4 ">
                    <div class="col-span-2 category__left">
                        <div class="category__lefte">
                            <ul v-for="cat in category" :key="cat.id">
                                <li class="category__item">
                                    <a @mouseover="updateProduct(cat)" href="#" class="category__link">
                                        <i class="fas fa-tshirt"></i>
                                        <span>{{ cat.name }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-6 category__right">
                        <div>
                            <div class="all__category">
                                <a class="title__header" href="#">{{ sub.name }}</a>
                                <div class="grid grid-cols-6 gap-4 mt-4">
                                    <div class="col-span-2" v-for="cat in sub.childs" :key='cat.id'>
                                        <div class="category__into">
                                            <a href="#">{{ cat.name }}</a>
                                            <ul class="category__inner" v-for="s in cat.subcategory" :key="s.id">
                                                <li>
                                                    <a href="#">{{ s.name }}</a>
                                                </li>
                                            </ul>
                                            <div class="show__more" >
                                                <span v-if="switchMore">Ещё</span>
                                                <span v-else>Свернуть</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <button @click="test">Click</button>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero error minima similique? Nostrum voluptatem inventore ducimus quasi, labore iure porro minus, natus reiciendis pariatur blanditiis quo culpa ad perspiciatis.
                    </div>
                </div>
            </div>
        </div> -->
        <div class="category__box">
            <ul class="category__list">
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Телефоны и аксессуары
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Электроника
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Бытовая техника
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Одежда для женщин
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Одежда для мужчин
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Всё для детей
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Женская обувь
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Босоножки, сандалии
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Ботильоны
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Ботфорты
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Кроссовки и кеды
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/filter">
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99392 0.121094H1.7717C1.53595 0.121094 1.30986 0.2114 1.14316 0.372145C0.976463 0.53289 0.882812 0.750908 0.882812 0.978237V11.264C0.882812 11.4913 0.976463 11.7093 1.14316 11.87C1.30986 12.0308 1.53595 12.1211 1.7717 12.1211H7.99392C8.22967 12.1211 8.45576 12.0308 8.62246 11.87C8.78916 11.7093 8.88281 11.4913 8.88281 11.264V0.978237C8.88281 0.750908 8.78916 0.53289 8.62246 0.372145C8.45576 0.2114 8.22967 0.121094 7.99392 0.121094ZM1.7717 0.978237H7.99392V8.69252H1.7717V0.978237ZM1.7717 11.264V9.54967H7.99392V11.264H1.7717Z" fill="#AEAEAE"/>
                        </svg>
                        Лоферы
                    </router-link>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
  data: () => ({
    more: false,
    switchMore: true,
    sub: {},
    currentPage: 1,
    category: []
  }),
  async mounted () {
    this.category = await this.$store.dispatch('loadCategory')
  },
  computed: {},
  methods: {
    updateProduct (name) {
      this.sub = name
    },
    prevPage () {
      this.currentPage = this.currentPage - 1 || 1
    },
    test () {
      this.toBeShown()
    }
  }
}
</script>

<style scoped>
    .category__box {
        position: absolute;
        left: 85px;
        z-index: 101;
        min-width: 320px;
        width: 320px;
        background: #131E3D;
        color: #fff;
        padding: 1rem 0;
        min-height: 550px;
        max-height: 550px;
        overflow-y: scroll;
    }
    .category__box::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    .category__box::-webkit-scrollbar{
        width: 10px;
        background-color: #F5F5F5;
    }
    .category__box::-webkit-scrollbar-thumb{
        background: #EE4927 !important;
        border-radius: 30px;
    }
    .category__list li{
        padding: 8px 1.5rem;
        color: #fff;
        cursor: pointer;
    }
    .category__list li a{
        display: flex;
        align-items: center;
    }
    .category__list li a svg{
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
    .category__list li:hover{
        background: #EE4927;
    }
    .category__list li:hover a svg path{
        fill: #fff;
    }
    .category__left {
        border-right: 1px solid rgba(0,0,0,.09);
    }
    .category__item {
        margin: 10px 0;
    }
    .category__link {
        display: flex;
    }
    .category__link i {
        margin-right: 10px;
        align-self: center;
    }
    .category__link span {
        align-self: center;
        font-weight: 400;
        font-style: normal;
        font-stretch: normal;
        text-decoration: none;
        transition: color .3s;
        flex-grow: 1;
        line-height: 14px;
        padding: 8px 0;
        display: flex;
        align-items: center;
        color: #000;
    }
    .category__lefte {
        padding: 15px 0;
    }
    .category__into a {
        color: #222;
        font-weight: 600;
        line-height: 16px;
        font-size: 14px;
    }
    .category__inner li a {
        color: #2b2b2b;
        line-height: 16px;
        font-size: 13px;
        font-weight: 400;
    }
    .title__header {
        height: 36px;
        color: #222;
        font-weight: 700;
        font-size: 28px;
        line-height: 1.29;
        transition: color .25s;
    }
    .all__category {
        padding: 20px 0;
    }
    .show__more {
        display: flex;
        flex-direction: column;
    }
    .show__more span {
        color: rgba(0,0,0,.4);
        font-size: 14px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
