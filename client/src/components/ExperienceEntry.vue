<!-- Design system: work details are calm reading notes in the Quiet Personal Index, never a dense corporate table. -->
<script setup lang="ts">
import type { Experience } from "@/data/resume";

defineProps<{
  entry: Experience;
}>();
</script>

<template>
  <article class="experience-entry">
    <header class="experience-entry__header">
      <p class="experience-entry__period">{{ entry.interval }} · {{ entry.duration }}</p>
      <h3>{{ entry.title }}｜{{ entry.company }}</h3>
      <p class="experience-entry__meta">{{ entry.industry }} · {{ entry.location }}</p>
    </header>

    <div class="experience-entry__modules">
      <section v-for="module in entry.modules" :key="module.title" class="experience-module">
        <h4>{{ module.title }}</h4>
        <ul>
          <li v-for="point in module.points" :key="point">{{ point }}</li>
        </ul>
      </section>
    </div>
  </article>
</template>
