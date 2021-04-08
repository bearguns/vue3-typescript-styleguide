<template>
  <PageWrapper>
    <template #content>
      <router-view />
    </template>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { PageWrapper } from "../components/layout";
export default defineComponent({
  components: { PageWrapper },
});
</script>
