<template>
  <div
    class="
      fullscreen
      bg-secondary
      text-white text-center
      q-pa-md
      flex flex-center
    "
  >
    <div>
      <q-avatar color="brand" size="50px" rounded>
        <div class="q-pa-xs fit">
          <img src="~assets/logo.png" alt="bott" />
        </div>
      </q-avatar>
      <div class="text-h6">Ошибка 404</div>

      <div class="text-overline" style="opacity: 0.4">Что-то пошло не так</div>

      <q-btn flat color="primary" label="Назад" @click="back" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
  setup() {
    return {};
  },
  methods: {
    back() {
      window.history.back();
    },
  },
});
</script>
