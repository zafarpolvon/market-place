<template>
    <div class="category__box">
        <div class="container mx-auto px-12">
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
                                <div class="col-span-2" v-for="cat in sub.subcategory" :key='cat.id'>
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
    </div>
</template>

<script>
export default {
  data: () => ({
    more: false,
    switchMore: true,
    category: {},
    sub: {},
    currentPage: 1
  }),
  async mounted () {
    this.category = await this.$store.dispatch('loadCategory')
    this.sub = this.category[0]
    console.log(this.sub)
  },
  computed: {
    toBeShown () {
      return this.sub.subcategory.map(function(k) {
        return console.log(k)
      })
    //   return this.sub.subcategory.subcategory.slice(0, this.currentPage * 4)
    },
    totalPages () {
      return Math.ceil(this.products.length / 4)
    }
  },
  methods: {
    updateProduct (name) {
      this.sub = name
    },
    nextPage () {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    prevPage () {
      this.currentPage = this.currentPage - 1 || 1
    },
    test () {
      console.log(this.toBeShown())
    }
  }
}
</script>

<style scoped>
    .category__box {
        display: none;
        position: absolute;
        z-index: 101;
        min-width: 1000px;
        width: 100%;
        background: #f4f4f4;
        min-height: 700px;
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
</style>
