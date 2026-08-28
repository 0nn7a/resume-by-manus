# 本輪預覽診斷

2026-08-28：`client/src/components/ResumeSection.vue` 與 `dist` 內容均包含 `.resume-section__header`、`Experience` 等標題；但經預覽頁面瀏覽器 DOM 查詢，`.resume-section__header` 數量為 0，五個 `.resume-section` 直接從資料內容開始，表示目前預覽仍載入沒有 header 的舊執行結果，或預覽服務與工作目錄的建置產物不同步。已執行開發服務重啟、強制刷新與 `pnpm run build`，後續需以重啟後的實際 HTML／DOM 再驗證。

作品集新 CSS 與元件修改已寫入工作目錄：展開層 `overflow: hidden`、html/body 滾動鎖定 class、背景不設 pointer cursor、放大桌面／手機卡片、選取卡片 hover 暗色遮罩與中央 `ExternalLink` icon、簡介移除箭頭。


追加診斷：預覽端 fetch `/src/App.vue` 可找到 `Experience`，fetch `/src/components/ResumeSection.vue` 可確認 render 函式包含 `$props.showHeader !== false` 與 `.resume-section__header`。然而頁面 DOM 查詢仍回傳 `.resume-section__header` 數量 0。為避免這個條件在目前預覽鏈路中失效，下一步將把英文標題直接放在 App.vue 各 section 內，並以 ResumeSection 的 generic wrapper 保留語意與版面結構，讓標題不再依賴子元件的條件 render。


最新預覽結果：重啟並重新載入後，頁面文字已明確包含 `## Experience`、`## Education`、`## Skills`、`## Certification`，桌面截圖也顯示大型 `EXPERIENCE` 標題與中文輔助標籤。作品集展開後實際出現五張卡、右上關閉按鈕與底部關閉控制；目前尚需用 DOM 計算樣式確認 html/body overflow、背景與卡片 cursor，以及選取卡片 hover cue。


作品集互動驗證：展開層計算樣式為 `html/body overflow: hidden`、`.collection-overlay overflow: hidden`、overscroll `none`；兩層背景 hit-area 均為 `cursor: default`，五張未選取卡為 `cursor: pointer`。選取第一張後，當前卡為 `pointer`、其他四張為 `default`，`.portfolio-card__link-cue` 節點出現 1 個，簡介內不再有箭頭或 link placeholder。桌面展開卡片實際寬高約 229–271 × 292–323 px，已較先前放大。


手機版截圖驗證：390px 寬度下 `EXPERIENCE`、`EDUCATION`、`SKILLS`、`CERTIFICATION` 均以獨立大型標題呈現，底線與中文輔助標籤清晰；正文、技能清單、證照與聯絡連結均未溢出，放大後的作品集入口仍位於首屏右側並維持比例。


選取卡片 hover 驗證準備：預覽中已成功開啟並選取第一張卡，DOM 回傳 `.portfolio-card__link-cue` 1 個；選取卡片實際桌面位置約為 left 336、top 182、width 270、height 335，下一步以滑鼠移入其中心確認暗色遮罩與中央 icon 的實際顯示。


Hover 實測補充：選取卡片畫面中只保留第一張卡的可存取互動項目，其他四張模糊卡已被 pointer-events 隔離；簡介已移除箭頭。上次游標移動未命中卡片（`:hover` 為 false，mask／cue opacity 仍為 0），需先讀取瀏覽器實際 innerWidth、innerHeight 與卡片 rect，再補做一次座標校正的 hover 驗證。


Hover 最終驗證：以瀏覽器實際視窗尺寸校正游標後，移入選取卡片中心，畫面清楚顯示略微壓暗的卡片遮罩與中央 `ExternalLink` icon；選取卡片下方簡介仍完全獨立，不與圖片重疊。此互動已符合目前作品集骨架需求。


本輪首屏檢查：桌面與 390px 手機截圖均已反映完整新版自介；頭像現在位於 Nana／0nn・Taipei・生日・INFJ 灰色資訊列正上方，間距明顯縮短。首頁三張卡已整體左移，390px 寬度下未超出可視範圍。桌面首頁卡片仍保留右側視覺平衡；手機版卡片與自介均未裁切。


最新桌面／手機截圖：作品集卡片已再往左移；390px 手機首屏中三張首頁卡完整落在畫面內，未出現水平溢出。卡片比例已統一為 4:5，首頁預覽與展開卡片皆維持直式比例。頭像與灰色資訊列緊鄰排列；長版自介在桌面與手機均可讀，段落換行自然。


平台徽章說明：搜尋 `client/src` 與 `client/index.html` 未找到 `Made with Manus`、平台 badge 或可控制的浮動按鈕標記；`__manus__` 資產僅為 debug collector 與版本 metadata。因此專案無法替平台注入的部署徽章設定 top-center 位置，本輪已將 `.quiet-resume` 的上方 padding 增加，預留平台元素安全區，避免頁面內容被遮擋。

卡片規格：首頁預覽卡使用 4:5；展開卡同樣使用 4:5。CSS 桌面展開卡寬度為 `clamp(10.5rem, 22vw, 18.5rem)`，手機為 `min(10.5rem, 38vw)`；實際尺寸會隨 viewport 寬度縮放。


DOM 量測：meta description 已為「林家淇 Nana／0nn，全端工程師履歷。」；桌面預覽中頭像底部到灰色資訊列頂部約 7px。首頁卡片使用 CSS `aspect-ratio: 4 / 5`，但因三張卡各自旋轉，`getBoundingClientRect()` 的外接框比例約 0.82–0.86，準備圖片時仍應以未旋轉的設計比例 4:5 製作。


最新展開層量測：桌面選取卡 CSS 尺寸約 281.6 × 352.0px，比例 `4 / 5`；含 scale 變換後可視外接框約 304 × 380px。圖片底部到簡介約 16px，簡介計算文字色為 `rgb(64, 60, 66)`、字重 600。展開時 html/body overflow 均為 hidden，其他四張卡 pointer-events 均為 none，符合不可穿透與不可滾動需求。


本輪導覽列／對齊檢查：桌面與 390px 手機截圖均確認 capsule 導覽列已位於頁面上方，內容未被遮擋，且新版自介段落分行完整保留。頭貼與灰色個人資訊列的距離符合需求；但以旋轉後的右側首頁卡片實際可視底部判斷，頭貼底部仍比卡片底部高約 1rem，需將 intro copy 微幅下移後再做最後驗證。


最終首屏驗證：桌面截圖中上方 capsule 導覽列位於安全留白內，頭貼底部約落在右側作品卡組可視底部附近（約數 px 差距）；手機截圖中同樣未遮擋自介，三張卡未溢出。新版自介的四段分行與段落透氣完整保留。


2:3 與上緣柔焦驗證：桌面與 390px 手機截圖均確認導覽列位於上方正常位置；頁面上緣出現與下緣一致的柔和漸層／模糊邊界，未遮擋導覽或首屏內容。首頁三張預覽卡已變為 2:3 直式比例，手機版仍完整落在可視範圍內。


2:3 展開畫面初步驗證：最新預覽可成功開啟五張作品卡，卡片高度明顯增加並維持直式排列；上方導覽列仍在頁面頂部，展開層底部保留關閉控制。下一步以 DOM 量測確認卡片未超出展開 stage、比例與簡介距離。


2:3 最終首屏截圖：桌面與 390px 手機版均確認 capsule 導覽列維持正常上方位置；上緣柔焦邊界自然且未壓住導覽；首頁作品卡已呈現 2:3 直式比例，手機版未水平溢出。首屏自介與頭貼仍可正常閱讀。


最新 2:3 展開層畫面：桌面預覽中五張卡片已重新排列為較清楚的上下兩排，避免 2:3 高度增加後底部卡片超出 stage；上方導覽列仍固定於頂部，展開層關閉控制可見。接續進行 DOM 量測確認邊界與比例。


最終 2:3 展開層量測：五張作品卡的計算樣式皆為 `aspect-ratio: 2 / 3`，寬度約 281.6px、高度約 422.4px（當前桌面 viewport）；最下方卡片調整後底部約 724–730px，位於 stage 底部 736px 之內。旋轉後外接框會自然超出 stage 左右少量像素，但未被裁切；html/body 仍為 `overflow: hidden`。


GitHub Pages 前置檢查（2026-08-28）：`https://github.com/0nn7a/resume-by-manus` 可公開存取，頁面標示為 Public，但目前顯示 `This repository is empty`，尚無檔案、分支或 Actions workflow。因此目前還無法直接驗證 Pages；需先將本專案內容推送到 repository，並再確認 Actions 權限與 Pages 的 Build and deployment source。


本輪最終驗證：桌面與 390px 手機首屏均確認上緣柔焦比前一版更深、延伸範圍更長，但導覽列與文字仍清楚可見；自介四段以獨立段落呈現，段落間空行保留。正式建置 `pnpm run build` 成功。GitHub repository 已確認為公開但空白，專案本地目前使用 WebDev origin、分支為 `main`，尚未推送到使用者 repository。


自介明確換行驗證：App.vue 已在四個 `<p>` 之間加入三個 `br.intro__paragraph-break`，CSS 以固定高度提供段落間隔（桌面 1.18rem、手機 1.08rem）。桌面與 390px 手機截圖均確認「嗨！我是林家淇。」與後續三段之間都有清楚空行，且內容沒有溢出。


GitHub 權限更新檢查（2026-08-28）：GitHub CLI 已能讀取 `0nn7a/resume-by-manus`，確認 repository 存在、目前為 Private，預設分支為 `main`，表示目前整合帳號具備至少讀取權限。瀏覽器未登入狀態開啟同一網址會顯示 Page not found，不能用來判斷 repository 不存在；若要執行首次 push，仍需確認目前整合帳號具備 contents write 權限。尚未進行 push 或發布。


Experience 內容驗證：已以使用者指定版本取代前端開發、系統開發與維運、自主進修三個模組，移除原本未列出的 UI／UX 設計模組。桌面與 390px 手機完整頁面截圖確認條目換行自然；中文職稱與模組標題字重已由 800 調整為 700，內文維持 500，層級仍清楚但視覺較不厚重。正式建置成功。


GitHub 權限詳情：`gh api repos/0nn7a/resume-by-manus` 回傳 repository 為 private、default branch 為 `main`，目前整合帳號 permissions 為 `admin: true`、`maintain: true`、`push: true`，因此具備首次推送與設定 Pages 所需的 repository 寫入權限。本輪尚未執行 push。


GitHub 首次推送與 Pages 檢查（2026-08-28）：本地 commit `7eb502b` 已成功推送至 `https://github.com/0nn7a/resume-by-manus.git` 的 `main` 分支。Actions workflow `Deploy resume to GitHub Pages` 已被觸發；Build 與 Install dependencies 成功，但在 `actions/configure-pages@v5` 失敗，GitHub 回傳 `Get Pages site failed`，表示 repository 尚未啟用並設定為使用 GitHub Actions 建置 Pages。讀取 Pages API 亦回傳 403 `Resource not accessible by integration`，目前無法由此整合直接啟用 Pages。尚未產生實際 Pages 部署網址。


GitHub Pages 成功驗證（2026-08-28）：repository 現已為 Public，Pages API 回傳 `build_type: workflow`、`source.branch: main`，實際網址為 `https://0nn7a.github.io/resume-by-manus/`。最新 workflow `Deploy resume to GitHub Pages`（run 33143222173，commit `abc85a5`）的 build 與 deploy jobs 均成功。瀏覽器開啟實際網址可正常載入 `Nana｜Resume`，並確認自介、Experience 指定條目、半形斜線格式與導覽連結已反映。
