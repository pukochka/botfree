<template>
  <q-dialog
    maximized
    transition-hide="slide-left"
    transition-show="slide-right"
    v-model="dialViewOrder"
    persistent
  >
    <q-card>
      <q-btn color="teal" flat icon="close" @click="openOrder" />
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
        <span class="q-ml-sm"
          >You are currently not connected to any network.</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["dialViewOrder"]),
  },
  methods: {
    ...mapMutations(["openOrder"]),
  },
  mounted() {},
});
</script>
<style lang="scss" scoped>
</style>