<template>
  <IconWrapper :color="color">
    <XIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { XIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "CloseIcon",
  components: { IconWrapper, XIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
