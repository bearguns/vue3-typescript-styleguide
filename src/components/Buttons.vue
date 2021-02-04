<template>
  <div class="columns">
    <div class="column">
      <TxTitle :size="2">Buttons</TxTitle>
      <p>
        Buttons are available pre-styled via the TxButton component. These can
        be customized by providing a <code>status</code> prop to override the
        color.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <TxButton @click="handleClick">Default Button</TxButton>
    </div>
    <div class="column">
      <TxButton status="primary">Primary Button</TxButton>
    </div>
    <div class="column">
      <TxButton status="danger">Danger Button</TxButton>
    </div>
    <div class="column">
      <TxButton status="success">Success Button</TxButton>
    </div>
    <div class="column">
      <TxButton status="warning">Warning Button</TxButton>
    </div>
    <div class="column">
      <TxButton status="info">Info Button</TxButton>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <TxTitle :size="2">Icon Buttons</TxTitle>
      <p>
        Buttons can be used with icons by passing an
        <code>vue-feather-icon</code> into the default slot. See Icons for more
        information.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <TxButton>
        <MessageSquareIcon />
      </TxButton>
      <TxButton status="danger">
        <Trash2Icon />
      </TxButton>
      <TxButton status="primary">
        <EditIcon />
      </TxButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxButton from "./TxButton.vue";
import TxTitle from "./TxTitle.vue";

export default defineComponent({
  components: { TxTitle, TxButton },
});
</script>
