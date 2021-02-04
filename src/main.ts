import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import registerIcons from "./icons";

const app = createApp(App);

registerIcons(app);

app.use(router);
app.mount('#app');
