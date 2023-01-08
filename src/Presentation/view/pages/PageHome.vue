<script setup lang="ts">
import { checkIsShowedCard as _checkIsShowedCard } from '@/Domain/Card';
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import { mapUsecase } from '@/Presentation/usecaseMap';
import AppHeader from '@/Presentation/view/components/AppHeader.vue';
import GameCard from '@/Presentation/view/components/GameCard.vue';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed } from 'vue';

const cardPresenter = CardPresenter();
const showedCards = ShowedCardsPresenter();
const currentCards = cardPresenter.currentCards;
const cardImages = computed(() => currentCards.value.map(img => getImageUrl(img)));

const openCardUsecase = mapUsecase('OpenCardUsecase');

const checkIsShowedCard = (index: number): boolean => {
    return _checkIsShowedCard(showedCards.value, index);
}

function openCardHandler(index: number) {
    openCardUsecase(index);
}
</script>

<template>
    <div>
        <AppHeader></AppHeader>

        <div class="game-content">
            <GameCard
                v-for="(image, index) of cardImages"
                @open-card="openCardHandler(index)"
                :isFlipped="checkIsShowedCard(index)"
                :isShowed="checkIsShowedCard(index)"
                :image="image"
                :key="index"
            ></GameCard>
        </div>
    </div>
</template>

<style lang="scss">
.game-content {
    display: flex;
    max-width: 506px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 24px auto;

    @media screen and (max-width: 576px) {
        & {
            max-width: 254px
        }
    }
}
</style>
