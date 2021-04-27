<template>
  <div class="controls-page box">
    <AppTitle>Controls</AppTitle>
    <p>A number of pre-styled controls are available for use across applications.</p>
    <AppPanel title="Buttons & Switches">
      <div class="columns">
        <div class="column">
          <div class="block">
            <AppSwitch v-model="switch1" label="Switch (checkbox)" />
            <p class="is-size-5">Switch state: {{ switch1 }}</p>
            <p>
              The <code>AppSwitch</code> component behaves like a checkbox, returning a true/false boolean to its
              parent.
            </p>
          </div>
          <div class="block">
            <CheckBox v-model="switch2" label="Checkbox (input)" />
            <p>
              The <code>CheckBox</code> component wraps a standard HTML checkbox and returns true/false to its parent
              <code>v-model</code>.
            </p>
            <p class="is-size-5">Checkbox state: {{ switch2 }}</p>
          </div>
        </div>
        <div class="column">
          <AppDropdown label="Dropdown" :rounded="true">
            <template #label>
              <UserIcon />
            </template>
            <li class="dropdown-item is-size-4">Item 1</li>
            <li class="dropdown-item is-size-4">Item 2</li>
            <li class="dropdown-item is-size-4">Item 3</li>
            <li class="dropdown-item is-size-4">Item 4</li>
          </AppDropdown>
        </div>
      </div>
    </AppPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppPanel, AppTitle } from "../components/layout";
import { AppSwitch, AppDropdown } from "../components/controls";
import { CheckBox } from "../components/inputs";
import { UserIcon } from "../components/icons";

export default defineComponent({
  components: { UserIcon, AppPanel, AppTitle, AppSwitch, AppDropdown, CheckBox },
  setup() {
    const switch1 = ref(false);
    const switch2 = ref(true);
    return {
      switch1,
      switch2,
    };
  },
});
</script>
