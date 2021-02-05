<template>
  <li class="tx-navbar-item">
    <router-link
      :to="{ name: to }"
      class="tx-navbar-item__link"
      :class="{ 'tx-navbar-item__link--active': isActive }"
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
  },
  computed: {
    isActive(): boolean {
      return this.$route.name === this.to;
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
    transition: color 0.25s ease-in-out;
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
  }
}
</style>
