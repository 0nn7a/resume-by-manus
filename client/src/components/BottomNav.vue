<!-- Design system: the fixed black capsule is a discreet personal-navigation anchor, matching the Quiet Personal Index reference without interrupting the generous white space. -->
<script setup lang="ts">
const items = [
  { href: "#top", icon: "⌂", label: "首頁" },
  { href: "#about", icon: "≡", label: "介紹" },
  { href: "#experience", icon: "▱", label: "經歷" },
  { href: "#skills", icon: "✦", label: "技能" },
  { href: "#connect", icon: "@", label: "聯繫" },
];
</script>

<template>
  <nav class="bottom-nav" aria-label="頁面導覽">
    <a v-for="item in items" :key="item.href" :href="item.href" :aria-label="item.label" :title="item.label">
      <span aria-hidden="true">{{ item.icon }}</span>
    </a>
  </nav>
</template>
