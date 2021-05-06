<template>
  <IconWrapper :color="color">
    <SearchIconComponent :size="size" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchIcon as SearchIconComponent } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  name: "SearchIcon",
  components: { IconWrapper, SearchIconComponent },
  props: {
    ...defaultProps(),
  },
});
</script>
