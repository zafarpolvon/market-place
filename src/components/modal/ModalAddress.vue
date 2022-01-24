<template>
    <div>
        <modal :width="'90%'" :height="600" :adaptive="true" name="Modal-Address">
            <div class="address__box">
                <div class="flex justify-end delivery__cancel">
                    <button @click="hide()"><i class="fas fa-times"></i></button>
                </div>
                <div class="address__title">
                    <h5>Выберите адрес доставки</h5>
                </div>
                <div class="grid grid-cols-10 gap-4">
                    <div class="col-span-10 xl:col-span-4 md:col-span-4">
                        <div class="address__button">
                            <button @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }" class="btn1">Все</button>
                            <button @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }" class="btn2">Пункты выдачи</button>
                            <button @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }" class="btn3">Почта РФ</button>
                        </div>
                    </div>
                    <div class="col-span-10 xl:col-span-6 md:col-span-6">
                        <img class="w-full" src="../../assets/image/Rectangle 718.png" alt="">
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
  data: () => ({
    activeBtn: ''
  }),
  methods: {
    hide () {
      this.$modal.hide('Modal-Address')
    }
  }
}
</script>

<style scoped>
    .address__box {
        padding: 20px 30px;
    }
    .address__button {
        margin-top: 20px;
    }
    .address__title h5 {
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
    }
    .btn1 {
        border: 1px solid #898989;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 15px;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #898989;
        margin-right: 20px;
    }
    .btn2 {
        border: 1px solid #898989;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 15px;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #898989;
        margin-right: 20px;
    }
    .btn3 {
        border: 1px solid #898989;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 15px;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #898989;
    }
    .delivery__cancel button {
        font-size: 26px;
    }
    .active {
        border: 1px solid #131E3D;
        color: #131E3D;
    }
    @media (min-width: 200px) and (max-width: 600px){
        .address__button {
            display: flex;
            flex-wrap: wrap;
        }
        .address__button button {
            margin-top: 10px;
        }
        .address__title h5 {
            font-size: 20px;
        }
        .delivery__cancel button {
            font-size: 22px;
        }
    }

    /* @media (min-width: 769px) and (max-width: 1025px){
        .vm--modal{
            left: 23% !important;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        .vm--modal{
            left: 12% !important;
        }
    }

    @media (max-width: 600px){
        .vm--modal{
            width: 100% !important;
            left: 0 !important;
        }
    } */

</style>
