<template>
  <transition name="slide">
    <div class="loading-banner container" v-if="show">
      <div class="loading-banner__content">
        <LoaderIcon size="3x" color="white" :spin="true" />
        <AppTitle :size="2">Loading...</AppTitle>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLoader from "./AppLoader.vue";
import { LoaderIcon } from "../icons";
import { AppTitle } from "../layout";
export default defineComponent({
  name: "LoadingBanner",
  components: { AppLoader, AppTitle, LoaderIcon },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-enter-to {
  transform: translateY(0);
}

.slide-leave-from {
  transform: translateY(0);
}

.slide-leave-to {
  transform: translateY(100%);
}

.loading-banner {
  width: 100%;
  height: 5.5rem;
  position: absolute;
  z-index: 9;
  right: 0;
  bottom: 0;
  background-color: $info;

  &__content {
    color: $white;
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & h2 {
      color: white;
    }
  }
}
</style>
