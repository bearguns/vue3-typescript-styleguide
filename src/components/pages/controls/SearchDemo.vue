<template>
  <div class="box">
    <div class="block" v-html="html"></div>
    <div class="block">
      <AppSearch name="search-demo" v-model="searchTerm" align="left" />
      <p>{{ searchTerm }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppSearch } from "../../controls";
import { CodeHighlight } from "../../presenters";
import { html } from "./search-demo-no-button.md";
export default defineComponent({
  name: "SearchDemo",
  components: { AppSearch },
  setup() {
    const searchTerm = ref("");
    function setSearchTerm(value: string) {
      searchTerm.value = value;
    }

    return {
      searchTerm,
      setSearchTerm,
      html,
    };
  },
});
</script>
