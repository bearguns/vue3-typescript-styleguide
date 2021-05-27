<template>
  <IconWrapper :color="color">
    <TrashIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TrashIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "DeleteIcon",
  components: { IconWrapper, TrashIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
