<template>
  <div class="card app-card">
    <header
      class="card-header app-card__header"
      :class="statusClass"
      v-if="hasHeaderBar"
    >
      <p
        class="card-header-title app-card__title"
        :class="{ 'has-bg': hasHeaderBar }"
        v-if="hasHeaderBar"
      >
        <slot name="title"></slot>
      </p>
    </header>
    <div class="card-content app-card__content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <footer class="card-footer app-card__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppCard",
  props: {
    status: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    statusClass(): string {
      switch (this.status) {
        case "primary":
          return "has-background-primary";
        case "info":
          return "has-background-info";
        case "warning":
          return "has-background-warning";
        case "danger":
          return "has-background-danger";
        case "success":
          return "has-background-success";
        default:
          return "";
      }
    },
    hasHeaderBar(): boolean {
      return this.status !== "";
    },
  },
});
</script>

<style lang="scss" scoped>
.app-card {
  height: auto;
  &__header {
    min-height: 3rem;
  }

  &__content {
    min-height: 75%;
    max-height: 75vh;
    overflow-y: scroll;
  }

  &__title {
    font-size: 1.25rem;
    &.has-bg,
    &.has-bg .title {
      color: #f3f3f3;
    }
  }

  &__footer {
    width: 100%;
    padding: $inner-gutter;
  }
}
</style>
