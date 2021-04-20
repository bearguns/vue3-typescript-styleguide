<template>
  <IconWrapper :color="color">
    <AlertCircleIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AlertCircleIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, AlertCircleIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
