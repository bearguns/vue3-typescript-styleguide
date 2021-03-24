import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Buttons from "./views/Buttons.vue";
import Cards from "./views/Cards.vue";
import Colors from "./views/Colors.vue";
import Components from "./views/Components.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "Styleguide"
    }
  },
  {
    path: "/components",
    component: Components,
    name: "components",
    meta: {
      title: "Component Library"
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
  },
  {
    path: "/colors",
    component: Colors,
    name: "colors",
    meta: {
      title: "Colors"
    }
  }
];

export default createRouter({
  routes,
  history: createWebHashHistory()
});
