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
          <AppIcon icon="search" />
        </span>
      </div>
      <div class="control">
        <AppButton @click="submit" data-qa="search_submit_button">
          Search
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";

export default defineComponent({
  name: "AppSearch",
  components: { AppButton, AppIcon },
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
  methods: {
    submit(): void {
      this.$emit("submit", this.value);
    },
    input(): void {
      this.$emit("input", this.value);
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
