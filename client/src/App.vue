<!-- Design system: Quiet Personal Index uses a narrow, generously spaced reading column, a real circular portrait, and soft card-based work discovery inspired by the supplied RWD references. -->
<script setup lang="ts">
import BottomNav from "@/components/BottomNav.vue";
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import PortfolioStack from "@/components/PortfolioStack.vue";
import ResumeSection from "@/components/ResumeSection.vue";
import SkillGroup from "@/components/SkillGroup.vue";
import { certifications, education, experience, profile, skills } from "@/data/resume";
import { BookOpen, CakeSlice, Github, Mail, Sparkles } from "lucide-vue-next";

const avatarUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030849489/oAJLPvfVgHVhbtVA.jpeg";
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
          <p class="intro__eyebrow">{{ profile.alias }} · {{ profile.location }} · {{ profile.birthday }} · {{ profile.mbti }}</p>
          <p>嗨！我是林家淇。</p>
          <p>具 3 年以上前端開發經驗，正在往全端方向發展。</p>
          <p>習慣主動釐清需求、把細節收乾淨再交付。</p>
          <p>個性穩定、細心，重視交付品質與時程承諾，也習慣把踩過的坑紀錄成文檔留給團隊。</p>
        </div>
      </header>

      <div class="resume-index">
        <ResumeSection id="experience" title="Experience" note="工作經驗">
          <ExperienceEntry v-for="entry in experience" :key="entry.company" :entry="entry" />
        </ResumeSection>

        <ResumeSection id="education" title="Education" note="學歷">
          <div class="simple-list">
            <article v-for="item in education" :key="item.school" class="simple-list__item">
              <p class="simple-list__period">{{ item.interval }}</p>
              <div class="simple-list__details">
                <h3>{{ item.school }}</h3>
                <span>{{ item.department }}</span>
              </div>
            </article>
          </div>
        </ResumeSection>

        <ResumeSection id="skills" title="Skills" note="技能與工具">
          <div class="skills-list">
            <SkillGroup v-for="group in skills" :key="group.label" :group="group" />
          </div>
        </ResumeSection>

        <ResumeSection id="credentials" title="Certification" note="資格認證">
          <div class="credential-list">
            <article v-for="certificate in certifications" :key="certificate.code" class="credential-list__item">
              <p class="credential-list__period">{{ certificate.interval }}</p>
              <div class="credential-list__details">
                <div class="credential-list__title-row">
                  <span class="credential-list__brand" aria-hidden="true">
                    <Sparkles v-if="certificate.issuer === 'Anthropic'" :size="15" :stroke-width="1.8" />
                    <BookOpen v-else :size="15" :stroke-width="1.8" />
                  </span>
                  <h3>{{ certificate.title }}</h3>
                </div>
                <span>{{ certificate.issuer }} · {{ certificate.code }}</span>
              </div>
            </article>
          </div>
        </ResumeSection>

        <ResumeSection id="connect" title="保持聯繫" note="Contact">
          <div class="connect-links">
            <a :href="`mailto:${profile.email}`"><Mail :size="15" :stroke-width="1.8" aria-hidden="true" />{{ profile.email }}</a>
            <a :href="profile.github" target="_blank" rel="noreferrer"><Github :size="15" :stroke-width="1.8" aria-hidden="true" />GitHub ↗</a>
            <a :href="profile.portfolio" target="_blank" rel="noreferrer"><CakeSlice :size="15" :stroke-width="1.8" aria-hidden="true" />Cake Resume ↗</a>
          </div>
        </ResumeSection>
      </div>

      <footer id="bottom" class="site-footer">© {{ new Date().getFullYear() }} {{ profile.name }} · {{ profile.alias }}</footer>
    </div>

    <BottomNav />
  </main>
</template>
