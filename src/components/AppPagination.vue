<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      @click="goToPage(currentPage - 1)"
      :disabled="isFirstPage"
      data-qa="pagination_previous_page_button"
    >
      Previous
    </a>
    <a
      class="pagination-next"
      @click="goToPage(currentPage + 1)"
      :disabled="isLastPage"
      data-qa="pagination_next_page_button"
    >
      Next
    </a>
    <ul class="pagination-list">
      <li>
        <a
          data-qa="pagination_first_page_button"
          class="pagination-link"
          @click="goToPage(1)"
        >
          <AppIcon icon="chevrons-left" />
        </a>
      </li>
      <template v-if="lastPage > 10">
        <li v-for="num in pageRange" :key="num + offset">
          <a
            data-qa="pagination_link"
            class="pagination-link"
            :class="{ 'is-current': num + offset === currentPage }"
            @click="goToPage(num + offset)"
          >
            {{ num + offset }}
          </a>
        </li>
      </template>
      <template v-else>
        <li v-for="num in pageRange" :key="num">
          <a
            data-qa="pagination_link"
            class="pagination-link"
            :class="{ 'is-current': num === currentPage }"
            @click="goToPage(num)"
          >
            {{ num }}
          </a>
        </li>
      </template>
      <li>
        <a
          data-qa="pagination_last_page_button"
          class="pagination-link"
          @click="goToPage(lastPage)"
        >
          <AppIcon icon="chevrons-right" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppIcon from "./AppIcon";
export default defineComponent({
  name: "AppPagination",
  components: { AppIcon },
  props: {
    lastPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isLastPage(): boolean {
      return this.currentPage === this.lastPage;
    },
    isFirstPage(): boolean {
      return this.currentPage === 1;
    },
    offset(): number {
      if (this.lastPage > 10 && this.currentPage > 5) {
        if (this.currentPage > this.lastPage - 5) {
          return this.lastPage - 10;
        }
        return this.currentPage - 5 - 1;
      }
      return 0;
    },
    pageRange(): number {
      if (this.lastPage <= 10) {
        return this.lastPage;
      }

      return 10;
    },
  },
  methods: {
    goToPage(num): void {
      if (num < 1 || num > this.lastPage) {
        return undefined;
      }
      this.$emit("input", num);
    },
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  justify-content: flex-start;

  & .pagination-list {
    flex-grow: 0;
    flex-wrap: nowrap;
  }
}
</style>
