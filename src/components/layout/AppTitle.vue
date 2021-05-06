<template>
  <component class="title app-title" :is="`h${size}`" :class="[titleClass, statusClass]">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type status = "success" | "danger" | "info" | "warning";
export default defineComponent({
  name: "AppTitle",
  props: {
    size: {
      type: Number,
      required: false,
      default: 1,
    },
    status: {
      type: String as PropType<status>,
      required: false,
      default: "",
    },
  },
  setup(props) {
    return {
      titleClass: computed(() => `is-size-${props.size}`),
      statusClass: computed(() => (props.status ? `has-text-${props.status}` : "")),
    };
  },
});
</script>

<style lang="scss" scoped>
.title.app-title {
  margin-bottom: 0.75rem;
}
</style>
