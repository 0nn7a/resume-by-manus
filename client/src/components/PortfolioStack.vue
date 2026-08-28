<!-- Design system: three tactile preview cards unfold into one five-card collection, echoing a quiet personal photo index with soft motion and no fabricated project content. -->
<script setup lang="ts">
/** Portfolio interaction: pure image cards, quiet overlay, and card-only pointer cues. */
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { ExternalLink, X } from "lucide-vue-next";
import { portfolioCards } from "@/data/resume";

const isOpen = ref(false);
const selectedId = ref<string | null>(null);
const previewCards = computed(() => portfolioCards.slice(0, 3));
const selectedCard = computed(() => portfolioCards.find((card) => card.id === selectedId.value) ?? null);
let cardPressTimer: number | null = null;
let pressedCardId: string | null = null;
let suppressNextCardClick = false;
let cardPressStartedAt = 0;
const longPressThreshold = 450;

function clearCardPressTimer() {
  if (cardPressTimer !== null) {
    window.clearTimeout(cardPressTimer);
    cardPressTimer = null;
  }
}

function startCardPress(id: string) {
  clearCardPressTimer();
  pressedCardId = id;
  suppressNextCardClick = false;
  cardPressStartedAt = performance.now();
  cardPressTimer = window.setTimeout(() => {
    suppressNextCardClick = true;
  }, longPressThreshold);
}

function endCardPress(id: string) {
  if (pressedCardId !== id) return;
  const pressDuration = performance.now() - cardPressStartedAt;
  if (pressDuration >= longPressThreshold) suppressNextCardClick = true;
  clearCardPressTimer();
  pressedCardId = null;
}

function cancelCardPress() {
  clearCardPressTimer();
  pressedCardId = null;
  suppressNextCardClick = true;
}

function handleCardClick(id: string) {
  if (suppressNextCardClick) {
    suppressNextCardClick = false;
    return;
  }
  focusCard(id);
}

function handleCardContextMenu(event: MouseEvent) {
  event.preventDefault();
  cancelCardPress();
}

function openCollection() {
  selectedId.value = null;
  isOpen.value = true;
}

function closeCollection() {
  isOpen.value = false;
  selectedId.value = null;
}

function focusCard(id: string) {
  if (selectedId.value && selectedId.value !== id) return;

  const card = portfolioCards.find((item) => item.id === id);
  if (selectedId.value === id && card?.href) {
    window.open(card.href, "_blank", "noopener,noreferrer");
    return;
  }
  selectedId.value = id;
}

function clearSelection() {
  selectedId.value = null;
}

function handleBackdropClick() {
  if (selectedId.value) clearSelection();
}

function setPageScrollLock(locked: boolean) {
  document.documentElement.classList.toggle("collection-is-open", locked);
  document.body.classList.toggle("collection-is-open", locked);
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape" && isOpen.value) closeCollection();
}

watch(isOpen, (open) => setPageScrollLock(open));

onMounted(() => window.addEventListener("keydown", handleEscape));
onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
  clearCardPressTimer();
  setPageScrollLock(false);
});
</script>

<template>
  <section class="portfolio-stack" aria-label="作品集預覽">
    <button class="portfolio-stack__launch" type="button" aria-haspopup="dialog" aria-label="展開五張作品卡" @click="openCollection">
      <span
        v-for="(card, index) in previewCards"
        :key="card.id"
        class="portfolio-stack__card"
        :class="[`portfolio-stack__card--${index + 1}`, `tone--${card.tone}`]"
        aria-hidden="true"
      >
        <img v-if="card.image" :src="card.image" alt="" aria-hidden="true" />
      </span>
      <span class="portfolio-stack__hint">點開作品集</span>
    </button>
  </section>

  <Transition name="collection">
    <section v-if="isOpen" class="collection-overlay" role="dialog" aria-modal="true" aria-label="五張作品卡">
      <button class="collection-overlay__backdrop" type="button" aria-label="關閉目前作品" @click="handleBackdropClick"></button>
      <div class="collection-overlay__bar">
        <p>SELECTED WORKS <span>/ 05</span></p>
      </div>

      <div class="collection-stage" :class="{ 'is-focused': selectedCard }">
        <button class="collection-stage__backdrop" type="button" aria-label="關閉目前作品" @click="handleBackdropClick"></button>
        <button
          v-for="card in portfolioCards"
          :key="card.id"
          type="button"
          class="portfolio-card"
          :class="[`portfolio-card--${card.index}`, `tone--${card.tone}`, { 'is-selected': selectedId === card.id }]"
          :aria-pressed="selectedId === card.id"
          :aria-label="`查看 ${card.title}`"
          @pointerdown="startCardPress(card.id)"
          @pointerup="endCardPress(card.id)"
          @pointercancel="cancelCardPress"
          @pointerleave="cancelCardPress"
          @contextmenu="handleCardContextMenu"
          @click="handleCardClick(card.id)"
        >
          <span class="portfolio-card__visual">
            <img v-if="card.image" :src="card.image" :alt="card.title" draggable="false" />
            <span v-if="selectedId === card.id" class="portfolio-card__link-cue" aria-hidden="true">
              <ExternalLink class="portfolio-card__link-icon" :size="20" :stroke-width="1.8" />
              <span class="portfolio-card__summary">{{ card.summary }}</span>
            </span>
          </span>
        </button>

      </div>

      <button class="collection-overlay__close" type="button" aria-label="關閉作品集" @click="closeCollection"><X :size="16" :stroke-width="1.8" aria-hidden="true" /></button>
    </section>
  </Transition>
</template>
