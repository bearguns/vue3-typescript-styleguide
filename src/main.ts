import "highlight.js/styles/night-owl.css";
import { createApp } from "vue";
import { tooltipPlugin } from "./plugins";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(tooltipPlugin);
app.mount("#app");
