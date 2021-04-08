<template>
  <div class="app-wrapper">
    <div class="app-wrapper__sidebar">
      <AppSidebar>
        <template #logo>
          <slot name="logo"></slot>
        </template>
        <template #links>
          <slot name="sidebar-links" />
        </template>
      </AppSidebar>
    </div>
    <div class="app-wrapper__body">
      <div class="app-wrapper__header">
        <AppHeader>
          <template v-slot:page-title>
            {{ pageTitle }}
          </template>
        </AppHeader>
      </div>
      <div class="app-wrapper__content">
        <slot name="current-page"></slot>
      </div>
      <div id="notification-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
export default defineComponent({
  components: { AppSidebar, AppHeader },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";

.app-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: $body-background-color;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: $tx-breakpoint--mobile) {
    grid-template-columns: 1fr;
  }

  &__header {
    width: 100%;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 14;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__content {
    width: 100%;
    height: auto;
  }
}

#notification-center {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: auto;
  padding: 1.75rem;
}
</style>
