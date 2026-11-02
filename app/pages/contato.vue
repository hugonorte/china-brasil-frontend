<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

definePageMeta({
  layout: 'sections',
})

useSeoMeta({
  title: 'Contato | China-Brasil',
  description: 'Fale com a China-Brasil sobre consultoria, conexões empresariais, intercâmbio cultural e publicações.',
})

const MESSAGE_MAX = 2000
// Envios mais rápidos que isso são quase sempre automatizados.
const MIN_FILL_TIME_MS = 3000

// Permite que CTAs de outras páginas pré-selecionem o assunto: /contato?assunto=<chave>
// (chaves em utils/contactSubjects.ts). Valores desconhecidos são ignorados.
const route = useRoute()
const initialSubject = isContactSubject(route.query.assunto) ? route.query.assunto : undefined

const { public: publicConfig } = useRuntimeConfig()

const { handleSubmit, defineField, errors, isSubmitting, resetForm, setErrors } = useForm({
  validationSchema: toTypedSchema(contactSchema),
  initialValues: initialSubject ? { subject: initialSubject } : undefined,
})

const [subject, subjectAttrs] = defineField('subject')
const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [company, companyAttrs] = defineField('company')
const [message, messageAttrs] = defineField('message')

// Honeypot: campo invisível para pessoas, mas preenchido por bots que
// completam todos os inputs. Fica fora do schema para não exibir erro ao bot.
const honeypot = ref('')
const mountedAt = ref(0)

onMounted(() => {
  mountedAt.value = Date.now()
})

const status = ref<'idle' | 'success' | 'error'>('idle')

const isLikelyBot = () =>
  honeypot.value !== '' || Date.now() - mountedAt.value < MIN_FILL_TIME_MS

const onSubmit = handleSubmit(async (values) => {
  status.value = 'idle'

  // Finge sucesso para não sinalizar ao bot que ele foi detectado.
  if (isLikelyBot()) {
    status.value = 'success'
    resetForm()
    return
  }

  try {
    // O PHP valida de novo, descarta envios com `website` preenchido e escolhe
    // o e-mail de destino a partir da chave do assunto.
    await $fetch(publicConfig.contactEndpoint as string, {
      method: 'POST',
      body: { ...values, website: honeypot.value },
    })

    status.value = 'success'
    resetForm()
  } catch (error) {
    // 422: o servidor devolve os erros por campo, exibidos junto de cada input.
    const fieldErrors = (error as { data?: { errors?: Record<string, string> } })?.data?.errors
    if (fieldErrors) setErrors(fieldErrors)
    status.value = 'error'
  }
})
</script>

<template>
  <div class="contact-page">
    <SectionTitle title="Contato" img="/img/consultoria/consultoria.avif" />

    <section class="contact">
      <div class="contact__inner">
        <div class="contact__intro">
          <span class="contact__eyebrow">Fale conosco</span>
          <h2 class="contact__heading">Vamos conversar sobre o seu próximo passo entre China e Brasil.</h2>
          <p class="contact__text">
            Preencha o formulário e nossa equipe retornará o contato pelo e-mail informado.
          </p>
        </div>

        <form class="contact-form" novalidate @submit="onSubmit">
          <div class="contact-form__grid">
            <div class="field field--full">
              <label class="field__label" for="contact-subject">Assunto</label>
              <select
                id="contact-subject"
                v-model="subject"
                v-bind="subjectAttrs"
                class="field__control field__control--select"
                :class="{
                  'field__control--invalid': errors.subject,
                  'field__control--placeholder': !subject,
                }"
                :aria-invalid="!!errors.subject"
                aria-describedby="contact-subject-error"
                data-cy="contact-subject"
              >
                <option :value="undefined" disabled>Selecione o assunto</option>
                <optgroup v-for="group in contactSubjectGroups" :key="group.label" :label="group.label">
                  <option v-for="option in group.options" :key="option.key" :value="option.key">
                    {{ option.label }}
                  </option>
                </optgroup>
              </select>
              <p id="contact-subject-error" class="field__error" role="alert">{{ errors.subject }}</p>
            </div>

            <div class="field">
              <label class="field__label" for="contact-name">Nome</label>
              <input
                id="contact-name"
                v-model="name"
                v-bind="nameAttrs"
                class="field__control"
                :class="{ 'field__control--invalid': errors.name }"
                type="text"
                autocomplete="name"
                maxlength="100"
                :aria-invalid="!!errors.name"
                aria-describedby="contact-name-error"
              >
              <p id="contact-name-error" class="field__error" role="alert">{{ errors.name }}</p>
            </div>

            <div class="field">
              <label class="field__label" for="contact-email">E-mail</label>
              <input
                id="contact-email"
                v-model="email"
                v-bind="emailAttrs"
                class="field__control"
                :class="{ 'field__control--invalid': errors.email }"
                type="email"
                autocomplete="email"
                inputmode="email"
                maxlength="160"
                :aria-invalid="!!errors.email"
                aria-describedby="contact-email-error"
              >
              <p id="contact-email-error" class="field__error" role="alert">{{ errors.email }}</p>
            </div>

            <div class="field field--full">
              <label class="field__label" for="contact-company">Empresa</label>
              <input
                id="contact-company"
                v-model="company"
                v-bind="companyAttrs"
                class="field__control"
                :class="{ 'field__control--invalid': errors.company }"
                type="text"
                autocomplete="organization"
                maxlength="120"
                :aria-invalid="!!errors.company"
                aria-describedby="contact-company-error"
              >
              <p id="contact-company-error" class="field__error" role="alert">{{ errors.company }}</p>
            </div>

            <div class="field field--full">
              <label class="field__label" for="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                v-model="message"
                v-bind="messageAttrs"
                class="field__control field__control--textarea"
                :class="{ 'field__control--invalid': errors.message }"
                rows="6"
                :maxlength="MESSAGE_MAX"
                :aria-invalid="!!errors.message"
                aria-describedby="contact-message-error contact-message-count"
              />
              <div class="field__meta">
                <p id="contact-message-error" class="field__error" role="alert">{{ errors.message }}</p>
                <span id="contact-message-count" class="field__count">
                  {{ message?.length ?? 0 }}/{{ MESSAGE_MAX }}
                </span>
              </div>
            </div>

            <!-- Honeypot: escondido de pessoas e leitores de tela; bots tendem a preencher. -->
            <div class="contact-form__trap" aria-hidden="true">
              <label for="contact-website">Website</label>
              <input
                id="contact-website"
                v-model="honeypot"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              >
            </div>
          </div>

          <div class="contact-form__footer">
            <p
              v-if="status !== 'idle'"
              class="contact-form__status"
              :class="`contact-form__status--${status}`"
              role="status"
            >
              {{
                status === 'success'
                  ? 'Mensagem enviada com sucesso. Em breve entraremos em contato.'
                  : 'Não foi possível enviar sua mensagem. Tente novamente em instantes.'
              }}
            </p>

            <button class="contact-form__submit" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando…' : 'Enviar mensagem' }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  @include section-padding;

  &__inner {
    @include container($content-width);
    display: grid;
    gap: $space-10;

    @include respond-to(lg) {
      grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
      gap: $space-16;
      align-items: start;
    }
  }

  &__intro {
    max-width: $text-width;

    @include respond-to(lg) {
      position: sticky;
      top: $space-24;
    }
  }

  &__eyebrow {
    display: inline-block;
    margin-bottom: $space-3;
    padding-bottom: $space-2;
    border-bottom: 2px solid $color-highlight;
    color: $color-muted-text;
    font-size: $font-size-caption;
    font-weight: $weight-semibold;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  &__heading {
    margin-bottom: $space-4;
    color: $color-heading-text;
    font-family: $font-display;
    font-size: $font-size-heading-lg;
    line-height: 1.25;
  }

  &__text {
    color: $color-muted-text;
    font-size: $font-size-body-lg;
    line-height: 1.6;
  }
}

.contact-form {
  padding: $space-6;
  background-color: $white;
  border: $border-subtle;
  border-radius: $radius-lg;
  box-shadow: $shadow-soft;

  @include respond-to(md) {
    padding: $space-10;
  }

  &__grid {
    position: relative;
    display: grid;
    gap: $space-2 $space-6;

    @include respond-to(md) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  // Fora da tela em vez de display:none, que alguns bots detectam e ignoram.
  &__trap {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    margin-top: $space-4;

    @include respond-to(md) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__status {
    font-size: $font-size-body-sm;

    &--success {
      color: $success;
    }

    &--error {
      color: $error;
    }
  }

  &__submit {
    @include button-primary;
    width: 100%;
    margin-left: auto;

    @include respond-to(md) {
      width: auto;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &--full {
    @include respond-to(md) {
      grid-column: 1 / -1;
    }
  }

  &__label {
    color: $color-body-text;
    font-size: $font-size-body-sm;
    font-weight: $weight-medium;
  }

  &__control {
    width: 100%;
    padding: $space-3 0;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $border;
    border-radius: 0;
    color: $color-body-text;
    font-family: $font-body;
    font-size: $font-size-body-md;
    transition: border-color $duration-normal $easing-brand;

    &:hover {
      border-bottom-color: $text-light;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      border-bottom-color: $color-primary-action;
      box-shadow: 0 1px 0 0 $color-primary-action;
    }

    // Select com a mesma linha de base dos inputs e seta própria.
    &--select {
      padding-right: $space-8;
      appearance: none;
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237A1315' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right $space-1 center;
      background-size: 18px;

      option,
      optgroup {
        color: $color-body-text;
      }
    }

    &--placeholder {
      color: $text-light;
    }

    &--textarea {
      min-height: 140px;
      resize: vertical;
      line-height: 1.6;
    }

    &--invalid,
    &--invalid:hover {
      border-bottom-color: $error;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    gap: $space-4;
  }

  &__error {
    min-height: 1.25em;
    color: $error;
    font-size: $font-size-caption;
  }

  &__count {
    flex-shrink: 0;
    color: $text-light;
    font-size: $font-size-caption;
    font-variant-numeric: tabular-nums;
  }
}
</style>
