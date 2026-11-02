<script setup lang="ts"></script>

<template>
  <section class="sobre" data-cy="sobre">
    <div class="sobre__container">
      <h2 class="sobre__title">Sobre Yuan Aiping</h2>

      <div class="sobre__row">
        <div class="sobre__col sobre__col--image">
          <img
            src="/img/home/sobre/foto-da-Yuan.jpg"
            alt="Professora Yuan Aiping"
            class="sobre__image"
          />
        </div>
        <div class="sobre__col sobre__col--text">
          <p class="sobre__description">
            Yuan Aiping nasceu na República Popular da China. É formada no Departamento de
            Língua Estrangeira, em língua e literatura inglesa, pela HEBEI NORMAL UNIVERSITY. Lecionou
            inglês na China por 13 anos. Chegou ao Rio de Janeiro em 1997, ingressou no curso de português
            para estrangeiros da UFRJ – UNIVERSIDADE FEDERAL DO RIO DE JANEIRO, completando posteriormente
            seus estudos na UERJ – UNIVERSIDADE ESTADUAL DO RIO DE JANEIRO. Em 2001, adquiriu o Certificado
            de Proficiência em Língua Portuguesa para estrangeiros, de reconhecimento mundial, emitido pelo
            MEC em conjunto com a Secretária de Educação Superior e o Ministério de Relações Exteriores.
            Foi professora de chinês na UniverCidade do Rio de Janeiro. Fundou o "CENTRO CULTURAL CHINA –
            BRASIL YUAN AIPING" em 2004, que hoje possui 4 filiais, sendo duas na China, uma em Pequim e
            outra em Xangai, onde ministra cursos de português para chineses e chinês para brasileiros
            (Recentemente, o Centro Cultural China-Brasil Yuan Aiping, foi reconhecido pelo governo chinês
            como uma das melhores escolas de mandarim do mundo). Yuan Aiping é também a autora de 20 livros
            didáticos e tem promovido diversas atividades de intercâmbio cultural entre Brasil e China. Em
            2015, foi eleita uma das melhores professoras de mandarim do mundo pelo governo chinês. É
            fundadora e primeira diretora da Escola Chinesa do Rio de Janeiro. Em 2017, ganhou o Título da
            Cidadã Carioca pela Assembléia Legislativa do Estado do Rio de Janeiro e foi nomeada Assessora
            Consular pelo Consulado Chinês do Rio de Janeiro.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sobre {
  @include section-padding;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: $space-8;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: $space-8;

    @include respond-to(md) {
      flex-direction: row;
      align-items: flex-start;
      gap: $space-12;
    }
  }

  &__col--image {
    @include respond-to(md) {
      flex: 0 0 320px;
    }
  }

  &__col--text {
    flex: 1;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: $radius-lg;
    box-shadow: $shadow-card;

    @include respond-to(md) {
      max-width: 320px;
    }
  }

  &__description {
    color: $color-muted-text;
    max-width: none;
  }
}
</style>
