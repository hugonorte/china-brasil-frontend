<script setup lang="ts">
export interface CarouselSlide {
  /** Rótulo curto exibido acima do título (nome da sessão do site). */
  eyebrow: string
  title: string
  text: string
  image: string
  /** Texto alternativo da imagem de fundo. */
  alt: string
  to: string
  ctaLabel?: string
}

const props = withDefaults(
  defineProps<{
    slides: CarouselSlide[]
    /** Intervalo do autoplay em ms. Use 0 para desativar. */
    interval?: number
    label?: string
  }>(),
  {
    interval: 7000,
    label: 'Destaques',
  },
)

const current = ref(0)
const isPaused = ref(false)
const isHovered = ref(false)
const hasFocusWithin = ref(false)
const prefersReducedMotion = ref(false)

let timer: ReturnType<typeof setInterval> | null = null

const total = computed(() => props.slides.length)

function goTo(index: number) {
  current.value = (index + total.value) % total.value
}

function next() {
  goTo(current.value + 1)
}

function prev() {
  goTo(current.value - 1)
}

const isAutoplayActive = computed(
  () =>
    props.interval > 0 &&
    total.value > 1 &&
    !isPaused.value &&
    !isHovered.value &&
    !hasFocusWithin.value &&
    !prefersReducedMotion.value,
)

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function startTimer() {
  stopTimer()
  if (isAutoplayActive.value) {
    timer = setInterval(next, props.interval)
  }
}

// Qualquer mudança de slide (manual ou automática) reinicia a contagem,
// para que o slide escolhido pelo usuário fique o tempo completo na tela.
watch([isAutoplayActive, current], startTimer)

function togglePause() {
  isPaused.value = !isPaused.value
}

function onFocusOut(event: FocusEvent) {
  const root = event.currentTarget as HTMLElement
  if (!root.contains(event.relatedTarget as Node | null)) {
    hasFocusWithin.value = false
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    next()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prev()
  }
}

// Swipe no mobile
let touchStartX = 0
let touchStartY = 0

function onTouchStart(event: TouchEvent) {
  const touch = event.touches[0]
  if (!touch) return
  touchStartX = touch.clientX
  touchStartY = touch.clientY
}

function onTouchEnd(event: TouchEvent) {
  const touch = event.changedTouches[0]
  if (!touch) return
  const dx = touch.clientX - touchStartX
  const dy = touch.clientY - touchStartY
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) next()
    else prev()
  }
}

// Pausa quando a aba não está visível, para não "pular" slides ao voltar.
const isDocumentHidden = ref(false)
function onVisibilityChange() {
  isDocumentHidden.value = document.hidden
}
watch(isDocumentHidden, (hidden) => (hidden ? stopTimer() : startTimer()))

let motionQuery: MediaQueryList | null = null
function onMotionChange(event: MediaQueryListEvent) {
  prefersReducedMotion.value = event.matches
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionChange)
  document.addEventListener('visibilitychange', onVisibilityChange)
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
  motionQuery?.removeEventListener('change', onMotionChange)
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<template>
  <div
    class="carousel"
    :class="{ 'carousel--running': isAutoplayActive }"
    role="region"
    aria-roledescription="carousel"
    :aria-label="label"
    :style="{ '--carousel-interval': `${interval}ms` }"
    data-cy="carousel"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @focusin="hasFocusWithin = true"
    @focusout="onFocusOut"
    @keydown="onKeydown"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div class="carousel__track" :aria-live="isAutoplayActive ? 'off' : 'polite'">
      <div
        v-for="(slide, index) in slides"
        :key="slide.to"
        class="carousel__slide"
        :class="{ 'is-active': index === current }"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${index + 1} de ${total}: ${slide.eyebrow}`"
        :aria-hidden="index !== current"
        :inert="index !== current"
        data-cy="carousel-slide"
      >
        <img
          class="carousel__image"
          :src="slide.image"
          :alt="slide.alt"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          decoding="async"
        />
        <div class="carousel__overlay" aria-hidden="true" />

        <div class="carousel__container">
          <div class="carousel__content">
            <p class="carousel__eyebrow">{{ slide.eyebrow }}</p>
            <h2 class="carousel__title">{{ slide.title }}</h2>
            <p class="carousel__text">{{ slide.text }}</p>
            <NuxtLink :to="slide.to" class="carousel__cta" data-cy="carousel-cta">
              {{ slide.ctaLabel ?? 'Veja Mais' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div v-if="total > 1" class="carousel__controls">
      <div class="carousel__dots" role="group" aria-label="Escolher slide">
        <button
          v-for="(slide, index) in slides"
          :key="slide.to"
          type="button"
          class="carousel__dot"
          :class="{ 'is-active': index === current }"
          :aria-label="`Ir para o slide ${index + 1}: ${slide.eyebrow}`"
          :aria-current="index === current ? 'true' : undefined"
          data-cy="carousel-dot"
          @click="goTo(index)"
        >
          <span class="carousel__dot-progress" />
        </button>
      </div>

      <div class="carousel__nav">
        <button
          type="button"
          class="carousel__nav-btn"
          :aria-label="isPaused ? 'Retomar rotação automática' : 'Pausar rotação automática'"
          data-cy="carousel-pause"
          @click="togglePause"
        >
          <svg v-if="isPaused" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
          </svg>
        </button>
        <button
          type="button"
          class="carousel__nav-btn"
          aria-label="Slide anterior"
          data-cy="carousel-prev"
          @click="prev"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          class="carousel__nav-btn"
          aria-label="Próximo slide"
          data-cy="carousel-next"
          @click="next"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$fade-duration: 1200ms;
$zoom-duration: 9000ms;
$easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);

.carousel {
  position: relative;
  height: 100%;
  min-height: inherit;
  overflow: hidden;
  background-color: $color-dark-section;
  isolation: isolate;

  &__track {
    position: relative;
    height: 100%;
    min-height: inherit;
  }

  // Todos os slides ficam empilhados; a troca é um crossfade de opacidade,
  // que é suave e roda na GPU (sem reflow).
  &__slide {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    opacity: 0;
    visibility: hidden;
    transition: opacity $fade-duration $easing-smooth, visibility 0s linear $fade-duration;

    &.is-active {
      position: relative;
      z-index: 1;
      min-height: inherit;
      opacity: 1;
      visibility: visible;
      transition: opacity $fade-duration $easing-smooth, visibility 0s;
    }
  }

  // Leve zoom lento (efeito Ken Burns) para dar sensação de movimento contínuo.
  &__image {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.08);
    transition: transform $zoom-duration ease-out;
    will-change: transform;

    .is-active & {
      transform: scale(1);
    }
  }

  // Gradiente concentrado no canto inferior esquerdo, onde fica o texto.
  &__overlay {
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(0deg, rgba($red-950, 0.92) 0%, rgba($red-950, 0.55) 45%, rgba($red-950, 0.1) 100%);

    @include respond-to(md) {
      background:
        radial-gradient(ellipse at 0% 100%, rgba($red-950, 0.88) 0%, rgba($red-950, 0.5) 40%, transparent 75%),
        linear-gradient(0deg, rgba($red-950, 0.55) 0%, transparent 55%);
    }
  }

  &__container {
    @include container;
    // espaço inferior reservado para os controles
    padding-bottom: $space-24;

    @include respond-to(lg) {
      padding-bottom: $space-32;
    }
  }

  &__content {
    max-width: 36rem;

    > * {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 500ms $easing-smooth, transform 500ms $easing-smooth;
    }

    .is-active & > * {
      opacity: 1;
      transform: none;
      transition-duration: 800ms;
    }

    // Entrada escalonada dos elementos do texto
    @for $i from 1 through 4 {
      .is-active & > :nth-child(#{$i}) {
        transition-delay: #{300 + $i * 120}ms;
      }
    }
  }

  &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    margin-bottom: $space-3;
    color: $gold-500;
    font-size: $font-size-body-sm;
    font-weight: $weight-semibold;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    &::before {
      content: '';
      width: $space-8;
      height: 1px;
      background-color: currentColor;
    }
  }

  &__title {
    color: $white;
    font-size: $font-size-heading-xl;
    line-height: 1.15;
    text-wrap: balance;
  }

  &__text {
    margin-top: $space-4;
    color: rgba($white, 0.85);
    font-size: $font-size-body-md;
    line-height: 1.6;

    @include respond-to(md) {
      font-size: $font-size-body-lg;
    }
  }

  &__cta {
    @include button-accent;
    margin-top: $space-6;
  }

  // Controles
  &__controls {
    @include container;
    position: absolute;
    left: 50%;
    bottom: $space-8;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-4;
    transform: translateX(-50%);

    @include respond-to(lg) {
      bottom: $space-12;
    }
  }

  &__dots {
    display: flex;
    gap: $space-2;
  }

  &__dot {
    position: relative;
    width: $space-8;
    height: 24px; // área de toque confortável
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    @include focus-ring;

    &::before {
      content: '';
      position: absolute;
      inset-inline: 0;
      top: 50%;
      height: 3px;
      border-radius: $radius-pill;
      background-color: rgba($white, 0.35);
      transform: translateY(-50%);
      transition: background-color $duration-normal $easing-brand;
    }

    &:hover::before {
      background-color: rgba($white, 0.6);
    }

    @include respond-to(md) {
      width: $space-12;
    }
  }

  // Barra de progresso do slide atual
  &__dot-progress {
    position: absolute;
    inset-inline: 0;
    top: 50%;
    height: 3px;
    border-radius: $radius-pill;
    background-color: $gold-500;
    transform: translateY(-50%) scaleX(0);
    transform-origin: left center;

    .is-active & {
      transform: translateY(-50%) scaleX(1);
    }

    .carousel--running .is-active & {
      animation: carousel-progress var(--carousel-interval) linear;
    }
  }

  &__nav {
    display: flex;
    gap: $space-2;
  }

  &__nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: $border-dark;
    border-radius: $radius-pill;
    background-color: rgba($red-950, 0.35);
    color: $white;
    cursor: pointer;
    backdrop-filter: blur(4px);
    transition: background-color $duration-normal $easing-brand,
      border-color $duration-normal $easing-brand,
      color $duration-normal $easing-brand;
    @include focus-ring;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: $gold-600;
      border-color: $gold-600;
      color: $red-950;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &__slide,
    &__slide.is-active,
    &__image,
    &__content > *,
    .is-active &__content > * {
      transition: none;
    }

    &__image {
      transform: none;
    }
  }
}

@keyframes carousel-progress {
  from {
    transform: translateY(-50%) scaleX(0);
  }

  to {
    transform: translateY(-50%) scaleX(1);
  }
}
</style>
