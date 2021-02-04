<template>
  <div class="app-tabs tabs is-boxed">
    <ul class="app-tabs__list">
      <li
        v-for="tab in tabs"
        :key="tab.value"
        :class="{ 'is-active': activeTab === tab.value }"
        @click="$emit('click', tab.value)"
      >
        <a>
          <span>{{ tab.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Tab {
  label: string;
  value: string;
}

export default defineComponent({
  name: "TxTabs",
  emits: ["click"],
  props: {
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    activeTab: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/_typography.scss";

.app-tabs {
  &__list {
    margin-left: 0;
    margin-top: 0;

    & li * {
      font-size: 1.25rem;
      font-family: $heading-font;
    }
  }
}
</style>
