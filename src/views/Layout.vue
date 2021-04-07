<template>
  <div class="layout-page">
    <AppTitle>Panels</AppTitle>
    <div class="columns">
      <div class="column">
        <AppPanel title="Content panel"> </AppPanel>
      </div>
      <div class="column">
        <AppPanel :expand="true" title="Expandable panel">
          <ul>
            <li>Collapsed by default</li>
            <li>Expanded by clicking icon in title</li>
            <li>Great for breaking up pages and saving screen real estate</li>
          </ul>
        </AppPanel>
      </div>
    </div>
    <AppPanel title="Cards">
      <div class="columns">
        <div class="column is-one-third">
          <AppCard>
            <template v-slot:header> Basic card </template>
            <p>A basic card element with a descriptive header. Perfect for forms!</p>
          </AppCard>
        </div>
        <div class="column">
          <AppCard status="primary">
            <template v-slot:header> Status cards </template>
            <p>Cards can be passed an optional <code>status</code> prop to set a color scheme.</p>
            <p>The available statuses are consistent with all Bulma statuses:</p>
            <ul>
              <li><code>primary</code></li>
              <li><code>info</code></li>
              <li><code>success</code></li>
              <li><code>danger</code></li>
              <li><code>warning</code></li>
            </ul>
          </AppCard>
        </div>
        <div class="column">
          <AppCard status="danger">
            <template #header>Themed cards FTW!</template>
            <p>
              Cards with statuses provide instant, visual feedback to users. They can convey the card's meaning at a
              glance.
            </p>
          </AppCard>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <AppCard :expand="true" status="info">
            <template #header>Expandable cards</template>
            <p>
              By passing a <code>boolean</code> of <code>true</code> to the <code>:expand</code> prop, cards become
              collapsable.
            </p>
          </AppCard>
        </div>
        <div class="column">
          <AppCard status="success">
            <template #header>Card footers</template>
            <p>
              Passing content to the <code>footer</code> slot enables a card footer, perfect for controls and helpful
              information.
            </p>
            <template #footer>
              <div class="field is-grouped">
                <div class="control">
                  <AppButton :secondary="true">Cancel</AppButton>
                </div>
                <div class="control">
                  <AppButton status="primary">Submit</AppButton>
                </div>
              </div>
            </template>
          </AppCard>
        </div>
      </div>
    </AppPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppPanel, AppTitle, AppCard } from "../components/layout";
import { AppButton } from "../components/controls";
export default defineComponent({
  components: { AppPanel, AppTitle, AppCard, AppButton },
});
</script>
