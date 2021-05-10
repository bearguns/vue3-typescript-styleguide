<template>
  <div class="popup-demo">
    <div class="block">
      <p class="title is-size-2">Popup</p>
      <p>
        Popup notifications are designed to be interruptive. Use these notifications to convey to the end user
        information that is neccessary for them to continue.
      </p>
      <p>
        Popups can be triggered by importing the <code>popup</code> module from <code>@teliax/styleguide</code>, and
        calling the appropriate method. The available methods for popups are:
      </p>
      <ul>
        <li><code>error</code></li>
        <li><code>info</code></li>
        <li><code>success</code></li>
      </ul>
      <p>These methods share the same function signature, and accept the following arguments:</p>
      <ul>
        <li><code>title: string</code> a descriptive title, shown in larger text to convey intent.</li>
        <li><code>text: string</code> the message content, informing users of what they need to know.</li>
        <li>
          <code>showConfirm: boolean</code> when <code>true</code>, an "OK" button is rendered that requires user
          interaction to dismiss the popup. Default value is <code>true</code>.
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="block">
            <p class="title is-size-3">Default popups</p>
            <p>"Blocking", require user to dismiss. Use for vital information.</p>
          </div>
          <div class="block">
            <div class="field is-grouped">
              <div class="control">
                <AppButton status="danger" @click="error">Error</AppButton>
              </div>
              <div class="control">
                <AppButton status="success" @click="success">Success</AppButton>
              </div>
              <div class="control">
                <AppButton status="info" @click="info">Info</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="block">
            <p class="title is-size-3">Non-blocking popups</p>
            <p>
              By providing the <code>showConfirm</code> argument as <code>false</code>, popups will dismiss
              automatically after 7 seconds.
            </p>
          </div>
          <div class="block">
            <div class="field is-grouped">
              <div class="control">
                <AppButton status="danger" @click="errorNoConfirm">Error</AppButton>
              </div>
              <div class="control">
                <AppButton status="success" @click="successNoConfirm">Success</AppButton>
              </div>
              <div class="control">
                <AppButton status="info" @click="infoNoConfirm">Info</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { popup } from "../../../composers/notifications";
import { AppButton } from "../../controls";
export default defineComponent({
  name: "PopupDemo",
  components: { AppButton },
  setup() {
    return {
      error() {
        popup.error("Oh no!", "I'm an error message!");
      },
      success() {
        popup.success("Hooray!", "I'm a success message!");
      },
      info() {
        popup.info("Look!", "I'm an info message!");
      },
      errorNoConfirm() {
        popup.error("Oh no!", "I'll go away in 7 seconds!", false);
      },
      successNoConfirm() {
        popup.success("Hooray!", "I'll go away in 7 seconds!", false);
      },
      infoNoConfirm() {
        popup.info("Look!", "I'll go away in 7 seconds!", false);
      },
    };
  },
});
</script>
