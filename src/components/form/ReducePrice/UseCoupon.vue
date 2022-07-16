<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-sm">Активать купона</div>
    <div
      class="flex flex-center q-pa-md"
      v-if="viewCoupon.loading['find-active']"
    >
      <q-spinner color="primary" size="3em" />
    </div>
    <div class="row q-col-gutter-sm">
      <div class="col-12">
        <div
          class="q-ma-xs text-subtitle1"
          v-if="!viewCoupon.loading['find-active'] && viewCoupon.status"
        >
          У вас пока нет активированных купонов
        </div>
      </div>

      <div
        class="col-12"
        v-if="!viewCoupon.loading['find-active'] && !viewCoupon.status"
      >
        <div class="outline rounded-borders q-pa-sm">
          <div class="text-center text-weight-bold text-subtitle1">
            Купон <span class="text-primary">{{ viewCoupon.data.code }}</span>
          </div>

          <q-separator spaced color="primary" />

          <div class="text-caption line">
            {{ viewCoupon.data.info }}
          </div>
          <div class="full-width column">
            <q-btn
              padding="4px 16px"
              size="12px"
              class="q-mt-sm self-end"
              dense
              color="red-6"
              icon="clear"
              label="Убрать купон"
              :loading="viewCoupon.loading['deactivated']"
              no-wrap
              no-caps
              flat
              @click="
                getСoupon({ action: 'deactivated' });
                coupon = '';
              "
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class=""
      v-if="
        (!viewCoupon.loading['find-active'] ||
          !viewCoupon.loading['activate']) &&
        viewCoupon.status
      "
    >
      <q-input
        v-model="coupon"
        type="text"
        label="Ввести купон"
        dense
        borderless
        outlined
      />
      <div class="col-12">
        <div
          class="text-red-4 text-weight-bold text-caption"
          v-if="viewCoupon.current"
        >
          Введен неверный купон
        </div>
      </div>
      <div class="flex flex-center q-py-md">
        <q-btn
          class="fit"
          dense
          color="primary"
          label="Активировать"
          :loading="viewCoupon.loading['activate']"
          @click="getСoupon({ action: 'activate', coupon: coupon })"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {
      coupon: ref(""),
    };
  },
  computed: {
    ...mapGetters({ viewCoupon: "form/viewCoupon" }),
  },
  methods: {
    ...mapActions({ getСoupon: "form/getСoupon" }),
  },
  mounted() {
    this.getСoupon({ action: "find-active" });
  },
});
</script>
<style lang="scss" scoped>
.line {
  line-height: 14px;
}
.outline {
  outline: 3px solid $primary;
}
</style>