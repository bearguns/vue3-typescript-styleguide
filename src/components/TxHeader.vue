<template>
  <header class="tx-header navbar">
    <div class="navbar-brand">
      <div class="tx-header__toggle">
        <TxIcon icon="menu" size="3x" @click="$emit('toggle')" />
      </div>
      <div class="navbar-item tx-header__title">
        <TxTitle :size="3">
          <slot name="title"></slot>
        </TxTitle>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "./TxTitle.vue";
import TxButton from "./TxButton.vue";
import TxIcon from "./TxIcon.vue";
export default defineComponent({
  components: { TxTitle, TxButton, TxIcon },
  emits: ["toggle"],
  data() {
    return {
      menuActive: false,
    };
  },
});
</script>
<style lang="scss">
@import "../scss/colors";
@import "../scss/animations";
@import "../scss/variables";

.tx-header {
  transform: translateY(-100%);
  animation: 0.5s 0s ease-in-out forwards slideInTop;
  padding: 0.5rem 0.25rem;
  margin: 0;

  &__toggle {
    color: $white;
  }

  &__logo {
    display: none;
    & img {
      display: none;
    }
    @media screen and (max-width: $tx-breakpoint--mobile) {
      display: inline-block;

      & img {
        display: inherit;
      }
    }
  }

  &.navbar {
    background-color: $black;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  &__title {
    display: inline-block;
    @media screen and (max-width: $tx-breakpoint--mobile) {
      display: none;
    }
    &.navbar-item * {
      color: $white;
    }
  }
}
.tx-header__toggle {
  margin-right: 1rem;
  cursor: pointer;
  @media screen and (min-width: $tx-breakpoint--mobile) {
    display: none;
  }
}
</style>
