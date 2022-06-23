<template>
  <div class="absolute-bottom q-mx-md q-my-sm">
    <q-btn
      label="В корзину"
      color="teal"
      class="fit"
      padding="5px 0"
      v-if="
        !hasBasketItem &&
        (countInBasket < prod.setting.count || prod.setting.count != 0)
      "
      @click="actionsWithBasket({ action: 'add', category_id: prod.id })"
    />

    <div
      class="flex flex-center text-white fit bg-grey rounded-borders"
      v-if="countInBasket == prod.setting.count || prod.setting.count == 0"
      style="padding: 8px; text-transform: uppercase"
    >
      Нет в наличии
    </div>
    <div
      v-if="
        hasBasketItem &&
        (countInBasket < prod.setting.count || prod.setting.count != 0)
      "
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
        <q-popup-edit v-model.number="countInBasket" v-slot="scope">
          <q-input
            type="number"
            color="teal"
            autofocus
            dense
            v-model="scope.value"
            hint="Количество товара"
          >
            <template v-slot:append>
              <q-btn
                flat
                dense
                color="negative"
                icon="clear"
                @click.stop="scope.cancel"
              />

              <q-btn
                flat
                dense
                color="positive"
                icon="check"
                @click="
                  actionsWithBasket({
                    action: 'set-count',
                    category_id: prod.id,
                    count: +scope.value,
                  })
                "
                @click.stop="scope.cancel"
              />
            </template>
          </q-input>
        </q-popup-edit>
      </div>

      <q-btn
        padding="4px"
        flat
        color="grey-9"
        icon="add"
        v-if="countInBasket < prod.setting.max_count"
        @click="actionsWithBasket({ action: 'add', category_id: prod.id })"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: {
    prod: {
      type: Object,
    },
  },
  setup() {
    return {
      count: ref(0),
    };
  },
  computed: {
    ...mapGetters(["viewBasket"]),
    countInBasket() {
      return this.viewBasket.find((item) => item.product.id == this.prod.id)
        ?.count;
    },
    hasBasketItem() {
      if (this.viewBasket.find((item) => item.product.id == this.prod.id)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions(["actionsWithBasket"]),
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.count {
  border: 2px solid #009688;
  min-width: 120px;
}
.max {
  max-width: 200px;
}
</style>