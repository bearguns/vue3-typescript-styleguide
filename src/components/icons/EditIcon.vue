<template>
  <IconWrapper :color="color">
    <EditIconIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EditIcon as EditIconIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, EditIconIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
