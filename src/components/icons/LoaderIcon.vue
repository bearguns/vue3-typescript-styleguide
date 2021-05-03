<template>
  <IconWrapper :color="color">
    <LoadingIcon :size="size" :class="{ spin: spin }" />
  </IconWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoaderIcon as LoadingIcon } from "@zhuowenli/vue-feather-icons";
import { defaultProps } from "../../composers/icons";
import IconWrapper from "./IconWrapper.vue";
export default defineComponent({
  components: { IconWrapper, LoadingIcon },
  props: {
    ...defaultProps(),
    spin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@keyframes rotateForever {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spin {
  animation: 3s linear rotateForever infinite;
}
</style>
