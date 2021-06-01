import { App, Plugin } from "vue";

const plugin: Plugin = {
  install: (app: App) => {
    app.directive("tooltip", {
      mounted(el, { value, arg }) {
        el.classList.add("tooltip", `tooltip--${arg || "top"}`);
        el.setAttribute("data-tooltip", value.toString());
      },
    });
  },
};

export default plugin;
