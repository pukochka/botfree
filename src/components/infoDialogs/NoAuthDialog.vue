<template>
  <q-dialog v-model="viewDialogs.auth" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <component
          async
          :is="'script'"
          src="https://telegram.org/js/telegram-widget.js?19"
          :data-telegram-login="viewUser.bot_data.name"
          :data-onauth="GetDataByDomain({ user: user, action: 'website' })"
          data-size="large"
          data-radius="4"
          data-request-access="write"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Отмена"
          color="secondary"
          no-caps
          no-wrap
          @click="changeDialogs('auth')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, defineComponent } from "vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    ...mapGetters({
      viewDialogs: "user/viewDialogs",
      viewUser: "user/viewUser",
    }),
    localion() {
      return window.location.href;
    },
  },
  methods: {
    ...mapActions({ GetDataByDomain: "user/GetDataByDomain" }),
    ...mapMutations({ changeDialogs: "user/changeDialogs" }),
  },
});
</script>