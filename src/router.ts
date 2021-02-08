import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Buttons from "./views/Buttons.vue";
import Cards from "./views/Cards.vue";

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
  },
  {
    path: "/cards",
    component: Cards,
    name: "cards",
    meta: {
      title: "Cards"
    }
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
});
