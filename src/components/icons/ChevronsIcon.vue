<template>
  <IconWrapper :color="color">
    <component :is="icon" :size="size" :color="color" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ChevronsUpIcon, ChevronsDownIcon, ChevronsRightIcon, ChevronsLeftIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons.ts";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, ChevronsDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpIcon },
  props: {
    ...defaultProps(),
  },
  setup(props) {
    const icon = computed(() => {
      switch (props.direction) {
        case "up":
          return ChevronsUpIcon;
        case "down":
          return ChevronsDownIcon;
        case "left":
          return ChevronsLeftIcon;
        case "right":
          return ChevronsRightIcon;
        default:
          return ChevronsDownIcon;
      }
    });
    return {
      icon,
    };
  },
});
</script>
