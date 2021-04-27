<template>
  <header class="app-header">
    <AppTitle :size="3">
      <slot name="page-title"></slot>
    </AppTitle>
    <ul class="app-header__links">
      <slot name="header-links"></slot>
    </ul>
    <div class="app-header__menu">
      <AppDropdown>
        <slot name="header-menu"></slot>
      </AppDropdown>
    </div>
  </header>
  <AppSubmenu />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./AppTitle.vue";
import AppSubmenu from "./AppSubmenu.vue";
import { AppDropdown } from "../controls";

export default defineComponent({
  name: "AppHeader",
  components: { AppTitle, AppSubmenu, AppDropdown },
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
  justify-content: flex-start;
  align-items: center;

  &__title.title {
    display: inline-block;
    margin-bottom: 0px;
  }

  &__links {
    padding: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }

  &__menu {
    align-self: flex-end;
  }
}
</style>
