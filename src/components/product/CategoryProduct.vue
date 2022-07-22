<template>
  <div class="fit active relative-position">
    <div class="active-drop fit absolute-center rounded-borders"></div>
    <div
      class="bg-primary rounded-borders row items-end"
      style="min-height: 130px"
    >
      <div class="shadow q-pl-md q-pb-xs">
        <div class="text-h6 text-secondary text-weight-medium">
          {{ product.design.title }}
        </div>
        <div class="text-overline text-wight-bold text-secondary">
          Категория
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
  props: ["product"],
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });
    return {
      width,
    };
  },
};
</script>
<style lang="scss" scoped>
.active {
  border-radius: 4px !important;
}
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
.avatar {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>