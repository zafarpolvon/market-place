<template>
    <div class="cart delivery__cart">
        <div class="cart__img">
            <div class="image">
                <img src="../assets/image/Untitled-2 1 (1).png" alt="not found">
            </div>
            <div class="cart__info">
                <div>
                    <div class="title">Телефон  iPHONE</div>
                    <p class="my-2">Смартфон Samsung</p>
                    <p>A30s 128GB</p>
                </div>
                <p>Продавец: <span>ООО "ПРАЙД"</span></p>
            </div>
        </div>
        <div class="order">
            <p>Количество: <span>1 шт</span></p>
            <div class="delivered">Доставлен</div>
            <div class="payment">
                <p>Способ оплаты</p>
                <a href="#"><img src="../assets/image/image 29.png" alt="not found"></a>
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
    .delivery-cart__title{
        font-size: 42px;
        color: #023047;
        line-height: 1;
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
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem;
        border-radius: 5px;
        margin: 1.5rem 0;
        /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25); */
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
        margin: auto 2.5rem auto 0;
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
        line-height: 1;
    }
    .delivery-carts .cart.delivery__cart .cart__info p{
        color: #000;
        line-height: 1;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child{
        color: #023047;
        margin-bottom: 10px;
        line-height: 1;
    }
    .delivery-carts .cart.delivery__cart .cart__info p:last-child span{
        margin-top: auto !important;
        color: #023047;
        line-height: 1;
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
        color: #313131;
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

    @media (min-width: 769px) and (max-width: 1025px){
        .delivery-carts .cart.delivery__cart .cart__img{
            width: 100%;
        }
        .delivery-carts .cart.delivery__cart .order{
            width: 50%;
            margin-left: 0;
        }
        .delivery-carts .cart.delivery__cart .price{
            width: 50%;
        }
        .delivery-carts .cart.delivery__cart .price p{
            text-align: end;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .delivery-carts .cart.delivery__cart .cart__img{
            width: 100%;
        }
        .delivery-carts .cart.delivery__cart .order{
            width: 50%;
            margin-left: 0;
        }
        .delivery-carts .cart.delivery__cart .price{
            width: 50%;
        }
        .delivery-carts .cart.delivery__cart .price p{
            text-align: end;
        }
    }

    @media (max-width: 600px){
        .delivery-carts .cart.delivery__cart .cart__img{
            width: 100%;
        }
        .delivery-carts .cart.delivery__cart .order{
            width: 100%;
            margin-left: 0;
        }
        .delivery-carts .cart.delivery__cart .price{
            width: 50%;
            justify-content: unset;
        }
        .delivery-carts .cart.delivery__cart .price p span{
            margin-left: 5px;
        }
        .delivery-carts .cart.delivery__cart .order .payment img{
            margin-left: 5px;
        }
        .delivery-carts .cart.delivery__cart .price #price{
            align-self: flex-start;
        }
        .delivery-carts .cart.delivery__cart .cart__img .image{
            height: unset;
            width: unset;
            margin-right: 10px;
        }
        .delivery-carts .cart.delivery__cart .cart__info{
            justify-content: unset;
        }
        .delivery-carts .cart.delivery__cart .cart__info .title{
            text-align: left;
            margin-bottom: 5px;
            font-size: 13px;
        }
        .delivery-carts .cart.delivery__cart .order{
            padding-top: 0;
            margin-top: 5px;
            width: 50%;
        }
        .delivery-carts .cart.delivery__cart .order .payment{
            margin-bottom: 0;
            margin-top: 5px;
        }
        .delivery-carts .cart.delivery__cart .price p{
            margin-bottom: 0;
            margin-top: 5px;
            font-size: 12px;
        }
        .delivery-carts .cart.delivery__cart .price #price{
            line-height: 1;
            font-size: 13px;
        }
        .delivery-carts .cart.delivery__cart .cart__info p{
            margin-bottom: 5px !important;
            margin-top: 0;
            font-size: 12px;
        }
        .delivery-carts .cart.delivery__cart .order p{
            line-height: 1;
            font-size: 12px;
            margin-bottom: 5px;
        }
        .delivery-carts .cart.delivery__cart .cart__img .image img{
            min-width: 80px;
            width: 80px;
            border-radius: 8px;
        }
        .delivered{
            font-size: 12px;
        }
    }

    @media (max-width: 376px){
        .delivery-carts .cart.delivery__cart{
            padding: 10px !important;
            margin: 1rem 0 !important;
        }
    }

    @media (max-width: 300px){
        .delivery-carts .cart.delivery__cart .cart__info p{
            font-size: 15px;
        }
        .delivery-carts .cart.delivery__cart .order p{
            font-size: 15px;
        }
        .delivery-carts .cart.delivery__cart .cart__img .image{
            height: 200px;
            width: 100%;
        }
        .delivery-carts .cart.delivery__cart .cart__info .title{
            font-size: 20px;
        }
        .delivery-carts .cart.delivery__cart .price p{
            font-size: 15px;
        }
        .delivery-carts .cart.delivery__cart .order .payment img{
            margin-left: 0;
        }
    }

</style>
