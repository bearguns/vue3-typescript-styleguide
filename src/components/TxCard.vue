<template>
  <div class="card tx-card">
    <header
      class="card-header tx-card__header"
      :class="headerClass"
      v-if="hasHeader"
      @click="expand"
    >
      <TxTitle :size="3">
        <slot name="header"></slot>
      </TxTitle>
      <TxIcon v-if="expandable" :icon="headerIcon" size="1.5x" />
    </header>
    <div class="tx-card__content" :class="[expandClass]">
      <div class="card-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
    <footer class="card-footer tx-card__footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "./TxTitle.vue";
import TxIcon from "./TxIcon.vue";
export default defineComponent({
  name: "TxCard",
  components: { TxTitle, TxIcon },
  data() {
    return {
      open: false,
    };
  },
  props: {
    status: {
      type: String,
      required: false,
      default: "",
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    headerClass(): string {
      return `tx-card__header--${this.status}`;
    },
    hasHeader(): boolean {
      return !!this.$slots.header || this.expandable;
    },
    hasFooter(): boolean {
      return !!this.$slots.footer;
    },
    headerIcon(): string {
      return this.open ? "chevron-up" : "chevron-down";
    },
    expandClass(): string {
      if (this.expandable) {
        return this.open
          ? "tx-card__content--expanded"
          : "tx-card__content--collapsed";
      }
    },
  },
  methods: {
    expand(): void {
      this.open = !this.open;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/colors";

.tx-card {
  height: auto;
  border-radius: 8px;
  background-color: $white;
  &__header {
    height: 4rem;
    padding: 1.25rem;
    border-bottom: 1px solid $gray--darker;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .title {
      margin-bottom: 0;
    }
    &--primary {
      border-bottom-color: $blue;
      & * {
        color: $blue;
      }
    }

    &--danger {
      border-bottom-color: $red;
      & * {
        color: $red;
      }
    }
  }

  &__content {
    min-height: 12rem;
    max-height: 75vh;
    overflow-y: scroll;
    transition: min-height 0.25s ease-in-out;

    & .card-content {
      transition: opacity 0.75s linear;
    }
    &--collapsed {
      & .card-content {
        display: none;
      }
      min-height: 0px;
      overflow-y: hidden;
    }

    &--expanded .content {
      min-height: initial;
    }
  }

  &__footer {
    width: 100%;
    padding: 1.5rem 0.75rem;
  }
}
</style>
