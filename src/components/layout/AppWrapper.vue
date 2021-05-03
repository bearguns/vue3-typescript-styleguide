<template>
  <div class="app-wrapper">
    <div class="app-wrapper__sidebar">
      <AppSidebar v-if="sidebar">
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
            <slot name="header-brand"></slot>
            {{ pageTitle }}
          </template>
          <template #header-links>
            <slot name="header-links"></slot>
          </template>
          <template #header-menu>
            <slot name="header-menu"></slot>
          </template>
        </AppHeader>
      </div>
      <div class="app-wrapper__content">
        <slot name="current-page"></slot>
      </div>
      <NotificationCenter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
import { NotificationCenter } from "../presenters";
export default defineComponent({
  name: "AppWrapper",
  components: { AppSidebar, AppHeader, NotificationCenter },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    sidebar: {
      type: Boolean,
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
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: $tx-breakpoint--mobile) {
    grid-template-columns: 1fr;
  }

  &:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
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
</style>
