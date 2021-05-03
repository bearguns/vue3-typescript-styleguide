<template>
  <IconWrapper :color="color">
    <LoadingIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoaderIcon as LoadingIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, LoadingIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
