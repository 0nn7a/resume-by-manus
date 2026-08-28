<!-- Design system: each resume block follows the Quiet Personal Index rhythm—short heading, generous breathing room, and a single narrow reading axis. -->
<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  note?: string;
}>();
</script>

<template>
  <section :id="id" class="resume-section">
    <header class="resume-section__header">
      <h2>{{ title }}</h2>
      <p v-if="note">{{ note }}</p>
    </header>
    <div class="resume-section__content">
      <slot />
    </div>
  </section>
</template>
