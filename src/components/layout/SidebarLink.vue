<template>
  <router-link :to="to" class="sidebar-link">
    {{ label }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { LinkTo } from "./interfaces";
export default defineComponent({
  name: "SidebarLink",
  props: {
    to: {
      type: Object as PropType<LinkTo>,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.sidebar-link {
  font-size: 1.5rem;
  color: $white;
  transition: color 0.3s ease-in-out;
  position: relative;

  &.router-link-active,
  &.router-link-exact-active {
    color: $blue;
  }

  &:after,
  &.router-link-active:after,
  &.router-link-exact-active:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0px;
    height: 0px;
    background-color: $blue;
    transition: width 0.2s ease-in-out;
  }

  &:hover:after,
  &.router-link-active:after,
  &.router-link-exact-active:after {
    height: 2px;
    width: 100%;
  }
}

.sidebar-link:hover {
  color: $blue;
}
</style>
