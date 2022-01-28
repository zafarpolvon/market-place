<template>
  <div class="search__category">
    <!-- <a href="#" class="search__text">Аккумлятор</a>
    <a href="#" class="search__text">Аккумлятор</a>
    <a href="#" class="search__text">Аккумлятор</a>
    <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
    <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
    <a href="#" class="search__text">Аккумлятор <span>От 11 999 Р</span></a>
    <a href="#" class="search__text"
      ><img src="../assets/image/Mask Group.png" alt="" /> Аккумлятор
      <span>От 11 999 Р</span></a
    >
    <a href="#" class="search__text"
      ><img src="../assets/image/image 26.png" alt="" /> Аккумлятор
      <span>От 11 999 Р</span></a
    >
    <a href="#" class="search__text"
      ><img src="../assets/image/gh-best-tv-brands-1587581394 1.png" alt="" />
      Аккумлятор <span>От 11 999 Р</span></a
    >
    <a href="#" class="search__text"
      ><img
        src="../assets/image/blazer-mid-77-vintage-mens-shoes-nw30B2.jpg"
        alt=""
      />
      Аккумлятор <span>От 11 999 Р</span></a
    > -->

    <a href="#" v-for="item in items" :key="item.id" class="search__text">
      <img :src="`${$url}${item.photo}`" alt="" />
      {{ item.name }}
      <span>От {{ 11999 }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    isLoading: { type: Boolean, required: true },
    searchValue: { type: String, required: true },
  },
};
</script>

<style scoped>
.search__category {
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
.search__category::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.search__category::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
.search__category::-webkit-scrollbar-thumb {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}
.search__category .search__text {
  width: 100%;
  color: #000;
  padding: 0 0.5rem;
  height: 55px;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.search__category .search__text span {
  color: gray;
  margin-left: 10px;
}
.search__category .search__text img {
  object-fit: contain;
  margin-right: 1rem;
  width: 35px;
}
.search__category .search__text:hover {
  background: linear-gradient(
    92.64deg,
    #b9d5fd -2.68%,
    #384f81 -2.67%,
    #49679f 56.03%,
    #729edb 99.79%
  );
  color: #fff;
}
.search__category .search__text:hover span {
  color: #fff;
}
.search__category {
  display: block !important;
}
</style>
