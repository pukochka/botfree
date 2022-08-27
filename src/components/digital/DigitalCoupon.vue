<template>
  <div class="">
    <q-input
      v-model="coupon"
      type="text"
      label="Ввести купон"
      color="secondary"
      bg-color="primary"
      class="rounded-borders"
      dense
      borderless
      outlined
    />
    <div class="text-caption text-weight-bold text-red">
      Введен неверный купон
    </div>
    <q-btn text-color="secondary" outline no-caps :ripple="false">
      <div class="text-subtitle1 text-secondary">Купон 123</div>
      <q-separator class="full-width" />
      <div class="text-subtitle2 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.
        Animi optio voluptatum quas! Ipsam quis praesentium, vel ipsa,
        exercitationem velit adipisci corporis laudantium facilis earum et id
        blanditiis nesciunt.
      </div>
      <div class="flex justify-end full-width q-pa-sm">
        <q-btn
          dense
          flat
          color="red"
          icon="close"
          no-caps
          no-wrap
          label="Удалить"
          @click="onClick"
        />
      </div>
    </q-btn>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {
      coupon: ref(""),
    };
  },
});
</script>