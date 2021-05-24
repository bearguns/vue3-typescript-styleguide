<template>
  <header class="app-header">
    <MenuIcon v-if="isMobile" size="2x" @click="$emit('toggle')" />
    <div class="app-header__title">
      <AppTitle :size="isMobile ? 3 : 1">
        {{ title }}
      </AppTitle>
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
import { MenuIcon } from "../icons";
export default defineComponent({
  name: "AppHeader",
  components: { AppTitle, UserMenu, MenuIcon },
  emits: ["toggle"],
  props: {
    title: String,
  },
  setup(props) {
    return {
      isMobile: window.innerWidth > 768 ? false : true,
    };
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

  @media screen and (max-width: 768px) {
    position: static;
  }
}
</style>
