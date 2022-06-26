<template>
  <div class="q-ma-sm text-subtitle1">
    <div class="flex justify-between">
      <div class="">Время</div>
      <div class="q-ml-sm">
        <code>{{ order.created_at }}</code>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="">Способ</div>
      <div class="q-ml-sm">
        <code>{{ order.shop_id }}</code>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="">Статус</div>
      <div class="q-ml-sm">
        <code>{{ order.status }}</code>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: ["order"],
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
</style>