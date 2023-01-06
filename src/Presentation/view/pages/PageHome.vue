<script setup lang="ts">
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { mapUsecase } from '@/Presentation/usecaseMap';
import GameCard from '@/Presentation/view/components/GameCard.vue';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed, ref, onMounted } from 'vue';

interface ShowedCards {
    [key: number]: boolean
}

interface PairCardAttemp {
    index: number
    id: string
}

const showedCards = ref<ShowedCards>({});
const cardPresenter = CardPresenter();
const currentCards = cardPresenter.currentCards;
const cardImages = computed(() => currentCards.value.map(img => getImageUrl(img)));

const START_GAME_ANIMATION_DELAY = 500;
const DELAY_TO_CLOSE = 1000;

const startGameUsecase = mapUsecase('StartGameUsecase');

const startHandler = () => {
    showedCards.value = {};

    setTimeout(() => startGameUsecase(), START_GAME_ANIMATION_DELAY)
}

const checkIsShowedCard = (index: number): boolean => {
    return !!showedCards.value[index];
}

function checkPairCards(pairCardAttemp: [PairCardAttemp?, PairCardAttemp?]): boolean {
    return pairCardAttemp[0]?.id === pairCardAttemp[1]?.id;
}

const pairCardAttemp = ref<[PairCardAttemp?, PairCardAttemp?]>([]);

function closeAttempsCards(pairCards: typeof pairCardAttemp, showedCardList: typeof showedCards) {
    pairCards.value.forEach(card => {
        if (card) {
            delete showedCardList.value[card.index];
        }
    })
}

function resetPairAttemps(attemps: typeof pairCardAttemp) {
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

    if (pairCardAttemp.value.length >= 2) {
        return;
    }

    pairCardAttemp.value.push({
        index,
        id: currentCards.value[index]
    });

    showedCards.value = { ...showedCards.value, [index] : true };

    if (pairCardAttemp.value.length === 2) {
        setTimeout(() => {
            if (!checkPairCards(pairCardAttemp.value)) {
                closeAttempsCards(pairCardAttemp, showedCards);
            }
            else {
                checkIsFinish(showedCards);
            }

            resetPairAttemps(pairCardAttemp);
        }, DELAY_TO_CLOSE);
    }
}

onMounted(() => {
    startHandler();
});
</script>

<template>
    <div>
        <header>
            <h2>Match Match Game</h2>

            <a href="/start" @click.prevent="startHandler">Start</a>
        </header>

        <div class="wrapper">
            <!-- <div
                v-for="(image, index) of cardImages"
                class="card-parent"
                :key="index"
            >
                <div
                    class="card-wrapper"
                    :class="{ 'card-wrapper--flipped' : checkIsShowedCard(index) }"
                    @click="openCard(index)"
                >
                    <div class="card card__back"></div>

                    <img
                        v-if="checkIsShowedCard(index)"
                        :src="image"
                        alt=""
                        class="card card__front"
                    />
                </div>
            </div> -->

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

<style scoped lang="scss">
.wrapper {
    display: flex;
    max-width: 506px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto;
}
</style>
