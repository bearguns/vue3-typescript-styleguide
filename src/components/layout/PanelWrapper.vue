<template>
  <div class="tx-panel">
    <div class="tx-panel__title" :class="{ 'has-cursor': expand }" @click="toggleExpand">
      <h2 class="title">
        <slot name="title" />
      </h2>
      <ChevronIcon :direction="expanded ? 'up' : 'down'" size="2x" v-if="expand" />
    </div>
    <div class="tx-panel__content" :class="classBindings">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { ChevronIcon } from "../icons";
export default defineComponent({
  components: { ChevronIcon },
  props: {
    expand: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const expanded = ref(false);
    const classBindings = computed(() => {
      return {
        "tx-panel__content--expanded": props.expand && expanded.value,
        "tx-panel__content--collapsed": props.expand && !expanded.value,
      };
    });

    function toggleExpand() {
      if (props.expand) {
        expanded.value = !expanded.value;
      }
    }

    return {
      toggleExpand,
      classBindings,
      expanded,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.tx-panel {
  width: 100%;
  border: 1px solid $gray--dark;
  border-radius: $radius;
  padding: 1rem 1.75rem;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h2 {
      display: inline-block;
      margin-bottom: 0px;
    }
  }

  &__content {
    margin-top: 0.75rem;
    transition: all 0.2s ease-in-out;

    &--collapsed {
      max-height: 0;
      overflow: hidden;
    }

    &--expanded {
      max-height: 9999px;
    }
  }
}

.has-cursor {
  cursor: pointer;
}
</style>
