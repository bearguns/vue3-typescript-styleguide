<template>
  <div class="block">
    <p class="title">AppSwitch</p>
    <p>The <code>AppSwitch</code> component behaves like a checkbox, returning a true/false boolean to its parent.</p>
    <AppSwitch v-model="switchState" label="My setting" />
    <p class="is-size-5">Switch state: {{ switchState }}</p>
    <CodeHighlight>
      <div class="block" v-html="html"></div>
    </CodeHighlight>
    <AppSwitch v-model="disabledButOn" label="Disabled switch in 'on' state" :disabled="true" />
    <AppSwitch v-model="disabledAndOff" label="Disabled switch in 'off' state" :disabled="true" />
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
    const disabledButOn = ref(true);
    const disabledAndOff = ref(false);
    return {
      switchState,
      disabledButOn,
      disabledAndOff,
      html,
    };
  },
});
</script>
