<template>
  <AppWrapper>
    <template #sidebar-links>
      <SidebarLink to="/" label="Home" :active="route.name === 'splash'" />
      <SidebarLinkMenu label="Components">
        <SidebarLink to="layoutComponents" :route="route" label="Layout" />
      </SidebarLinkMenu>
    </template>
    <AppHeader :title="pageTitle" />
    <router-view />
  </AppWrapper>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { AppHeader, SidebarLinkMenu, SidebarLink } from "../components/layout";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "AppView",
  components: { AppHeader, SidebarLinkMenu, SidebarLink },
  setup() {
    const route = useRoute();
    const pageTitle = computed(() => route.meta.title);
    return { pageTitle, route };
  },
});
</script>
