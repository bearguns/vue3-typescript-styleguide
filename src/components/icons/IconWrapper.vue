<template>
  <div class="app-icon" :class="colorClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { defaultProps, iconColor } from "../../composers/icons";
export default defineComponent({
  props: {
    ...defaultProps(),
  },
  setup(props) {
    const colorClass = iconColor(props);
  },
});
</script>

<style lang="scss">
.app-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
