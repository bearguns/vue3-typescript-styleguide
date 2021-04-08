<template>
  <div class="page-wrapper">
    <div class="page-wrapper__submenu" v-if="$slots.submenu">
      <slot name="submenu"></slot>
    </div>
    <div class="page-wrapper__content">
      <section class="section">
        <slot name="content"></slot>
      </section>
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

  &__submenu {
    width: 100%;
    height: auto;
    min-height: 3.55rem;
    background-color: $gray--lightest;
    box-shadow: $tx-drop-shadow;
  }
}
</style>
