<template>
  <div class="text-secondary text-h6">Применённые скидки в заказе</div>
  <div class="q-my-sm">
    <q-btn text-color="secondary" outline no-caps :ripple="false">
      <div class="text-subtitle1 text-secondary">Скидка 123</div>
      <q-separator class="full-width" />
      <div class="text-subtitle2 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam.
        Animi optio voluptatum quas! Ipsam quis praesentium, vel ipsa,
        exercitationem velit adipisci corporis laudantium facilis earum et id
        blanditiis nesciunt.
      </div>
    </q-btn>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({ viewDigital: "digital/viewDigital" }),
  },
});
</script>