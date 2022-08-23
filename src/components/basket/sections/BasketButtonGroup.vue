<template>
  <div class="relative-position">
    <div
      class="flex flex-center text-white bg-grey rounded-borders"
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
        text-secondary text-h6
      "
    >
      <q-btn
        padding="4px"
        flat
        color="secondary"
        icon="remove"
        @click="getBasket({ action: 'subtract', category_id: prod.id })"
      />
      <div class="q-px-xs absolute-center">
        {{ countInBasket }}
        <q-popup-edit v-model.number="countInBasket" v-slot="count">
          <q-input
            type="number"
            color="secondary"
            autofocus
            dense
            v-model="count.value"
            input-class="text-grey-9"
            :rules="[
              (val) =>
                validateCount(val) || 'Количество товара введено неверно',
            ]"
            hint="Введите количество товара"
          >
            <template v-slot:append>
              <q-btn
                flat
                dense
                color="negative"
                icon="clear"
                @click.stop="count.cancel"
              />

              <q-btn
                flat
                dense
                color="positive"
                icon="check"
                v-if="validateCount(count.value)"
                @click="
                  getBasket({
                    action: 'set-count',
                    category_id: prod.id,
                    count: +count.value,
                  })
                "
                @click.stop="count.cancel"
              />
            </template>
          </q-input>
        </q-popup-edit>
      </div>

      <q-btn
        padding="4px"
        flat
        color="secondary"
        icon="add"
        v-if="countInBasket < prod.setting.max_count"
        @click="getBasket({ action: 'add', category_id: prod.id })"
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
      return this.viewBasket.data.items.find(
        (item) => item.product.id == this.prod.id
      )?.count;
    },
    hasBasketItem() {
      if (
        this.viewBasket.data.items.find(
          (item) => item.product.id == this.prod.id
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions({ getBasket: "basket/getBasket" }),
    validateCount(value) {
      return (
        Number(value) >= Number(this.prod.setting.min_count) &&
        Number(value) <= Number(this.prod.setting.max_count)
      );
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.count {
  border: 2px solid;
}
</style>