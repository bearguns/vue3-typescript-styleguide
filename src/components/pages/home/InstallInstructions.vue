<template>
  <div class="install-instructions">
    <div class="box">
      <CodeHighlight>
        <div class="install-instructions__content" v-html="markup"></div>
      </CodeHighlight>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { html } from "./install-instructions.md";
import { CodeHighlight } from "../../presenters";
export default defineComponent({
  name: "InstallInstructions",
  components: { CodeHighlight },
  setup() {
    return {
      markup: html,
    };
  },
});
</script>
