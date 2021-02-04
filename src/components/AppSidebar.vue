<template>
  <nav class="tx-sidebar hero">
    <ul class="tx-sidebar-menu">
      <slot></slot>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss">
@import "../scss/variables";
@import "../scss/colors";

.tx-sidebar {
  position: relative;
  height: 100%;
  width: 16.25rem;
  left: 0;
  top: 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $black;

  & ul.tx-sidebar-menu {
    padding: 0.75rem;
    margin: 0 auto;
  }

  @media screen and (max-width: $tx-breakpoint--mobile) {
    width: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 1rem;
    transition: width 0.25s cubic-bezier();

    &--active {
      width: 100vw;
    }
  }
}
</style>
