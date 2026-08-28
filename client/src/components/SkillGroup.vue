<!-- Design system: each skill group uses typographic hierarchy, a cyan-free graphite underline, and sparse tags rather than rounded UI chips. -->
<script setup lang="ts">
import type { SkillGroup as SkillGroupModel } from "@/data/resume";

defineProps<{
  group: SkillGroupModel;
}>();
</script>

<template>
  <section class="skill-group">
    <h3>{{ group.label }}</h3>
    <ul>
      <li v-for="item in group.items" :key="item">{{ item }}</li>
    </ul>
    <p class="skill-tags">
      <span v-for="tag in group.tags" :key="tag">{{ tag }}</span>
    </p>
  </section>
</template>
