<template>
  <div class="sidebar-link-menu">
    <div
      class="sidebar-link-menu__label"
      :class="{ 'sidebar-link-menu__label--active': expanded }"
      @click="toggleExpand"
    >
      {{ label }}
      <ChevronIcon :direction="expanded ? 'up' : 'down'" size="1x" :color="expanded ? 'primary' : 'white'" />
    </div>
    <div class="sidebar-link-menu__links" :class="{ 'sidebar-link-menu__links--expanded': expanded }">
      <SidebarLink v-for="link in links" :key="link.to" :label="link.label" :to="link.to" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import SidebarLink from "./SidebarLink.vue";
import { ChevronIcon } from "../icons";

interface SidebarMenuItem {
  to: string;
  label: string;
}

export default defineComponent({
  props: {
    links: {
      type: Array as PropType<SidebarMenuItem[]>,
    },
    label: {
      type: String,
    },
  },
  components: { ChevronIcon, SidebarLink },
  setup(props) {
    const expanded = ref(false);

    function toggleExpand() {
      expanded.value = !expanded.value;
    }

    return {
      expanded,
      toggleExpand,
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
    transition: color 0.3s ease-in-out;
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
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    &--expanded {
      max-height: 999px;
    }

    & a {
      font-size: 1.25rem;
    }
  }
}
</style>
