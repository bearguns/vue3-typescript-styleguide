<template>
  <div class="search-select">
    <div class="search-select__selected">
      <AppTag
        v-for="item in selected"
        :key="item.value"
        status="info"
        :removeable="true"
        @click="$emit('remove', item.value)"
      >
        {{ item.label }}
      </AppTag>
    </div>
    <div class="field">
      <div class="control">
        <label class="label" :for="name" :data-qa="`${name}-label`">{{ label }}</label>
        <input
          class="input search-select__input"
          :name="name"
          :data-qa="`${name}-input`"
          type="text"
          :value="modelValue"
          :placeholder="placeholder"
          @focus="showItemsList"
          @input="debouncedEmit($event.target.value)"
        />
      </div>
    </div>
    <div class="search-select__items" v-show="showItems" id="search-select-dropdown">
      <ul class="search-select__list">
        <li v-for="item in items" :key="item.value" @click="selectItem(item.value)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { AppTag } from "../presenters";

interface Item {
  label: string;
  value: any;
}

export default defineComponent({
  name: "SearchSelect",
  components: { AppTag },
  // Emits input value, "select" and "remove"
  emits: ["update:modelValue", "select", "remove"],
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    // Name for input field
    name: {
      type: String,
      required: true,
    },
    // Label for input fields
    label: {
      type: String,
      required: true,
    },
    // Placeholder text
    placeholder: {
      type: String,
      required: false,
      default: "Select an item or type to search",
    },
    // List of items to display in results. Parent is responsible for updating this
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
    // Selected items, for rendering tags
    selected: {
      type: Array as PropType<Item[]>,
      required: false,
    },
  },
  setup(props, { emit }) {
    const showItems = ref(false);
    let timeout: number | undefined = undefined;

    function debouncedEmit(value: string): void {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => emit("update:modelValue", value), 700);
    }

    // Hide list and remove event listener
    function hideItemsList(e: any): void {
      console.log(e);
      if (e.target.localName !== "li" && e.target.localName !== "input") {
        showItems.value = false;
        window.removeEventListener("click", hideItemsList);
      }
    }

    // Add listener to close items list when user clicks outside
    function showItemsList(): void {
      setTimeout(() => window.addEventListener("click", hideItemsList), 500);
      showItems.value = true;
    }

    function selectItem(value: any): void {
      emit("select", value);
    }

    return {
      showItems,
      showItemsList,
      selectItem,
      debouncedEmit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/variables";
.search-select {
  width: 100%;

  &__selected {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    > * {
      margin-right: 0.25rem;
    }
  }

  &__list {
    max-height: 10rem;
    margin-top: -12px;
    overflow-y: scroll;
    border: 1px solid $gray--dark;
    border-top: none;
    border-radius: 0 0 $radius-small $radius-small;
    & li {
      padding: 0.25rem;
      width: 100%;
      cursor: pointer;
      &:hover {
        background-color: $primary;
        color: $white;
      }
    }
  }
}
</style>
