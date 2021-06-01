<p class="title is-size-2">Tooltips</p>

Tooltips are provided via the installable `tooltip` plugin. Once installed, tooltips are available globally on *any* element!

To add a tooltip, first install the plugin globally in your app's `main.ts`:

```javascript
import { createApp } from "vue";
import { tooltipPlugin } from "@teliax/styleguide";
import App from "./App.vue";

const app = createApp(App);

app.use(tooltipPlugin);
app.mount("#app");
```

Once installed, you can add the `v-tooltip` directive to any element:

```html
<button class="button" v-tooltip="'Tooltip contents'" />
```

<p class="title is-size-4">Tooltip arguments</p>

You can specify the direction of the tooltip when you use the directive. Options are top, bottom, left, or right. The default direction is **top**.

```html
<button class="button" v-tooltip:right="'Right-aligned tooltip'" />
```

**NOTE**: The provided text **must** be wrapped in single-quotes. Custom directives in Vue 3 evaluate the provided content _as a JavaScript expression_, so the provided string needs to be quoted. Otherwise, you will get an evaluation error in your code.

```html
<!-- This will break your code -->
<button v-tooltip:top="Click here to do something" />

<!-- This will NOT break your code -->
<button v-tooltip:top="'Click me to do something'" />
```
