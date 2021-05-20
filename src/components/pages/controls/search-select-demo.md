<p class="title is-size-4">Example</p>
<p class="title is-size-5">Implementing SearchSelect:</p>

```jsx
<SearchSelect
    name="item-selection"
    label="Select your item(s)"
    v-model="searchTerm"
    placeholder="Select an item from the list by clicking here"
    :items="filteredItems"
    :selected="mySelectedItems"
    @select="selectItem"
    @remove="removeItem" />
```

<p class="title is-size-5">Handling events in parent components:</p>

```jsx
setup() {
    const items = ref([// "master items list"]);
    const mySelectedItems = ref([]);
    const searchTerm = ref("");

    const filteredItems = computed(() => {
       // Only filter items if the user has entered a search term
       if (searchTerm.value.trim()) {
          return items.value.filter(item => {
             return item.label.toLowerCase().includes(searchTerm.value) ||
                 item.value.toString().toLowerCase().includes(searchTerm.value);
          });
       }

       // If user hasn't entered a search, return the master list of items
       return items.value;
    });

    function selectItem(value: string) {
        const selectedItem = items.find(item => item.value === value);
        mySelectedItems.value = [...mySelectedItems.value, selectedItem];
    }

    function removeItem(value: string) {
       mySelectedItems.value = mySelectedItems.value.filter(item => item.value !== value);
    }

}
```
