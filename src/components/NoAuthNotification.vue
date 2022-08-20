<template>
  <div class="flex flex-center">
    <div class="column q-gutter-sm">
      <div class="col-10 col-sm-6 col-md-4 q-pa-md">
        <q-banner class="bg-orange" rounded>
          Чтобы совершать совешать покупки нужно авторизироваться
        </q-banner>
      </div>
      <div class="col-10 col-sm-6 col-md-4 q-pa-md">
        <component
          async
          :is="'script'"
          src="https://telegram.org/js/telegram-widget.js?19"
          data-telegram-login="SHOPCARTBOTTBOT"
          data-size="large"
          data-radius="4"
          data-request-access="write"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>