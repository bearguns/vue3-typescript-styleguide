<template>
  <div class="number-input-demo">
    <p class="title">NumberInput</p>
    <div class="columns">
      <div class="column">
        <NumberInput :required="true" v-model="required" name="required-number" label="Required" />
        <p>{{ required }}</p>
      </div>
      <div class="column">
        <NumberInput :min="3" v-model="min" name="min-number" label="Min = 3" />
        <p>{{ min }}</p>
      </div>
      <div class="column">
        <NumberInput :max="5" v-model="max" label="Max = 5" name="max-number" />
        <p>{{ max }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NumberInput } from "../../inputs";
export default defineComponent({
  name: "NumberInputDemo",
  components: { NumberInput },
  setup() {
    return {
      required: ref(0),
      min: ref(0),
      max: ref(0),
    };
  },
});
</script>
