<template>
  <div class="app-table">
    <table class="app-table__table table is-striped is-hoverable">
      <thead class="table-head">
        <th
          class="table-head__cell"
          :class="{ sortable: sort }"
          v-for="column in columns"
          :key="column.value || column"
          @click="$emit('sort', column.value || column)"
        >
          {{ column.label || column }}
        </th>
        <th v-if="actions">Actions</th>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
      <tfoot>
        <slot name="footer"></slot>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
type ColumnNames = string[];
interface SortColumn {
  label: string;
  value: string;
}
type Columns = ColumnNames | SortColumn[];
export default defineComponent({
  name: "AppTable",
  emits: ["sort"],
  props: {
    columns: {
      type: Array as PropType<Columns>,
      required: true,
    },
    actions: {
      type: Boolean,
      required: false,
      default: false,
    },
    sort: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {},
});
</script>

<style lang="scss" scoped>
@import "../../scss/_colors.scss";
@import "../../scss/_typography.scss";
@import "../../scss/variables";

.app-table {
  width: 100%;
  height: auto;
  background-color: $white;
  padding: 2px;
  border: 1px solid $bg-color;
  border-top: 2px solid $blue;
  border-radius: $radius;
  box-shadow: $tx-drop-shadow;
  &__table {
    width: 100%;
    .table-head {
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
}
</style>
