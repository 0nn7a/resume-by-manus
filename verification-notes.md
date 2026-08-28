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
