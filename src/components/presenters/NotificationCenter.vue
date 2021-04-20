<template>
  <div id="notification-center">
    <ToastNotification v-for="msg in toastMessages" :key="msg.id" :msg="msg" />
    <PopupNotification />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { toastMessages, popupMessage, toast, popup } from "../../composers/notifications";
import { AppButton } from "../controls";
import PopupNotification from "./PopupNotification.vue";
import ToastNotification from "./ToastNotification.vue";
export default defineComponent({
  name: "NotificationCenter",
  components: { AppButton, PopupNotification, ToastNotification },
  setup() {
    return {
      toastMessages,
    };
  },
});
</script>

<style lang="scss" scoped>
#notification-center {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: auto;
  padding: 1.75rem;
}
</style>
