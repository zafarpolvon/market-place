<template>
  <div class="progress__box">
    <Progress :value="value" strokeColor="#FFFFFF" :strokeWidth="4" :radius="30"></Progress>
  </div>
</template>

<script>
// eslint-disable-next-line quotes
import Progress from "easy-circular-progress"
export default {
  props: ['value'],
  components: {
    Progress
  }
}
</script>


<style>
    .progress__box {
        color: #fff !important;
    }
</style>
