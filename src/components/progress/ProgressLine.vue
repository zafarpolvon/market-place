<template>
  <progress-bar size="3" :val="val" bg-color="#D9D9D9" bar-color="#313131"></progress-bar>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
export default {
  props: ['val'],
  components: {
    ProgressBar
  }
}
</script>

<style>

</style>
