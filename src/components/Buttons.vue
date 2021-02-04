<template>
  <div class="columns">
    <div class="column">
      <AppTitle :size="2">Buttons</AppTitle>
      <p>
        Buttons are available pre-styled via the AppButton component. These can
        be customized by providing a <code>status</code> prop to override the
        color.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <AppButton @click="handleClick">Default Button</AppButton>
    </div>
    <div class="column">
      <AppButton status="primary">Primary Button</AppButton>
    </div>
    <div class="column">
      <AppButton status="danger">Danger Button</AppButton>
    </div>
    <div class="column">
      <AppButton status="success">Success Button</AppButton>
    </div>
    <div class="column">
      <AppButton status="warning">Warning Button</AppButton>
    </div>
    <div class="column">
      <AppButton status="info">Info Button</AppButton>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <AppTitle :size="2">Icon Buttons</AppTitle>
      <p>
        Buttons can be used with icons by passing an
        <code>vue-feather-icon</code> into the default slot. See Icons for more
        information.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <AppButton>
        <MessageSquareIcon />
      </AppButton>
      <AppButton status="danger">
        <Trash2Icon />
      </AppButton>
      <AppButton status="primary">
        <EditIcon />
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";
import AppTitle from "./AppTitle.vue";

export default defineComponent({
  components: { AppTitle, AppButton },
});
</script>
