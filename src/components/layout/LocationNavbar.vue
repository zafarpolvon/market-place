<template>
    <div class="container mx-auto px-4 xl:px-12 md:px-4 pages">
        <router-link tag="a" to="/">Главная страница / </router-link>
        <a href="#">{{ cart.category.name }} / </a>
        <a href="#">{{ cart.brand.name }}</a>
    </div>
</template>

<script>
export default {
  props: ['cart']

}
</script>

<style>
  .pages a{
    color: #023047;
  }
  .pages a:hover{
    color: #023999;
  }
  @media (max-width: 600px){
    .pages {
      padding: 20px 16px !important;
    }
    .pages a {
      font-size: 12px;
    }
  }

</style>
