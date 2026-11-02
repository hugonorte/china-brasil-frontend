# Relayout China Brasil
---

## Título do Projeto
Relayout China Brasil

## Descrição Curta do Projeto
Modernização da identidade visual, reestruturação tecnológica completa (migrando de WordPress para um ambiente moderno com Nuxt/Vue.js) e mudança de infraestrutura de hospedagem (para servidor no Brasil), incluindo o desenvolvimento de um painel administrativo sob medida para o cliente realizar a gestão do próprio conteúdo.

## Resumo dos Requisitos Funcionais e Não Funcionais
**Requisitos Funcionais:**
- Desenvolvimento do Frontend Público com estrutura definida em páginas: Home, Sobre, Serviços (subdividido em 6 áreas), Livraria e Contato.
- A página "Livraria" funcionará como um catálogo digital (vitrine) das publicações da China Brasil, sem check-out de e-commerce embarcado.
- Formulário de contato funcional com envio de e-mails via backend (ex: integração com SMTP local / PHP Mailer ou Nitro endpoint).
- Desenvolvimento de Painel Administrativo em Nuxt UI, protegido por credenciais, para a gestão completa do texto e conteúdo do site público.
- Banco de dados MySQL dedicado para armazenar o conteúdo a ser editado no CMS próprio.

**Requisitos Não Funcionais:**
- Utilização de `Nuxt (Vue.js)` para viabilizar um frontend rápido, componentizado e moderno.
- Adoção das melhores práticas de arquitetura de software (YAGNI, KISS, DRY).
- Manutenção da identidade visual central do cliente (Design System atual, paleta e logotipo) com modernização de layout (Relayout).
- Hospedagem do projeto em infraestrutura localizada no Brasil (ex: Locaweb, UOL Host) para redução severa de latência no carregamento.

## Detalhamento de Entregáveis do Projeto
1. **Frontend Público (Website):** Código fonte em repositório contendo todas as páginas otimizadas.
2. **Painel Administrativo (CMS Custom):** Frontend do gestor de conteúdo utilizando Nuxt UI.
3. **Backend/API:** Camada de integração (desenvolvida via Nuxt Nitro ou Node) para conectar o banco de dados e viabilizar os fluxos de envio de email.
4. **Modelagem de Dados:** Schema MySQL completo contemplando a gestão do conteúdo dinâmico (Textos das páginas).
5. **Implantação de Ambiente:** Configuração do servidor nacional (VPS Locaweb/UOL) e deploy da aplicação em produção com certificados de segurança SSL.

## Detalhamento de Fases do Projeto

1. **UX/UI Design e Mapeamento (20 horas)**
   - Reavaliação do Design System atual.
   - Prototipagem das novas páginas focando na componentização e experiência do usuário.
2. **Setup de Arquitetura e Infraestrutura (10 horas)**
   - Configuração do repositório, scaffolding em Nuxt e setup do Nuxt UI.
   - Instalação e modelagem inicial do banco de dados MySQL.
3. **Desenvolvimento da API e Backend (25 horas)**
   - Criação dos endpoints para os fluxos CRUD de conteúdo (leitura, escrita, atualização e exclusão).
   - Setup do provedor de envio de e-mails para o contato.
4. **Desenvolvimento do Painel Administrativo CMS (40 horas)**
   - Implementação da tela de login e controle de acesso.
   - Criação dos formulários de gestão de cada página pública utilizando os componentes Nuxt UI.
5. **Desenvolvimento do Frontend Público (55 horas)**
   - Codificação de layouts responsivos (Home, Sobre, Serviços, Livraria, Contato).
   - Integração da interface pública com o banco de dados (consumindo a própria API).
6. **Testes, Homologação e Ajustes (10 horas)**
   - Validação em múltiplos dispositivos e refinamentos visuais (Pixel perfect em relação ao UI).
7. **Deploy e Go-Live (10 horas)**
   - Configuração do UOL Host / Locaweb, migração do domínio e ativação em produção.

**Esforço total estimado:** 170 horas.

## Custos de Infraestrutura Mensal (Estimativa)

| Variável / Cenário | Baixíssimo (Testes / POC) | Baixo (Pequena Operação) | Médio (Operação Consolidada) | Alto (Escalonamento Futuro) |
| :--- | :--- | :--- | :--- | :--- |
| **Hospedagem (VPS Locaweb/UOL Host)** | Servidor de Entrada (1 vCPU, 1GB RAM) | VPS Intermediário (2 vCPU, 2-4GB RAM) | VPS Avançado (4 vCPU, 8GB RAM) | Múltiplas instâncias com Load Balancer |
| **Custo de Hospedagem (Estimado)** | **~R$ 40,00** | **~R$ 90,00** | **~R$ 200,00** | **~R$ 500,00+** |
| **Banco de Dados MySQL** | Instalado na mesma VPS | Instalado na mesma VPS | MySQL Gerenciado (PaaS) | MySQL Gerenciado em HA |
| **Custo de Banco (Estimado)** | **R$ 0,00** | **R$ 0,00** | **~R$ 150,00** | **~R$ 350,00+** |
| **Envio de Emails (SMTP)** | Hospedagem Inclusa | Hospedagem Inclusa | SendGrid/AWS SES | SendGrid/AWS SES |
| **Custo de Emails (Estimado)** | **R$ 0,00** | **R$ 0,00** | **~R$ 30,00** | **~R$ 100,00+** |
| --- | --- | --- | --- | --- |
| **Custo Total Mensal Estimado** | **~R$ 40,00** | **~R$ 90,00** | **~R$ 380,00** | **~R$ 950,00+** |

*Nota: O cenário recomendado para a operação atual (baixo tráfego, institucional) é a categoria "Baixo", englobando uma única VPS que roderá o Nuxt (Frontend + API/Nitro) e o serviço do MySQL dentro da própria infraestrutura.*

## Considerações Finais
- **Otimização de SEO:** A migração de um site WordPress estabelecido para Nuxt demanda cuidado intenso com mapeamento de URLs, redirecionamentos 301 e estrutura de Meta Tags (SSG) para que o tráfego orgânico não seja prejudicado.
- **Gerenciamento Unificado:** Como tanto o frontend quanto o painel (e até mesmo o backend) serão centralizados na stack do Nuxt, a manutenção de longo prazo se torna mais econômica para o cliente, respeitando os princípios DRY e KISS.
- **Licenciamento:** As bibliotecas utilizadas (Vue.js, Nuxt, Nuxt UI) são de uso gratuito (open-source). Nenhuma licença extra de software está prevista nos custos de desenvolvimento.
