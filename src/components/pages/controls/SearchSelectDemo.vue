<template>
  <div class="box">
    <div class="block">
      <AppTitle :size="3">SearchSelect</AppTitle>
      <p class="title is-size-4">Selected Items:</p>
      <ul>
        <li v-for="item in selected" :key="item.value">{{ item.label }}</li>
      </ul>
    </div>
    <SearchSelect
      name="search-select-demo"
      label="Select item(s)"
      :multiple="true"
      :items="displayItems"
      :selected="selected"
      v-model="searchTerm"
      @select="selectItem"
      @remove="removeSelectedItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { AppTitle } from "../../layout";
import { SearchSelect } from "../../controls";
export default defineComponent({
  name: "SearchSelectDemo",
  components: { AppTitle, SearchSelect },
  setup() {
    // A two-way-bound query. Value comes _up_ from child,
    // and is passed _down_ from parent.
    const searchTerm = ref("");

    // The "master" list of items for use, in real life would be API results etc.
    const items = ref([
      { label: "Item 1", value: 1 },
      { label: "Item 2", value: 2 },
      { label: "Item 3", value: 3 },
      { label: "Item 4", value: 4 },
      { label: "Item 5", value: 5 },
      { label: "Item 6", value: 6 },
      { label: "Item 7", value: 7 },
    ]);

    // Our filtered items, updated when we receive a searchTerm from SearchSelect
    // Other implementers may need different search functionality, but this example
    // is deliberately kept simple.
    const displayItems = computed(() => {
      if (searchTerm.value.trim()) {
        return [
          ...items.value.filter(
            (item: any) =>
              item.label.toLowerCase().includes(searchTerm.value) ||
              item.value.toString().toLowerCase().includes(searchTerm.value)
          ),
        ];
      }
      return [...items.value];
    });

    // A reactive array of items selected by the user
    // Again, can be customized by implementing components to change
    // what is displayed on the tags in the child.
    const selected = ref<any[]>([]);

    // Simple function to demonstrate receiving a selected value from the child,
    // and storing user selections so the child can display tags
    function selectItem(value: any): void {
      const i: any = items.value.find((item: any) => item.value === value);
      selected.value = [...selected.value, i];
    }

    // Simple function to remove an item when user clicks the X icon on a tag
    function removeSelectedItem(value: any): void {
      selected.value = [...selected.value.filter((item: any) => item.value !== value)];
    }

    return {
      items,
      displayItems,
      selected,
      selectItem,
      searchTerm,
      removeSelectedItem,
    };
  },
});
</script>
