<template>
  <nav class="tx-navbar">
    <div class="tx-navbar__logo">
      <slot name="logo"></slot>
    </div>
    <div class="tx-navbar__menu">
      <ul class="tx-navbar-nav">
        <slot name="nav"></slot>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/variables";

.tx-navbar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 6rem;
  padding: 2.25rem 0.75rem;
  background-color: $black;
  border-right: 3px solid $blue;
  @media screen and (min-width: $tx-breakpoint--desktop) {
    width: 16rem;
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3.25rem;
  }

  &__menu ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
