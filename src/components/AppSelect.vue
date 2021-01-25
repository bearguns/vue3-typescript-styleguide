<template>
  <div class="app-select field">
    <label class="label app-select__label" :for="name" v-if="label">
      {{ label }}
    </label>
    <div class="control">
      <div class="select" :class="{ 'is-danger': error }">
        <select
          id=""
          :name="name"
          :data-qa="name"
          @change="$emit('change', $event)"
          :disabled="disabled"
          :size="size"
        >
          <option value="" :selected="!value">--</option>
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.value"
            :selected="option.value === value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    <p class="app-select__error help has-text-danger" v-if="error">
      {{ error }}
    </p>
    <p class="app-select__help help has-text-black" v-if="!error && helpText">
      {{ helpText }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppSelect",
  emits: ["change"]
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
    value: {
      required: false,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: Number,
      required: false,
      default: undefined,
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

<style lang="scss" scoped>
.app-select {
  & .select {
    &::after {
      border-color: $primary;
    }
    &:hover::after {
      border-color: $black;
    }
  }
  &__label {
    color: $primary;
    text-align: left;
  }
}
</style>
