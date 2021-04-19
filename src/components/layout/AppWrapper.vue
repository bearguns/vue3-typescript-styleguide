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
    background-size: auto, cover;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2341a6c5' fill-opacity='0.34'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
