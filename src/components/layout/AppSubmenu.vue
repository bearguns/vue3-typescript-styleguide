<template>
  <div class="app-header__submenu" id="submenu">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppSubmenu",
  setup(props, { slots }) {
    return { slots };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
@import "../../scss/colors";
.app-header__submenu {
  position: sticky;
  z-index: 12;
  top: 5.5rem;
  width: 100%;
  height: auto;
  max-height: 4.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  background-color: $gray--lightest;
  box-shadow: $tx-drop-shadow;

  &:empty {
    display: none;
  }
}
</style>
