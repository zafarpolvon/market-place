<template>
    <div>
        <modal :height="500" :adaptive="true" name="Modal-Delivery">
            <div class="flex flex-col justify-between h-full">
                <div class="delivery__box">
                    <div class="flex justify-end delivery__cancel">
                        <button @click="hide()"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="delivery__title">
                        <h5>Способ доставки</h5>
                    </div>
                    <div class="delivery__button">
                        <button @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }" class="mr-3 btn1">Пункт выдачи</button>
                        <button @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }" class="ml-3 btn2">Курьером</button>
                    </div>
                    <div class="delivery__address">
                        <p v-if="!info">Нет сохраненных адресов</p>
                        <p v-else>Бунёдкор 14 32кв</p>
                    </div>
                </div>
                <div class="delivery__bottom">
                    <button @click="address()" class="delivery__pick">ВЫБРАТЬ АДРЕС ДОСТАВКИ</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
  data: () => ({
    info: null,
    activeBtn: ''
  }),
  methods: {
    hide () {
      this.$modal.hide('Modal-Delivery')
    },
    address () {
      this.$modal.show('Modal-Address')
      this.$modal.hide('Modal-Delivery')
    }
  }

}
</script>

<style scoped>
    .delivery__cancel button {
        font-size: 26px;
    }
    .delivery__cancel i {
        cursor: pointer;
    }
    .delivery__box {
        padding: 20px 30px;
    }
    .delivery__bottom {
        position: relative;
        padding: 20px 30px;
    }
    .delivery__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .delivery__button {
        display: flex;
        flex-direction: row;
        padding-right: 40px;
        margin-top: 20px;
    }
    .btn1 {
        background: #D9D9D9;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #000000;
        width: 100%;
        height: 50px;
    }
    .btn2 {
        background: #D9D9D9;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #000000;
        width: 100%;
        height: 50px;
    }
    .active {
        background: #ffffff;
        color: #0052FF;
        border: 1px solid #5E8CE2;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .delivery__address {
        margin-top: 20px;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        color: #000000;
    }
    .delivery__pick {
        background: linear-gradient(92.64deg, #B9D5FD -2.68%, #08235C -2.67%, #377AF9 86.59%, #2267C7 99.79%);
        border-radius: 8px;
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 15px 25px;
    }
    @media (min-width: 200px) and (max-width: 600px){
        .delivery__button {
            padding-right: 0;
        }
        .delivery__pick {
            font-size: 14px;
        }
        .delivery__bottom {
            display: flex;
            justify-content: center;
        }
        .delivery__title {
            font-size: 20px;
        }
        .btn1 {
            font-size: 15px;
            height: 45px;
        }
        .btn2 {
            font-size: 15px;
            height: 45px;
        }
        .delivery__cancel {
            font-size: 22px;
        }
    }
</style>
