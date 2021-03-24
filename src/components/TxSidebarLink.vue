<template>
  <li class="tx-navbar-item">
    <router-link
      :to="{ name: to }"
      class="tx-navbar-item__link"
      :class="{ 'tx-navbar-item__link--active': active }"
      href=""
    >
      <slot></slot>
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
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
@import "../scss/typography";
@import "../scss/animations";

.tx-navbar-item {
  text-align: left;
  width: 100%;
  padding: 0.5rem 1.75rem;
  &__link {
    transition: color 0.2s ease-in-out;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 1.75rem;
    font-weight: $font-weight--light;
    color: $white;
    &--active {
      border-bottom: 2px solid $blue;
      color: $blue;
    }

    &:hover {
      color: $blue;
    }

    & svg {
      stroke-width: 1;
    }

    & span {
      margin-left: 0.5rem;
    }

    @media screen and (max-width: $tx-breakpoint--desktop) {
      flex-direction: column;

      & span {
        font-size: 1rem;
        margin-left: 0;
      }
    }

    @media screen and (max-width: $tx-breakpoint--mobile) {
      flex-direction: initial;

      font-size: 2.25rem;
      & span {
        font-size: 2.25rem;
        margin-left: 0.75rem;
      }
    }
  }
}
</style>
