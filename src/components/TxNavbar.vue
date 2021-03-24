<template>
  <nav class="navbar tx-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/">
        <img alt="logo" :src="logo" />
      </router-link>
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': menuActive }"
        aria-label="menu"
        :aria-expanded="showMenu"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="navbar-start tx-navbar--start">
        <slot name="start"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "./TxTitle.vue";
import TxButton from "./TxButton.vue";
import TxIcon from "./TxIcon.vue";
import TxDropdown from "./TxDropdown.vue";
export default defineComponent({
  components: { TxTitle, TxButton, TxIcon, TxDropdown },
  props: {
    logo: {
      type: String,
      required: false,
      default: "logo.svg",
    },
  },
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/animations";
@import "../scss/variables";

.tx-navbar {
  transform: translateY(-100%);
  animation: 0.5s 0s ease-in-out forwards slideInTop;
  padding: 0.5rem;
  margin: 0;

  &.navbar {
    padding: 0.75rem 1rem;
    height: 5rem;
    background-color: $black;
    position: sticky;
    top: 0;
    z-index: 1;
    box-shadow: $tx-drop-shadow;

    & .navbar-brand {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: $tx-breakpoint--mobile) {
        flex-direction: row;
        align-items: center;
      }

      & img {
        width: 10rem;
        height: auto;

        @media screen and (max-width: $tx-breakpoint--mobile) {
          width: 7rem;
        }
      }

      &.navbar-burger {
        color: $blue;

        &:hover {
          color: $blue;
        }
      }
    }
  }

  &__title {
    display: inline-block;
    @media screen and (max-width: $tx-breakpoint--mobile) {
      display: none;
    }
    &.navbar-item * {
      color: $black;
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
