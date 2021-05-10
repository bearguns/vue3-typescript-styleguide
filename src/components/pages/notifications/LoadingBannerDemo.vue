<template>
  <div class="loading-banner-demo">
    <div class="block">
      <p class="title is-size-2">LoadingBanner</p>
      <p>
        Built in to the <code>NotificationCenter</code> component, the loading banner is a full-width loader used to
        convey "global" loading state to end users. In-component loaders can be used as well, but the banner is useful
        for conveying that data is being fetched on page load, or while submitting a form, etc.
      </p>
    </div>
    <div class="box">
      <div class="block">
        <AppButton status="info" @click="setLoading">Click me</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import { AppButton } from "../../controls";
export default defineComponent({
  name: "LoadingBannerDemo",
  components: { AppButton },
  setup() {
    const store = useStore();
    return {
      loading: computed(() => store.state.loading),
      setLoading() {
        store.commit("setLoading", true);
        setTimeout(() => store.commit("setLoading", false), 2000);
      },
    };
  },
});
</script>
