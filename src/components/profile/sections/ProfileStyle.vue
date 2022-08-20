<template>
  <div class="max-xxl center q-pa-md min-h-md non-selectable">
    <div class="my-header text-secondary">Стиль приложения</div>
    <q-separator class="q-mb-xs" :dark="viewColors.theme.is_dark" />

    <q-item clickable @click="changeUserTheme()" class="non-selectable">
      <q-item-section top avatar class="flex flex-center">
        <div class="relative-position fit flex flex-center">
          <Transition name="slide-up">
            <q-avatar
              size="50px"
              class="absolute"
              v-if="viewColors.theme.is_dark"
              color="transparent"
              text-color="white"
              icon="dark_mode"
            />
            <q-avatar
              size="50px"
              class="absolute"
              v-else
              color="transparent"
              text-color="dark"
              icon="sunny"
            />
          </Transition>
        </div>
      </q-item-section>

      <q-item-section class="text-secondary">
        <q-item-label>Сменить тему</q-item-label>
        <q-item-label class="text-secondary" caption lines="2">
          {{ viewColors.theme.is_dark ? "Светлая" : "Темная" }}
          тема</q-item-label
        >
      </q-item-section>
    </q-item>
    <div class="text-secondary text-h6 q-py-sm">Сменить цвет</div>
    <div class="row q-col-gutter-sm">
      <div
        class="col-12 col-sm-3 cursor-pointer"
        v-for="(color, index) of viewColors.colors"
        :key="index"
        @click="changeColor(color)"
      >
        <div
          class="fit rounded-borders row relative-position"
          :style="{
            color: viewColors.theme.is_dark
              ? color.text.dark
              : color.text.light,
            background: viewColors.theme.is_dark
              ? color.background.dark
              : color.background.light,
            minHeight: '130px',
          }"
        >
          <Transition name="slide-up">
            <q-avatar
              v-if="color.select"
              size="35px"
              font-size="25px"
              color="transparent"
              text-color="green"
              icon="done"
              class="absolute-right"
            />
          </Transition>
          <div
            class="q-ma-md q-pa-md rounded-borders"
            :style="{
              background: viewColors.theme.is_dark
                ? color.text.dark
                : color.text.light,
            }"
          ></div>
          <div class="q-pa-md self-end">
            <div class="">{{ color.name }}</div>
            <div class="text-accent text-overline">Сменить тему</div>
          </div>
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
      value: ref(false),
    };
  },
  computed: {
    ...mapGetters({ viewColors: "user/viewUser" }),
  },
  methods: {
    ...mapMutations({
      changeColor: "user/changeColor",
      changeUserTheme: "user/changeUserTheme",
    }),
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
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>