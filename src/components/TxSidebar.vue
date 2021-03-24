<template>
  <nav class="tx-sidebar">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxIcon from "./TxIcon.vue";
export default defineComponent({
  components: { TxIcon },
  props: {
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
@import "../scss/animations";
.tx-sidebar {
  height: 100vh;
  background-color: $white;
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
