<template>
  <div class="presenters-page">
    <div class="block">
      <p class="title">Presenters</p>
      <p>Components for presenting data and information to end users.</p>
    </div>
    <div class="box">
      <AppTableDemo />
    </div>
    <TooltipDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppTableDemo, TooltipDemo } from "../components/pages/presenters";
export default defineComponent({
  name: "PresentersView",
  components: { AppTableDemo, TooltipDemo },
  setup() {},
});
</script>
