// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SCSS é o padrão do projeto (mobile-first, tokens em app/assets/scss).
  // Tailwind só deve ser adicionado pontualmente, quando explicitamente pedido.
  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    public: {
      // Endpoint PHP do formulário de contato (backend/api/contato.php).
      // Sobrescreva com NUXT_PUBLIC_CONTACT_ENDPOINT quando o PHP estiver em outro domínio.
      contactEndpoint: '/api/contato.php',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Injeta as variáveis/mixins em todo <style lang="scss"> de componente,
          // sem precisar de @use manual em cada arquivo.
          additionalData: '@use "~/assets/scss/abstracts" as *;\n',
          api: 'modern-compiler',
        },
      },
    },
  },
})
