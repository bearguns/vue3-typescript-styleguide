<template>
  <div class="popup" v-if="popupMessage.title">
    <div class="popup__icon">
      <component :is="icon" size="4x" :color="popupMessage.status || 'info'" />
    </div>
    <div class="popup__title">
      <AppTitle :size="3" :status="popupMessage.status">{{ popupMessage.title }}</AppTitle>
    </div>
    <div class="popup__body">
      <p class="is-size-5">{{ popupMessage.text || "" }}</p>
    </div>
    <div class="field" v-if="popupMessage.showConfirm">
      <div class="control">
        <AppButton status="primary" @click="deregisterPopup">OK</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { popupMessage, deregisterPopup } from "../../composers/notifications";
import { AppTitle } from "../layout";
import { AlertIcon, CheckCircleIcon, InfoIcon } from "../icons";
import { AppButton } from "../controls";
export default defineComponent({
  name: "PopupNotification",
  components: { AlertIcon, CheckCircleIcon, InfoIcon, AppButton, AppTitle },
  setup() {
    const icon = computed(() => {
      switch (popupMessage.status) {
        case "danger":
          return AlertIcon;
        case "success":
          return CheckCircleIcon;
        case "info":
          return InfoIcon;
        default:
          return InfoIcon;
      }
    });
    return {
      popupMessage,
      deregisterPopup,
      icon,
    };
  },
});
</script>

<style lang="scss">
@import "../../scss/colors";
@import "../../scss/variables";

@keyframes popupSlideIn {
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

@keyframes shrink {
  0% {
    width: 100%;
  }
  25% {
    width: 75%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 25%;
  }
  100% {
    width: 0%;
  }
}
.popup {
  height: 18rem;
  width: 24rem;
  padding: 1.25rem 0.75rem;
  background-color: $white;
  border-radius: $radius;
  box-shadow: $tx-drop-shadow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) popupSlideIn;
  animation-fill-mode: forwards;

  &__body {
    text-align: center;
  }

  &::after {
    content: "";
    height: 2px;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: $gray--dark;
    animation: 7s linear shrink;
  }
}
</style>
