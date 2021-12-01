<template>
    <div class="container mx-auto px-4 xl:px-12 md:px-12 pages">
        <a href="#">Главная страница / </a>
        <a href="#">Рубашки / </a>
        <a href="#">{{ name }}</a>
    </div>
</template>

<script>
export default {
  props: ['name']

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
