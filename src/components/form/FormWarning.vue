<template>
  <div class="text-caption text-weight-bold text-red">
    Поле введено не правильно!
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: ["warning"],
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>