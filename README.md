# Nana｜Quiet Personal Index

這是一個使用 **Vite、Vue 3 Composition API 與 TypeScript** 製作的個人履歷與作品集首頁。設計以大量留白、窄欄閱讀、小型圓形頭像、三張重疊卡與黑色底部膠囊導覽為主；它會先把 Nana 的背景說清楚，再讓訪客展開同一組五張作品卡。

## 目前已完成的互動

首頁的三張柔和色調卡片是同一個作品集入口。點擊後，畫面會開啟 `SELECTED WORKS / 05` 瀏覽層並展開五張卡片；點選其中一張會聚焦該卡、柔焦其餘卡片，並呈現短簡介與連結的預留位置。按關閉按鈕或按 `Esc` 可回到首頁。底部膠囊導覽會帶訪客到介紹、工作經驗、技能與聯繫區段。

## 專案結構

| 路徑 | 用途 |
| --- | --- |
| `client/src/App.vue` | 首頁介紹、履歷各區段與聯繫資訊的組合。 |
| `client/src/data/resume.ts` | 個人資料、履歷文字、經歷、學歷、技能、證照與五張作品卡資料。 |
| `client/src/components/PortfolioStack.vue` | 三張疊放卡、五張展開卡與卡片聚焦互動。 |
| `client/src/components/BottomNav.vue` | 底部固定膠囊導覽。 |
| `client/src/styles/resume.css` | 留白版面、卡片動畫、行動版斷點與可近用焦點樣式。 |
| `.github/workflows/deploy.yml` | 推送 `main` 時建置並發布到 GitHub Pages 的工作流程。 |

## 替換作品資料

等作品資料就緒後，請修改 `client/src/data/resume.ts` 的 `portfolioCards` 陣列。五張物件依序對應展開後的五張卡。`title` 是卡片聚焦後的標題，`summary` 是短簡介，`href` 是作品連結；當 `href` 有值時，再點一次已聚焦的作品卡會在新分頁開啟連結。`tone` 是沒有作品圖片前的暫用色調，可保留或按最終圖片風格調整。

```ts
{
  id: "work-01",
  index: "01",
  title: "你的作品名稱",
  summary: "一段精簡的作品說明。",
  href: "https://your-project.example.com",
  tone: "linen",
}
```

## 本機開發

請使用 Node.js 22 或相容版本，並在專案根目錄執行下列命令。

```bash
corepack enable
pnpm install
pnpm dev
```

正式建置與本機檢查可使用：

```bash
pnpm run build
pnpm run preview
```

## GitHub Pages 發佈

Vite 的 GitHub Pages 方式會先生成 `dist` 靜態檔，然後由 Actions 上傳 artifact 並部署。[1] [2] 推送程式碼至 GitHub 後，請在 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。

| 儲存庫類型 | 推薦名稱 | 網址形式 | 此專案的路徑設定 |
| --- | --- | --- |
| 個人首頁 | `0nn7a.github.io` | `https://0nn7a.github.io/` | 自動使用根路徑 `/`。 |
| 專案網站 | 例如 `nana-resume` | `https://0nn7a.github.io/nana-resume/` | 在 Actions 中自動使用 `/nana-resume/`。 |

```bash
git init
git add .
git commit -m "feat: add Nana personal index"
git branch -M main
git remote add origin https://github.com/0nn7a/<repository-name>.git
git push -u origin main
```

### 頭像與作品圖片

首頁與 favicon 現在使用 GitHub 帳號 `0nn7a` 的公開頭像網址，因此 GitHub Pages 部署後可直接載入。作品圖片就緒後，請同樣使用可長期公開存取的圖片網址加入；請勿把私人或不希望公開的影像放入公開儲存庫，因 GitHub Pages 對外發布後可公開存取。[1]

## 參考資料

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs：Configuring a publishing source for your GitHub Pages site"
[2]: https://vite.dev/guide/static-deploy "Vite：Deploying a Static Site"
