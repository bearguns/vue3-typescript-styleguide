<template>
  <div class="modal app-modal" :class="{ 'is-active': active }">
    <div class="modal-background" @click="$emit('click')"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('click')"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TxModal",
  emits: ["click", "dismiss"],
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
