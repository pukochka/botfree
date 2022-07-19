<template>
  <div class="">
    <!-- <div class="text-weight-bold q-py-sm">{{  }}</div> -->
    <q-file
      color="primary"
      class="fit"
      outlined
      v-model="loader"
      :multiple="true"
      :label="option.text"
      :hint="currentSize"
      :accept="option.data.extensions"
      :max-total-size="option.data.size"
      error-message="Неверный тип файла"
    >
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  props: ["option"],
  setup() {
    return {
      loader: ref(null),
    };
  },
  computed: {
    currentSize() {
      return "Максимальный размер " + this.option.data.size / 10e5 + " Mb";
    },
  },
  methods: {
    ...mapMutations({ changeFileValue: "form/changeFileValue" }),
  },
  watch: {
    loader(val) {
      this.changeFileValue({ id: this.option.id, value: val });
    },
  },
});
</script>
<style lang="scss" scoped>
</style>