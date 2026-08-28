<!-- Design system: experience information stays tabular and unboxed so the content reads as a carefully typeset professional record. -->
<script setup lang="ts">
import type { Experience } from "@/data/resume";

defineProps<{
  entry: Experience;
}>();
</script>

<template>
  <article class="experience-entry">
    <div class="entry-period">
      <p>{{ entry.interval }}</p>
      <span>{{ entry.duration }}</span>
    </div>

    <div class="entry-body">
      <div class="entry-title-row">
        <div>
          <h3>{{ entry.company }}</h3>
          <p>{{ entry.industry }} · {{ entry.location }}</p>
        </div>
        <strong>{{ entry.title }}</strong>
      </div>

      <div class="entry-modules">
        <section v-for="module in entry.modules" :key="module.title" class="entry-module">
          <h4>{{ module.title }}</h4>
          <ol>
            <li v-for="point in module.points" :key="point">{{ point }}</li>
          </ol>
        </section>
      </div>
    </div>
  </article>
</template>
