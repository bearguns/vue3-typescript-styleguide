<template>
  <section class="section tx-cards">
    <div class="columns">
      <div class="column">
        <TxCard status="primary">
          <template v-slot:header> Primary Cards </template>
          <template v-slot:default>
            <p>
              Cards are the most broad-use presentational component available.
              They can be used to wrap forms, confirmations, images, etc.
            </p>
          </template>
        </TxCard>
      </div>
      <div class="column">
        <TxCard>
          <template v-slot:default>
            <p>
              Content can be slotted into the default slot for a bare card with
              no header or footer.
            </p>
          </template>
        </TxCard>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <TxCard>
          <template v-slot:header> Header & footer </template>
          <template v-slot:default>
            <p>
              Additionally, the <code>v-slot:header</code> and
              <code>v-slot:footer</code> slots can be used to add more
              information or interactivity.
            </p>
          </template>
          <template v-slot:footer>
            <TxTitle :size="5">Footer content goes here!</TxTitle>
          </template>
        </TxCard>
      </div>
      <div class="column">
        <TxCard status="danger">
          <template v-slot:header> Statuses & controls </template>
          <template v-slot:default>
            <p>
              Statuses can be passed as the <code>status</code> prop to provide
              color theming to the card header.
            </p>
            <p>
              Buttons and inputs can be slotted into the footer by wrapping them
              in an element with the <code>.field.is-grouped</code> classes.
            </p>
          </template>
          <template v-slot:footer>
            <div class="field is-grouped">
              <div class="control">
                <TxButton>Cancel</TxButton>
              </div>
              <div class="control">
                <TxButton status="primary">Submit</TxButton>
              </div>
            </div>
          </template>
        </TxCard>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <TxCard :expandable="true">
          <template v-slot:header> Expandable cards </template>
          <template v-slot:default>
            <p>
              Cards can be turned into expandable panels by providing the
              <code>expandable</code> prop.
            </p>
          </template>
        </TxCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TxButton from "../components/TxButton.vue";
import TxCard from "../components/TxCard.vue";
export default defineComponent({
  components: { TxCard, TxButton },
});
</script>
