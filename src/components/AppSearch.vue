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
          @keyup.enter="$emit('submit', $event)"
          @input="$emit('input', value)"
        />
        <span class="icon is-right">
          <!-- <AppIcon icon="search" /> -->
        </span>
      </div>
      <div class="control">
        <AppButton @click="$emit('submit')" data-qa="search_submit_button">
          Search
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import AppIcon from "@/components/common/AppIcon";
import { defineComponent } from "vue";
import AppButton from "./AppButton";

export default defineComponent({
  name: "AppSearch",
  components: { AppButton },
  emits: ["submit"],
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
  data() {
    return {
      value: "",
    };
  },
  computed: {
    alignClass(): string {
      return this.align === "right" ? "right-align" : "left-align";
    },
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
    width: 275px;
  }
}
</style>
