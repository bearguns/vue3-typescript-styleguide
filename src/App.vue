<template>
  <AppWrapper :pageTitle="pageTitle">
    <template #logo>
      <img alt="" src="logo.svg" />
    </template>
    <template #sidebar-links>
      <SidebarLink to="home" label="Home" />
      <SidebarLinkMenu name="components" label="Components" :route="route">
        <SidebarLink to="layoutComponents" label="Layout" />
        <SidebarLink to="controlComponents" label="Controls" />
      </SidebarLinkMenu>
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
    const route = useRoute();
    const pageTitle = computed(() => route.meta.title);
    return { pageTitle, route };
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
