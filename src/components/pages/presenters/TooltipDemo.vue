<template>
  <div class="tooltip-demo box">
    <CodeHighlight>
      <div class="block" v-html="html"></div>
    </CodeHighlight>
    <div class="columns">
      <div class="column">
        <div class="block">
          <AppButton status="info" v-tooltip:top="'Top tooltip'">Top</AppButton>
        </div>
      </div>
      <div class="column">
        <div class="block">
          <AppButton status="info" v-tooltip:bottom="'Bottom tooltip'">Bottom</AppButton>
        </div>
      </div>
      <div class="column">
        <div class="block">
          <AppButton status="info" v-tooltip:left="'Left tooltip'">Left</AppButton>
        </div>
      </div>
      <div class="column">
        <div class="block">
          <AppButton status="info" v-tooltip:right="'Right tooltip'">Right</AppButton>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="title is-size-4" v-tooltip:top="'Look! I Work!'">Tooltips work everywhere!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppButton, IconButton } from "../../controls";
import { CodeHighlight } from "../../presenters";
import { html } from "./tooltip-demo.md";
export default defineComponent({
  name: "TooltipDemo",
  components: { AppButton, IconButton, CodeHighlight },
  setup() {
    return { html };
  },
});
</script>
