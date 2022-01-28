<template>
  <div>
    <a v-if="isLove" @click="$emit('add')">
      <i class="fas fa-heart"></i>
    </a>
    <a v-else @click="$emit('add')">
      <i class="far fa-heart"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isLove: {
      type: Boolean,
      required: true,
    },
  },
};
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
  color: #fc7d00;
  font-size: 25px;
}
@media (min-width: 200px) and (max-width: 600px) {
  a i {
    font-size: 20px;
  }
}
</style>
