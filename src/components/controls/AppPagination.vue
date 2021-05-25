<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <button
      class="pagination-previous has-background-white"
      @click="goToPage(currentPage - 1)"
      :disabled="isFirstPage"
      data-qa="pagination_previous_page_button"
    >
      Previous
    </button>
    <button
      class="pagination-next has-background-white"
      @click="goToPage(currentPage + 1)"
      :disabled="isLastPage"
      data-qa="pagination_next_page_button"
    >
      Next
    </button>
    <ul class="pagination-list">
      <li>
        <a data-qa="pagination_first_page_button" class="pagination-link" @click="goToPage(1)">
          <ChevronsIcon direction="left" class="pagination-link__icon" />
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
        <a data-qa="pagination_last_page_button" class="pagination-link" @click="goToPage(lastPage)">
          <ChevronsIcon direction="right" class="pagination-link__icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ChevronsIcon } from "../icons";

export default defineComponent({
  name: "AppPagination",
  emits: ["input"],
  components: { ChevronsIcon },
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
  setup(props, { emit }) {
    const isMobile = window.innerWidth > 768 ? false : true;
    const offsetBase = isMobile ? 4 : 10;
    const isLastPage = computed(() => props.currentPage === props.lastPage);
    const isFirstPage = computed(() => props.currentPage === 1);
    const offset = computed(() => {
      if (props.lastPage > offsetBase && props.currentPage > offsetBase / 2) {
        if (props.currentPage > props.lastPage - offsetBase / 2) {
          return props.lastPage - offsetBase;
        }
        return props.currentPage - offsetBase / 2 - 1;
      }
      return 0;
    });
    const pageRange = computed(() => {
      if (isMobile) {
        return props.lastPage < 4 ? props.lastPage : 4;
      }

      if (props.lastPage <= 10) {
        return props.lastPage;
      }

      return 10;
    });

    function goToPage(num: number): void {
      if (num < 1 || num > props.lastPage) {
        return undefined;
      }
      emit("input", num);
    }

    return {
      isLastPage,
      isFirstPage,
      offset,
      pageRange,
      goToPage,
    };
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
.pagination-link__icon {
  margin-top: 25%;
}
</style>
