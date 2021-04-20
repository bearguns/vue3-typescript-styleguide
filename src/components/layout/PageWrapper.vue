<template>
  <div class="page-wrapper">
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
}
</style>
