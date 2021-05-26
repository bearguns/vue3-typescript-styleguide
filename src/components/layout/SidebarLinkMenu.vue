<template>
  <div class="sidebar-link-menu" @click="toggleExpanded">
    <div class="sidebar-link-menu__label" :class="{ 'sidebar-link-menu__label--active': expanded }">
      {{ label }}
      <ChevronIcon :direction="expanded ? 'up' : 'down'" size="1x" :color="expanded ? 'primary' : 'white'" />
    </div>
    <div class="sidebar-link-menu__links" ref="linkList" :class="{ 'sidebar-link-menu__links--expanded': expanded }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import { useRoute } from "vue-router";
import SidebarLink from "./SidebarLink.vue";
import { ChevronIcon } from "../icons";

export default defineComponent({
  name: "SidebarLinkMenu",
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  components: { ChevronIcon, SidebarLink },
  setup(props) {
    // Reference to the actual list DOM element for controlling animations with JS
    const linkList = ref(null);

    // Local state derived from parent
    const expanded = ref(props.active);
    // const showAsOpen = computed((): boolean => {
    //   return props.active || expanded.value;
    // });

    function smoothExpand() {
      // Get the height of the currently-hidden inner content
      const innerHeight = linkList.value.scrollHeight;
      // Set the height equal to the content height so CSS transition can do its job
      linkList.value.style.height = `${innerHeight}px`;
    }

    function smoothCollapse() {
      linkList.value.style.height = "0px";
    }

    function hideMenuFromOutside(e: any): void {
      // Don't close if we are currently on a page that we have the link to
      if (props.active) return undefined;
      // Ignore clicks on the menu itself, only close when click is outside menu
      if (e.target.classList.contains("sidebar-link-menu")) {
        return undefined;
      }

      // Close the menu, remove event handler
      expanded.value = false;
      window.removeEventListener("click", hideMenuFromOutside);
      smoothCollapse();
      return undefined;
    }

    function toggleExpanded(): void {
      // If parent says active, then stay active
      if (props.active) return undefined;
      // Menu is closed, open it and listen to clicks outside.
      if (!expanded.value) {
        smoothExpand();
        expanded.value = true;
        setTimeout(() => window.addEventListener("click", hideMenuFromOutside), 500);
        return undefined;
      }

      // Menu is open, close it and remove the "click outside" handler
      smoothCollapse();
      expanded.value = false;
      window.removeEventListener("click", hideMenuFromOutside);
    }

    return {
      linkList,
      expanded,
      toggleExpanded,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.sidebar-link-menu {
  &__label {
    font-size: 1.5rem;
    cursor: pointer;
    color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: $blue;
    }

    &--active {
      color: $blue;
      position: relative;
      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        height: 2px;
        width: 100%;
        background-color: $blue;
      }
    }
  }

  &__links {
    height: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    transition: height 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &--expanded {
      height: auto;
    }

    & a {
      font-size: 1.25rem;
    }
  }
}
</style>
