<template>
  <div class="dropdown user-menu is-right" :class="{ 'is-active': open }">
    <div class="dropdown-trigger" @click="toggleMenu">
      <button class="user-menu__button" :class="{ 'user-menu__button--active': open }">
        <UserIcon size="2x" />
      </button>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppDropdown from "./AppDropdown.vue";
import { UserIcon } from "../icons";
export default defineComponent({
  name: "UserMenu",
  components: { AppDropdown, UserIcon },
  setup() {
    const open = ref(false);

    function toggleMenu(): void {
      open.value = !open.value;
    }

    return {
      open,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.user-menu {
  &__button {
    width: 3rem;
    height: 3rem;
    border-radius: 60%;
    background: $white;
    border: 2px solid $gray--darker;
    color: $gray--darker;
    box-shadow: $tx-drop-shadow;
    transition: all 0.2s linear;

    &--active,
    &:hover {
      cursor: pointer;
      background: $primary;
      color: $white;
      border: none;
    }
  }
}
</style>
