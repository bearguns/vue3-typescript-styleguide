<template>
  <div class="home-view">
    <p class="title is-size-1">Teliax Styleguide & Component Library</p>
    <InstallInstructions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { InstallInstructions } from "../components/pages/home";
export default defineComponent({
  name: "HomeView",
  components: { InstallInstructions },
});
</script>
