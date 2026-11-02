<script setup lang="ts">
import { desktopNavLinks, navigationMenu } from '~/utils/navigation'

const isNavOpen = ref(false)
const isHydrated = ref(false)

function closeNav() {
  isNavOpen.value = false
}

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isNavOpen.value) {
    closeNav()
  }
}

watch(isNavOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  isHydrated.value = true
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="app-header" data-cy="site-header" :data-hydrated="isHydrated ? 'true' : 'false'">
    <div class="app-header__bar">
      <NuxtLink to="/" class="app-header__logo" @click="closeNav">
        <img src="/logo.svg" alt="ChinaBrasil" class="app-header__logo-img" />
      </NuxtLink>

      <nav class="app-header__desktop-nav" data-cy="desktop-nav" aria-label="Menu principal">
        <ul class="app-header__desktop-nav-list">
          <li v-for="link in desktopNavLinks" :key="link.to">
            <NuxtLink :to="link.to" class="app-header__desktop-nav-link" data-cy="desktop-nav-link">{{
              link.label
            }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="app-header__toggle"
        data-cy="nav-toggle"
        :aria-expanded="isNavOpen ? 'true' : 'false'"
        aria-controls="site-navigation-menu"
        :aria-label="isNavOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
        @click="toggleNav"
      >
        <span class="app-header__toggle-bar" aria-hidden="true"></span>
        <span class="app-header__toggle-bar" aria-hidden="true"></span>
        <span class="app-header__toggle-bar" aria-hidden="true"></span>
      </button>
    </div>

    <div
      v-if="isNavOpen"
      class="app-header__backdrop"
      data-cy="nav-backdrop"
      @click="closeNav"
    ></div>

    <nav
      id="site-navigation-menu"
      class="app-header__nav"
      data-cy="site-navigation"
      :data-open="isNavOpen ? 'true' : 'false'"
      aria-label="Menu principal"
    >
      <div class="app-header__nav-head">
        <span class="app-header__nav-title">Menu</span>
        <button
          type="button"
          class="app-header__close"
          data-cy="nav-close"
          aria-label="Fechar menu de navegação"
          @click="closeNav"
        >
          &times;
        </button>
      </div>

      <ul class="app-header__nav-list">
        <AppNavItem
          v-for="item in navigationMenu"
          :key="item.label"
          :item="item"
          @navigate="closeNav"
        />
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  inset-block-start: 0;
  inset-inline: 0;
  z-index: 100;
  background-color: $color-page-background;
  box-shadow: $shadow-soft;

  &__bar {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 108px;
    padding-block: $space-4;
  }

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__logo-img {
    height: 76px;
    width: auto;
  }

  &__toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    cursor: pointer;

    @include focus-ring;

    @include respond-to(md) {
      display: none;
    }
  }

  &__desktop-nav {
    display: none;

    @include respond-to(md) {
      display: block;
    }
  }

  &__desktop-nav-list {
    display: flex;
    align-items: center;
    gap: $space-8;
  }

  &__desktop-nav-link {
    font-size: $font-size-body-sm;
    font-weight: $weight-medium;
    color: $color-body-text;

    @include focus-ring;

    &:hover,
    &.router-link-active {
      color: $color-primary-action;
    }
  }

  &__toggle-bar {
    display: block;
    width: 22px;
    height: 2px;
    background-color: $color-heading-text;
    border-radius: $radius-pill;
  }

  &__backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba($red-950, 0.5);
    z-index: 101;

    @include respond-to(md) {
      display: none;
    }
  }

  &__nav {
    position: fixed;
    inset-block: 0;
    inset-inline-end: 0;
    z-index: 102;
    width: min(85vw, 320px);
    height: 100%;
    overflow-y: auto;
    background-color: $color-dark-section;
    transform: translateX(100%);
    transition: transform $duration-normal $easing-brand;

    &[data-open='true'] {
      transform: translateX(0);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    @include respond-to(md) {
      display: none;
    }
  }

  &__nav-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $space-4 $space-5;
    border-bottom: 1px solid rgba($white, 0.12);
  }

  &__nav-title {
    @include visually-hidden;
  }

  &__close {
    margin-left: auto;
    width: 32px;
    height: 32px;
    font-size: 1.5rem;
    line-height: 1;
    color: $white;
    background: none;
    border: none;
    cursor: pointer;

    @include focus-ring;
  }

  &__nav-list {
    padding: 0 $space-5 $space-8;
  }
}
</style>
