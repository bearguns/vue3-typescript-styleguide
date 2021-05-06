<template>
  <div class="box">
    <div class="block">
      <AppTitle :size="2">Boxes</AppTitle>
      <p>
        At the most basic level, UI elements can be contained in a <code>div</code> container with the
        <code>.box</code> class.
      </p>
      <p>
        This provides a containing element with proper padding, a background color, and a light shadow to contrast
        against the background. These boxes form the basis for laying out Teliax UI elements.
      </p>
    </div>
    <div class="block">
      <AppTitle :size="2">Blocks</AppTitle>
      <p>
        Within a top-level <code>.box</code> element, the <code>.block</code> class should be used around inner sections
        of related content. This Bulma class provides consistent spacing within and between elements.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppTitle } from "../../layout";
export default defineComponent({
  name: "Boxes",
  components: { AppTitle },
});
</script>
