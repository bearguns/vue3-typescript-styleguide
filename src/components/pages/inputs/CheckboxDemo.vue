<template>
  <div class="block">
    <p class="title">Checkbox</p>
    <p>
      The <code>CheckBox</code> component wraps a standard HTML checkbox and returns true/false to its parent
      <code>v-model</code>.
    </p>
    <CheckBox v-model="checkboxState" label="Checkbox (input)" />
    <p class="is-size-5">Checkbox state: {{ checkboxState }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CheckBox } from "../../inputs";
export default defineComponent({
  name: "CheckboxDemo",
  components: { CheckBox },
  setup() {
    return {
      checkboxState: ref(false),
    };
  },
});
</script>
