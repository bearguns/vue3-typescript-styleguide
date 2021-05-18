<template>
  <div class="block">
    <p class="title">AppSwitch</p>
    <p>The <code>AppSwitch</code> component behaves like a checkbox, returning a true/false boolean to its parent.</p>
    <AppSwitch v-model="switchState" label="My setting" />
    <p class="is-size-5">Switch state: {{ switchState }}</p>
    <CodeHighlight>
      <div class="block" v-html="html"></div>
    </CodeHighlight>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppSwitch } from "../../controls";
import { CodeHighlight } from "../../presenters";
import { html } from "./switch-demo.md";
export default defineComponent({
  name: "SwitchDemo",
  components: { AppSwitch, CodeHighlight },
  setup() {
    const switchState = ref(false);
    return {
      switchState,
      html,
    };
  },
});
</script>
