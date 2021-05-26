<template>
  <div class="controls-page">
    <div class="block">
      <AppTitle>Controls</AppTitle>
      <p>A number of pre-styled controls are available for use across applications.</p>
      <p>Imported as named exports from <code>src/components/controls</code></p>
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">
          <SwitchDemo />
        </div>
        <div class="column">
          <div class="block">
            <p class="title">AppDropdown</p>
            <p>AppDropdown provides a slot for passing links or other items to a dropdown menu.</p>
            <p>
              Additionally, rather than a <code>label</code> prop, a slot named <code>label</code> is exposed, allowing
              the label to be an icon or text.
            </p>
          </div>
          <AppDropdown>
            <template #label>
              <UserIcon />
            </template>
            <li class="dropdown-item is-size-4">Item 1</li>
            <li class="dropdown-item is-size-4">Item 2</li>
            <li class="dropdown-item is-size-4">Item 3</li>
            <li class="dropdown-item is-size-4">Item 4</li>
          </AppDropdown>
          <AppDropdown>
            <template #label>Dropdown</template>
          </AppDropdown>
        </div>
      </div>
    </div>
    <ButtonsDemo />
    <IconButtons />
    <div class="columns">
      <div class="column is-one-third">
        <SearchSelectDemo />
      </div>
      <div class="column is-one-third">
        <SearchSelectSingleDemo />
      </div>
    </div>
    <PaginationDemo />
    <SearchDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppPanel, AppTitle } from "../components/layout";
import { AppSwitch, AppDropdown } from "../components/controls";
import { CheckBox } from "../components/inputs";
import { UserIcon } from "../components/icons";
import {
  SwitchDemo,
  ButtonsDemo,
  PaginationDemo,
  SearchDemo,
  SearchSelectDemo,
  SearchSelectSingleDemo,
  IconButtons,
} from "../components/pages/controls";
export default defineComponent({
  components: {
    UserIcon,
    AppPanel,
    AppTitle,
    SwitchDemo,
    ButtonsDemo,
    AppDropdown,
    CheckBox,
    PaginationDemo,
    SearchDemo,
    SearchSelectDemo,
    SearchSelectSingleDemo,
    IconButtons,
  },
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
