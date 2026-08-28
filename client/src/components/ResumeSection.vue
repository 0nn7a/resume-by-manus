<!-- Design system: each resume block follows the Quiet Personal Index rhythm—short heading, generous breathing room, and a single narrow reading axis. -->
<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  note?: string;
  showHeader?: boolean;
}>();
</script>

<template>
  <section :id="id" class="resume-section" :class="{ 'resume-section--plain': showHeader === false }">
    <header v-if="showHeader !== false" class="resume-section__header">
      <h2>{{ title }}</h2>
      <p v-if="note">{{ note }}</p>
    </header>
    <div class="resume-section__content">
      <slot />
    </div>
  </section>
</template>
