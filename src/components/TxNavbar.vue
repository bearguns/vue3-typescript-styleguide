<template>
  <nav class="tx-navbar" :class="{ 'tx-navbar--active': active }">
    <div class="tx-navbar__content">
      <div class="tx-navbar__logo">
        <slot name="logo"></slot>
        <div class="tx-navbar__button">
          <TxIcon icon="close" size="3x" @click="$emit('toggle')" />
        </div>
      </div>
      <div class="tx-navbar__menu">
        <ul class="tx-navbar-nav" @click="$emit('toggle')">
          <slot name="nav"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxIcon from "./TxIcon.vue";
export default defineComponent({
  components: { TxIcon },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/variables";
@import "../scss/animations";

.tx-navbar {
  transform: translateX(-100%);
  animation: 0.25s 0.25s ease-out forwards slideInLeft;
  min-height: 100%;
  padding: 1.75rem 0.5rem;
  background-color: $black;
  border-right: 3px solid $blue;
  z-index: 3;

  @media screen and (max-width: $tx-breakpoint--tablet) {
    width: 6rem;
  }
  @media screen and (min-width: $tx-breakpoint--desktop) {
    width: 16rem;
  }

  &__content {
    position: sticky;
    top: 1.75rem;
    left: 0;
    overflow: hidden;
  }

  &__logo {
    opacity: 0;
    animation: 0.75s 0.5s linear forwards fadeIn;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.25rem;

    @media screen and (max-width: $tx-breakpoint--mobile) {
      justify-content: space-between;
    }
  }

  &__button {
    @media screen and (min-width: $tx-breakpoint--mobile) {
      display: none;
    }
    color: $red;
    margin-bottom: -0.75rem;
  }

  &__menu ul {
    opacity: 0;
    animation: 0.75s 0.5s ease forwards fadeIn;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: $tx-breakpoint--mobile) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 0px;
    height: 100vh;
    padding: 0;
    transition: width 0.2s ease-in-out;
    &--active {
      width: 75vw;
      padding: 0.75rem 0.5rem;
    }
  }
}
</style>
