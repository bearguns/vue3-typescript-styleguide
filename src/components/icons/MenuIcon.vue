<template>
  <IconWrapper :color="color">
    <MenuIconIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuIcon as MenuIconIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "MenuIcon",
  components: { IconWrapper, MenuIconIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
