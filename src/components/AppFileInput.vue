<template>
  <div class="file is-full-width has-name" @click="triggerInput">
    <label class="file-label" :for="name">
      <input
        class="file-input"
        :name="name"
        :accept="accept"
        type="file"
        @change="emitFile"
        ref="input"
      />
      <span class="file-cta">
        <span class="file-icon">
          <AppIcon icon="upload" />
        </span>
        <span class="file-label">Choose a file...</span>
      </span>
      <span class="file-name" v-if="file">
        {{ file.name }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppIcon from "./AppIcon.vue";

export default defineComponent({
  name: "AppFileInput",
  components: { AppIcon },
  emits: ["input"],
  props: {
    name: {
      type: String,
      required: true,
    },
    accept: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    emitFile(event): void {
      this.file = event.target.files[0];
      this.$emit("input", this.file);
    },
    triggerInput(): void {
      this.$refs.input.click();
    },
  },
});
</script>
