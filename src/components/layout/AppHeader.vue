<template>
  <header class="app-header">
    <h1 class="title app-header__title">
      <slot name="page-title"></slot>
    </h1>
    <ul class="app-header__links">
      <slot name="header-links"></slot>
    </ul>
    <div class="app-header__menu">
      <slot name="header-menu"></slot>
    </div>
  </header>
</template>

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
