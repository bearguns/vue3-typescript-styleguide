<template>
  <IconWrapper :color="color">
    <PlusSquareIconIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlusSquareIcon as PlusSquareIconIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, PlusSquareIconIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
