<script setup lang="ts">
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { startGameUsecaseMap } from '@/Presentation/usecaseMap';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed, ref, onMounted } from 'vue';

const cardPresenter = CardPresenter();
const cardImages = computed(() => cardPresenter.currentCards.value.map(img => getImageUrl(img)));

const showedCards = ref<Record<number, boolean>>({});

const START_GAME_DELAY_ANIMATION = 500;

const startHandler = () => {
    showedCards.value = {};

    setTimeout(() => startGameUsecaseMap(), START_GAME_DELAY_ANIMATION)
}

const checkShowCard = (index: number): boolean => {
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
            <div
                v-for="(image, index) of cardImages"
                class="card-parent"
                :key="index"
            >
                <div
                    class="card-wrapper"
                    :class="{ 'card-wrapper--flipped' : checkShowCard(index) }"
                    @click="openCard(index)"
                >
                    <div class="card card__back"></div>

                    <img
                        v-if="checkShowCard(index)"
                        :src="image"
                        alt=""
                        class="card card__front"
                    />
                </div>
            </div>
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

.card-parent {
    perspective: 500px;
}

.card-wrapper {
    position: relative;
    display: flex;
    margin: 6px;
    cursor: pointer;
    height: 70px;
    width: 114px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    flex: 1;
    box-sizing: border-box;

    &--flipped {
        transform: rotateY(180deg);
    }
}

.card {
    border-radius: 10px;
    height: 70px;
    width: 114px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &__front {
        background: #fff;
        transform: rotateY(180deg);
    }

    &__back {
        background-color:#05d0d0;
        background-image:
        repeating-linear-gradient(
            45deg,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.8) 10px,
            transparent 0px,
            transparent 20px
        ),
        repeating-linear-gradient(
            -45deg,
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.5) 10px,
            transparent 0px,
            transparent 20px
        );
    }
}
</style>
