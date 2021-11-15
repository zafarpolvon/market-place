<template>
    <button>
        <i @mouseover="love = false"
            @mouseout="love = true"
            v-bind:class="[love ? 'fas' : 'far', 'far']"
            class="far fa-heart"
        ></i>
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
</style>
