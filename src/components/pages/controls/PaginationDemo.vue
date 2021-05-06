<template>
  <div class="box">
    <div class="block">
      <p class="title">AppPagination</p>
      <p>Pagination controls for advancing through paginated data.</p>
      <p>
        Rather than a "one-stop-shop" approach with fragile coupling between the UI controls, AJAX requests, and state,
        this component simply responds to changes in props and emits events to its parent.
      </p>
      <p>AppPagination expects the following props:</p>
      <ul>
        <li><code>lastPage: number</code> the total number of pages according to your API endpoint</li>
        <li><code>currentPage: number</code> the number of the page the user is currently viewing</li>
      </ul>
      <p>
        With these props, the component is able to display the current page, and accurately adjust the page numbers as
        the user advances.
      </p>
      <p>
        If the total number of pages is greater than 10, then the component will auto-increment the displayed numbers
        once the user crosses the 5th page.
      </p>
      <p>
        If the total number of pages is less than 10, then only a number of buttons equal to the total number of pages
        will be rendered.
      </p>
    </div>
    <div class="block">
      <p>
        You can try it for yourself: use the inputs below to set a total number of pages and/or current page, and see
        how the component responds.
      </p>
      <p class="title is-size-3">Total pages: {{ totalPages }} -- Current page: {{ currentPage }}</p>
      <div class="field is-grouped">
        <NumberInput v-model.number="totalPages" label="Total pages:" />
        <NumberInput v-model.number="currentPage" label="Current page:" />
      </div>
    </div>
    <div class="block">
      <AppPagination :currentPage="currentPage" :lastPage="totalPages" @input="setPage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppPagination } from "../../controls";
import { NumberInput } from "../../inputs";
export default defineComponent({
  name: "PaginationDemo",
  components: { AppPagination, NumberInput },
  setup() {
    const currentPage = ref(1);
    const totalPages = ref(24);
    function setPage(num: number) {
      if (Number(num) > 0) {
        currentPage.value = Number(num);
      }
    }

    return {
      currentPage,
      totalPages,
      setPage,
    };
  },
});
</script>
