<template>
  <div class="demo-cards">
    <div class="block">
      <AppTitle :size="2">Cards</AppTitle>
      <p>
        Cards are a general-use component for calling attention to and directing acting toward particular options or
        content.
      </p>
      <p>
        Cards work well within <code>.box</code> containers, or on their own as they are designed to "float" above their
        container, giving a sense of depth and contrast.
      </p>
    </div>
    <div class="columns">
      <div class="column">
        <AppCard>
          <template #header>Cards with headers</template>
          <p>
            A basic card element with a descriptive header. Perfect for forms, terms and conditions, offers, product
            selection, you name it!
          </p>
          <p>Passing content into the <code>header</code> slot provides a styled title to the card.</p>
        </AppCard>
      </div>
      <div class="column">
        <AppCard>
          <p>Cards can be implemented without passing content into the <code>header</code> slot as well.</p>
          <p>
            These "headless" cards still float above their container, giving depth and contrast and drawing the user's
            attention.
          </p>
        </AppCard>
      </div>
      <div class="column">
        <AppCard>
          <p>
            The <code>AppCard</code> component also provides a <code>footer</code> slot, perfect for adding controls and
            other calls to action.
          </p>
          <p class="has-text-success" v-if="cardsAreCool">Yes, cards are kinda cool and useful.</p>
          <template #footer>
            <div class="field">
              <div class="control">
                <AppButton status="info"> See? </AppButton>
              </div>
            </div>
          </template>
        </AppCard>
      </div>
    </div>
    <div class="block">
      <AppTitle :size="3">Cards with statuses</AppTitle>
      <p>
        Providing the optional <code>status: string</code> prop to a card will apply a color theme, allowing you to
        convey intent quickly and visually.
      </p>
    </div>
    <div class="columns">
      <div class="column">
        <AppCard status="primary">
          <template #header>Primary status</template>
          <p>
            The primary status always uses our brand color, maximum blue, to direct attention and increase brand
            familiarity.
          </p>
        </AppCard>
      </div>
      <div class="column">
        <AppCard status="danger">
          <template #header>Danger status</template>
          <p>
            The danger status conveys errors, system or service interruption, or that a particular action has
            side-effects the user needs to be aware of.
          </p>
        </AppCard>
      </div>
    </div>
    <div class="block">
      <AppTitle :size="3">Expandable cards</AppTitle>
      <p>Providing the optional <code>expand: boolean</code> prop turns cards into expanding content blocks.</p>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <AppCard status="primary" :expand="true">
          <template #header> Click me! I'll expand.</template>
          <p>Like panels, expandable cards let us preserve real estate and avoid visually overloading our users.</p>
          <p>
            Expandable cards give users the power to choose what they interact with and when. However, care must be
            taken to not hide information that is most likely going to be important to the user.
          </p>
          <template #footer>
            <div class="field is-grouped">
              <div class="control">
                <AppButton status="danger">Disagree, hide everything. Users are the enemy!</AppButton>
              </div>
              <div class="control">
                <AppButton status="primary">I agree. I love our users!</AppButton>
              </div>
            </div>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppButton, AppSwitch } from "../../controls";
import { AppTitle, AppCard } from "../../layout";
export default defineComponent({
  name: "Cards",
  components: { AppTitle, AppButton, AppCard, AppSwitch },
  setup() {
    const cardsAreCool = ref(false);
    return {
      cardsAreCool,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-cards {
  margin-bottom: 2rem;
}
</style>
