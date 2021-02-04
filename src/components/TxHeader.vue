<template>
  <header class="tx-header navbar">
    <div class="navbar-brand">
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
export default defineComponent({
  components: { TxTitle },
});
</script>
<style lang="scss">
@import "../scss/colors";

.tx-header {
  &.navbar {
    background-color: $black;
  }
  height: 5.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  margin: 0;

  &__title.navbar-item * {
    color: $white;
  }
}
</style>
