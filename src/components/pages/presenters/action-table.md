<p class="title is-size-4">Action Table</p>

By passing `true` to the `:actions` prop on `AppTable`, you can render an extra column for buttons, menus, controls etc.

Passing content into the `#actions` slot on `AppTableRow` allows you to render arbitrary controls, letting users manipulate table data or entities.

```html
<AppTable :actions="true" :columns="myColumns">
  <AppTableRow :link="true" v-for="column in myColumns" :key="column.user">
    <td>{{column.user}}</td>
    <td>{{column.email}}</td>
    <template #actions>
      <!-- render buttons/controls here -->
    </template>
  </AppTableRow>
</AppTable>
```
