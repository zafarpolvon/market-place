<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 w-3/12 rounded-md mt-4 text-left bg-white shadow-lg">
      <div class="flex float-right">
        <a href=""><i class="fas fa-times"></i></a>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submitHandler)">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Имя</label>
              <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  :class="errors.length && 'border-red'"
                  v-model="name"
                  placeholder="Ваше имя"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </ValidationProvider>
            </div>
            <div class="mt-4">
              <label class="block">Номер</label>
              <ValidationProvider
                name="phone"
                rules="required|phoneRule"
                v-slot="{ errors }"
              >
                <input
                  :class="errors.length && 'border-red'"
                  v-model="phone"
                  v-mask="'+998 ## ### ## ##'"
                  placeholder="+998 ## ### ## ##"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </ValidationProvider>
            </div>
            <div class="mt-4">
              <label class="block">Пароль</label>
              <ValidationProvider
                name="password"
                rules="required|min:6"
                v-slot="{ errors }"
              >
                <input
                  :class="errors.length && 'border-red'"
                  v-model="password"
                  placeholder="Ваш пароль"
                  class="border w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <small v-if="errors.length"> Минимум 6 символ </small>
              </ValidationProvider>
            </div>
            <div class="flex items-baseline justify-between">
              <button type="submit" class="px-6 py-2 w-full mt-4 text-white">
                Продолжить
              </button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import { extend } from "vee-validate";
import { required, min } from "vee-validate/dist/rules";

extend("required", required);
extend("min", min);
extend("phoneRule", (v) => (v || "").length == 17);

export default {
  components: { ValidationProvider, ValidationObserver },

  data: () => ({
    name: null,
    phone: null,
    password: null,
  }),

  methods: {
    ...mapActions("auth", ["REGISTER"]),

    async submitHandler() {
      const params = {
        name: this.name,
        phone: this.phone.replace(/ /g, ""),
        password: this.password,
        device_id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1 + "7",
      };
      const formData = this.getFormData(params);
      const status = await this.REGISTER(formData);
      if (status) this.$router.replace("/getcode");
    },

    getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach((key) => formData.append(key, object[key]));
      return formData;
    },
  },
};
</script>
<style scoped>
button {
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
button:hover {
  background: #fff;
  border: 1px solid #08235c;
  color: #08235c;
  box-shadow: unset;
}
.icons a {
  background: linear-gradient(
    92.64deg,
    #b9d5fd -2.68%,
    #08235c -2.67%,
    #377af9 86.59%,
    #2267c7 99.79%
  );
  border-radius: 8px;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
