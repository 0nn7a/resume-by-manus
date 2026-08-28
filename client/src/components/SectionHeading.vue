<!-- Design system: a terse bilingual label and twin rules pace the warm-paper resume like a Swiss editorial spread. -->
<script setup lang="ts">
defineProps<{
  index: string;
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="section-heading">
    <div class="section-index" aria-hidden="true">{{ index }}</div>
    <h2>
      <span>{{ title }}</span>
      <small>{{ subtitle }}</small>
    </h2>
  </div>
</template>
