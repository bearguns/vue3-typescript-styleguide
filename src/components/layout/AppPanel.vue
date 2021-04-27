<template>
  <PanelWrapper>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </PanelWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PanelWrapper from "./PanelWrapper.vue";
export default defineComponent({
  name: "AppPanel",
  components: { PanelWrapper },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
