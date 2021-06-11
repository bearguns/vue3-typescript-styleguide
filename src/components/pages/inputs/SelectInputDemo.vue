<template>
  <div class="box">
    <div class="block">
      <p class="title is-size-3">SelectInput</p>
      <p>
        By providing an array of options with <code>{ label: String, value: String}</code> properties, render a select
        element.
      </p>
      <p>{{ currentOption }}</p>
    </div>
    <SelectInput :options="options" v-model="currentOption" name="select-demo" label="Select an option:" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SelectInput } from "../../inputs";

export default defineComponent({
  name: "SelectInputDemo",
  components: { SelectInput },
  setup() {
    const currentOption = ref("option_1");
    const options = [
      { label: "Option 1", value: "option_1" },
      { label: "Option 2", value: "option_2" },
    ];
    return {
      currentOption,
      options,
    };
  },
});
</script>
