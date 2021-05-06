<template>
  <div class="columns splash-cards">
    <div class="column is-one-third">
      <AppCard status="info">
        <template #header> Source-controlled and npm-installable. </template>
        <div class="columns">
          <div class="column has-text-centered">
            <div class="block splash-card__content">
              <GithubIcon size="5x" />
            </div>
          </div>
          <div class="column">
            <div class="block">
              <ul class="splash-card__list">
                <li>Git-controlled</li>
                <li>Published as NPM package</li>
                <li>CI/CD for self-hosting</li>
              </ul>
            </div>
          </div>
        </div>
        <template #footer>
          <a href="https://github.com/teliax/styleguide" target="_blank" class="card-footer-item"> View on Github </a>
        </template>
      </AppCard>
    </div>
    <div class="column is-one-third">
      <AppCard>
        <template #header>
          <p class="title">Modern and modular.</p>
        </template>
        <div class="block has-text-centered">
          <AppTitle :size="4">Built with the latest stack:</AppTitle>
        </div>
        <ul class="splash-card__list">
          <li>Vue 3</li>
          <li>TypeScript</li>
          <li>Vite + Rollup</li>
          <li>Yarn</li>
          <li>Tree-shaking for minimal bundle sizes</li>
        </ul>
      </AppCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppCard, AppTitle } from "../../layout";
import { GithubIcon } from "../../icons";
export default defineComponent({
  name: "SplashCards",
  components: { AppCard, AppTitle, GithubIcon },
});
</script>

<style lang="scss" scoped>
.splash-card {
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &__list {
    padding: 0.75rem;
    text-align: center;
    & li {
      list-style: none;
      font-size: 1.25rem;
    }
  }
}
</style>
