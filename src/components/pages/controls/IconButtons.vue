<template>
  <div class="box">
    <div class="block">
      <p class="title is-size-3">IconButton</p>
      <p>
        Specialized wrapper component for rendering buttons with icons instead of text labels. These components properly
        style and align their icons, while accepting the same status prop as AppButton.
      </p>
    </div>
    <div class="block">
      <div class="field is-grouped">
        <div class="control" v-for="icon in icons" :key="icon.name">
          <IconButton :status="icon.status">
            <component :is="icon.icon" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlusIcon, EditIcon, DeleteIcon } from "../../icons";
import { IconButton } from "../../controls";
export default defineComponent({
  name: "IconButtons",
  components: { PlusIcon, EditIcon, DeleteIcon, IconButton },
  setup() {
    const icons = [
      { status: "success", icon: PlusIcon, name: "new" },
      { status: "warning", icon: EditIcon, name: "edit" },
      { status: "danger", icon: DeleteIcon, name: "delete" },
    ];

    return { icons };
  },
});
</script>
