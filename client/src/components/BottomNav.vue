<!-- Design system: the fixed black capsule is a discreet personal-navigation anchor, matching the Quiet Personal Index reference without interrupting the generous white space. -->
<script setup lang="ts">
import { ArrowDown, ArrowUp, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-vue-next";

const items = [
  { href: "#top", icon: ArrowUp, label: "Top" },
  { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#skills", icon: Sparkles, label: "Skills" },
  { href: "#bottom", icon: ArrowDown, label: "Bottom" },
];
</script>

<template>
  <nav class="bottom-nav" aria-label="頁面導覽">
    <a v-for="item in items" :key="item.href" :href="item.href" :aria-label="item.label" :title="item.label">
      <component :is="item.icon" :size="15" :stroke-width="1.8" aria-hidden="true" />
    </a>
  </nav>
</template>
