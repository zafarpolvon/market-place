<template>
    <button @click.native="deleteCart">
        <i class="far fa-trash-alt"></i>
    </button>
</template>

<script>
export default {
  props: ['love'],
  data: () => ({
    isHovering: false
  })
}
</script>

<style scoped>
    button {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        margin-top: 10px;
    }
    button i {
        color: #FC7D00;
        font-size: 25px;
    }
    @media (min-width: 200px) and (max-width: 600px){
        button i {
            font-size: 20px;
        }
    }
</style>
