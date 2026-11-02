# Testes E2E — Cypress

TDD com Cypress para todo componente interativo do site. Fluxo: escreva o teste
primeiro (vermelho), implemente o componente até o teste passar (verde),
refatore.

## Rodando

```bash
pnpm test:e2e        # sobe o dev server e roda os testes headless (Electron)
pnpm cy:open         # abre o runner interativo (precisa de servidor rodando: pnpm dev)
```

## Nota de ambiente (sandbox deste projeto)

Neste ambiente de desenvolvimento em particular (container sem GPU/X real),
o Chrome/Electron headless do Cypress apresenta um bug de entrega de eventos:
`cy.click()` reporta sucesso mas o listener Vue nunca é acionado — verificado
isoladamente com Playwright, que confirma que a aplicação e os componentes
funcionam corretamente. Isso é uma limitação do sandbox, não da aplicação.

Se os testes de clique falharem de forma inexplicável neste ambiente, rode
com Firefox sob Xvfb:

```bash
xvfb-run -a npx start-server-and-test dev http://localhost:3000 "cypress run --browser firefox"
```

Em máquinas de desenvolvedor normais ou CI com Chrome funcional, o comando
padrão (`pnpm test:e2e`) deve funcionar sem essa gambiarra.

## Convenções

- Seletores de teste usam `data-cy="..."`, nunca classes CSS ou texto (que
  mudam com o design).
- Componentes que hidratam no cliente expõem um marcador de hidratação
  (`data-hydrated="true"` no `AppHeader`, por exemplo) setado em `onMounted`.
  Os testes aguardam esse marcador antes de interagir, evitando flakiness de
  corrida SSR → client em vez de usar `cy.wait()` arbitrário.
