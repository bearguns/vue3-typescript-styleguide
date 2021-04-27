<template>
  <IconWrapper :color="color">
    <UserIconComponent :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserIcon as UserIconComponent } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "UserIcon",
  components: { IconWrapper, UserIconComponent },
  props: {
    ...defaultProps(),
  },
});
</script>
