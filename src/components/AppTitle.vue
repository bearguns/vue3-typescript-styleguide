<template>
  <component class="app-title" :is="titleEl" :class="[titleClass, statusClass]">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 1,
    },
    status: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props: any) {
    const titleEl = computed((): string => {
      return `h${props.size}`;
    });
    const titleClass = computed((): string => {
      return `is-size-${props.size}`;
    });
    const statusClass = computed((): string => {
      if (props.status) {
        return `has-text-${props.status}`;
      }
      return "";
    });

    return { titleEl, titleClass, statusClass };
  },
};
</script>

<style lang="scss" scoped>
.app-title {
  text-align: left;
  margin-bottom: 0.75rem;
}
</style>
