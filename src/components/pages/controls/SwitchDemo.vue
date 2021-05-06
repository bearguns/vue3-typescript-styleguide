<template>
  <div class="block">
    <p class="title">AppSwitch</p>
    <p>The <code>AppSwitch</code> component behaves like a checkbox, returning a true/false boolean to its parent.</p>
    <AppSwitch v-model="switchState" label="My setting" />
    <p class="is-size-5">Switch state: {{ switchState }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppSwitch } from "../../controls";
export default defineComponent({
  name: "SwitchDemo",
  components: { AppSwitch },
  setup() {
    const switchState = ref(false);
    return {
      switchState,
    };
  },
});
</script>
