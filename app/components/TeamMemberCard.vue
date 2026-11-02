<script setup lang="ts">
import type { TeamMember } from '~/types/content'

defineProps<{
  member: TeamMember
}>()
</script>

<template>
  <article class="team-member">
    <img
      v-if="member.photo"
      :src="member.photo"
      :alt="`Foto de ${member.name}`"
      class="team-member__photo"
      loading="lazy"
      width="120"
      height="120"
    />
    <div>
      <h3 class="team-member__name">{{ member.name }}</h3>
      <p class="team-member__role">{{ member.role }}</p>
      <p class="team-member__bio">{{ member.bio }}</p>
      <ul v-if="member.credentials?.length" class="team-member__credentials">
        <li v-for="credential in member.credentials" :key="credential">{{ credential }}</li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.team-member {
  display: grid;
  gap: $space-5;
  padding: $space-6;
  border-radius: $radius-md;
  background-color: $surface;

  @include respond-to(sm) {
    grid-template-columns: 120px 1fr;
    align-items: start;
  }

  &__photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid $gold-500;
  }

  &__name {
    font-size: $font-size-heading-md;
  }

  &__role {
    margin-bottom: $space-3;
    color: $jade-700;
    font-weight: $weight-semibold;
  }

  &__bio {
    color: $color-muted-text;
  }

  &__credentials {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-4;

    li {
      padding: $space-1 $space-3;
      border: $border-gold;
      border-radius: $radius-pill;
      font-size: $font-size-body-sm;
    }
  }
}
</style>
