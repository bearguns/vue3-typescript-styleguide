<template>
  <div class="app-wrapper">
    <AppSidebar>
      <template #logo>
        <slot name="sidebar-logo"></slot>
      </template>
      <template #links>
        <slot name="sidebar-links" />
      </template>
    </AppSidebar>
    <div class="app-wrapper__content">
      <slot></slot>
    </div>
    <NotificationCenter :loading="loading" />
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
    loading: {
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

  &:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__content {
    padding-left: 16rem;
    width: 100%;
    height: auto;
  }
}
</style>
