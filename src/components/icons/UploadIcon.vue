<template>
  <IconWrapper :color="color">
    <UpIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UploadIcon as UpIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, UpIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
