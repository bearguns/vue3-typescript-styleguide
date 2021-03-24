<template>
  <div class="styleguide">
    <div class="styleguide__header">
      <TxNavbar />
    </div>
    <div class="styleguide__content">
      <div class="styleguide__sidebar">
        <TxSidebar />
      </div>
      <div class="styleguide__views"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Popup } from "./notifications";
import TxNavbar from "./components/TxNavbar.vue";
import TxSidebar from "./components/TxSidebar.vue";
import TxButton from "./components/TxButton.vue";
import TxIcon from "./components/TxIcon.vue";
import TxCard from "./components/TxCard.vue";
import TxFile from "./components/TxFile.vue";

const popupClient = new Popup();

export default defineComponent({
  components: {
    TxIcon,
    TxNavbar,
    TxButton,
    TxCard,
    TxFile,
    TxSidebar,
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

.styleguide {
  &__content {
    display: flex;
  }
}
</style>
