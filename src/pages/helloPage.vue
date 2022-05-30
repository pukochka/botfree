<template>
  <q-page class="flex flex-center">
    <div class="">
      <div class="text-h3">Страница когда пользователь зашел на сайт</div>
      <div class="flex justify-center">
        <q-btn class="q-ma-md bg-teal-7" label="404" to="dasdasdas" />
        <q-btn
          class="q-ma-md bg-teal-7"
          color="primary"
          label="Авторизированный пользователь"
          to="/auth/user"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
