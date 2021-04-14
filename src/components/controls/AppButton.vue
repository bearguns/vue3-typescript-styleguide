<template>
  <button class="button" :class="classBindings" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { status } from "../../composers";
export default defineComponent({
  props: {
    status: {
      type: String as PropType<status>,
      required: false,
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const classBindings = computed(() => {
      return {
        "is-rounded": props.rounded,
        "is-success": props.status === "success",
        "is-danger": props.status === "danger",
        "is-warning": props.status === "warning",
        "is-info": props.status === "info",
        "is-primary": props.status === "primary",
        "is-outlined": props.secondary === true,
      };
    });

    return {
      classBindings,
    };
  },
});
</script>
