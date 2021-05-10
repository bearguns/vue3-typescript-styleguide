<template>
  <div class="notifications-page">
    <div class="box">
      <div class="columns">
        <div class="column-is-half">
          <div class="field is-grouped">
            <div class="control">
              <AppButton status="danger" @click="errorToast">Error Toast</AppButton>
            </div>
            <div class="control">
              <AppButton status="success" @click="successPopup">Success Popup</AppButton>
            </div>
            <div class="control">
              <AppButton status="primary" @click="showLoadingBanner">Loading Banner</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="block">
        <AppTitle :size="2">Notifications</AppTitle>
        <p>
          Toast and popup notifications are available throughout any application implimenting <code>AppWrapper</code>.
        </p>
        <p>
          By importing the <code>toast</code> and <code>popup</code> objects from
          <code>src/composers/notifications.ts</code>, calls can be made to the following methods to dispatch
          notifications:
        </p>
        <ul>
          <li><code>toast.error</code></li>
          <li><code>toast.success</code></li>
          <li><code>toast.info</code></li>
          <li><code>popup.error</code></li>
          <li><code>popup.success</code></li>
          <li><code>popup.info</code></li>
        </ul>
        <p>Use the buttons above to see a preview of each notification type.</p>
      </div>
    </div>
    <div class="box">
      <div class="block">
        <AppTitle :size="3">Notification types</AppTitle>
        <p>
          Two notification types, toast and popup, are provided for use. These should be used for specific UX purposes,
          as outlined below.
        </p>
      </div>
      <div class="block">
        <AppTitle :size="4">Toast notifications</AppTitle>
        <p>Toasts are designed to be transient notifications, providing quick, informative feedback to users.</p>
        <p>
          Toasts should be used to let users know that their request is processing, an action was successful, or a
          non-vital error occured.
        </p>
        <p>
          The purpose of toast notifications is to keep the user up-to-date on what's happening with their actions or
          requests. They are <strong>not</strong> to be used for "showstoppers", like critical errors.
        </p>
      </div>
      <div class="block">
        <AppTitle :size="4"> Popup notifications </AppTitle>
        <p>
          Popups are meant to be directly communicative to the user. By default, popups provide a button that the user
          must click to dismiss the notification.
        </p>
        <p>
          Popups should be used when a cricital error occurs that prevents the user from continuing, or when additional
          information needs to be provided to the user as a result of their actions.
        </p>
        <p>
          Popups are <strong>not</strong> asynchronous, so they cannot be used as a "step". If you require confirmation
          from a user before continuing, use <code>AppModal</code> and provide controls to the component.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { AppButton } from "../components/controls";
import { PageWrapper, AppTitle } from "../components/layout";
import { toast, popup } from "../composers/notifications";
import { showLoader } from "../composers/demo";
export default defineComponent({
  name: "NotificationsPage",
  components: { PageWrapper, AppButton, AppTitle },
  setup() {
    const store = useStore();
    return {
      errorToast() {
        toast.error("This is an error toast!");
      },
      successToast() {
        toast.success("Success!!!");
      },
      infoToast() {
        toast.info("Infooooo");
      },
      errorPopup() {
        popup.error("Oh no!", "I'm an error popup!", true);
      },
      successPopup() {
        popup.success("Hooray!", "I'm a success popup!", true);
      },
      infoPopup() {
        popup.info("Actually,", "I'm an info popup.", true);
      },
      showLoadingBanner() {
        store.commit("setLoading", true);
        setTimeout(() => store.commit("setLoading", false), 2000);
      },
    };
  },
});
</script>
