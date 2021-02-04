<template>
  <div class="dropdown" ref="dropdown" :class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click.stop="toggleActive"
      >
        <span>
          <slot name="label"></slot>
        </span>
        <span class="icon">
          <TxIcon :icon="icon" />
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxIcon from "./TxIcon.vue";

export default defineComponent({
  name: "TxDropdown",
  components: { TxIcon },
  props: {
    persistent: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    icon(): string {
      return this.isActive ? "chevron-up" : "chevron-down";
    },
  },
  methods: {
    toggleActive(): void {
      this.isActive = !this.isActive;
    },
    closeDropdown(): void {
      this.isActive = false;
    },
  },
  created(): void {
    if (!this.persistent) {
      window.addEventListener("click", this.closeDropdown);
    }
  },
  beforeUnmount(): void {
    if (!this.persistent) {
      window.removeEventListener("click", this.closeDropdown);
    }
  },
});
</script>
