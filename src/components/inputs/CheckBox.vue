<template>
  <div class="field">
    <div class="control">
      <label class="checkbox" :for="name">
        <input
          :name="name"
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
        />{{ label }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckBox",
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
    modelValue: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";

label.checkbox {
  color: $primary;

  & input {
    margin-right: 0.5rem;
  }
}
</style>
