<template>
  <div class="splash">
    <div class="splash__overlay"></div>
    <div class="splash-header">
      <div class="splash-header__logo">
        <slot name="logo"></slot>
      </div>
      <div class="splash-header__links">
        <slot name="header-links"></slot>
      </div>
    </div>
    <div class="splash__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../scss/colors";
@import "../../scss/variables";

.splash {
  width: 100vw;
  height: 100vh;
  padding: 1rem 2rem;
  margin: 0;
  background-image: linear-gradient(to right top, #41a6c5, #00b6c8, #00c4b9, #00cf9a, #42d76f);
}
.splash-header {
  position: relative;
  padding: 0.75rem 1.5rem;
  width: 90%;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 55px;
  background-color: $white;
  box-shadow: $tx-drop-shadow;

  &__logo {
    & img {
      height: 2rem;
      width: auto;
    }
  }
}
</style>
