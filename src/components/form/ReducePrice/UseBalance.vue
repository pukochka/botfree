<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-sm">Применить реферальный баланс</div>
    <q-banner class="bg-warning" rounded>
      <div class="text-subtitle2">
        При использовании реферального баланса, списывается весь баланс!
      </div>
    </q-banner>
    <div class="">
      <q-item tag="label" v-ripple dense>
        <q-item-section avatar>
          <q-checkbox v-model="orange" label="Применить" />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {
      orange: ref(false),
    };
  },
  computed: {
    ...mapGetters({ viewBalance: "form/viewBalance" }),
  },
  methods: {
    ...mapActions({ getReferalBalance: "form/getReferalBalance" }),
  },
  mounted() {
    this.getReferalBalance({ order_id: 20121 });
  },
});
</script>
<style lang="scss" scoped>
</style>