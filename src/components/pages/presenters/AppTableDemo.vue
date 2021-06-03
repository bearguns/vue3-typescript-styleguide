<template>
  <div class="app-table-demo">
    <div class="block">
      <p class="title is-size-3">AppTable</p>
      <p>A flexible, capable table component. Can be customized to provide sorting, or made "selectable".</p>
    </div>
    <div class="block">
      <p class="title is-size-4">Basic table</p>
      <p>
        By providing an array of column names as <code>columns</code> and passing <code>tr</code> elements to the
        default slot, a basic table will render.
      </p>
    </div>
    <div class="columns">
      <div class="column is-half">
        <AppTable :columns="basicColumns">
          <AppTableRow v-for="row in basicRows" :key="row.amount">
            <td>{{ row.name }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.item }}</td>
            <td>{{ row.amount }}</td>
          </AppTableRow>
        </AppTable>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="block">
          <action-table-demo />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppTable, AppTableRow } from "../../presenters";
import ActionTableDemo from "./ActionTableDemo.vue";
export default defineComponent({
  name: "AppTableDemo",
  components: { AppTable, AppTableRow, ActionTableDemo },
  setup() {
    const basicColumns = ["Name", "Date", "Item", "Amount"];
    const basicRows = [
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.01" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.02" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.03" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.04" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.05" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.06" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.07" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.08" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.09" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.10" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.20" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.30" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.40" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.50" },
      { name: "Bob", date: "12/22/23", item: "Burger", amount: "$5.60" },
    ];
    return {
      basicColumns,
      basicRows,
    };
  },
});
</script>
