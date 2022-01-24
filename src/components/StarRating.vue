<template>
    <div>
        <star-rating active-color="#313131" star-size="15" margin="0" :read-only="true" :show-rating="false" :rating="rating"></star-rating>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  props: ['rating'],
  components: {
    StarRating
  }
}
</script>

<style>

</style>
