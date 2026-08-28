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

export const profile = {
  name: "林家淇",
  displayName: "NANA",
  alias: "Nana / 0nn",
  role: "Frontend Engineer",
  email: "suannai1230@gmail.com",
  birthday: "1999.10.10",
  github: "https://github.com/0nn7a",
  portfolio: "https://www.cake.me/me/0nn/portfolios",
  summary:
    "嗨！我是 Nana，一個設計背景出身的前端工程師，具 3 年以上企業系統開發經驗。習慣主動釐清需求、把細節收乾淨再交付。個性穩定、細心，重視交付品質與時程承諾，也習慣把踩過的坑紀錄成文檔留給團隊。",
};

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
          "運用原生 JavaScript、jQuery、Vue 3 Component（Vue Router、Pinia）等技術完成企業系統功能。",
          "執行 Bootstrap、Tailwind CSS 的 RWD 響應式切版與設計還原。",
          "規劃可複用元件，如前後台 Layout、插槽表格與全站 Toast／Dialog。",
          "透過 RESTful API 串接與後端協作，並配合 CI/CD 流程與部署文件維護。",
        ],
      },
      {
        title: "UI／UX 設計",
        points: ["使用 Figma 進行介面設計與 Prototype 製作。", "進行設計稿切版、互動細節與視覺規格還原。"],
      },
      {
        title: "系統開發與維運",
        points: [
          "設計表單電子化與簽核流程邏輯，累計參與 104 套 BPM 系統。",
          "處理組織管理需求，包含部門架構與人事異動維護。",
          "進行 SQL 資料處理，包括跨表單資料串接與依狀態更新多張表。",
        ],
      },
      {
        title: "自主進修",
        points: [
          "Java 後端開發：Maven、Spring Boot、MyBatis。",
          "Redis 快取應用；Docker 容器化與 Linux Ubuntu 虛擬機部署。",
          "持續接觸 Nuxt 4、TypeScript 與 Svelte。",
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
    label: "Web Design",
    items: ["HTML 5、CSS 3", "SASS、Bootstrap 5、Tailwind CSS", "RWD 響應式網頁設計", "UI 設計與網頁配色"],
    tags: ["#HTML", "#CSS", "#Sass", "#Figma", "#視覺設計"],
  },
  {
    label: "Front End",
    items: ["JavaScript、TypeScript、jQuery", "AJAX、API、RESTful API", "Vue、Pinia、Vue Router、Nuxt 4"],
    tags: ["#JavaScript", "#VueJS", "#AJAX", "#Node.js"],
  },
  {
    label: "Back End",
    items: [
      "Java、Maven、Spring Boot、MyBatis",
      "MySQL、MS SQL Server、Redis",
      "Node.js（Express）、MongoDB、Mongoose",
      "Docker 容器化、Linux Ubuntu 虛擬機部署",
      "Git 版本管理、CI/CD 部署流程",
    ],
    tags: ["#Java", "#Spring", "#Git", "#Docker"],
  },
  {
    label: "Workstation",
    items: ["WebStorm、IntelliJ IDEA", "macOS"],
    tags: ["#JetBrains", "#macOS"],
  },
];
