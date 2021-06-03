<template>
  <tr
    class="app-table-row"
    :class="{ 'is-selected': hovered, 'app-table-row--link': link }"
    @mouseenter="toggleHovered"
    @mouseleave="toggleHovered"
  >
    <td v-if="selectable">
      <input type="checkbox" value="selected" :checked="selected" @change="$emit('select')" />
    </td>
    <slot></slot>
    <template v-if="$slots.actions">
      <td class="app-table-row__actions">
        <slot name="actions" />
      </td>
    </template>
  </tr>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AppTableRow",
  emits: ["select"],
  props: {
    selectable: {
      type: Boolean,
      required: false,
      default: false,
    },
    selected: {
      type: Boolean,
      required: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const hovered = ref(false);

    function toggleHovered(): void {
      if (!props.link) return undefined;

      hovered.value = !hovered.value;
    }

    return { hovered, toggleHovered };
  },
});
</script>

<style lang="scss" scoped>
.app-table-row {
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &--link {
    cursor: pointer;
  }

  & td {
    padding: 0.5rem;
    vertical-align: middle;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    vertical-align: middle;
    padding: 0.5rem;
  }
}
</style>
