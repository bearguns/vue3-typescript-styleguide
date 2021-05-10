<template>
  <div class="notifications-page">
    <PopupDemo />
    <LoadingBannerDemo />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { toast, popup } from "../composers/notifications";
import { showLoader } from "../composers/demo";
import { PopupDemo, LoadingBannerDemo } from "../components/pages/notifications";
export default defineComponent({
  name: "NotificationsPage",
  components: { PopupDemo, LoadingBannerDemo },
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
