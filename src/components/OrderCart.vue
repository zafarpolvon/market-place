<template>
    <div class="cart delivery__cart">
        <div class="cart__img">
            <div class="image">
                <img src="../assets/image/Untitled-2 1 (1).png" alt="not found">
            </div>
            <div class="cart__info">
                <div>
                    <div class="title">Телефон  iPHONE</div>
                    <p>Смартфон Samsung</p>
                    <p>A30s 128GB</p>
                </div>
                <p>Продавец: <span>ООО "ПРАЙД"</span></p>
            </div>
        </div>
        <div class="order">
            <p>Количество: <span>1 шт</span></p>
            <div class="payment">
                <p>Цена при оплате:</p>
                <img src="../assets/image/image 29.png" alt="not found">
            </div>
        </div>
        <div class="price">
            <span id="price">200 Р</span>
            <p>Доставка: <span>Бесплатная</span></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .pages{
        padding: 0rem 3rem 1rem 3rem;
    }
    .pages span{
        color: #023047;
    }
    .delivery-cart__title{
        font-size: 42px;
        color: #023047;
    }
    .delivery-carts h1{
        color: #023047;
        font-size: 32px;
        font-weight: normal;
        margin: 2rem 0 1.5rem 0;
        padding-left: 1rem;
    }
    .delivery-carts .cart.delivery__cart{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem;
        border-radius: 5px;
        margin: 1.5rem 0;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .delivery-carts .cart.delivery__cart .cart__img{
        display: flex;
        width: 40%;
    }
    .delivery-carts .cart.delivery__cart .cart__img .image{
        width: 150px;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 5px;
        margin-right: 2.5rem;
    }
    .delivery-carts .cart.delivery__cart .cart__img .image img{
        width: 100%;
        border-radius: 5px;
    }
    .delivery-carts .cart.delivery__cart .cart__info{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .delivery-carts .cart.delivery__cart .cart__info .title{
        color: #000;
        font-size: 24px;
        font-weight: bold;
    }
    .delivery-carts .cart.delivery__cart .cart__info p{
        color: #000;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child{
        color: #023047;
        margin-bottom: 10px;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child span{
        margin-top: auto !important;
        color: #023047;
    }
    .delivery-carts .cart.delivery__cart .order{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 1rem;
        margin-left: -10rem;
        width: 25%;
    }
    .delivery-carts .cart.delivery__cart .order p{
        color: #023047;
        font-size: 18px;
    }
    .delivery-carts .cart.delivery__cart .order p span{
        margin-left: 1rem;
    }
    .delivery-carts .cart.delivery__cart .order .payment{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .delivery-carts .cart.delivery__cart .order .payment img{
        margin-left: 1rem;
    }
    .delivery-carts .cart.delivery__cart .price{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
    }
    .delivery-carts .cart.delivery__cart .price #price{
        color: #0052FF;
        font-size: 32px;
        font-weight: bold;
        align-self: end;
    }
    .delivery-carts .cart.delivery__cart .price p{
        color: #023047;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .delivery-carts .cart.delivery__cart .price p span{
        margin-left: 1rem;
    }
    .delivery-carts .total{
        border-top: 1px solid #DDDDDD;
        padding-top: 1.5rem;
        color: #000;
        font-size: 30px;
        font-weight: normal;
        margin-bottom: 50px;
    }
    .delivery-carts .total span{
        color: #0052FF;
        font-size: 30px;
        margin-left: 0.5rem;
        font-weight: bold;
    }
</style>
