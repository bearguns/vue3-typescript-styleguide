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

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";

.app-sidebar {
  position: sticky;
  left: 0;
  top: 0;
  width: auto;
  min-width: 12rem;
  min-height: 100vh;
  background-color: $black;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: $tx-breakpoint--mobile) {
    position: relative;
  }
}

.app-nav {
  padding: 1.25rem 0.75rem;

  &__logo {
    width: 75%;
    height: auto;
    margin: 0 auto;
  }

  &__menu {
    margin-top: 1.75rem;
    padding: 1.25rem;
  }
}
</style>
