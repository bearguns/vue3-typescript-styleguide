<template>
  <div class="app-text-area field">
    <label class="label has-text-primary" :for="name">{{ label }}</label>
    <textarea
      class="textarea"
      :name="name"
      :class="{ 'is-danger': error }"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <p class="app-text-area__error help has-text-danger" v-if="error">
      {{ error }}
    </p>
    <p
      class="app-text-area__help help has-text-black"
      v-if="!error && helpText"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppTextArea",
  emits: ["input"],
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
    helpText: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>
