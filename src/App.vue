<template>
  <TxWrapper>
    <template v-slot:appLogo>
      <img src="logo.svg" />
    </template>
    <template v-slot:navMenu>
      <TxNavbarLink label="Home" to="home">
        <TxIcon icon="home" />
      </TxNavbarLink>
      <TxNavbarLink label="Buttons" to="buttons">
        <TxIcon icon="command" size="1x" />
      </TxNavbarLink>
      <TxNavbarLink to="cards" label="Cards">
        <TxIcon icon="card" />
      </TxNavbarLink>
    </template>
    <template v-slot:pageTitle>{{ pageTitle }}</template>
    <template v-slot:headerActions>
      <TxButton @click="popup">Login</TxButton>
    </template>
    <template v-slot:content>
      <div>
        <router-view />
      </div>
    </template>
  </TxWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Popup } from "./notifications";
import TxNavbar from "./components/TxNavbar.vue";
import TxNavbarLink from "./components/TxNavbarLink.vue";
import TxHeader from "./components/TxHeader.vue";
import TxButton from "./components/TxButton.vue";
import TxIcon from "./components/TxIcon.vue";
import TxWrapper from "./components/TxWrapper.vue";
import TxCard from "./components/TxCard.vue";

const popupClient = new Popup();

export default defineComponent({
  components: {
    TxWrapper,
    TxIcon,
    TxNavbar,
    TxNavbarLink,
    TxHeader,
    TxButton,
    TxCard,
  },
  computed: {
    pageTitle(): string {
      return this.$route.meta.title;
    },
  },
  methods: {
    popup(): void {
      popupClient.success("Ok!");
    },
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
