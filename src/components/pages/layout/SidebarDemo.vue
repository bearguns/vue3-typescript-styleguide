<template>
  <div class="sidebar-demo box">
    <div class="block">
      <p class="title is-size-3">AppSidebar</p>
      <p>
        Self-styled, responsive sidebar for navigation. On mobile screens, listens to provided <code>open</code> prop
        and emits <code>toggle</code> event when user clicks the mobile-only close button.
      </p>
    </div>
    <div class="block">
      <CodeHighlight>
        <div class="block" v-html="demoHtml"></div>
      </CodeHighlight>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CodeHighlight } from "../../presenters";
import { html as demoHtml } from "./sidebar-demo.md";
export default defineComponent({
  name: "SidebarDemo",
  components: { CodeHighlight },
  setup() {
    return { demoHtml };
  },
});
</script>
