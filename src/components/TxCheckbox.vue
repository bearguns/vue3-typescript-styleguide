<template>
  <div
    class="field app-checkbox"
    :class="{ 'app-checkbox--disabled': disabled }"
    @click="check"
  >
    <label :for="name" class="checkbox">
      <input
        :name="name"
        :data-qa="name"
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
      />
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TxCheckbox",
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
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["click"],
  methods: {
    check(): void {
      if (this.disabled) {
        return undefined;
      }
      return this.$emit("click", !this.checked);
    },
  },
});
</script>

<style lang="scss" scoped>
.app-checkbox {
  cursor: pointer;
  &--disabled {
    cursor: not-allowed;
  }
}
</style>
