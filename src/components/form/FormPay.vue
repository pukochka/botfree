<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-md">Выберите способ оплаты</div>
    <!-- <div class="row q-col-gutter-xs">
      <div
        class="col-6"
        v-for="(item, index) of test"
        :key="index"
        @click="select(item)"
      >
        <div
          class="
            q-pa-sm
            rounded-borders
            bg-primary
            text-white text-center
            relative-position
            active
          "
        >
          <div class="absolute-center active-drop fit"></div>
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="row q-pt-sm">
      <div class="col-12">
        <q-slide-transition>
          <div v-show="visible">
            <div class="rounded-borders bg-grey-3">
              <div class="" v-for="(opt, index) of sel?.data" :key="index">
                {{ opt.text }}
              </div>
            </div>
          </div>
        </q-slide-transition>
      </div>
    </div> -->
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    return {
      visible: ref(false),
      sel: ref(null),
      test: ref([
        {
          title: "jjjjj",
          id: 0,
          data: [
            {
              text: "hhhhhhhh",
            },
            {
              text: "aaaaaaa",
            },
            {
              text: "rrrrrrr",
            },
          ],
          open: false,
        },
        {
          title: "ffffff",
          id: 1,
          data: [
            {
              text: "33333",
            },
            {
              text: "22222",
            },
            {
              text: "111",
            },
          ],
          open: false,
        },
        {
          title: "qqqqqqq",
          id: 3,
          data: [
            {
              text: "664",
            },
            {
              text: "aaaa65656aaa",
            },
            {
              text: "767",
            },
          ],
          open: false,
        },
      ]),
    };
  },
  methods: {
    select(item) {
      this.visible = true;
      this.sel = this.test.find((delivery, index) => delivery.id == item.id);
    },
  },
});
</script>
<style lang="scss" scoped>
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
</style>