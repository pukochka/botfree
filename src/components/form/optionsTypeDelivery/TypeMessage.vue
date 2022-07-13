<template>
  <div class="">
    <div class="text-weight-bold">{{ option.text }}</div>
    <q-input
      v-model="text"
      type="text"
      dense
      outlined
      :rules="[(val) => checkValidator || 'Поле заполнено не правильно']"
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
      text: ref(""),
    };
  },
  computed: {
    checkValidator() {
      if (this.option.data.validator != "") {
        let reg = this.option.data.validator;
        let curr = [...reg].splice(1, reg.length - 2).join("");
        let rules = new RegExp(curr);
        return rules.test(this.text);
      } else {
        return this.text.length > 8;
      }
    },
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
</style>