<template>
  <div class="app-search">
    <div class="field is-grouped" :class="[alignClass]">
      <div class="control has-icons-right">
        <input
          class="input is-rounded app-search__input"
          :name="name"
          :data-qa="name"
          :placeholder="placeholder"
          type="text"
          v-model="value"
          @keyup.enter="submit"
          @input="input"
        />
        <span class="icon is-right">
          <SearchIcon color="gray" />
        </span>
      </div>
      <div class="control">
        <AppButton @click="submit" data-qa="search_submit_button"> Search </AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { AppButton } from "../controls";
import { SearchIcon } from "../icons";

export default defineComponent({
  name: "AppSearch",
  components: { AppButton, SearchIcon },
  emits: ["submit", "input"],
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Search",
    },
    align: {
      type: String,
      required: false,
      default: "right",
    },
  },
  setup(props, { emit }) {
    const value = ref("");
    const alignClass = computed(() => (props.align === "right" ? "right-align" : "left-align"));

    function submit(): void {
      emit("submit", value.value);
    }
    function input(): void {
      emit("input", value.value);
    }

    return {
      value,
      alignClass,
      submit,
      input,
    };
  },
});
</script>

<style lang="scss">
.app-search {
  & .field {
    &.right-align {
      justify-content: flex-end;
    }
    &.left-align {
      justify-content: flex-start;
    }
  }
  &__input {
    width: 225px;
  }
}
</style>
