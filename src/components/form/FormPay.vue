<template>
  <div class="max-md">
    <div class="text-h5 q-pb-md">Выберите способ оплаты</div>
    <div class="row q-col-gutter-sm">
      <div
        class="rounded-borders bg-primary text-white text-center q-pa-sm col-6"
      >
        CRYPTO
      </div>
      <div
        class="rounded-borders bg-primary text-white text-center q-pa-sm col-6"
      >
        Оплата на месте
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
</style>