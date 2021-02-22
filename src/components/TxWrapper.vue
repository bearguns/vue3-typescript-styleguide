<template>
  <main class="tx-app">
    <div class="tx-app__navbar">
      <TxNavbar :active="showNav" @toggle="toggleNavbar">
        <template v-slot:logo>
          <slot name="appLogo"></slot>
        </template>
        <template v-slot:nav>
          <slot name="navMenu"></slot>
        </template>
      </TxNavbar>
    </div>
    <div class="tx-app__content">
      <TxHeader @toggle="toggleNavbar">
        <template v-slot:title>
          <slot name="pageTitle"></slot>
        </template>
        <template v-slot:actions>
          <slot name="headerActions"></slot>
        </template>
      </TxHeader>
      <div class="tx-app__view">
        <slot name="content"></slot>
      </div>
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
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNavbar(): void {
      this.showNav = !this.showNav;
    },
  },
});
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/animations";

.tx-app {
  height: 100%;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar" "content";

  @media screen and (max-width: $tx-breakpoint--mobile) {
    grid-template-columns: 1fr;
    padding: 0px;
  }

  &__navbar {
    grid-area: "sidebar";
    grid-row: span 1;

    @media screen and (max-width: $tx-breakpoint--mobile) {
      grid-area: none;
    }
  }

  &__content {
    padding-left: 1rem;
    grid-area: "content";
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    @media screen and (max-width: $tx-breakpoint--mobile) {
      padding: 0px;
    }
  }

  &__view {
    overflow: auto;
    opacity: 0;
    animation: 0.25s 0.5s linear forwards fadeIn;
  }
}
</style>
