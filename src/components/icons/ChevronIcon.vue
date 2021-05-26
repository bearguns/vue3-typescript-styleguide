<template>
  <IconWrapper :color="color">
    <component :is="icon" :size="size" :color="color" class="cv-icon" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons.ts";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon },
  props: {
    ...defaultProps(),
  },
  setup(props) {
    const icon = computed(() => {
      switch (props.direction) {
        case "up":
          return ChevronUpIcon;
        case "down":
          return ChevronDownIcon;
        case "left":
          return ChevronLeftIcon;
        case "right":
          return ChevronRightIcon;
        default:
          return ChevronDownIcon;
      }
    });
    return {
      icon,
    };
  },
});
</script>
