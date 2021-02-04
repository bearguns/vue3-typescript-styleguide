<template>
  <section class="section">
    <TxTitle>Headings</TxTitle>
    <div class="columns">
      <div class="column">
        <p>
          The <code>TxHeading</code> component provides pre-styled heading
          elements for use across pages. Providing a <code>:size</code> prop
          sets the heading level from 1-6.
        </p>
        <TxTitle :size="1">Heading 1</TxTitle>
        <TxTitle :size="2">Heading 2</TxTitle>
        <TxTitle :size="3">Heading 3</TxTitle>
        <TxTitle :size="4">Heading 4</TxTitle>
        <TxTitle :size="5">Heading 5</TxTitle>
        <TxTitle :size="6">Heading 6</TxTitle>
      </div>
      <div class="column">
        <p>
          All headings can be customized using standard Bulma helpers i.e.
          <code>class="has-text-primary"</code>.
        </p>
        <TxTitle :size="1" class="has-text-primary">Primary heading</TxTitle>
        <TxTitle :size="2" class="has-text-danger">Danger heading</TxTitle>
        <TxTitle :size="3" class="has-text-warning">Warning heading</TxTitle>
        <TxTitle :size="4" class="has-text-info">Info heading</TxTitle>
        <TxTitle :size="5" class="has-text-success">Success heading</TxTitle>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxTitle from "./TxTitle.vue";

export default defineComponent({
  components: { TxTitle },
});
</script>
