<template>
  <header class="app-header">
    <AppTitle :size="3">
      <slot name="page-title"></slot>
    </AppTitle>
    <div class="app-header__links">
      <slot name="header-links"></slot>
    </div>
    <div class="app-header__menu">
      <slot name="header-menu"></slot>
    </div>
  </header>
  <AppSubmenu />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./AppTitle.vue";
import AppSubmenu from "./AppSubmenu.vue";

export default defineComponent({
  name: "AppHeader",
  components: { AppTitle, AppSubmenu },
});
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.app-header {
  height: 5.5rem;
  width: 100%;
  padding: 1.25rem 0.75rem;
  background-color: $white;
  box-shadow: $tx-drop-shadow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__title.title {
    display: inline-block;
    margin-bottom: 0px;
  }

  &__links {
    padding: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    flex-grow: 1;
    margin-right: 0.75rem;
  }

  &__menu {
    align-self: flex-end;
  }
}
</style>
