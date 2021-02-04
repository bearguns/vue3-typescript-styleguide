<template>
  <main class="tx-app">
    <TxNavbar>
      <template v-slot:logo>
        <img src="logo.svg" />
      </template>
      <template v-slot:nav>
        <TxNavbarLink label="Home" to="home">
          <TxIcon icon="home" size="1x" />
        </TxNavbarLink>
        <TxNavbarLink label="Buttons" to="buttons">
          <TxIcon icon="command" size="1x" />
        </TxNavbarLink>
      </template>
    </TxNavbar>
    <TxHeader>
      <template v-slot:title>{{ pageTitle }}</template>
      <template v-slot:actions>
        <TxButton>Login</TxButton>
      </template>
    </TxHeader>
    <div class="tx-app__content">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxNavbar from "./components/TxNavbar.vue";
import TxNavbarLink from "./components/TxNavbarLink.vue";
import TxHeader from "./components/TxHeader.vue";
import TxButton from "./components/TxButton.vue";
import TxIcon from "./components/TxIcon.vue";

export default defineComponent({
  components: { TxIcon, TxNavbar, TxNavbarLink, TxHeader, TxButton },
  computed: {
    pageTitle(): string {
      return this.$route.meta.title;
    },
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
@import "./scss/variables";

.tx-app {
  padding-left: 16rem;

  @media screen and (max-width: $tx-breakpoint--desktop) {
    padding-left: 6rem;
  }
}
</style>
