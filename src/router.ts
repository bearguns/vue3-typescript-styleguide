import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Buttons from "./views/Buttons.vue";

const routes = [
  { path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "Styleguide"
    }
  },
  {
    path: "/buttons",
    component: Buttons,
    name: "buttons",
    meta: {
      title: "Buttons"
    }
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
});
