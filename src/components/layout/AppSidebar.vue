<template>
  <div class="app-sidebar" :class="classBindings">
    <nav class="app-nav">
      <div class="app-nav__logo">
        <slot name="logo"></slot>
        <template v-if="isMobile">
          <CloseIcon
            color="danger"
            class="has-text-danger app-sidebar__close-button"
            size="3x"
            @click="$emit('toggle')"
          />
        </template>
      </div>
      <ul class="app-nav__menu">
        <slot name="links"></slot>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { CloseIcon } from "../icons";
export default defineComponent({
  name: "AppSidebar",
  components: { CloseIcon },
  emits: ["toggle"],
  props: {
    open: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const isMobile = window.innerWidth > 768 ? false : true;
    const classBindings = computed(() => {
      return props.open ? "app-sidebar--open" : "app-sidebar--hidden";
    });

    return { classBindings, isMobile };
  },
});
</script>
<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";

.app-sidebar {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 16rem;
  min-width: 8rem;
  min-height: 100vh;
  background-color: $black;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: $tx-breakpoint--mobile) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 5;
    transition: all 0.2s ease-in-out;

    &--hidden {
      transform: translateX(-100%);
      width: 0;
      overflow: hidden;
    }

    &--open {
      transform: translateX(0);
      width: 100vw;
    }

    &__close-button {
      margin-top: 2.5%;
    }
  }
}

.app-nav {
  padding: 2.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1.75rem 0.5rem;
  }

  &__logo {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
      margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 0.75rem;
      & img {
        margin: 0;
      }
    }
  }

  &__menu {
    margin-top: 1.75rem;
    padding: 1.25rem;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
