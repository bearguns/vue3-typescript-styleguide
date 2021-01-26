<template>
  <table class="app-table table is-striped is-hoverable">
    <thead class="table-head">
      <th class="table-head__cell" v-if="selectable">
        <AppCheckbox
          name="select-all"
          @click="$emit('selectAll', $event)"
          :checked="selectAllChecked"
        />
      </th>
      <th
        class="table-head__cell"
        :class="{ sortable }"
        v-for="column in columns"
        :key="column.value"
        @click="$emit('sort', column.value)"
      >
        {{ column.label }}
        <AppIcon
          :icon="sortIcon"
          v-if="sortable && column.value === sortColumn"
        />
      </th>
      <slot name="action"></slot>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
    <tfoot>
      <slot name="foot"></slot>
    </tfoot>
  </table>
</template>

<script>
import { defineComponent } from "vue";
import AppCheckbox from "./AppCheckbox";
import AppIcon from "./AppIcon";

export default defineComponent({
  name: "AppTable",
  components: { AppCheckbox, AppIcon },
  emits: ["selectAll", "sort"],
  props: {
    selectable: {
      type: Boolean,
      required: false,
      default: false,
    },
    sortable: {
      type: Boolean,
      required: false,
      default: false,
    },
    sortColumn: {
      type: String,
      required: false,
      default: "",
    },
    sortType: {
      type: String,
      required: false,
      default: "DESC",
    },
    columns: {
      type: Array,
      required: true,
    },
    selectAllChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    sortIcon(): string {
      return this.sortType.toUpperCase() === "DESC" ? "arrow-down" : "arrow-up";
    },
  },
});
</script>

<style lang="scss" scoped>
.app-table {
  width: 100%;

  .table-head {
    border-top: 2px solid $blue;
    width: 100%;
    & th {
      font-family: $heading-font;
      font-size: 1rem;
      font-weight: 400;

      &.sortable {
        cursor: pointer;
        &:hover {
          color: $blue;
          transition: color 0.15s linear;
        }
      }
    }

    & th:first-child {
      width: 8rem;
      padding-left: 0.75rem;
    }
  }

  & tr {
    font-size: 1rem;

    & td {
      vertical-align: middle;
    }
  }
}
</style>
