<script setup lang="ts">
import { desktopNavLinks, legalLinks } from '~/utils/navigation'
</script>

<template>
  <footer class="app-footer" data-cy="site-footer">
    <div class="app-footer__container">
      <div class="app-footer__col app-footer__col--logo">
        <NuxtLink to="/" class="app-footer__logo">
          <img src="/logo.svg" alt="Centro Cultural China-Brasil" class="app-footer__logo-img" />
        </NuxtLink>
      </div>

      <div class="app-footer__col">
        <h3 class="app-footer__heading">Navegação</h3>
        <nav aria-label="Links principais">
          <ul class="app-footer__list">
            <li v-for="link in desktopNavLinks" :key="link.to">
              <NuxtLink :to="link.to" class="app-footer__link" data-cy="footer-nav-link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="app-footer__col">
        <h3 class="app-footer__heading">Legal</h3>
        <nav aria-label="Links legais">
          <ul class="app-footer__list">
            <li v-for="link in legalLinks" :key="link.to">
              <NuxtLink :to="link.to" class="app-footer__link" data-cy="footer-legal-link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="app-footer__copy">
      2026 ©️ Centro Cultural China-Brasil Yuan Aiping - Todos os Direitos Reservados
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "sass:color";

.app-footer {
  background-color: $color-dark-section;
  padding-top: $space-12;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__container {
    @include container;
    display: flex;
    
    gap: $space-10;


    @include respond-to(md) {
      flex-direction: row;
      gap: $space-12;
    }
  }

  &__col {
    flex: 1;
  }

  &__logo {
    display: inline-flex;

    @include focus-ring;
  }

  &__logo-img {
    height: 88px;
    width: auto;
    background-color: $white;
    padding:0.5rem 0.88rem;
    border-radius: 5px;
  }

  &__heading {
    font-family: $font-body;
    font-size: $font-size-caption;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: $weight-semibold;
    color: $gold-500;
    margin-bottom: $space-4;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__link {
    color: rgba($white, 0.75);
    font-size: $font-size-body-sm;
    
    @include focus-ring;
    
    &:hover {
      color: $text-light;
      text-decoration: underline;
    }
  }
  &__copy {
    border-top: color.mix($red-600, $black, 50%) 1px solid;
    background-color: color.mix($red-950, $black, 50%);
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    bottom: 0;
    color: $white;
    font-size: 0.8rem;
    text-align: center;
  }
}
</style>
