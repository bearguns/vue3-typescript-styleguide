<template>
  <div class="field">
    <div class="control">
      <label class="label" for="">{{ label }}</label>
      <div class="file has-name">
        <label class="file-label" :for="name" data-qa="`${name}_label`" @click="trigger">
          <input class="file-input" type="file" :name="name" data-qa="`${name}_input`" @change="handleChange($event)" />
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
import { UploadIcon } from "../icons";

export default defineComponent({
  name: "FileInput",
  components: { UploadIcon },
  emits: ["change"],
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    accept: {
      type: String,
      required: false,
    },
    fileName: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const fileInput = ref(null);

    function handleChange(event: any) {
      console.log(event);
      emit("change", event.target.files);
    }

    function trigger() {
      document.querySelector(`input[name='${props.name}']`)?.click();
    }

    return { handleChange, fileInput, trigger };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
label.label {
  color: $blue;
}
</style>
