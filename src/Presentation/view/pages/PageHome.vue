<script setup lang="ts">
import type { PairCardAttemps, ShowedCards } from '@/Domain/Card';
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import AppHeader from '@/Presentation/view/components/AppHeader.vue';
import GameCard from '@/Presentation/view/components/GameCard.vue';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed, ref, type Ref } from 'vue';

const showedCards = ref<ShowedCards>({});
const pairCardAttemps = ref<PairCardAttemps>([]);

const cardPresenter = CardPresenter();
const currentCards = cardPresenter.currentCards;
const cardImages = computed(() => currentCards.value.map(img => getImageUrl(img)));

const DELAY_TO_CLOSE = 1000;

const checkIsShowedCard = (index: number): boolean => {
    return !!showedCards.value[index];
}

function checkPairCards(pairCardAttemp: PairCardAttemps): boolean {
    return pairCardAttemp[0]?.id === pairCardAttemp[1]?.id;
}

function closeAttempsCards(pairCards: typeof pairCardAttemps, showedCardList: typeof showedCards) {
    pairCards.value.forEach(card => {
        if (card) {
            delete showedCardList.value[card.index];
        }
    })
}

function resetPairAttemps(attemps: Ref<PairCardAttemps>) {
    attemps.value = [];
}

function checkIsFinish(showedCardList: typeof showedCards) {
    if (Object.keys(showedCardList.value).length === currentCards.value.length) {
        alert('You win!')
    }
}

const openCard = (index: number): void => {
    if (checkIsShowedCard(index)) {
        console.log('opened');

        return;
    }

    if (pairCardAttemps.value.length >= 2) {
        return;
    }

    pairCardAttemps.value.push({
        index,
        id: currentCards.value[index]
    });

    showedCards.value = { ...showedCards.value, [index] : true };

    if (pairCardAttemps.value.length === 2) {
        setTimeout(() => {
            if (!checkPairCards(pairCardAttemps.value)) {
                closeAttempsCards(pairCardAttemps, showedCards);
            }
            else {
                checkIsFinish(showedCards);
            }

            resetPairAttemps(pairCardAttemps);
        }, DELAY_TO_CLOSE);
    }
}
</script>

<template>
    <div>
        <AppHeader></AppHeader>

        <div class="game-content">
            <GameCard
                v-for="(image, index) of cardImages"
                @open-card="openCard(index)"
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
}
</style>
