# Nana｜Frontend Engineer Resume

這是一個以 **Vite + Vue 3 Composition API + TypeScript** 製作的單頁履歷網站。視覺方向以黑色展示工作台、暖灰紙張、雙線分隔與編輯式文字階層為主，適合以 GitHub Pages 長期託管。

## 專案重點

| 面向 | 做法 |
| --- | --- |
| 元件架構 | `SectionHeading`、`ExperienceEntry` 與 `SkillGroup` 各自處理可重複的履歷區塊。 |
| 資料維護 | 個人資訊、經驗、學歷、技能與證照集中在 `client/src/data/resume.ts`。 |
| 響應式設計 | 桌面以黑色工作台包覆紙張；手機改為完整單欄閱讀與可收合索引。 |
| 列印 | 頁首提供 `PRINT / PDF` 操作，列印時會移除展示背景並保留清晰資訊層級。 |
| 部署 | 推送至 `main` 即由 `.github/workflows/deploy.yml` 建置並部署。 |

## 本機開發

請使用 Node.js 22 或相容版本。首次安裝後，執行下列命令即可啟動開發環境。

```bash
corepack enable
pnpm install
pnpm dev
```

若只需確認正式產物，可執行：

```bash
pnpm run build
pnpm run preview
```

## 更新履歷內容

主要履歷資料都集中在 `client/src/data/resume.ts`。更新工作經驗、教育背景、技能或證照時，只需修改對應資料陣列；Vue 元件會依資料自動產生版面。首頁結構位於 `client/src/App.vue`，全域排版與列印規則位於 `client/src/styles/resume.css`。

## GitHub Pages 發佈

GitHub Pages 的 Actions 發佈方式適合 Vite 這類需要先建置成靜態檔案的網站；官方流程會將建置結果上傳為 artifact，再由部署工作執行發佈。[1] [2]

| 儲存庫類型 | 推薦名稱 | 網址形式 | 此專案的路徑設定 |
| --- | --- | --- | --- |
| 個人首頁 | `0nn7a.github.io` | `https://0nn7a.github.io/` | 自動使用根路徑 `/`。 |
| 專案網站 | 例如 `nana-resume` | `https://0nn7a.github.io/nana-resume/` | 在 Actions 中自動使用 `/nana-resume/`。 |

建立 GitHub 儲存庫並推送程式碼後，請到 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。接著每一次推送 `main` 分支都會觸發建置，也可以在 Actions 頁籤手動執行工作流程。[1] [2]

```bash
git init
git add .
git commit -m "feat: add Nana editorial resume"
git branch -M main
git remote add origin https://github.com/0nn7a/<repository-name>.git
git push -u origin main
```

> GitHub Pages 網站對外公開。請在推送前確認不含私密資訊、未公開聯絡方式或不希望公開的檔案。[1]

### 視覺素材提示

目前介面使用專案所提供的託管素材網址來呈現黑白底片、紙張肌理與品牌圖標。若你要將程式碼完整搬到獨立的 GitHub Pages 儲存庫，建議將這些網址替換為你自行持有、可公開存取的圖片網址，或改用你儲存庫的靜態素材路徑；版面本身已保有黑色／紙張色的 CSS 後備色彩，不會因圖片暫時不可用而無法閱讀。

## 參考資料

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs：Configuring a publishing source for your GitHub Pages site"
[2]: https://vite.dev/guide/static-deploy "Vite：Deploying a Static Site"
