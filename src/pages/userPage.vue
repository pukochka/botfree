<template>
  <q-page full-height class="">
    <!-- <div class="">
      <div class="flex justify-center text-h6">
        Страница когда пользователь авторизировался
      </div>
      <div class="flex justify-center">
        <q-btn class="q-ma-md bg-teal-7" label="404" to="dasdasdas" />
        <q-btn
          class="q-ma-md bg-teal-7"
          color="primary"
          label="Начальная страница"
          to="/"
        />
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  methods: {
    getUserData() {
      axios
        .post(
          `api.bot-t.ru/v1/bot/user/view-by-telegram-id?secretKey=db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e`,
          {
            bot_id: 12845,
            telegram_id: 1028741753,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
  mounted() {
    this.getUserData();
  },
});
</script>
