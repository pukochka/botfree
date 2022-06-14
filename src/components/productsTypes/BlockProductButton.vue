<template>
  <div class="button-add fit">
    <q-btn
      label="В корзину"
      color="teal"
      class="fit"
      padding="5px 32px"
      v-if="!hasBasketItem()"
      @click="actionsWithBasket({ action: 'add', category_id: prod.id })"
    >
    </q-btn>
    <div
      v-if="hasBasketItem()"
      class="
        flex
        no-wrap
        flex-center
        rounded-borders
        justify-between
        count
        text-h6
        fit
      "
    >
      <q-btn
        padding="4px"
        flat
        color="grey-9"
        icon="remove"
        @click="actionsWithBasket({ action: 'subtract', category_id: prod.id })"
      />
      <div class="q-px-xs absolute-center">
        {{ countInBasket }}
        <q-popup-edit
          v-model.number="countInBasket"
          buttons
          v-slot="scope"
          label-set="Изменить"
          label-cancel="Отмена"
        >
          <q-input
            type="number"
            v-model="scope.value"
            dense
            autofocus
            counter
          />
        </q-popup-edit>
      </div>

      <q-btn
        padding="4px"
        flat
        color="grey-9"
        icon="add"
        v-show="countInBasket < prod.setting.max_count"
        @click="actionsWithBasket({ action: 'add', category_id: prod.id })"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: ["prod"],
  setup() {
    return {
      count: ref(0),
    };
  },
  computed: {
    ...mapGetters(["viewBasket"]),
    countInBasket() {
      return this.viewBasket.find((item) => item.product.id == this.prod.id)
        .count;
    },
  },
  methods: {
    ...mapActions(["actionsWithBasket"]),
    hasBasketItem() {
      if (this.viewBasket.find((item) => item.product.id == this.prod.id)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.count {
  border: 2px solid #009688;
  min-width: 120px;
}
</style>