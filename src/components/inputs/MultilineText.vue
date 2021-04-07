<template>
  <InputField
    :name="name"
    :label="label"
    :errorMsg="errorMsg"
    :helpMsg="helpMsg"
    :successMsg="successMsg"
    :isValid="isValid"
  >
    <template v-slot:input>
      <textarea
        class="textarea"
        :class="inputClasses"
        :cols="cols"
        id=""
        :name="name"
        :rows="rows"
        :value="modelValue"
        :data-qa="`${name}_textarea`"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
      ></textarea>
    </template>
  </InputField>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { defaultProps, classBindings } from "../../composers/inputs.ts";
import InputField from "./InputField.vue";
export default defineComponent({
  name: "MultilineText",
  components: { InputField },
  emits: ["blur", "update:modelValue"],
  props: {
    ...defaultProps(),
    cols: {
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
  },
  setup(props) {
    return {
      inputClasses: classBindings(props),
    };
  },
});
</script>
