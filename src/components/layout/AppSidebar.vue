<template>
  <div class="app-sidebar">
    <nav class="app-nav">
      <div class="app-nav__logo">
        <slot name="logo"></slot>
      </div>
      <ul class="app-nav__menu">
        <slot name="links"></slot>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppSidebar",
});
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";

.app-sidebar {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 16rem;
  min-width: 8rem;
  min-height: 100vh;
  background-color: $black;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: $tx-breakpoint--mobile) {
    position: relative;
  }
}

.app-nav {
  padding: 2.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__logo {
    width: 80%;

    & img {
      margin: 0 auto;
    }
  }

  &__menu {
    margin-top: 1.75rem;
    padding: 1.25rem;
    text-align: left;
  }
}
</style>
