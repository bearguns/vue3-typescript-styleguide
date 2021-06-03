<template>
  <div class="app-table has-radius--small">
    <table class="app-table__table table is-striped is-hoverable">
      <thead class="table-head">
        <th class="table-head__cell" v-for="column in columns" :key="column">
          {{ column }}
        </th>
        <th v-if="actions">Actions</th>
      </thead>
      <tbody>
        <slot></slot>
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

export default defineComponent({
  name: "AppTable",
  emits: ["sort"],
  props: {
    columns: {
      type: Array as PropType<ColumnNames>,
      required: true,
    },
    actions: {
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
  border: 1px solid $gray--darker;
  border-top: 2px solid $blue;

  & table {
    width: 100%;
    border-collapse: separate;

    & th {
      &.sortable {
        cursor: pointer;
        &:hover {
          color: $blue;
          transition: color 0.15s linear;
        }

        & span {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
