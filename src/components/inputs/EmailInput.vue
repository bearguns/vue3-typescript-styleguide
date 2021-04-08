<template>
  <InputField
    :label="label"
    :name="name"
    :errorMsg="errorMsg || error"
    :helpMsg="helpMsg"
    :successMsg="successMsg"
    :isValid="success"
  >
    <template v-slot:input>
      <input
        class="input"
        :class="inputClasses"
        :name="name"
        type="email"
        :value="modelValue"
        :placeholder="placeholder"
        :data-qa="`${name}_input`"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="validate($event.target.value)"
      />
    </template>
  </InputField>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { defaultProps, classBindings, Include, validateIncluded, errors } from "../../composers/inputs.ts";
import InputField from "./InputField.vue";
export default defineComponent({
  name: "EmailInput",
  components: { InputField },
  emits: ["update:modelValue"],
  props: {
    ...defaultProps(),
    placeholder: {
      type: String,
      required: false,
      default: "user.name@teliax.com",
    },
    modelValue: {
      type: String,
    },
  },
  setup(props) {
    const error = ref("");
    const mustInclude: Include = {
      chars: ["@", "."],
      strict: true,
    };

    function validate(value: string): void {
      let msg = "";
      if (props.errorMsg) {
        msg = props.errorMsg;
      }

      if (props.required) {
        msg = value.trim().length ? "" : errors.blank;
      }

      if (value.length) {
        if (!validateIncluded(value, mustInclude)) {
          msg = errors.emailInvalid;
        }
        msg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
          ? ""
          : errors.emailInvalid;
      }
      error.value = msg;
    }
    return {
      inputClasses: classBindings(props),
      error,
      validate,
    };
  },
});
</script>
