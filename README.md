# Nana｜Vibe Coding Resume

這是一個以 **Vibe Coding** 完成的簡單履歷靜態網頁，為林家淇（Nana / 0nn）整理個人介紹、工作經驗、學歷、技能、證照與作品集。專案以自然語言討論需求，再透過反覆調整版面、互動與細節，逐步完成一個適合公開瀏覽的個人履歷網站。

網站刻意維持輕量與直接：沒有登入、資料庫、線上編輯器或後端 API，所有履歷內容都以 Vue 元件與 TypeScript 資料檔固定管理，建置後即可作為 GitHub Pages 的純靜態網站發布。

> **Vibe Coding 在這個專案中的定位**：不是交付一個通用模板，而是透過人與 AI 的持續溝通，把視覺參考、文字內容、互動感受與實機回饋轉換成可執行的前端實作。

## 線上預覽

[開啟 Nana｜Resume](https://0nn7a.github.io/resume-by-manus/)

## 這個專案完成了什麼

首頁以大量留白、窄版閱讀欄位、圓形頭像與底部膠囊導覽建立安靜的個人索引感。作品集入口保留三張重疊圖片卡；展開後呈現五張作品卡，點擊作品時會從原始位置平順移動、回正並放大到中央，其他卡片則降低存在感。

作品卡的連結提示只有在滑鼠 hover 或鍵盤 focus 時出現，避免初次展開時造成視覺干擾。觸控裝置則額外處理長按、原生選單、文字選取與圖片拖曳，避免使用者按住卡片時誤觸作品連結或讓卡片產生不預期的位移。

| 面向 | 實作內容 |
| --- | --- |
| 履歷內容 | 個人介紹、Experience、Education、Skills、Certification 與聯絡資訊 |
| 作品集 | 首頁三張入口卡、展開五張作品卡、中央聚焦與外部連結 |
| 動效 | 卡片從原始位置連續移動、回正、放大，不以跳位方式切換狀態 |
| 響應式 | 針對桌面、窄版手機與 Mobile Safari 調整尺寸、safe area 與 viewport 行為 |
| 可近用性 | 語意化按鈕、鍵盤 focus、Escape 關閉與清楚的 aria-label |
| 發布方式 | Vite 靜態建置，使用 GitHub Actions 發布至 GitHub Pages |

## 技術選擇

| 技術 | 用途 |
| --- | --- |
| Vue 3 | 建立首頁、履歷區段與作品集互動組件 |
| Composition API | 管理作品集開關、選取、背景鎖定與鍵盤事件 |
| TypeScript | 定義履歷與作品資料結構，降低內容異動時的型別錯誤 |
| Vite | 提供本機開發、熱更新與正式靜態建置 |
| CSS | 使用 CSS Variables、RWD、safe-area 與 transform transition 完成視覺與動效 |
| lucide-vue-next | 統一聯絡資訊、外部連結與關閉按鈕的線性圖示 |
| GitHub Actions | 在 `main` 分支更新後自動建置並部署 GitHub Pages |

## 專案結構

| 路徑 | 用途 |
| --- | --- |
| `client/src/App.vue` | 首頁結構、履歷區段與聯絡資訊 |
| `client/src/data/resume.ts` | 個人資料、履歷文字與五張作品卡資料 |
| `client/src/components/PortfolioStack.vue` | 三張首頁卡、五張展開卡、選取、hover 與長按互動 |
| `client/src/components/BottomNav.vue` | 底部固定膠囊導覽 |
| `client/src/styles/resume.css` | 全站排版、卡片定位、動效、RWD 與 Mobile Safari 處理 |
| `client/index.html` | 網頁標題、description、viewport 與 favicon 設定 |
| `.github/workflows/deploy.yml` | GitHub Pages 自動建置與部署流程 |

## 如何修改履歷內容

履歷內容集中在 `client/src/data/resume.ts`。個人介紹與履歷區段由 `client/src/App.vue` 組合；作品集則透過 `portfolioCards` 陣列管理。每張作品卡包含圖片、名稱、簡介與外部連結，修改資料時不需要新增伺服器或資料庫。

```ts
{
  id: "work-01",
  index: "01",
  title: "作品名稱",
  summary: "一段精簡的作品說明。",
  image: "https://example.com/project-image.png",
  href: "https://example.com/project",
  tone: "linen",
}
```

建議圖片使用可公開存取的 HTTPS URL。由於網站部署後所有內容都會公開，請不要把私人照片、機密截圖或不希望公開的檔案放入公開儲存庫。

## 本機開發

請使用 Node.js 22 或相容版本，在專案根目錄執行：

```bash
corepack enable
pnpm install
pnpm dev
```

正式建置與本機預覽：

```bash
pnpm run build
pnpm run preview
```

`pnpm run build` 會先執行 Vue TypeScript 檢查，再輸出 Vite 靜態檔案。這個專案不需要啟動 Express、資料庫或其他應用程式伺服器。

## GitHub Pages 部署

本專案使用 GitHub Actions 建置並發布 `dist` 靜態檔案至 GitHub Pages。[1] [2] 將程式碼推送至 `main` 後，請在儲存庫的 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。

```bash
git add .
git commit -m "update: refresh resume content"
git push origin main
```

目前網站部署於：

```text
https://0nn7a.github.io/resume-by-manus/
```

## Vibe Coding 筆記

這個專案的重點不只在於使用哪一個框架，而在於把模糊的視覺感受拆成可以驗證的前端問題，例如「卡片看起來像亂飛」可以轉化為固定排列、重疊幅度、旋轉角度與中心定位；「手機 Safari 邊界沒有貼齊」則需要進一步檢查 `viewport-fit=cover`、safe-area 與動態 viewport 行為。

因此，Vibe Coding 在這裡是一個迭代流程：先建立可工作的靜態骨架，再依照參考畫面與實際操作回饋，逐步修正排版、動畫、觸控行為與公開部署結果。這也讓 README 同時記錄網站成果與製作方式。

## 參考資料

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs：Configuring a publishing source for your GitHub Pages site"
[2]: https://vite.dev/guide/static-deploy "Vite：Deploying a Static Site"
