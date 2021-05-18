<h2 class="title">Getting Started</h2>

It only takes a few steps to start using Styleguide components:

Use the Vite `vue-ts` template to initialize your project:

<h4 class="title is-size-4">Authenticate to GitHub Packages</h4>
Follow the instructions on GitHub for [authenticating to GitHub packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry),
and add a `.npmrc` file with your GH token to the root of your project:

```txt
@teliax:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GH_TOKEN
```
<h4 class="title is-size-4">Install the Styleguide</h4>
Then, install the Styleguide along with any other dependencies you may need for your project:

```bash
$ yarn add @teliax/styleguide
$ yarn
```

<h4 class="title is-size-4">Import and start building!</h4>
You're ready to start importing components and building your UI!

```html
<template>
    <AppButton status="primary" @click="handleClick">Click me</AppButton>
</template>

<script lang=ts>
import { AppButton } from "@teliax/styleguide";
import { defineComponent } from "vue";
export default defineComponent({
    components: { AppButton },
    setup() {
        return {
           handleClick() {
              console.log("That's it!");
           }
        }
    }
});
```
<h4 class="title is-size-4">Next steps</h4>

- [Check out the component demos](#/components/layout)
- [Read the UX guidelines](#/guide)
