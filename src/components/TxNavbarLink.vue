<template>
  <li class="tx-navbar-item">
    <router-link :to="{ name: to }" class="tx-navbar-item__link" href="">
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
});
</script>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/variables";
@import "../scss/typography";

.tx-navbar-item {
  text-align: left;
  width: 100%;
  padding: 0.5rem 1.75rem;

  &__link {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 1.75rem;
    font-weight: $font-weight--light;
    color: $white;
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
