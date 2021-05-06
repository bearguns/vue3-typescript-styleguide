<template>
  <IconWrapper :color="color">
    <HomeIconComponent :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HomeIcon as HomeIconComponent } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "UserIcon",
  components: { IconWrapper, HomeIconComponent },
  props: {
    ...defaultProps(),
  },
});
</script>
