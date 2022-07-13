<template>
  <q-card class="fit">
    <div class="q-pa-sm">
      <div class="row">
        <div class="col-4">
          <div
            class="bg-primary min rounded-borders flex flex-center full-height"
          >
            <q-avatar
              size="36px"
              font-size="30px"
              color="transparent"
              text-color="white"
              icon="image_not_supported"
            />
          </div>
        </div>
        <div class="col-8 q-pa-sm">
          <div class="end-dots title">{{ item.product.design.title }}</div>
          <div
            class="text-caption text-weight-bold text-grey-7 end-dots caption"
          >
            {{ item.product.design.rules }}
          </div>
          <q-btn
            color="primary"
            dense
            flat
            no-wrap
            :ripple="false"
            class="text-h6 text-weight-bold"
            padding="0px 4px"
            :label="item.product.price.amount + ' ' + convertСurrency"
          />
          <q-btn
            color="primary"
            dense
            flat
            no-wrap
            :ripple="false"
            class="text-h6 text-weight-bold"
            padding="0px 4px"
            label="x"
            no-caps
          />
          <q-btn
            color="primary"
            dense
            flat
            no-wrap
            :ripple="false"
            class="text-h6 text-weight-bold"
            padding="0px 4px"
            :label="item.count"
          />
        </div>
      </div>
    </div>
  </q-card>
</template>
<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: ["item"],
  setup() {
    return {};
  },
  computed: {
    convertСurrency() {
      switch (this.item.product.price.currency) {
        case "RUB":
          return "₽";
        case "USD":
          return "$";
        case "EUR":
          return "€";
        case "UAH":
          return "₴";
        case "KZT":
          return "₸";
        default:
          return this.item.product.price.currency;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.min {
  min-height: 120px;
}
.title {
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}
.caption {
  line-height: 14px;
  margin-bottom: 6px;
}
</style>