<!-- Design system: skill groups read as soft index notes; their hierarchy comes from text and whitespace, not cards or heavy rules. -->
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
