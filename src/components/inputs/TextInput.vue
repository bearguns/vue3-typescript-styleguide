<template>
  <TxInput
    :label="label"
    :name="name"
    :errorMsg="errorMsg"
    :helpMsg="helpMsg"
    :successMsg="successMsg"
    :isValid="isValid"
  >
    <template v-slot:input>
      <input
        type="text"
        class="input"
        :class="inputClasses"
        :data-qa="`${name}_input`"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
      />
    </template>
  </TxInput>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import { defaultProps, classBindings } from "../../composers/inputs.ts";
import TxInput from "./TxInput.vue";
export default defineComponent({
  name: "TextInput",
  components: { TxInput },
  emits: ["blur", "update:modelValue"],
  props: {
    ...defaultProps(),
    modelValue: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    return {
      inputClasses: classBindings(props),
    };
  },
});
</script>
