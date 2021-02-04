<template>
  <section class="section">
    <AppTitle>Headings</AppTitle>
    <div class="columns">
      <div class="column">
        <p>
          The <code>AppHeading</code> component provides pre-styled heading
          elements for use across pages. Providing a <code>:size</code> prop
          sets the heading level from 1-6.
        </p>
        <AppTitle :size="1">Heading 1</AppTitle>
        <AppTitle :size="2">Heading 2</AppTitle>
        <AppTitle :size="3">Heading 3</AppTitle>
        <AppTitle :size="4">Heading 4</AppTitle>
        <AppTitle :size="5">Heading 5</AppTitle>
        <AppTitle :size="6">Heading 6</AppTitle>
      </div>
      <div class="column">
        <p>
          All headings can be customized using standard Bulma helpers i.e.
          <code>class="has-text-primary"</code>.
        </p>
        <AppTitle :size="1" class="has-text-primary">Primary heading</AppTitle>
        <AppTitle :size="2" class="has-text-danger">Danger heading</AppTitle>
        <AppTitle :size="3" class="has-text-warning">Warning heading</AppTitle>
        <AppTitle :size="4" class="has-text-info">Info heading</AppTitle>
        <AppTitle :size="5" class="has-text-success">Success heading</AppTitle>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./AppTitle.vue";

export default defineComponent({
  components: { AppTitle },
});
</script>
