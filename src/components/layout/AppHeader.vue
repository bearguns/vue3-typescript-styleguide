<template>
  <header class="app-header">
    <div class="app-header__title">
      <AppTitle :size="1">
        {{ title }}
      </AppTitle>
      <nav class="breadcrumb">
        <ul id="header-breadcrumbs"></ul>
      </nav>
    </div>
    <div class="app-header__menu">
      <UserMenu>
        <slot name="header-menu"></slot>
      </UserMenu>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./AppTitle.vue";
import { UserMenu } from "../controls";
export default defineComponent({
  name: "AppHeader",
  components: { AppTitle, UserMenu },
  props: {
    title: String,
  },
});
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.app-header {
  height: 5rem;
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 4;
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
