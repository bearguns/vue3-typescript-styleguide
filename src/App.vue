<template>
  <div class="styleguide">
    <AppSidebar :open="menuOpen" @toggle="toggleMenu">
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
          <SidebarLink :to="{ name: 'presenterComponents' }" label="Presenters" :active="route.name === 'presenters'" />
        </SidebarLinkMenu>
        <SidebarLink
          :to="{ name: 'notificationCenter' }"
          label="Notifications"
          :active="route.name === 'notificationCenter'"
        />
      </template>
    </AppSidebar>
    <AppHeader title="Styleguide" @toggle="toggleMenu"> </AppHeader>
    <div class="styleguide__content">
      <router-view />
      <NotificationCenter :loading="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { SidebarLink, SidebarLinkMenu, AppHeader, AppSidebar } from "./components/layout";
import { NotificationCenter } from "./components/presenters";
import { UserMenu } from "./components/controls";
import { showLoader } from "./composers/demo";
export default defineComponent({
  components: { UserMenu, SidebarLink, SidebarLinkMenu, AppHeader, AppSidebar, NotificationCenter },
  setup() {
    const isMobile = window.innerWidth > 768 ? false : true;
    const menuOpen = ref(isMobile ? false : true);
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const pageTitle = computed(() => route.meta.title);
    const loggedIn = computed(() => store.state.loggedIn);
    const loading = computed(() => store.state.loading);
    function logout() {
      store.commit("setLoggedIn", false);
      localStorage.removeItem("styleguide");
      router.push({ name: "splash" });
    }

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    return { pageTitle, route, showLoader, menuOpen, toggleMenu, loggedIn, logout, loading };
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
.styleguide {
  padding-left: 16rem;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  &__content {
    padding: 2rem 1.25rem;
  }
}
</style>
