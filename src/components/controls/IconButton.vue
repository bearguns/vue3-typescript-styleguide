<template>
  <button class="icon-button button" :class="`is-${status}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type status = "primary" | "info" | "success" | "warning" | "danger";
export default defineComponent({
  name: "IconButton",
  props: {
    status: {
      type: String as PropType<status>,
      required: false,
      default: "primary",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";

button.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  color: $black;

  &.is-status-success svg {
    color: $white;
  }

  &.is-status-danger svg {
    color: $white;
  }
}
</style>
