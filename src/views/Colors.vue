<template>
  <section class="section colors-page">
    <TxTitle>Colors</TxTitle>
    <ColorsIntro />
    <div class="columns">
      <div class="column is-half">
        <ColorsPrimary />
      </div>
      <div class="column is-half">
        <ColorsDark />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "../components/TxTitle.vue";
import TxCard from "../components/TxCard.vue";
import ColorsIntro from "../components/pages/colors/ColorsIntro.vue";
import ColorsPrimary from "../components/pages/colors/ColorsPrimary.vue";
import ColorsDark from "../components/pages/colors/ColorsDark.vue";
export default defineComponent({
  components: { TxTitle, TxCard, ColorsIntro, ColorsPrimary, ColorsDark },
});
</script>

<style lang="scss"></style>
