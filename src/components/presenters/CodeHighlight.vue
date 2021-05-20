<template>
  <div class="code-highlight">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import * as hljs from "highlight.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CodeHighlight",
  setup() {},
  mounted() {
    hljs.highlightAll();
  },
});
</script>

<style lang="scss" scoped></style>
