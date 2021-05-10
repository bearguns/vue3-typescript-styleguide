<template>
  <div class="sort-table-demo">
    <div class="block">
      <p class="title is-size-3">Sortable tables</p>
      <p>
        By providing the <code>sortable: boolean</code> prop, <code>AppTable</code> can provide sorting capabilities.
      </p>
      <p>
        When the user clicks a column, <code>AppTable</code> will emit the selected column name to the parent for
        handling.
      </p>
      <p>
        This limited functionality prevents us from tightly coupling API requests to the table, maintaining
        single-responsibility for the component.
      </p>
    </div>
    <div class="block">
      <AppTable
        :columns="['Team', 'Sport', 'Venue']"
        @sort="sort"
        :sortable="true"
        :sortDirection="sortDirection"
        :sortColumn="sortColumn"
      >
        <tr v-for="team in teams" :key="team.name">
          <td>{{ team.name }}</td>
          <td>{{ team.sport }}</td>
          <td>{{ team.venue }}</td>
        </tr>
      </AppTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { AppTable } from "../../presenters";
interface Team {
  name: string;
  sport: string;
  venue: string;
}
export default defineComponent({
  name: "SortTableDemo",
  components: { AppTable },
  setup() {
    const sortColumn = ref("Team");
    const sortDirection = ref("ASC");
    const teams = ref([
      { name: "Colorado Avalanche", sport: "Hockey", venue: "Pepsi Center" },
      { name: "Colorado Rockies", sport: "Baseball", venue: "Coors Field" },
      { name: "Denver Broncos", sport: "Football", venue: "Mile High Stadium" },
      { name: "Denver Nuggets", sport: "Basketball", venue: "Pepsi Center" },
    ]);

    function sortByTeam(): void {
      const newValue = [...teams.value.sort((a: Team, b: Team) => (a.name > b.name ? 1 : -1))];
      if (sortDirection.value === "ASC") {
        teams.value = newValue;
        return undefined;
      }
      teams.value = newValue.reverse();
    }

    function sortBySport(): void {
      const newValue = [...teams.value.sort((a: Team, b: Team) => (b.sport > a.sport ? 1 : -1))];
      if (sortDirection.value === "ASC") teams.value = newValue;
    }

    function sortByVenue(): void {
      const newValue = [...teams.value.sort((a: Team, b: Team) => (b.venue > a.venue ? 1 : -1))];
      teams.value = newValue;
    }

    function sort(column: string): void {
      sortDirection.value = sortDirection.value === "ASC" ? "DESC" : "ASC";
      sortColumn.value = column;

      if (column === "Team") {
        return sortByTeam();
      }

      if (column === "Sport") {
        return sortBySport();
      }

      return sortByVenue();
    }

    return {
      teams,
      sort,
      sortColumn,
      sortDirection,
    };
  },
});
</script>
