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

<style lang="scss">
    .product__order {
        display: flex;
        align-items: center;
    }
    .product__order .product__increment{
        background: #EE4927 !important;
        color: #fff !important;
        cursor: pointer;
        font-size: 28px;
        font-weight: bold;
        padding: 0 10px;
        border-radius: 0 !important;
    }
    .product__order .product__decrement{
        background: #131E3D !important;
        color: #FFF;
        cursor: pointer;
        font-size: 28px;
        font-weight: bold;
        padding: 0 10px;
        border-radius: 0 !important;
    }
    .product__order {
      p {
        width: 70px;
        padding: 8px 10px;
        outline: none;
        text-align: center;
        border: 1px solid #C4C4C4;
      }
    }
    .add-product .product__information .product__about .product__order .product__increment{
      font-size: 28px;
      border-radius: 0 !important;
    }
    .add-product .product__information .product__about .product__order .product__decrement{
      font-size: 28px;
      border-radius: 0 !important;
    }

  @media (min-width: 415px) and (max-width: 769px){
    .product__order p{
      width: 55px;
      padding: 5px;
    }
    .product__order .product__decrement{
      font-size: 24px;
    }
    .add-product .product__information .product__about .product__order .product__decrement{
      font-size: 24px;
    }
    .product__order .product__increment{
      font-size: 24px;
    }
    .add-product .product__information .product__about .product__order .product__increment{
      font-size: 24px;
    }
  }

  @media (max-width: 415px){
    .product__order p{
      width: 45px;
      padding: 0px 5px;
      height: 29px;
    }
    .product__order .product__decrement{
      font-size: 20px;
      height: 29px;
    }
    .add-product .product__information .product__about .product__order .product__decrement{
      font-size: 20px;
      height: 29px;
    }
    .product__order .product__increment{
      font-size: 20px;
      height: 29px;
    }
    .add-product .product__information .product__about .product__order .product__increment{
      font-size: 20px;
      height: 29px;
    }
  }

</style>
