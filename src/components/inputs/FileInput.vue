<template>
  <div class="field">
    <div class="control">
      <label class="label" for="">{{ label }}</label>
      <div class="file has-name">
        <label class="file-label" :for="name" data-qa="`${name}_label`">
          <input
            class="file-input"
            type="file"
            :name="name"
            data-qa="`${name}_input`"
            ref="fileInput"
            @change="handleChange($event)"
          />
          <span class="file-cta">
            <span class="file-icon">
              <UploadIcon size="1x" />
            </span>
            <span class="file-label"> Choose a file… </span>
          </span>
          <span class="file-name">{{ fileName }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { defaultProps } from "../../composers/inputs";
import { UploadIcon } from "../icons";

export default defineComponent({
  name: "FileInput",
  components: { UploadIcon },
  emits: ["change"],
  props: {
    ...defaultProps(),
    accept: {
      type: String,
      required: false,
    },
    fileName: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit, refs }) {
    const fileInput = ref(null);

    function openBrowser() {
      fileInput.value.click();
    }

    function handleChange(event) {
      emit("change", event.target.files);
    }

    return { handleChange, openBrowser, fileInput };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
label.label {
  color: $blue;
}
</style>
