<template>
  <div class="field">
    <label class="label" :class="{ 'has-text-danger': errorMsg }" :for="name" :data-qa="`${name}_label`">
      {{ label }}
    </label>
    <div class="control">
      <input
        class="input"
        :class="{ 'is-danger': errorMsg }"
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        :data-qa="`${name}_input`"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="validateOnBlur"
      />
    </div>
    <p class="help">{{ helpText }}</p>
    <p class="help is-danger">{{ errorMsg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import {
  Include,
  validateEmailAddress,
  validateRequired,
  errors,
  validateIncluded,
  validateExcluded,
} from "../../composers/inputs";

type InputType = "text" | "email" | "password";

export default defineComponent({
  name: "TextInput",
  props: {
    inputType: {
      type: String as PropType<InputType>,
      required: false,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
    include: {
      type: Object as PropType<Include>,
      required: false,
    },
    exclude: {
      type: Array as PropType<string[]>,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    minLength: {
      type: Number,
      required: false,
    },
    maxLength: {
      type: Number,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    helpText: {
      type: String,
      required: false,
    },
    errorText: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const localValidationError = ref("");
    const errorMsg = computed(() => {
      if (props.errorText) {
        return props.errorText;
      }
      return localValidationError.value;
    });

    function validateOnBlur(): void {
      if (props.inputType === "email") {
        localValidationError.value = validateEmailAddress(props.modelValue) ? "" : errors.emailInvalid;
        return undefined;
      }

      if (props.required) {
        localValidationError.value = validateRequired(props.modelValue) ? "" : errors.blank;
        return undefined;
      }

      if (props.include) {
        if (props.include.strict) {
          localValidationError.value = validateIncluded(props.modelValue, props.include)
            ? ""
            : errors.includeStrict(props.include.chars);
          return undefined;
        }
        localValidationError.value = validateIncluded(props.modelValue, props.include)
          ? ""
          : errors.include(props.include.chars);
        return undefined;
      }

      if (props.exclude) {
        localValidationError.value = validateExcluded(props.modelValue, props.exclude)
          ? ""
          : errors.exclude(props.exclude);
        return undefined;
      }

      if (props.minLength) {
        localValidationError.value = props.modelValue.length >= props.minLength ? "" : errors.short(props.minLength);
        return undefined;
      }

      if (props.maxLength) {
        localValidationError.value = props.modelValue.length <= props.maxLength ? "" : errors.long(props.maxLength);
        return undefined;
      }
    }

    return { errorMsg, validateOnBlur };
  },
});
</script>
