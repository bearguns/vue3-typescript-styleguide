<template>
  <TxCard>
    <template v-slot:header> Dark Colors </template>
    <p>
      Dark colors are used for text, backgrounds, shadows, etc. "Black" is a
      deeply darkened version of our primary brand blue, which provides softer
      contrast for end-users than true black.
    </p>
    <div class="colors">
      <ColorSwatch
        v-for="color in colors"
        :key="color.color"
        :color="color.color"
        :label="color.label"
      />
    </div>
  </TxCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxCard from "../../TxCard.vue";
import ColorSwatch from "./ColorSwatch.vue";

export default defineComponent({
  components: { TxCard, ColorSwatch },
  data() {
    return {
      colors: [
        { color: "black", label: "Black" },
        { color: "gray", label: "Gray" },
        { color: "gray--dark", label: "Gray Dark" },
        { color: "gray--darker", label: "Gray Darker" },
        { color: "gray--darkest", label: "Gray Darkest" },
        { color: "gray--light", label: "Gray Light" },
        { color: "gray--lighter", label: "Gray Lighter" },
        { color: "gray--lightest", label: "Gray Lightest" },
      ],
    };
  },
});
</script>

<style lang="scss">
.colors {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
