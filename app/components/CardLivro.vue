<script setup lang="ts">
import type { Livro } from '~/types/content'

const props = withDefaults(
  defineProps<{
    livro: Livro
    /** Carrega a capa sem lazy-loading (use nos primeiros cards visíveis). */
    eager?: boolean
  }>(),
  { eager: false },
)

const categoria = computed(() => getLivroCategoria(props.livro))
const paragrafos = computed(() => getLivroParagrafos(props.livro.descricao))

// Id estável a partir do slug do link de compra (usado em aria-* e âncoras).
const slug = computed(() => props.livro.link_para_compra.replace(/\/+$/, '').split('/').pop() ?? 'livro')
const titleId = computed(() => `livro-${slug.value}-titulo`)
const descId = computed(() => `livro-${slug.value}-descricao`)

// Só mostra o "ler mais" quando o texto realmente passa do recorte.
const isLong = computed(() => props.livro.descricao.length > 220)
const expanded = ref(false)
</script>

<template>
  <article
    :id="`livro-${slug}`"
    class="card-livro"
    :class="`card-livro--${categoria.tema}`"
    :aria-labelledby="titleId"
    data-cy="card-livro"
  >
    <div class="card-livro__stage">
      <div class="card-livro__badges">
        <span class="card-livro__badge">{{ categoria.label }}</span>
        <span v-if="categoria.isKit" class="card-livro__badge card-livro__badge--kit">Kit</span>
      </div>

      <div class="card-livro__book">
        <img
          :src="livro.image_path"
          :alt="`Capa do livro ${livro.titulo}`"
          class="card-livro__cover"
          :loading="eager ? 'eager' : 'lazy'"
          decoding="async"
          width="240"
          height="320"
        />
      </div>
    </div>

    <div class="card-livro__body">
      <p v-if="categoria.nivel" class="card-livro__level">Nível {{ categoria.nivel.toLowerCase() }}</p>
      <h3 :id="titleId" class="card-livro__title">{{ livro.titulo }}</h3>
      <p v-if="livro.autora" class="card-livro__author">por <strong>{{ livro.autora }}</strong></p>

      <dl v-if="livro.ano_de_publicacao || livro.tamanho" class="card-livro__meta">
        <div v-if="livro.ano_de_publicacao" class="card-livro__meta-item">
          <dt>Ano</dt>
          <dd>{{ livro.ano_de_publicacao }}</dd>
        </div>
        <div v-if="livro.tamanho" class="card-livro__meta-item">
          <dt>Formato</dt>
          <dd>{{ livro.tamanho.replace(' X ', ' × ') }}</dd>
        </div>
      </dl>

      <!-- O texto completo fica sempre no HTML (bom para SEO); só o recorte visual muda. -->
      <div
        :id="descId"
        class="card-livro__description"
        :class="{ 'is-clamped': isLong && !expanded }"
      >
        <p v-for="(paragrafo, index) in paragrafos" :key="index">{{ paragrafo }}</p>
      </div>
      <button
        v-if="isLong"
        type="button"
        class="card-livro__toggle"
        :aria-expanded="expanded"
        :aria-controls="descId"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Mostrar menos' : 'Ler descrição completa' }}
      </button>

      <a
        :href="livro.link_para_compra"
        class="card-livro__cta"
        target="_blank"
        rel="noopener"
        data-cy="card-livro-cta"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        Comprar
        <span class="sr-only">{{ livro.titulo }} na livraria virtual (abre em nova aba)</span>
      </a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
// Cor do "palco" da capa por tema do livro.
$themes: (
  mandarim: (linear-gradient(145deg, $red-700 0%, $red-900 100%), $gold-300),
  portugues: (linear-gradient(145deg, $jade-500 0%, $jade-700 100%), $white),
  infantil: (linear-gradient(145deg, $gold-500 0%, $gold-700 100%), $red-950),
  negocios: (linear-gradient(145deg, $red-900 0%, $red-950 100%), $gold-500),
  viagem: (linear-gradient(145deg, #3f87ab 0%, $info 100%), $white),
  caligrafia: (linear-gradient(145deg, $text-muted 0%, $text 100%), $gold-300),
);

.card-livro {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: $white;
  border: $border-subtle;
  border-radius: $radius-xl;
  box-shadow: $shadow-soft;
  transition: box-shadow $duration-slow $easing-brand, transform $duration-slow $easing-brand;

  &:hover,
  &:focus-within {
    box-shadow: $shadow-floating;
    transform: translateY(-4px);
  }

  @each $name, $values in $themes {
    &--#{$name} {
      --stage-bg: #{nth($values, 1)};
      --stage-ink: #{nth($values, 2)};
    }
  }

  // Palco da capa
  &__stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $space-12 $space-6 $space-8;
    background: var(--stage-bg);
    isolation: isolate;
    perspective: 1200px;

    // Círculo de luz atrás do livro
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 70%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: radial-gradient(circle, rgba($white, 0.28) 0%, transparent 70%);
    }

    // "Prateleira" sob o livro
    &::after {
      content: '';
      position: absolute;
      bottom: $space-6;
      left: 50%;
      z-index: -1;
      width: 60%;
      height: 14px;
      border-radius: 50%;
      background: rgba($black, 0.35);
      filter: blur(10px);
      transform: translateX(-50%);
    }
  }

  &__badges {
    position: absolute;
    top: $space-4;
    left: $space-4;
    right: $space-4;
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
  }

  &__badge {
    padding: $space-1 $space-3;
    border-radius: $radius-pill;
    background-color: rgba($black, 0.22);
    backdrop-filter: blur(6px);
    color: var(--stage-ink);
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    &--kit {
      background-color: $gold-500;
      color: $red-950;
    }
  }

  // Capa com leve efeito 3D (lombada + rotação), que "endireita" no hover.
  &__book {
    position: relative;
    width: min(62%, 200px);
    aspect-ratio: 3 / 4;
    transform: rotateY(-16deg) rotateX(2deg);
    transform-style: preserve-3d;
    transition: transform $duration-slow $easing-brand;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 2px $radius-sm $radius-sm 2px;
      background: linear-gradient(
        90deg,
        rgba($black, 0.35) 0%,
        rgba($white, 0.25) 3%,
        rgba($black, 0.1) 7%,
        transparent 12%
      );
      pointer-events: none;
    }

    .card-livro:hover &,
    .card-livro:focus-within & {
      transform: rotateY(0deg) translateY(-6px);
    }
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px $radius-sm $radius-sm 2px;
    background-color: $surface;
    box-shadow:
      8px 12px 24px rgba($black, 0.35),
      2px 2px 4px rgba($black, 0.2);
  }

  // Conteúdo
  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: $space-6;
  }

  &__level {
    margin-bottom: $space-2;
    color: $gold-700;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  // Especificidade extra para sobrepor o :deep(h3) do TextContent.
  & &__title {
    margin: 0 0 $space-2;
    color: $color-heading-text;
    font-size: $font-size-heading-md;
    line-height: 1.25;
    text-wrap: balance;
  }

  &__author {
    margin-bottom: $space-4;
    color: $color-muted-text;
    font-size: $font-size-body-sm;

    strong {
      color: $text;
      font-weight: $weight-semibold;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-bottom: $space-4;
  }

  &__meta-item {
    display: flex;
    gap: $space-1;
    padding: $space-1 $space-3;
    border-radius: $radius-pill;
    background-color: $surface;
    font-size: $font-size-caption;

    dt {
      color: $color-muted-text;

      &::after {
        content: ':';
      }
    }

    dd {
      color: $text;
      font-weight: $weight-semibold;
    }
  }

  &__description {
    color: $color-muted-text;
    font-size: $font-size-body-sm;
    line-height: 1.65;

    p {
      max-width: none;

      & + p {
        margin-top: $space-2;
      }
    }

    &.is-clamped {
      max-height: calc(1.65em * 4);
      overflow: hidden;
      mask-image: linear-gradient(180deg, $black 55%, transparent 100%);
    }
  }

  &__toggle {
    align-self: flex-start;
    margin-top: $space-2;
    padding: 0;
    border: none;
    background: none;
    color: $color-primary-action;
    cursor: pointer;
    font-size: $font-size-body-sm;
    font-weight: $weight-semibold;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &__cta {
    @include button-primary;
    width: 100%;
    margin-top: auto;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  // Respiro mínimo entre o texto e o botão; o margin-top: auto do CTA
  // alinha os botões na base quando os cards da linha têm alturas diferentes.
  &__description,
  &__toggle {
    margin-bottom: $space-6;
  }

  &__description:has(+ .card-livro__toggle) {
    margin-bottom: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &__book {
      transition: none;
    }

    &:hover,
    &:focus-within {
      transform: none;
    }
  }
}
</style>
