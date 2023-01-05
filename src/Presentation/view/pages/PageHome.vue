<script setup lang="ts">
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { mapUsecase } from '@/Presentation/usecaseMap';
import GameCard from '@/Presentation/view/components/GameCard.vue';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed, ref, onMounted } from 'vue';

const cardPresenter = CardPresenter();
const cardImages = computed(() => cardPresenter.currentCards.value.map(img => getImageUrl(img)));

const showedCards = ref<Record<number, boolean>>({});

const START_GAME_ANIMATION_DELAY = 500;

const startGameUsecase = mapUsecase('StartGameUsecase');

const startHandler = () => {
    showedCards.value = {};

    setTimeout(() => startGameUsecase(), START_GAME_ANIMATION_DELAY)
}

const checkIsShowedCard = (index: number): boolean => {
    return !!showedCards.value[index];
}

const openCard = (index: number): void => {
    showedCards.value = { ...showedCards.value, [index] : true };
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
