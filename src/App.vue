<template>
  <div class="app__content">
    <AppTitle>Teliax Styleguide</AppTitle>
    <hr />
    <section class="section">
      <div class="columns">
        <div class="column">
          <AppTitle :size="2">Buttons</AppTitle>
          <p>
            Buttons are available pre-styled via the AppButton component. These
            can be customized by providing a <code>status</code> prop to
            override the color.
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
    </section>
    <section class="section">
      <div class="columns">
        <div class="column">
          <AppTitle :size="2">Inputs</AppTitle>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <AppTitle :size="3">Text & Number Inputs</AppTitle>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field is-grouped">
            <AppInput
              label="Text input"
              name="text-input"
              :value="textInput"
              @input="setTextInput"
            />
          </div>
        </div>
        <div class="column">
          <AppTitle :size="6">Text input value:</AppTitle>
          <p>{{ textInput }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTitle from "./components/AppTitle.vue";
import AppButton from "./components/AppButton.vue";
import AppInput from "./components/AppInput.vue";

export default defineComponent({
  name: "App",
  data(): any {
    return {
      textInput: "",
    };
  },
  components: {
    AppTitle,
    AppButton,
    AppInput,
  },
  methods: {
    setTextInput(e: any): void {
      this.textInput = e.target.value;
    },
    handleClick(): void {
      console.log("CLICK");
    },
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";

.app__content {
  padding: $content-gutter;
}
</style>
