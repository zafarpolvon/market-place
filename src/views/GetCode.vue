<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg">
      <form @submit.prevent="submitHandler">
        <div class="mt-4">
          <div>
            <label class="block font-size" for="email">
              Введите sms-код полученный через sms
            </label>
            <input
              required
              placeholder="Ваше код"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <span v-if="seconds" class="mt-2 time">{{ seconds }}</span>
          <div v-else class="flex mt-4">
            <button
              @click="onResend"
              type="button"
              class="text-gray w-full py-2"
            >
              Переотправить
            </button>
          </div>
          <div class="flex items-baseline justify-between mt-2">
            <button class="px-6 py-2 w-full mt-4 text-white reg">
              Регистрация
            </button>
          </div>
          <div class="flex mt-2">
            <a to="" class="registered">Уже зарегистрирован?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    seconds: null,
  }),

  mounted() {
    let countDown = 1000 * 60 * 3;
    this.seconds = Math.floor((countDown -= 1000) / 1000);
    let interval = setInterval(() => {
      countDown -= 1000;
      this.seconds = Math.floor(countDown / 1000);
      if (countDown > 0) return;
      clearInterval(interval);
      this.seconds = null;
    }, 1000);
  },

  methods: {
    ...mapActions("auth", ["CONFIRM_CODE"]),

    submitHandler() {
      this.CONFIRM_CODE();
    },

    onResend() {},
  },
};
</script>

<style scoped>
.time {
  color: #0052ff;
  font-size: 14px;
}
.font-size {
  color: #a7a7a7;
  font-size: 14px;
}
.text-gray {
  border: 1px solid #999999;
  box-sizing: border-box;
  box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
  border-radius: 5.8px;
  color: #999999;
  transition: 0.3s linear;
}
.text-gray:hover {
  box-shadow: unset;
}
.reg {
  background: linear-gradient(
    92.64deg,
    #b9d5fd -2.68%,
    #08235c -2.67%,
    #377af9 86.59%,
    #2267c7 99.79%
  );
  border: 1px solid #b9d5fd;
  box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: 0.3s linear;
}
.reg:hover {
  background: #fff;
  border: 1px solid #08235c;
  color: #08235c;
  box-shadow: unset;
}
.registered {
  font-size: 14px;
  color: #0052ff;
  text-decoration: underline;
  cursor: pointer;
}
.registered:hover {
  text-decoration: none;
}
</style>
