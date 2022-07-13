<template>
  <div class="">
    <div class="text-weight-bold q-pt-sm">{{ option.text }}</div>
    <q-uploader
      class="fit"
      color="primary"
      :multiple="true"
      :label="currentSize"
      :max-total-size="option.data.size"
    />
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["option"],
  setup() {
    return {
      text: ref([]),
    };
  },
  computed: {
    search() {
      return window.location.origin;
    },
    currentSize() {
      return "Максимальный размер " + this.option.data.size / 10e5 + " Mb";
    },
  },
});
</script>
<style lang="scss" scoped>
</style>