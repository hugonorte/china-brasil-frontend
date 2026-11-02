<script setup lang="ts">
import type { NavItem } from '~/utils/navigation'

interface Props {
  item: NavItem
}

const props = defineProps<Props>()

const emit = defineEmits<{
  navigate: []
}>()

const isOpen = ref(false)
const hasChildren = computed(() => Boolean(props.item.children?.length))

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li class="nav-item">
    <NuxtLink
      v-if="!hasChildren"
      :to="item.to"
      class="nav-item__link"
      data-cy="nav-link"
      @click="emit('navigate')"
    >
      {{ item.label }}
    </NuxtLink>

    <template v-else>
      <button
        type="button"
        class="nav-item__toggle"
        data-cy="nav-submenu-toggle"
        :aria-expanded="isOpen ? 'true' : 'false'"
        @click="toggle"
      >
        <span>{{ item.label }}</span>
        <span class="nav-item__chevron" :class="{ 'nav-item__chevron--open': isOpen }" aria-hidden="true"></span>
      </button>

      <ul v-show="isOpen" class="nav-item__submenu">
        <AppNavItem
          v-for="child in item.children"
          :key="child.label"
          :item="child"
          @navigate="emit('navigate')"
        />
      </ul>
    </template>
  </li>
</template>

<style lang="scss" scoped>
.nav-item {
  border-bottom: 1px solid rgba($white, 0.12);

  &__link,
  &__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: $space-4 0;
    background: none;
    border: none;
    color: $white;
    font-family: $font-body;
    font-size: $font-size-body-md;
    font-weight: $weight-medium;
    text-align: left;
    cursor: pointer;

    @include focus-ring;
  }

  &__chevron {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    margin-left: $space-3;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    transition: transform $duration-fast $easing-brand;

    &--open {
      transform: rotate(-135deg);
    }
  }

  &__submenu {
    padding-left: $space-4;
    padding-bottom: $space-2;

    .nav-item {
      border-bottom: 1px solid rgba($white, 0.08);

      &__link,
      &__toggle {
        padding-block: $space-3;
        font-size: $font-size-body-sm;
        font-weight: $weight-regular;
        color: rgba($white, 0.85);
      }
    }
  }
}
</style>
