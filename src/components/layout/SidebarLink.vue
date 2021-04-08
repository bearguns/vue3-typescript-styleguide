<template>
  <router-link :to="to" class="sidebar-link" :class="{ 'sidebar-link--active': active }">
    {{ label }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { useRoute } from "vue-router";
interface LinkTo {
  name: string;
  params?: object;
}
export default defineComponent({
  props: {
    to: {
      type: Object as PropType<LinkTo>,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const active = computed(() => {
      return route.name === props.to.name;
    });

    return { active };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.sidebar-link {
  font-size: 1.5rem;
  color: $white;
  transition: color 0.3s ease-in-out;
  position: relative;
  &--active {
    color: $blue;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0px;
    height: 0px;
    background-color: $blue;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after,
  &--active:after {
    height: 2px;
    width: 100%;
  }
}

.sidebar-link:hover {
  color: $blue;
}
</style>
