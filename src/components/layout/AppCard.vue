<template>
  <div class="card">
    <header class="card-header" :class="headerClass" @click="toggleExpand" v-if="$slots.header">
      <p class="title" :class="`has-text-${status}`">
        <slot name="header" />
      </p>
      <ChevronIcon v-if="expand" :direction="expanded ? 'up' : 'down'" size="1.5x" />
    </header>
    <div class="card-content" :class="[expandClass]">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <footer class="card-footer" v-if="showFooter">
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
        return expanded.value ? "card-content--expanded" : "card-content--collapsed";
      }
    });

    const headerClass = computed(() => {
      return props.status ? `card-header--${props.status}` : "";
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

.card {
  &-header {
    padding: 0.75rem;
    border-bottom: 1px solid $black;

    &--info {
      color: $info;
      border-bottom-color: $info;
    }
  }
  display: flex;
  flex-direction: column;
  height: 100%;

  &-footer {
    margin-top: auto;
    padding: 0.5rem;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .title {
      margin-bottom: 0;
    }
  }

  &-content {
    transition: all 0.1s ease-in-out;
    &--collapsed {
      padding: 0;
      max-height: 0px;
      overflow: hidden;
    }
    &--expanded {
      padding: 0.75rem;
      max-height: 999px;
    }
  }
}
</style>
