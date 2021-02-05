<template>
  <main class="tx-app">
    <TxNavbar>
      <template v-slot:logo>
        <slot name="appLogo"></slot>
      </template>
      <template v-slot:nav>
        <slot name="navMenu"></slot>
      </template>
    </TxNavbar>
    <TxHeader>
      <template v-slot:title>
        <slot name="pageTitle"></slot>
      </template>
      <template v-slot:actions>
        <slot name="headerActions"></slot>
      </template>
    </TxHeader>
    <div class="tx-app__content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxNavbar from "./TxNavbar.vue";
import TxHeader from "./TxHeader.vue";
export default defineComponent({
  name: "TxWrapper",
  components: { TxNavbar, TxHeader },
});
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/animations";

.tx-app {
  padding-left: 16rem;

  @media screen and (max-width: $tx-breakpoint--desktop) {
    padding-left: 6rem;
  }

  &__content {
    opacity: 0;
    animation: 0.25s 0.5s linear forwards fadeIn;
  }
}
</style>
