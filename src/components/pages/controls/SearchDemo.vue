<template>
  <div class="box">
    <div class="block">
      <p class="title">AppSearch</p>
      <p>
        A simple search component. On input, it emits the <code>input</code> event with the current value of the input.
        This value can be caught in the parent, debounced, sent to a Vuex store, etc. The decision of what to do with
        the emitted value is intentionally left up to the parent/consumer.
      </p>
      <p>
        To properly align the component, the <code>align</code> prop can be passed with a value of
        <code>"left" | "right"</code>. This will ensure the component is flush to the proper side of its container.
      </p>
      <p>Like other input-based components, a <code>name: string</code> prop is required for accessibility and QA.</p>
    </div>
    <div class="block">
      <AppSearch name="search-demo" @input="setSearchTerm" align="left" />
      <p>{{ searchTerm }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppSearch } from "../../controls";
export default defineComponent({
  name: "SearchDemo",
  components: { AppSearch },
  setup() {
    const searchTerm = ref("");
    function setSearchTerm(value: string) {
      searchTerm.value = value;
    }

    return {
      searchTerm,
      setSearchTerm,
    };
  },
});
</script>
