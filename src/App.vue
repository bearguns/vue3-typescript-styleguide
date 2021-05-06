<template>
  <div class="styleguide">
    <AppSidebar>
      <template #logo>
        <img alt="" :src="logoUrl" />
      </template>
      <template #links>
        <SidebarLink :to="{ name: 'home' }" label="Home" :active="route.name === 'home'" />
        <SidebarLinkMenu
          :to="{ name: 'components' }"
          label="Components"
          :active="route.matched[0]?.name === 'components'"
        >
          <SidebarLink :to="{ name: 'layoutComponents' }" label="Layout" :active="route.name === 'layout'" />
          <SidebarLink :to="{ name: 'controlComponents' }" label="Controls" :active="route.name === 'controls'" />
          <SidebarLink :to="{ name: 'inputComponents' }" label="Inputs" :active="route.name === 'inputs'" />
        </SidebarLinkMenu>
        <SidebarLink
          :to="{ name: 'notificationCenter' }"
          label="Notifications"
          :active="route.name === 'notificationCenter'"
        />
      </template>
    </AppSidebar>
    <AppHeader title="Styleguide"> </AppHeader>
    <div class="styleguide__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { SidebarLink, SidebarLinkMenu, AppHeader, AppSidebar } from "./components/layout";
import { UserMenu } from "./components/controls";
import { showLoader } from "./composers/demo";
import logoUrl from "../public/logo.svg";
export default defineComponent({
  components: { UserMenu, SidebarLink, SidebarLinkMenu, AppHeader, AppSidebar },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const pageTitle = computed(() => route.meta.title);
    const loggedIn = computed(() => store.state.loggedIn);

    function logout() {
      store.commit("setLoggedIn", false);
      localStorage.removeItem("styleguide");
      router.push({ name: "splash" });
    }
    return { pageTitle, route, showLoader, loggedIn, logout, logoUrl };
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
.styleguide {
  padding-left: 16rem;

  &__content {
    padding: 2rem 1.25rem;
  }
}
</style>
