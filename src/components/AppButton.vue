<template>
  <button class="button app-button" :class="[statusClass, sizeClass]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppButton",
  props: {
    status: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: String,
      required: false,
      default: "normal",
    },
  },
  computed: {
    sizeClass(): string {
      return `is-${this.size}`;
    },
    statusClass(): string {
      return this.status && `is-${this.status}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .icon svg {
    margin: 0 auto;
  }
}
</style>
