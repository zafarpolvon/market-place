<template>
    <div>
        <modal :height="500" :adaptive="true" name="Partner-Name">
            <div class="flex flex-col justify-between h-full">
                <div class="delivery__box">
                    <div class="delivery__title">Служба доставки</div>
                    <div class="radios my-4">
                        <div class="radio">
                            <input type="radio" name="radio" id="radio" />
                            <label for="radio">Стандартная доставка</label>
                        </div>
                        <div class="radio">
                            <input type="radio" name="radio" id="radio2" />
                            <label for="radio2">Selection standard</label>
                        </div>
                    </div>
                </div>
                <div class="delivery__bottom">
                    <button class="delivery__pick">ВЫБРАТЬ</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    hide () {
      this.$modal.hide('Partner-Name')
    },
  }

}
</script>

<style scoped>
    .delivery__box {
        padding: 20px 30px;
    }
    .radios{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
    }
    .radio{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 3rem;
    }
    .radio input{
        margin-right: 12px;
    }
    input[type=radio]{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input[type=radio]:before {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid gray;
        background: #fff;
        content: "";
    }
    input[type=radio]:checked:before{
        border: 1px solid #EE4927;
    }
    input[type=radio]:checked:after {
        position: relative;
        display: inline-block;
        visibility: visible;
        border-radius: 6px;
        width: 12px;
        height: 12px;
        background: #EE4927;
        content: "";
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
    .delivery__pick {
        background: #131E3D;
        border-radius: 8px;
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 15px 25px;
    }
    @media (min-width: 200px) and (max-width: 600px){
        .delivery__box{
            padding: 12px;
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
    }
</style>