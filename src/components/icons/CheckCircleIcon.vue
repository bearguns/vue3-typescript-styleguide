<template>
  <IconWrapper :color="color">
    <CheckIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckCircleIcon as CheckIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, CheckIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
