<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section class="">
        <span class="">Вы уверены, что хотите очистить всю корзину?</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Отмена" color="primary" v-close-popup />
        <q-btn
          flat
          label="Подтвердить"
          color="primary"
          v-close-popup
          @click="actionsWithBasket({ action: 'remove-all' })"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["actionsWithBasket"]),
  },
});
</script>
<style lang="scss" scoped>
</style>