<template>
  <div class="action-table-demo">
    <div class="block" v-html="html"></div>
    <AppTable :actions="true" :columns="columns">
      <AppTableRow :link="true" v-for="row in rows" :key="row.email">
        <td>{{ row.user }}</td>
        <td>{{ row.email }}</td>
        <template #actions>
          <div class="field is-grouped">
            <div class="control">
              <IconButton status="info" v-tooltip:left="'Edit'">
                <EditIcon />
              </IconButton>
            </div>
            <div class="control">
              <IconButton status="danger" v-tooltip:right="'Delete'">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </template>
      </AppTableRow>
    </AppTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppTable, AppTableRow, CodeHighlight } from "../../presenters";
import { IconButton } from "../../controls";
import { EditIcon, DeleteIcon } from "../../icons";
import { html } from "./action-table.md";
export default defineComponent({
  name: "ActionTableDemo",
  components: { AppTable, AppTableRow, IconButton, EditIcon, DeleteIcon, CodeHighlight },
  setup() {
    const columns = ["User", "Email"];
    const rows = [
      {
        user: "Steve",
        email: "steve@conchor.ds",
      },
      { user: "Murray", email: "murray@conchor.ds" },
      { user: "Jemaine", email: "jdog@conchor.ds" },
    ];
    return { columns, rows, html };
  },
});
</script>
