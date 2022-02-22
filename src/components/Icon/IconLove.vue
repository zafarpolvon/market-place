<template>
    <div class="cursor-pointer">
        <a @click="addFavorite">
            <i class="far fa-heart"></i>
        </a>
        <a @click="addFavorite">
            <i class="fas fa-heart"></i>
        </a>
    </div>
</template>

<script>
export default {
  props: ['getFav'],
  data: () => ({
    isHovering: false
  }),
  methods: {
    addFavorite () {
      this.$emit('favevent')
    }
  }
}
</script>

<style scoped>
    a {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        margin-top: 10px;
    }
    a i {
        color: #FC7D00;
        font-size: 25px;
    }
    @media (min-width: 200px) and (max-width: 600px){
        a i {
            font-size: 20px;
        }
    }
</style>
