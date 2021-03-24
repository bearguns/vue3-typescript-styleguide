<template>
  <div class="home">
    <TxTitle>Teliax Styleguide</TxTitle>
    <p>
      This application serves as a design style guide and component library for
      Teliax UI applications.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxSearch from "../components/TxSearch.vue";
import TxTitle from "../components/TxTitle.vue";
export default defineComponent({
  components: { TxTitle, TxSearch },
});
</script>
