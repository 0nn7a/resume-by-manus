<!-- Design system: Quiet Personal Index uses a narrow, generously spaced reading column, a real circular portrait, and soft card-based work discovery inspired by the supplied RWD references. -->
<script setup lang="ts">
import BottomNav from "@/components/BottomNav.vue";
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import PortfolioStack from "@/components/PortfolioStack.vue";
import ResumeSection from "@/components/ResumeSection.vue";
import SkillGroup from "@/components/SkillGroup.vue";
import { certifications, education, experience, profile, skills } from "@/data/resume";

const avatarUrl = "/manus-storage/nana-avatar_2d28ae2e.jpeg";
</script>

<template>
  <main id="top" class="quiet-resume">
    <div class="page-shell">
      <header class="intro" aria-label="林家淇的個人介紹">
        <div class="intro__visuals">
          <img class="profile-avatar" :src="avatarUrl" alt="林家淇的個人頭像" />
          <PortfolioStack />
        </div>

        <div class="intro__copy">
          <p class="intro__eyebrow">{{ profile.alias }} · {{ profile.location }}</p>
          <h1>嗨，我是 Nana。</h1>
          <p>我是設計背景出身的前端工程師，具 3 年以上企業系統開發經驗。</p>
          <p>
            我習慣主動釐清需求，把細節收乾淨再交付；在時程與品質之間，維持穩定、可溝通的節奏。
          </p>
          <p>
            目前累積參與 104 套 BPM 流程系統，也持續整理元件設計、部署與維運中踩過的坑，讓團隊能更快延續工作。
          </p>
          <p>
            我對能讓人清楚使用、安心維護的產品特別有興趣。這裡記錄我的工作經驗、技術工具與正在整理的作品。
          </p>
        </div>
      </header>

      <div class="resume-index">
        <ResumeSection id="about" title="關於我" note="About Nana">
          <p class="about-statement">把需求釐清，再把細節交付。</p>
          <p>{{ profile.summary }}</p>
        </ResumeSection>

        <ResumeSection id="experience" title="工作經驗" note="Experience">
          <ExperienceEntry v-for="entry in experience" :key="entry.company" :entry="entry" />
        </ResumeSection>

        <ResumeSection id="education" title="學歷" note="Education">
          <div class="simple-list">
            <article v-for="item in education" :key="item.school" class="simple-list__item">
              <p>{{ item.interval }}</p>
              <div>
                <h3>{{ item.school }}</h3>
                <span>{{ item.department }}</span>
              </div>
            </article>
          </div>
        </ResumeSection>

        <ResumeSection id="skills" title="技能與工具" note="Skills">
          <div class="skills-list">
            <SkillGroup v-for="group in skills" :key="group.label" :group="group" />
          </div>
        </ResumeSection>

        <ResumeSection id="credentials" title="資格認證" note="Credentials">
          <div class="credential-list">
            <article v-for="certificate in certifications" :key="certificate.code" class="credential-list__item">
              <p>{{ certificate.interval }}</p>
              <div>
                <h3>{{ certificate.title }}</h3>
                <span>{{ certificate.issuer }} · {{ certificate.code }}</span>
              </div>
            </article>
          </div>
        </ResumeSection>

        <ResumeSection id="connect" title="保持聯繫" note="Contact">
          <p class="connect-copy">若你正在找重視細節與協作節奏的前端工程師，歡迎和我聊聊。</p>
          <div class="connect-links">
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            <a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a :href="profile.portfolio" target="_blank" rel="noreferrer">Cake Resume ↗</a>
          </div>
        </ResumeSection>
      </div>

      <footer class="site-footer">© {{ new Date().getFullYear() }} {{ profile.name }} · {{ profile.alias }}</footer>
    </div>

    <BottomNav />
  </main>
</template>
