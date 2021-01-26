<template>
  <div class="control app-input">
    <label class="label app-input__label has-text-primary" :for="name">
      {{ label }}
    </label>
    <input
      class="input app-input__input"
      :class="{ 'is-danger': error }"
      :name="name"
      :data-qa="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :minlength="min"
      :maxlength="max"
      :min="min"
      :max="max"
      :disabled="disabled"
      :readonly="readonly"
      :step="step"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus')"
    />
    <p class="app-input__error help has-text-danger" v-if="error">
      {{ error }}
    </p>
    <p class="app-input__help help has-text-black" v-if="!error && helpText">
      {{ helpText }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  emits: ["focus", "input"],
  props: {
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    step: {
      required: false,
      default: "",
    },
    min: {
      type: String,
      required: false,
      default: "",
    },
    max: {
      type: String,
      required: false,
      default: "",
    },
    helpText: {
      type: String,
      required: false,
      default: "",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  &__label {
    text-align: left;
  }
}
</style>
