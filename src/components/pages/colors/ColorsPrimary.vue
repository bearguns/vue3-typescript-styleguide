<template>
  <TxCard status="primary">
    <template v-slot:header> Primary Colors </template>
    <p>
      These are the primary UI colors. This palette is designed to reinforce
      brand identity through heavy use of our Teliax brand blue color. It is
      also intended to provide visual feedback and direction to users through
      use of red "danger" color to denote "dangerous" actions, green for
      successful actions, light blue for informative messaging etc.
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
        { color: "primary", label: "Blue/Primary" },
        { color: "info", label: "Light Blue/Info" },
        { color: "success", label: "Green/Success" },
        { color: "danger", label: "Red/Danger" },
        { color: "warning", label: "Yellow/Warning" },
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
