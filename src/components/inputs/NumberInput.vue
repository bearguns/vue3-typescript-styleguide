<template>
  <div class="field">
    <label class="label" :for="name" :data-qa="`${name}_label`">{{ label }}</label>
    <div class="control">
      <input
        :name="name"
        :data-qa="`${name}_input`"
        type="number"
        :value="modelValue"
        :step="step"
        :min="min"
        :max="max"
        class="input"
        :class="{ 'is-danger': errorMsg }"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="validateOnBlur"
      />
    </div>
    <p class="help">{{ helpText }}</p>
    <p class="help is-danger">{{ errorMsg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
export default defineComponent({
  name: "NumberInput",
  emits: ["blur", "update:modelValue"],
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
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
    errorText: {
      type: String,
      required: false,
    },
    helpText: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const localValidationError = ref("");
    const errorMsg = computed(() => {
      return props.errorText || localValidationError.value;
    });

    function validateOnBlur(): void {
      emit("blur");

      if (props.min) {
        localValidationError.value = props.modelValue >= props.min ? "" : `Must be at least ${props.min}`;
        return undefined;
      }

      if (props.max) {
        localValidationError.value = props.modelValue <= props.max ? "" : `Cannot be greater than ${props.max}`;
        return undefined;
      }

      localValidationError.value = "";
    }
    return {
      errorMsg,
      validateOnBlur,
    };
  },
});
</script>
