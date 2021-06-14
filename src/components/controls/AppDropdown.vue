<template>
  <div class="dropdown app-dropdown" ref="dropdown" :class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <AppButton @click.stop="toggleActive" :secondary="true" class="is-medium" :class="{ 'is-rounded': rounded }">
        <slot name="label"></slot>
        <span class="app-dropdown__icon">
          <ChevronIcon :direction="isActive ? 'up' : 'down'" color="primary" />
        </span>
      </AppButton>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from "vue";
import AppButton from "./AppButton.vue";
import { ChevronIcon } from "../icons";

export default defineComponent({
  name: "AppDropdown",
  components: { ChevronIcon, AppButton },
  props: {
    persist: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const isActive = ref(false);

    function closeDropdown(): void {
      isActive.value = false;
    }

    function toggleActive(): void {
      isActive.value = !isActive.value;
    }

    if (!props.persist) {
      window.addEventListener("click", closeDropdown);
    }

    onBeforeUnmount(() => {
      if (!props.persist) {
        window.removeEventListener("click", closeDropdown);
      }
    });

    return {
      toggleActive,
      isActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-dropdown {
  & .dropdown-trigger .button {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    margin-left: 0.75rem;
    line-height: 1;
  }
}
</style>
