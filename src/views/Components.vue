<template>
  <section class="section components-page">
    <TxTitle>Components</TxTitle>
    <div class="columns">
      <div class="column is-half">
        <TxTitle :size="3">TxLoginForm</TxTitle>
        <p>
          A simple, reusable login form with inline validation. Passes username
          and password fields to parent component on submit via emitted
          <code>submit</code> event.
        </p>
        <TxLoginForm
          title="Application"
          :errors="loginFormErrors"
          @submit="handleLogin"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TxTitle from "../components/TxTitle.vue";
import TxLoginForm from "../components/TxLoginForm.vue";

export default defineComponent({
  components: { TxTitle, TxLoginForm },
  setup() {
    const loginFormErrors = reactive({
      username: "",
      password: "",
    });

    function handleLogin({ username, password }) {
      loginFormErrors.username = username ? "" : "Username is required.";
      loginFormErrors.password = password ? "" : "Password is required.";
    }

    return { loginFormErrors, handleLogin };
  },
});
</script>
