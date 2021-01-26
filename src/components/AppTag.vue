<template>
  <span class="tag" :class="[statusClass]">
    <slot></slot>
    <button class="delete" v-if="removeable" @click="$emit('click')" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTag",
  emits: ["click"],
  props: {
    status: {
      type: String,
      required: false,
      default: "primary",
    },
    removeable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    statusClass(): string {
      return this.status ? `is-${this.status}` : "";
    },
  },
});
</script>
