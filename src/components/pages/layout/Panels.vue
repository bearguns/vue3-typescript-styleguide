<template>
  <div class="panels box">
    <div class="block">
      <AppTitle :size="2">Panels</AppTitle>
      <p>
        Panels are simple components for wrapping related box contents. For example, the instance page would utilize
        panels to display collections of devices, locations, phone numbers, etc.
      </p>
    </div>
    <div class="columns">
      <div class="column">
        <AppPanel title="Basic panel">
          <p>Panels accept an optional <code>title: string</code> prop, or can be used without a title.</p>
        </AppPanel>
      </div>
      <div class="column">
        <AppPanel :expand="true" title="Expandable panels">
          <p>
            The <code>AppPanel</code> component also accepts an optional <code>expandable: boolean</code> prop, turning
            the panel into an expanding/collapsing container for reserving screen space until the user expands the
            panel's contents.
          </p>
        </AppPanel>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <AppPanel>
          <div class="block">
            <p>
              Utilizing an <code>AppPanel</code> without a title provides a clean, bordered component to direct user
              attention.
            </p>
          </div>
          <div class="block">
            <AppTitle status="danger" :size="3" v-if="isTerrible">I'm just as God made me, sir.</AppTitle>
            <AppTitle status="primary" :size="3" v-if="isGood">Thank you, I try.</AppTitle>
          </div>
          <div class="block">
            <div class="field is-grouped">
              <div class="control">
                <AppButton status="danger" @click="setTerrible">No way, these are terrible.</AppButton>
              </div>
              <div class="control">
                <AppButton status="success" @click="setGood"
                  >I agree, my attention was directed quite nicely.</AppButton
                >
              </div>
            </div>
          </div>
        </AppPanel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AppPanel, AppTitle } from "../../layout";
import { AppButton } from "../../controls";
export default defineComponent({
  name: "Panels",
  components: { AppPanel, AppTitle, AppButton },
  setup() {
    const isTerrible = ref(false);
    const isGood = ref(false);
    return {
      isTerrible,
      isGood,
      setTerrible() {
        isGood.value = false;
        isTerrible.value = true;
      },
      setGood() {
        isGood.value = true;
        isTerrible.value = false;
      },
    };
  },
});
</script>
