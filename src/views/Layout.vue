<template>
  <div class="layout-page">
    <AppTitle>UI Layout Components</AppTitle>
    <SidebarDemo />
    <Boxes />
    <Panels />
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppPanel, AppTitle, AppCard } from "../components/layout";
import { AppButton } from "../components/controls";
import { Boxes, Panels, SidebarDemo, Cards } from "../components/pages/layout";
export default defineComponent({
  components: { AppPanel, AppTitle, AppCard, AppButton, Boxes, Panels, Cards, SidebarDemo },
});
</script>
