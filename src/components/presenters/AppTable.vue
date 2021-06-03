<template>
  <div class="app-table">
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
  width: 100%;
  height: auto;
  background-color: $white;
  padding: 2px;
  border: 1px solid $gray--darker;
  border-top: 2px solid $blue;
  border-radius: $radius;

  &__table {
    width: 100%;
    border-collapse: separate;

    .table-head {
      width: 100%;
      & th {
        font-family: $heading-font;
        font-size: 1rem;
        font-weight: 400;
        text-align: center;

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

      &--with-select th:first-child {
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
