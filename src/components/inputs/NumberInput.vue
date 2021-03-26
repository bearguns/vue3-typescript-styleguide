<template>
  <TxInput
    :name="name"
    :label="label"
    :errorMsg="errorMsg"
    :successMsg="successMsg"
    :helpMsg="helpMsg"
    :isValid="isValid"
  >
    <template v-slot:input>
      <input
        :name="name"
        :data-qa="`${name}_input`"
        type="number"
        :value="modelValue"
        :step="step"
        :min="min"
        :max="max"
        class="input"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
      />
    </template>
  </TxInput>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { defaultProps, classBindings } from "../../composers/inputs.ts";
import TxInput from "./TxInput.vue";
export default {
  name: "NumberInput",
  components: { TxInput },
  emits: ["blur", "update:modelValue"],
  props: {
    ...defaultProps(),
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: 99999,
    },
    modelValue: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    return {
      inputClasses: classBindings(props),
    };
  },
};
</script>
