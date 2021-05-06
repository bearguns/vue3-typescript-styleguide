import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Home, Layout, Components, Inputs, Controls, Presenters, Notifications } from "./views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/components",
    name: "components",
    component: Components,
    children: [
      {
        path: "layout",
        component: Layout,
        name: "layoutComponents",
        meta: {
          title: "Components / Layout",
        },
      },
      {
        path: "controls",
        component: Controls,
        name: "controlComponents",
        meta: {
          title: "Components / Controls",
        },
      },
      {
        path: "inputs",
        component: Inputs,
        name: "inputComponents",
        meta: {
          title: "Components / Inputs",
        },
      },
      {
        path: "presenters",
        component: Presenters,
        name: "presenterComponents",
        meta: {
          title: "Components / Presenters",
        },
      },
    ],
  },
  {
    path: "/notifications",
    component: Notifications,
    name: "notificationCenter",
    meta: {
      title: "Components / Notifications",
    },
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
