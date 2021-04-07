import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Home, Layout, Components, Inputs, Controls } from "./views";

const routes: Array<RouteRecordRaw> = [
  { path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "Ivy Styleguide"
    }
  },
  {
    path: "/components",
    component: Components,
    name: "components",
    meta: {
      title: "Component Library"
    },
    children: [
      {
        path: "layout",
        component: Layout,
        name: "layoutComponents",
        meta: {
          title: "Components / Layout"
        }
      },
      {
        path: "controls",
        component: Controls,
        name: "controlComponents",
        meta: {
          title: "Components / Controls"
        }
      },
      {
        path: "inputs",
        component: Inputs,
        name: "inputComponents",
        meta: {
          title: "Components / Inputs"
        }
      }
    ]
  },

];

export default createRouter({
  routes,
  history: createWebHashHistory()
});
