<template>
  <div class="card app-card">
    <header class="card-header app-card__header" :class="headerClass" @click="toggleExpand" v-if="$slots.header">
      <AppTitle :size="4">
        <slot name="header"></slot>
      </AppTitle>
      <ChevronIcon v-if="expand" :direction="expanded ? 'up' : 'down'" size="1.5x" />
    </header>
    <div class="app-card__content" :class="[expandClass]">
      <div class="card-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
    <footer class="card-footer app-card__footer" v-if="showFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import AppTitle from "./AppTitle.vue";
import { ChevronIcon } from "../icons";
export default defineComponent({
  name: "AppCard",
  components: { AppTitle, ChevronIcon },
  props: {
    status: {
      type: String,
      required: false,
      default: "",
    },
    expand: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { slots }) {
    const expanded = ref(false);
    const expandClass = computed(() => {
      if (props.expand) {
        return expanded.value ? "app-card__content--expanded" : "app-card__content--collapsed";
      }
    });

    const headerClass = computed(() => {
      return `app-card__header--${props.status}`;
    });

    const showFooter = computed(() => {
      if (props.expand) {
        return slots.footer && expanded.value === true;
      }
      return slots.footer;
    });

    function toggleExpand() {
      expanded.value = !expanded.value;
    }

    return {
      expanded,
      expandClass,
      headerClass,
      toggleExpand,
      showFooter,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
@import "../../scss/colors";

.app-card {
  height: auto;
  border-radius: 8px;
  background-color: $white;
  &__header {
    height: 3.75rem;
    padding: 1rem;
    border-bottom: 2px solid;
    border-color: $gray--darker;
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

    &--success {
      border-bottom-color: $green;
      & * {
        color: $green;
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
