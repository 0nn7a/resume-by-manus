<!-- Design system: the ink-black workbench frames one tactile resume sheet; asymmetric Swiss typography, twin rules, and quiet film texture make reading the interaction. -->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import SkillGroup from "@/components/SkillGroup.vue";
import { certifications, education, experience, highlights, profile, skills } from "@/data/resume";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "WORK" },
  { id: "education", label: "EDU" },
  { id: "skills", label: "SKILLS" },
];

const assets = {
  mark: "/manus-storage/nana-mark_1b4c49e3.png",
  contactSheet: "/manus-storage/nana-contact-sheet_63797c9b.jpg",
};

const activeSection = ref("about");
const menuOpen = ref(false);
const activeLabel = computed(() => navItems.find((item) => item.id === activeSection.value)?.label ?? "INDEX");
let observer: IntersectionObserver | undefined;

function closeMenu() {
  menuOpen.value = false;
}

function printResume() {
  window.print();
}

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>("[data-observe-section]");
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) activeSection.value = visible.target.id;
    },
    { rootMargin: "-24% 0px -63%", threshold: 0 },
  );
  sections.forEach((section) => observer?.observe(section));
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <header class="workbench-header" aria-label="履歷導覽">
    <a class="brand-lockup" href="#top" aria-label="回到 Nana 履歷頂端">
      <span class="brand-symbol brand-symbol--inverse" aria-hidden="true">
        <img :src="assets.mark" alt="" />
      </span>
      <span>NANA<br />0NN</span>
    </a>

    <button class="mobile-index" type="button" :aria-expanded="menuOpen" aria-controls="resume-nav" @click="menuOpen = !menuOpen">
      <span>{{ activeLabel }}</span>
      <span aria-hidden="true">{{ menuOpen ? "−" : "+" }}</span>
    </button>

    <nav id="resume-nav" :class="{ 'is-open': menuOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        :aria-current="activeSection === item.id ? 'location' : undefined"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
      <button type="button" @click="printResume">PRINT / PDF</button>
    </nav>

    <p class="header-note">AVAILABLE<br />FOR BUILDING</p>
  </header>

  <main id="top" class="workbench">
    <article class="resume-sheet" aria-label="林家淇的個人履歷">
      <header class="resume-intro">
        <div class="intro-kicker">
          <span>RESUME / 2026</span>
          <span>TAIPEI · TAIWAN</span>
        </div>

        <div class="identity-grid">
          <div class="name-block">
            <p class="alias">{{ profile.alias }}</p>
            <h1>{{ profile.displayName }}</h1>
            <p class="chinese-name">{{ profile.name }}</p>
          </div>

          <div class="role-block">
            <p class="role">{{ profile.role }}</p>
            <dl>
              <div><dt>BORN</dt><dd>{{ profile.birthday }}</dd></div>
              <div><dt>MAIL</dt><dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd></div>
            </dl>
          </div>
        </div>

        <figure class="film-gesture" aria-label="抽象黑白接觸印相裝飾">
          <img :src="assets.contactSheet" alt="" />
          <figcaption>CONTACT / 0NN</figcaption>
        </figure>

        <div class="profile-bottom">
          <div class="profile-links">
            <a :href="profile.github" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>
            <a :href="profile.portfolio" target="_blank" rel="noreferrer">CAKE RESUME <span>↗</span></a>
          </div>
          <div class="highlight-row hero-highlights" aria-label="職涯摘要">
            <div v-for="highlight in highlights" :key="highlight.label" class="highlight-item">
              <strong>{{ highlight.value }}</strong>
              <span>{{ highlight.label }}</span>
            </div>
          </div>
          <div class="identity-stamp" aria-hidden="true">
            <span class="brand-symbol">
              <img :src="assets.mark" alt="" />
            </span>
          </div>
        </div>
      </header>

      <section id="about" class="resume-section about-section" data-observe-section>
        <SectionHeading index="01" title="About Me" subtitle="關於我" />
        <div class="section-content about-content">
          <p class="lead-statement">把需求釐清，再把細節交付。</p>
          <p>{{ profile.summary }}</p>
        </div>
      </section>

      <section id="experience" class="resume-section" data-observe-section>
        <SectionHeading index="02" title="Experience" subtitle="工作／專案經歷" />
        <div class="section-content">
          <ExperienceEntry v-for="entry in experience" :key="entry.company" :entry="entry" />
        </div>
      </section>

      <section id="education" class="resume-section" data-observe-section>
        <SectionHeading index="03" title="Education" subtitle="教育經歷" />
        <div class="section-content education-list">
          <article v-for="item in education" :key="item.school" class="education-entry">
            <p>{{ item.interval }}</p>
            <div>
              <h3>{{ item.school }}</h3>
              <span>{{ item.department }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="certifications" class="resume-section" data-observe-section>
        <SectionHeading index="04" title="Credentials" subtitle="資格認證" />
        <div class="section-content certification-list">
          <article v-for="certificate in certifications" :key="certificate.code" class="certificate-entry">
            <div>
              <h3>{{ certificate.title }}</h3>
              <p>{{ certificate.issuer }} <span>/</span> {{ certificate.code }}</p>
            </div>
            <time>{{ certificate.interval }}</time>
          </article>
        </div>
      </section>

      <section id="skills" class="resume-section skills-section" data-observe-section>
        <SectionHeading index="05" title="Skills" subtitle="技術與工具" />
        <div class="section-content skills-layout">
          <SkillGroup v-for="group in skills" :key="group.label" :group="group" />
        </div>
      </section>

      <footer class="resume-footer">
        <p>© {{ new Date().getFullYear() }} NANA / 0NN</p>
        <p>DESIGN BACKGROUND · FRONTEND CRAFT</p>
      </footer>
    </article>
  </main>
</template>
