<template>
  <div class="box">
    <p class="title">AppButton</p>
    <div class="block">
      <p>
        AppButton provides a pre-styled button component, that can be further customized by providing certain props:
      </p>
      <ul>
        <li><code>status: string</code> applies a color corresponding to the standard Bulma statuses</li>
        <li><code>secondary: boolean</code> changes the button from solid to outlined, for secondary actions</li>
        <li><code>rounded: boolean</code> rounds the corners, making "pill" buttons</li>
        <li>
          <code>disabled: boolean</code> disables/or enables a button. helpful for preventing submission before all
          fields filled out, as an example
        </li>
      </ul>
    </div>
    <div class="block">
      <div class="field is-grouped">
        <div class="control">
          <AppButton>Cancel</AppButton>
        </div>
        <div class="control">
          <AppButton status="primary">Submit</AppButton>
        </div>
      </div>
    </div>
    <p class="title is-size-3">Status buttons</p>
    <div class="columns">
      <div class="column is-half">
        <div class="block">
          <div class="field is-grouped">
            <div class="control">
              <AppButton status="primary">Primary</AppButton>
            </div>
            <div class="control">
              <AppButton status="info">Info</AppButton>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="field is-grouped">
            <div class="control">
              <AppButton status="danger">Danger</AppButton>
            </div>
            <div class="control">
              <AppButton status="success">Success</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppButton } from "../../controls";
export default defineComponent({
  name: "ButtonsDemo",
  components: { AppButton },
});
</script>
