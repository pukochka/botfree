<template>
  <div class="max-xxl center q-pa-md">
    <div class="text-h4">Стиль приложения</div>
    <q-separator class="q-mt-sm" />
    <div class="row q-mt-md">
      <div
        class="col-4 col-sm-2 text-primary cursor-pointer"
        v-for="(color, index) of viewColor"
        :key="index"
        @click="select(color)"
      >
        <div
          class="flex flex-center q-ma-sm rounded-borders"
          :class="{ selected: color.selected }"
        >
          <q-avatar class="q-ma-xs" size="50px" :color="color.value" />
        </div>
      </div>
    </div>
    <div class="row wrap">
      <div class="col-sm-6 col-12">
        <div class="q-ma-sm">
          <div
            class="bg-primary flex flex-center rounded-borders"
            style="height: 150px"
          >
            Категории
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-12">
        <div class="q-ma-sm">
          <q-card class="flex no-wrap col q-my-xs">
            <div
              class="bg-primary width flex flex-center q-ma-xs"
              style="height: 142px"
            >
              <q-avatar
                size="36px"
                font-size="30px"
                color="transparent"
                text-color="white"
                icon="image_not_supported"
              />
            </div>
            <div class="column justify-between q-pa-md" style="flex-grow: 1">
              <div class="">
                <div class="end-dots title">XXX</div>
                <div
                  class="
                    text-caption text-weight-bold text-grey-7
                    end-dots
                    caption
                  "
                >
                  XXX
                </div>
              </div>

              <div class="row items-center" :class="{ 'q-gutter-sm': width }">
                <q-btn
                  class="fit"
                  dense
                  color="primary"
                  label="В корзину"
                  no-wrap
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapGetters, mapMutations } from "vuex";

import { useQuasar, setCssVar, getCssVar } from "quasar";
import { computed } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const width = computed(() => {
      return $q.screen.lt.sm;
    });

    return {
      width,
    };
  },
  computed: {
    ...mapGetters(["viewColor"]),
  },
  methods: {
    ...mapMutations(["changeColor"]),
    select(color) {
      this.changeColor(color);
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.width {
  width: 35%;
}
.selected {
  outline: 3px solid;
}
</style>