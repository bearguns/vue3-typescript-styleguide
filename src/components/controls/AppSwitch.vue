<template>
  <div class="field">
    <label class="label" :for="name" data-qa="`${name}_label`">{{ label }}</label>
    <div class="control">
      <label>
        <span class="switch-label" :class="{ 'switch-label--active': modelValue === true }"></span>
        <input
          type="checkbox"
          style="position: relative; z-index: -1; opacity: 0"
          @change="$emit('update:modelValue', $event.target.checked)"
          :checked="modelValue"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AppSwitch",
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
label.label {
  color: $primary;
}
.switch-label {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 3rem;
  height: 1.5rem;
  background-color: $gray--lighter;

  border-radius: 100px;
  z-index: 1;
  transition: 0.3s;
  &--active {
    background-color: $success;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 1.45rem;
    height: 1.45rem;
    background-color: $white;
    border-radius: 100%;
    transition: all 0.3s;
  }
  &--active:after {
    content: "";
    margin-left: 1.55rem;
  }
}
</style>
