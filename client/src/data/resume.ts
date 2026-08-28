/* Design system: this typed content source separates precise, scan-friendly resume data from the print-editorial UI. */
export type ExperienceModule = {
  title: string;
  points: string[];
};

export type Experience = {
  interval: string;
  duration: string;
  company: string;
  industry: string;
  location: string;
  title: string;
  modules: ExperienceModule[];
};

export type SkillGroup = {
  label: string;
  items: string[];
  tags: string[];
};

export type PortfolioCard = {
  id: string;
  index: string;
  title: string;
  summary: string;
  href?: string;
  tone: "linen" | "mist" | "dawn" | "moss" | "seaside";
  image?: string;
};

export const profile = {
  name: "林家淇",
  displayName: "NANA",
  alias: "Nana / 0nn",
  role: "Software Engineer",
  email: "suannai1230@gmail.com",
  birthday: "1999.10.10",
  mbti: "INFJ",
  location: "Taipei, Taiwan",
  github: "https://github.com/0nn7a",
  portfolio: "https://www.cake.me/me/0nn/portfolios",
};

/**
 * Replace title, summary, href, and tone in this array when project assets are ready.
 * Five records form one collection: the home stack previews the first three records.
 */
export const portfolioCards: PortfolioCard[] = [
  { id: "work-01", index: "01", title: "作品待設定 01", summary: "之後可在此填入作品的短簡介。", tone: "linen" },
  { id: "work-02", index: "02", title: "作品待設定 02", summary: "之後可在此填入作品的短簡介。", tone: "mist" },
  { id: "work-03", index: "03", title: "作品待設定 03", summary: "之後可在此填入作品的短簡介。", tone: "dawn" },
  { id: "work-04", index: "04", title: "作品待設定 04", summary: "之後可在此填入作品的短簡介。", tone: "moss" },
  { id: "work-05", index: "05", title: "作品待設定 05", summary: "之後可在此填入作品的短簡介。", tone: "seaside" },
];

export const highlights = [
  { value: "3+", label: "years / enterprise systems" },
  { value: "104", label: "BPM workflow systems" },
  { value: "DESIGN", label: "background → engineering" },
];

export const experience: Experience[] = [
  {
    interval: "2022.11 — 2026.04",
    duration: "3 年 6 個月",
    company: "仁大資訊股份有限公司",
    industry: "電腦系統整合服務業｜500 人以上",
    location: "新北市新莊區",
    title: "前端工程師",
    modules: [
      {
        title: "前端開發",
        points: [
          "熟悉原生 JavaScript / jQuery / Vue3 Component（+VueRouter, Pinia）等技術",
          "RWD 響應式切版（Bootstrap、Tailwind CSS）",
          "復用型組件設計（如前後台 Layout、插槽表格、全站 Toast / Dialog）",
          "RESTful API 串接與後端協作",
          "CI / CD 流程文件與部署配合",
        ],
      },
      {
        title: "系統開發與維運",
        points: [
          "表單電子化與簽核流程邏輯設計（BPM、104 系統）",
          "組織管理（部門架構、人事異動維護）",
          "SQL 資料處理（跨表單資料串接、依狀態更新多表等）",
        ],
      },
      {
        title: "自主進修",
        points: [
          "Java 後端開發（Maven、Spring Boot、MyBatis）",
          "Redis 快取應用",
          "Docker 容器化、Linux Ubuntu 虛擬機部署",
          "Nuxt4、TypeScript、Svelte",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "國立臺灣師範大學",
    department: "圖文傳播學系｜大學畢業",
    interval: "2018.09 — 2022.06",
  },
  {
    school: "私立泰北高中",
    department: "廣告設計科｜高職畢業",
    interval: "2015.09 — 2018.06",
  },
];

export const certifications = [
  {
    title: "Claude Academy: Claude 101",
    issuer: "Anthropic",
    code: "69b2ffe4d3acb3aaacde425d7b42f173",
    interval: "2026.08 — 永久有效",
  },
  {
    title: "DBA 訓練營－SQL Server 資料庫管理入門",
    issuer: "Hahow 好學校",
    code: "6703989547f000bf8b19bfa1",
    interval: "2024.10 — 永久有效",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Front End",
    items: [
      "HTML 5、CSS 3、SASS、Bootstrap 5、Tailwind CSS",
      "RWD 響應式網頁設計、UI 設計與網頁配色",
      "JavaScript、TypeScript、jQuery",
      "AJAX、API、RESTful API",
      "Vue、Pinia、Vue Router、Nuxt 4",
    ],
    tags: ["#HTML", "#CSS", "#Sass", "#Figma", "#VueJS", "#TypeScript"],
  },
  {
    label: "Back End",
    items: [
      "Java、Maven、Spring Boot、MyBatis",
      "MySQL、MS SQL Server、Redis",
      "Node.js（Express）、MongoDB、Mongoose",
      "Docker 容器化、Linux Ubuntu 虛擬機部署",
      "Git 版本管理、CI / CD 部署流程",
    ],
    tags: ["#Java", "#Spring", "#Git", "#Docker"],
  },
  {
    label: "Workstation",
    items: ["WebStorm、IntelliJ IDEA", "macOS"],
    tags: ["#JetBrains", "#macOS"],
  },
];
