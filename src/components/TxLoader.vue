<template>
  <div class="app-loader">
    <div class="app-loader__icon">
      <AppIcon icon="loader" size="4x" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppIcon from "./AppIcon.vue";

export default defineComponent({
  name: "AppLoader",
  components: { AppIcon },
});
</script>

<style lang="scss" scoped>
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.app-loader {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    animation: rotate 1.5s linear infinite;
  }
}
</style>
