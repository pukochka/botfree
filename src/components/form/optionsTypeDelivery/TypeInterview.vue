<template>
  <div class="">
    <div class="text-weight-bold q-pt-sm">{{ option.text }}</div>
    <q-list>
      <q-item
        v-for="(item, index) of checkBoxs"
        :key="index"
        dense
        tag="label"
        v-ripple
        clickable
        class="rounded-borders q-my-xs row items-center"
        @click="selectOption(item)"
      >
        <q-item-section side top class="">
          <div class="box relative-position flex flex-center">
            <div class="absolute-center">
              <Transition name="bounce">
                <q-avatar
                  class=""
                  v-show="item.select"
                  size="25px"
                  font-size="25px"
                  color="transparent"
                  text-color="primary"
                  icon="check_box"
                  rounded
                />
              </Transition>
            </div>
          </div>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.item.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { checkPrime } from "crypto";
import { ref, defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  props: ["option"],
  setup() {
    return {
      select: ref([]),
    };
  },
  computed: {
    checkBoxs() {
      let mass = ref([]);
      for (let item of this.option.data.options) {
        mass.value.push({
          select: false,
          item: item,
        });
      }
      return mass.value;
    },
  },
  methods: {
    selectOption(item) {
      if (this.option.data.is_multiply) {
        if (item.select) {
          this.select = this.select.filter((sel) => sel != item.item.text);
          item.select = false;
        } else {
          item.select = true;
          this.select.push(item.item.text);
        }
      } else {
        for (let sel of this.checkBoxs) {
          sel.select = false;
        }
        this.select = [item.item.text];
        item.select = true;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.box {
  width: 22px;
  height: 22px;
  border: 3px solid $primary;
  border-radius: 4px;
}
</style>