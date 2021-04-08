<template>
  <div class="color-swatch">
    <p class="color-swatch__hex">{{ color }}</p>
    <div class="color-swatch__color" :class="[mappedColor]"></div>
    <p class="color-swatch__label">{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    color: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    mappedColor() {
      return {
        primary: "has-background-primary",
        info: "has-background-info",
        success: "has-background-success",
        warning: "has-background-warning",
        danger: "has-background-danger",
        black: "has-background-black",
        gray: "bg-gray",
        "gray--light": "bg-gray bg-gray--light",
        "gray--lighter": "bg-gray bg-gray--lighter",
        "gray--lightest": "bg-gray bg-gray--lightest",
        "gray--dark": "bg-gray bg-gray--dark",
        "gray--darker": "bg-gray bg-gray--darker",
        "gray--darkest": "bg-gray bg-gray--darkest",
      }[this.color];
    },
  },
});
</script>

<style lang="scss">
@import "../../../scss/colors";
@import "../../../scss/variables";
.color-swatch {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__color {
    height: 6rem;
    width: 6rem;
  }

  &__hex {
    font-size: 1.25rem;
  }
}

.bg-gray {
  background-color: $gray;
  border: 1px solid $black;
  border-radius: $radius-small;

  &--light {
    background-color: $gray--light;
  }

  &--lighter {
    background-color: $gray--lighter;
  }

  &--lightest {
    background-color: $gray--lightest;
  }

  &--dark {
    background-color: $gray--dark;
  }

  &--darker {
    background-color: $gray--darker;
  }

  &--darkest {
    background-color: $gray--darkest;
  }
}
</style>
