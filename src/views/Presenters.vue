<template>
  <div class="presenters-page">
    <AppPanel title="Presentation Components">
      <p>These components present more advanced views, data, or controls to the user.</p>
      <AppTitle :size="2">Tables</AppTitle>
      <div class="columns">
        <div class="column is-half">
          <AppTitle :size="4">App Table</AppTitle>
          <AppTable :columns="basicColumns">
            <template #body>
              <tr v-for="row in basicRows" :key="row.amount">
                <td>{{ row.name }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.item }}</td>
                <td>{{ row.amount }}</td>
              </tr>
            </template>
          </AppTable>
        </div>
      </div>
    </AppPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppPanel, AppTitle } from "../components/layout";
import { AppTable } from "../components/presenters";
export default defineComponent({
  name: "PresentersView",
  components: { AppPanel, AppTable, AppTitle },
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
