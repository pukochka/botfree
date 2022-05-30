<template>
  <div
    class="fullscreen bg-teal text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <div class="">
        <div class="flex justify-center">
          <q-btn
            class="q-ma-md bg-teal-7"
            color="primary"
            label="Авторизированный пользователь"
            to="/auth/user"
          />
          <q-btn
            class="q-ma-md bg-teal-7"
            color="primary"
            label="Начальная страница"
            to="/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
