<template>
  <div class="field">
    <label class="label" :for="name" :data-qa="`${name}_label`">{{ label }}</label>
    <div class="control">
      <div class="select">
        <select
          :name="`${name}`"
          :data-qa="`${name}_input`"
          :value="modelValue"
          @change="selectValue($event.target.value)"
        >
          <option :selected="!modelValue" value="">--</option>
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Option {
  label: string;
  value: any;
}

export default defineComponent({
  name: "SelectInput",
  emits: ["update:modelValue"],
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: false,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    return {
      selectValue(value: string) {
        emit("update:modelValue", value);
      },
    };
  },
});
</script>
