<template>
  <div class="absolute-bottom q-mx-sm q-my-sm">
    <q-btn
      label="В корзину"
      color="primary"
      class="fit"
      padding="5px 0"
      v-if="
        !hasBasketItem &&
        (countInBasket < prod.setting.count || prod.setting.count != 0)
      "
      @click="actionsWithBasket({ action: 'add', category_id: prod.id })"
    />

    <div
      class="
        flex flex-center
        text-white
        fit
        bg-grey
        rounded-borders
        text-center
      "
      v-if="countInBasket == prod.setting.count || prod.setting.count == 0"
      style="padding: 7px; text-transform: uppercase"
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
        text-primary text-h6
        fit
      "
    >
      <q-btn
        padding="4px"
        flat
        color="primary"
        icon="remove"
        @click="actionsWithBasket({ action: 'subtract', category_id: prod.id })"
      />
      <div class="q-px-xs absolute-center">
        {{ countInBasket }}
        <q-popup-edit v-model.number="countInBasket" v-slot="scope">
          <q-input
            type="number"
            color="primary"
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
        color="primary"
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
    ...mapGetters({ viewBasket: "basket/viewBasket" }),
    countInBasket() {
      return this.viewBasket.items.find(
        (item) => item.product.id == this.prod.id
      )?.count;
    },
    hasBasketItem() {
      return this.viewBasket.items.find(
        (item) => item.product.id == this.prod.id
      );
    },
  },
  methods: {
    ...mapActions({ actionsWithBasket: "basket/actionsWithBasket" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.count {
  border: 2px solid;
  min-width: 120px;
}
.max {
  max-width: 200px;
}
</style>