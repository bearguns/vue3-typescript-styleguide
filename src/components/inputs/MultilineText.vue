<template>
  <div class="field">
    <label class="label" :for="name" :data-qa="`${name}_label`">{{ label }}</label>
    <div class="control">
      <textarea
        class="textarea"
        :class="{ 'is-danger': errorMsg }"
        :name="name"
        :cols="columns"
        :rows="rows"
        :value="modelValue"
        :data-qa="`${name}_textarea`"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="validateOnBlur"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { errors } from "../../composers/inputs";
export default defineComponent({
  name: "MultilineText",
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
    columns: {
      type: Number,
      required: false,
      default: 30,
    },
    rows: {
      type: Number,
      required: false,
      default: 10,
    },
    modelValue: {
      type: String,
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
  setup(props, { emit }) {
    const localValidationError = ref("");
    const errorMsg = computed(() => props.errorText || localValidationError.value);

    function validateOnBlur(): void {
      emit("blur");
      if (props.required && !props.modelValue) {
        localValidationError.value = errors.blank;
        return undefined;
      }
      localValidationError.value = "";
    }

    return { errorMsg, validateOnBlur };
  },
});
</script>
