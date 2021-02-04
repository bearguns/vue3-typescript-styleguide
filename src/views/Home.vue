<template>
  <TxPageWrapper>
    <p>
      This application serves as a design style guide and component library for
      Teliax UI applications.
    </p>
  </TxPageWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "../components/TxTitle.vue";
import TxPageWrapper from "../components/TxPageWrapper.vue";

export default defineComponent({
  components: { TxTitle, TxPageWrapper },
});
</script>
