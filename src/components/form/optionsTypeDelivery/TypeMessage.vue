<template>
  <div class="">
    <div class="text-weight-bold">{{ option.text }}</div>
    <q-input
      v-model="text"
      type="text"
      dense
      outlined
      :rules="
        option.confirm
          ? [(val) => checkValidator || 'Поле Обязательно для заполнения']
          : null
      "
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
    ...mapGetters({ viewFormData: "form/viewFormData" }),
    checkValidator() {
      if (this.option.data.validator != "") {
        let reg = this.option.data.validator;
        let curr = [...reg].splice(1, reg.length - 2).join("");
        let rules = new RegExp(curr);
        return rules.test(this.text);
      } else {
        return this.text.length > 4;
      }
    },
  },
  methods: {
    ...mapMutations({ changeFieldValue: "form/changeFieldValue" }),
  },
  watch: {
    text(val) {
      this.changeFieldValue({
        section: "fields",
        id: this.option.id,
        value: this.text,
      });
    },
  },
});
</script>
<style lang="scss" scoped>
</style>