<template>
    <div class="product__order">
        <button @click="decreaseCounter(1)" class="product__increment">-</button>
        <p>{{ counter }}</p>
        <button @click="increaseCounter(10)" class="product__decrement">+</button>
    </div>
</template>

<script>
export default {
  data: () => ({
    counter: 1
  }),
  methods: {
    increaseCounter (increaseLimit) {
      if (this.counter < increaseLimit) this.counter++
    },
    decreaseCounter (decreaseLimit) {
      if (this.counter > decreaseLimit) this.counter--
    }
  }
}
</script>

<style>
    .product__order {
        display: flex;
        align-items: center;
    }
    .product__order .product__increment{
        background: #EDE9E9;
        color: #000;
        cursor: pointer;
        font-size: 28px !important;
        font-weight: bold !important;
        padding: 0 10px;
        border-radius: 0 !important;
    }
    .product__order .product__decrement{
        background: linear-gradient(92.98deg, rgba(190, 217, 255, 0) 0.15%, #729EDB 0.15%, #274784 100.17%) !important;
        color: #FFF;
        cursor: pointer;
        font-size: 28px !important;
        font-weight: bold !important;
        padding: 0 10px;
        border-radius: 0 !important;
    }
    .product__order p{
        width: 70px;
        padding: 8px 10px;
        outline: none;
        text-align: center;
        border: 1px solid #C4C4C4;
    }
</style>
