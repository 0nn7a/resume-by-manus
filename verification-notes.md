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
