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
          @keyup.enter="$emit('submit')"
          @input="debouncedEmit($event.target.value)"
        />
        <span class="icon is-right">
          <SearchIcon color="gray" />
        </span>
      </div>
      <div class="control" v-if="hasButton">
        <AppButton @click="$emit('submit')" data-qa="search_submit_button"> Search </AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { AppButton } from "../controls";
import { SearchIcon } from "../icons";

export default defineComponent({
  name: "AppSearch",
  components: { AppButton, SearchIcon },
  emits: ["submit", "update:modelValue"],
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
    hasButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const alignClass = computed(() => (props.align === "right" ? "right-align" : "left-align"));
    let timeout: number;

    function debouncedEmit(value: string): void {
      if (timeout) clearTimeout(timeout);
      setTimeout(() => {
        emit("update:modelValue", value);
      }, 500);
    }

    return {
      alignClass,
      debouncedEmit,
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
