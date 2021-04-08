<template>
  <InputField
    :label="label"
    :name="name"
    :errorMsg="errorMsg || error"
    :helpMsg="helpMsg"
    :successMsg="successMsg"
    :isValid="success"
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
        @blur="validateOnBlur($event.target.value)"
      />
    </template>
  </InputField>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from "vue";
import {
  defaultProps,
  classBindings,
  Include,
  validateRequired,
  validateIncluded,
  validateExcluded,
  errors,
} from "../../composers/inputs.ts";
import InputField from "./InputField.vue";

export default defineComponent({
  name: "TextInput",
  components: { InputField },
  emits: ["blur", "update:modelValue"],
  props: {
    ...defaultProps(),
    modelValue: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const error = ref("");
    function validateOnBlur(value): void {
      if (props.errorMsg) {
        error.value = props.errorMsg;
        return undefined;
      }

      if (props.required) {
        error.value = value.trim().length ? "" : errors.blank;
        return undefined;
      }

      // if (props.allow === "alpha") {
      //   error.value =
      // }
      //
      if (props.include) {
        if (props.include.strict) {
          error.value = validateIncluded(value, props.include) ? "" : errors.includeStrict(props.include.chars);
          return undefined;
        }
        error.value = validateIncluded(value, props.include) ? "" : errors.include(props.include.chars);
        return undefined;
      }

      if (props.exclude) {
        error.value = validateExcluded(value, props.exclude) ? "" : errors.exclude(props.exclude);
        return undefined;
      }

      if (props.min) {
        error.value = value.length >= props.min ? "" : errors.short(props.min);
        return undefined;
      }

      if (props.max) {
        error.value = value.length <= props.max ? "" : errors.long(props.max);
      }
    }

    return {
      inputClasses: classBindings(props),
      error,
      validateOnBlur,
    };
  },
});
</script>
