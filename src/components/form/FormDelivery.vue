<template>
  <div class="max-md center">
    <div class="text-h5 q-pb-md">Выберите способ доставки</div>
    <div class="row q-col-gutter-sm">
      <div
        class="col-6"
        v-for="(delivery, index) of viewDelivery.data"
        :key="index"
      >
        <div
          class="
            rounded-borders
            bg-primary
            text-white text-center
            q-pa-sm
            relative-position
            active
            fit
          "
          :class="{
            'select bg-white text-black': select?.id == delivery.feedback.id,
          }"
          @click="selectDelivery(delivery.feedback)"
        >
          <div class="absolute-center active-drop fit"></div>
          {{ delivery.title }}
          <div class="text-caption">
            {{ delivery.description }}
          </div>
          <div class="text-caption">
            {{ delivery.price }}
          </div>
        </div>
      </div>
    </div>
    <div class="row q-pt-sm">
      <div class="col-12">
        <q-slide-transition>
          <div v-show="visible" duration="150">
            <div class="">
              <div class="q-py-sm">
                <div class="" v-for="(options, index) of selected" :key="index">
                  <TypeDeliveryInterview
                    v-if="options.type == 3"
                    :option="options"
                  />
                  <TypeDeliveryFile
                    v-if="options.type == 2"
                    :option="options"
                  />
                  <TypeDeliveryMessage
                    v-if="options.type == 1"
                    :option="options"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-slide-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

import TypeDeliveryInterview from "src/components/form/optionsTypeDelivery/TypeInterview.vue";
import TypeDeliveryFile from "src/components/form/optionsTypeDelivery/TypeFile.vue";
import TypeDeliveryMessage from "src/components/form/optionsTypeDelivery/TypeMessage.vue";

export default defineComponent({
  components: {
    TypeDeliveryInterview,
    TypeDeliveryFile,
    TypeDeliveryMessage,
  },
  setup() {
    return {
      select: ref({ 0: { items: [] } }),
      visible: ref(false),
    };
  },
  computed: {
    ...mapGetters(["viewDelivery"]),
    selected() {
      return Array.from(this.select[0]?.items);
    },
  },
  methods: {
    ...mapActions(["actionsDelivery"]),
    selectDelivery(delivery) {
      if (this.select?.id == delivery.id) return;
      this.visible = false;
      setTimeout(() => {
        this.select = delivery;
        this.visible = true;
        console.log();
      }, 300);
    },
  },
  mounted() {
    this.actionsDelivery({ action: "index" });
  },
});
</script>
<style lang="scss" scoped>
.select {
  outline: 2px $primary solid;
  transition: outline 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active-drop {
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.active:hover .active-drop {
  background: rgba(255, 255, 255, 0.2);
}
</style>