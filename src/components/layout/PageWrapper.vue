<template>
  <div class="page-wrapper">
    <div class="page-wrapper__submenu" v-if="$slots.submenu">
      <slot name="submenu"></slot>
    </div>
    <div class="page-wrapper__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    padding: 1.5rem 1rem;
  }

  &__submenu {
    position: sticky;
    z-index: 12;
    top: 5.5rem;
    width: 100%;
    height: 4.25rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: $gray--lightest;
    box-shadow: $tx-drop-shadow;
  }
}
</style>
