<template>
    <div class="basket__item">
        <div class="basket__left">
            <div class="basket__image">
                <img :src="korzina.product.photo" alt="">
            </div>
            <div class="basket__box">
                <h4>{{ korzina.product.name }}</h4>
                <h5>Цвет: <span class="basket__gray">Белый</span></h5>
                <h5>Размер: <span class="basket__gray">XXL - 44</span></h5>
                <h5>Склад отгрузки:  <span class="basket__gray">склад Logoname</span></h5>
                <h5>ИП Иван Дияров</h5>
            </div>
        </div>
        <div class="basket__count">
            <div class="product__order">
                <button @click="decreaseCounter" class="product__increment">-</button>
                <p>{{ korzina.amount }}</p>
                <button @click="increaseCounter" class="product__decrement">+</button>
            </div>
            <h5>Осталось 2 шт</h5>
        </div>
        <div class="basket__price">
            <div>
                <h3>{{ korzina.product.price }}</h3>
                <h4>{{ korzina.product.price_old }}</h4>
                <p>кредит от 50 ₽/мес</p>
            </div>
            <div style="color: red; cursor:pointer" @click="removeCartItem(korzina.product.id)">
                remove korzina
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['korzina'],
    data: ()=>({
        counter:1
    }),
    methods: {
        increaseCounter () {
            this.korzina.amount++
        },
        decreaseCounter () {
            if (this.korzina.amount > 1) this.korzina.amount--
        },
        async removeCartItem(item){
            await this.$store.dispatch('removeCartItem', item)
            location.reload()
        }
    }

}
</script>

<style scoped>
.product__order {
    display: flex;
    align-items: center;
}
.product__order .product__increment{
    background: #EDE9E9;
    color: #000;
    cursor: pointer;
    font-size: 28px;
    font-weight: bold;
    padding: 0 10px;
    border-radius: 0 !important;
}
.product__order .product__decrement{
    background: linear-gradient(92.98deg, rgba(190, 217, 255, 0) 0.15%, #729EDB 0.15%, #274784 100.17%) !important;
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

    .basket__left {
        display: flex;
        flex-direction: row;
    }
    .basket__image {
        width: 150px;
        height: 150px;
        display: flex;
    }
    .basket__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 1rem;
        position: relative;
    }
    .basket__box {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .basket__box h4 {
        font-size: 18px;
        line-height: 1;
        font-weight: bold;
        text-transform: uppercase;
        color: #000000;
    }
    .basket__box h5 {
        font-weight: normal;
        font-size: 16px;
        line-height: 1;
        color: #023047;
    }
    .basket__gray {
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #898989;
    }
    .basket__count h5 {
        margin-top: 15px;
        font-size: 14px;
        line-height: 100%;
        color: #0052FF;
    }
    .basket__price h3 {
        font-weight: bold;
        font-size: 40px;
        line-height: 100%;
        color: #0052FF;
    }
    .basket__price {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .basket__price h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-decoration: line-through;
    }
    .basket__price p {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #898989;
    }

    @media (min-width: 600px) and (max-width: 769px){
        .basket__item{
            flex-direction: column;
        }
        .basket__price{
            text-align: left;
            position: absolute;
            right: 15px;
            bottom: 23px;
        }
        .basket__count{
            margin: 1rem 0;
            width: 70%;
        }
        .basket__gray {
            font-size: 14px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        .basket__item{
            flex-direction: column;
        }
        .basket__price{
            text-align: left;
            position: absolute;
            right: 15px;
            bottom: 23px;
        }
        .basket__count{
            margin: 1rem 0;
            width: 70%;
        }
        .basket__image{
            width: 130px;
            height: 130px;
        }
        .basket__gray {
            font-size: 14px;
        }
        .basket__price h3{
            font-size: 24px;
        }
    }

    @media (max-width: 415px){
        .basket__item{
            flex-direction: column;
        }
        .basket__box{
            margin-left: 0;
        }
        .basket__box h5{
            margin: 0.5rem 0;
        }
        .basket__box h4{
            text-align: center;
            margin-top: 10px;
        }
        .basket__left{
            flex-direction: column;
        }
        .basket__image{
            width: 100%;
            height: auto;
            margin: auto;
        }
        .basket__count{
            margin: 1rem 0;
        }
        .basket__price{
            position: absolute;
            bottom: 28px;
            right: 15px;
        }
        .basket__price h3{
            font-size: 24px;
        }
        .basket__price h4{
            font-size: 14px;
        }
        .basket__gray {
            font-size: 14px;
        }
    }

    @media (max-width: 300px){
        .basket__price{
            position: relative;
            bottom: unset;
            right: unset;
            text-align: left;
        }
        .basket__box h5{
            margin: 0.2rem 0;
        }
        .basket__gray {
            font-size: 12px;
        }
    }

</style>
