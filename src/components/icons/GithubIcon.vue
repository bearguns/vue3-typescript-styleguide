<template>
  <IconWrapper :color="color">
    <GitHubIcon :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GithubIcon as GitHubIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, GitHubIcon },
  props: {
    ...defaultProps(),
  },
});
</script>
