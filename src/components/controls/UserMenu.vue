<template>
  <AppDropdown :rounded="true">
    <template #label>
      <UserIcon />
    </template>
    <slot></slot>
  </AppDropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppDropdown from "./AppDropdown.vue";
import { UserIcon } from "../icons";
export default defineComponent({
  name: "UserMenu",
  components: { AppDropdown, UserIcon },
});
</script>
