<template>
  <table class="app-table table is-striped is-hoverable">
    <thead class="table-head">
      <th class="table-head__cell" v-if="selectable">
        <TxCheckbox
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
        <TxIcon
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TxCheckbox from "./TxCheckbox.vue";
import TxIcon from "./TxIcon.vue";

interface Column {
  label: string;
  value: string;
}

export default defineComponent({
  name: "TxTable",
  components: { TxCheckbox, TxIcon },
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
      type: Array as PropType<Column[]>,
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
@import "../scss/_colors.scss";
@import "../scss/_typography.scss";

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
