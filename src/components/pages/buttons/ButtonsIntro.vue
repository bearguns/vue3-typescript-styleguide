<template>
  <section class="section tx-buttons">
    <TxCard>
      <template v-slot:header>Buttons</template>
      <div class="tx-buttons__intro columns">
        <div class="column is-half">
          <p>
            Buttons are available pre-styled by implementing
            <code>TxButton</code> in your components. Text or icons can be
            passed to the default slot for rendering.
          </p>
          <p>
            Click events can be captured by listening to the native click event.
          </p>
        </div>
      </div>
      <div class="tx-buttons__defaults columns">
        <div class="column is-half">
          <TxButton status="primary">Primary</TxButton>
          <TxButton status="danger">Danger</TxButton>
          <TxButton status="success">Success</TxButton>
          <TxButton status="warning">Warning</TxButton>
          <TxButton status="info">Info</TxButton>
          <TxButton>Default</TxButton>
        </div>
      </div>
    </TxCard>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxCard from "../../TxCard.vue";
import TxButton from "../../TxButton.vue";
export default defineComponent({
  components: { TxButton, TxCard },
});
</script>
