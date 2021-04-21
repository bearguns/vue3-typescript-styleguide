<template>
  <AppWrapper :pageTitle="pageTitle">
    <template #logo>
      <img alt="" src="logo.svg" />
    </template>
    <template #sidebar-links>
      <SidebarLink :to="{ name: 'home' }" label="Home" />
      <SidebarLinkMenu label="Components" :links="links" name="components" />
    </template>
    <template #current-page>
      <router-view />
    </template>
  </AppWrapper>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { AppWrapper, SidebarLink, SidebarLinkMenu } from "./components/layout";
export default defineComponent({
  components: { AppWrapper, SidebarLink, SidebarLinkMenu },
  setup() {
    const links = [
      { label: "Layout", to: { name: "layoutComponents" } },
      { label: "Controls", to: { name: "controlComponents" } },
      { label: "Inputs", to: { name: "inputComponents" } },
      { label: "Presenters", to: { name: "presenterComponents" } },
      { label: "Notifications", to: { name: "notificationCenter" } },
    ];
    const route = useRoute();
    const pageTitle = computed(() => route.meta.title);
    return { links, pageTitle };
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
