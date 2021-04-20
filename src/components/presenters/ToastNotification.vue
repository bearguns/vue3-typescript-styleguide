<template>
  <div
    class="toast"
    :class="{
      'toast--error': msg.status === 'danger',
      'toast--success': msg.status === 'success',
      'toast--info': msg.status === 'info',
    }"
  >
    <InfoIcon color="white" v-if="msg.status === 'info'" />
    <CheckCircleIcon color="white" v-if="msg.status === 'success'" />
    <AlertIcon color="white" v-if="msg.status === 'danger'" />
    {{ msg.text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { InfoIcon, CheckCircleIcon, AlertIcon } from "../icons";
import { Toast } from "../../composers/notifications";
export default defineComponent({
  name: "ToastNotification",
  components: { InfoIcon, CheckCircleIcon, AlertIcon },
  props: {
    msg: {
      type: Object as PropType<Toast>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
@import "../../scss/colors";
@keyframes toastSlideIn {
  0% {
    transform: translateX(110%);
  }
  80% {
    transform: translateX(-20%);
    transform: skew(10deg);
  }
  90% {
    transform: translateX(10%);
    transform: skew(-10deg);
  }
  100% {
    transform: translateX(0);
  }
}

.toast {
  width: 15rem;
  height: 5rem;
  padding: 1.25rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  box-shadow: $tx-drop-shadow;
  color: $white;
  margin-bottom: 0.75rem;
  border-radius: $radius-small;
  animation: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) toastSlideIn;
  animation-fill-mode: forwards;

  &--exiting {
    animation: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) toastSlideOut;
  }
  &--error {
    background-color: $red;
  }
  &--success {
    background-color: $success;
  }
  &--info {
    background-color: $info;
  }
}
</style>
