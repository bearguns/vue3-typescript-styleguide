<template>
  <IconWrapper :color="color">
    <Info :size="size" :color="color" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { InfoIcon as Info } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "InfoIcon",
  props: {
    ...defaultProps(),
  },
  components: { IconWrapper, Info },
});
</script>
