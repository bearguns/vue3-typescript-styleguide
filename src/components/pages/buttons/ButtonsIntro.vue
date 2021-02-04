<template>
  <section class="section tx-buttons">
    <div class="tx-buttons__intro columns">
      <div class="column is-left">
        <p>
          Buttons are available pre-styled by implementing
          <code>TxButton</code> in your components. Text or icons can be passed
          to the default slot for rendering.
        </p>
        <p>
          Click events can be captured by listening to the native click event.
        </p>
      </div>
    </div>
    <div class="tx-buttons__defaults columns">
      <div class="column">
        <TxButton status="primary">Primary</TxButton>
      </div>
      <div class="column">
        <TxButton status="danger">Danger</TxButton>
      </div>
      <div class="column">
        <TxButton status="success">Success</TxButton>
      </div>
      <div class="column">
        <TxButton status="warning">Warning</TxButton>
      </div>
      <div class="column">
        <TxButton status="info">Info</TxButton>
      </div>
      <div class="column">
        <TxButton>Default</TxButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxButton from "../../TxButton.vue";
export default defineComponent({
  components: { TxButton },
});
</script>
