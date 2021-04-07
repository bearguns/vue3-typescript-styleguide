<template>
  <div class="field tx-input-field">
    <label
      class="label has-text-primary is-medium tx-input-field__wrapper"
      :class="labelClasses"
      :for="name"
      :data-qa="`${name}_label`"
    >
      {{ label }}
    </label>
    <div class="control tx-input-field__input">
      <slot name="input"></slot>
    </div>
    <p class="help">
      {{ helpMsg }}
    </p>
    <p class="help is-success">
      {{ successMsg }}
    </p>
    <p class="help is-danger">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import { defaultProps, classBindings } from "../../composers/inputs.ts";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "TxInput",
  props: {
    ...defaultProps(),
  },
  setup(props) {
    const labelClasses = computed(() => {
      return {
        "has-text-danger": props.errorMsg,
        "has-text-success": props.successMsg || props.isValid,
      };
    });

    return {
      labelClasses,
    };
  },
});
</script>
