<template>
  <q-card class="row q-pa-sm" :dark="viewUser.theme.is_dark">
    <div class="col-4">
      <div
        class="bg-primary min rounded-borders"
        :class="{ 'flex flex-center': !item.product.design.image }"
      >
        <q-avatar
          size="56px"
          font-size="40px"
          color="transparent"
          text-color="secondary"
          icon="image"
          v-if="!item.product.design.image"
        />
        <div
          class="img"
          :style="{ 'background-image': `url(${item.product.design.image})` }"
        ></div>
      </div>
    </div>
    <div class="col-8 q-pa-sm">
      <div class="end-dots title">{{ item.product.design.title }}</div>
      <div class="text-caption text-weight-medium text-grey-7 end-dots caption">
        {{ item.product.design.rules }}
      </div>
      <q-btn
        color="secondary"
        dense
        flat
        no-wrap
        :ripple="false"
        class="text-h6 text-weight-bold"
        padding="0px 4px"
        :label="item.product.price.amount + ' ' + convertСurrency"
      />
      <q-btn
        color="secondary"
        dense
        flat
        no-wrap
        :ripple="false"
        class="text-h6 text-weight-bold"
        padding="0px 4px"
        label="X"
        no-caps
      />
      <q-btn
        color="secondary"
        dense
        flat
        no-wrap
        :ripple="false"
        class="text-h6 text-weight-bold"
        padding="0px 4px"
        :label="item.count"
      />
    </div>
  </q-card>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  props: ["item"],
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewUser: "user/viewUser" }),
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
.min,
.img {
  min-height: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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