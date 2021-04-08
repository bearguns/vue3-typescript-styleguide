<template>
  <div class="controls-page">
    <AppTitle>Controls</AppTitle>
    <AppPanel title="Buttons & Switches">
      <div class="columns">
        <div class="column">
          <AppSwitch v-model="switch1" label="Switch (checkbox)" />
        </div>
      </div>
    </AppPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppPanel, AppTitle } from "../components/layout";
import { AppSwitch } from "../components/controls";
export default defineComponent({
  components: { AppPanel, AppTitle, AppSwitch },
  setup() {
    const switch1 = ref(false);

    return {
      switch1,
    };
  },
});
</script>
