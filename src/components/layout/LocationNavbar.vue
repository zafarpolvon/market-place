<template>
    <div class="container mx-auto px-12 pages">
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

</style>
