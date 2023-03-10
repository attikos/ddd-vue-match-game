<script setup lang="ts">
import { checkIsShowedCard as _checkIsShowedCard } from '@/Domain/Card';
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import { mapUsecase } from '@/Presentation/usecaseMap';
import AppHeader from '@/Presentation/view/components/AppHeader.vue';
import AppModal from '@/Presentation/view/components/AppModal.vue';
import GameCard from '@/Presentation/view/components/GameCard.vue';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed, ref } from 'vue';

const cardPresenter = CardPresenter();
const showedCards = ShowedCardsPresenter();
const currentCards = cardPresenter.currentCards;
const cardImages = computed(() => currentCards.value.map(img => getImageUrl(img)));

const openCardUsecase = mapUsecase('OpenCardUsecase');
const startGameUsecase = mapUsecase('StartGameUsecase');

const checkIsShowedCard = (index: number): boolean => {
    return _checkIsShowedCard(showedCards.value, index);
}

const isShowModal = ref(false);

function showWonNotification() {
    isShowModal.value = true;
}

function openCardHandler(index: number) {
    openCardUsecase(index, showWonNotification);
}

function closeModalHandler() {
    isShowModal.value = false;
    startGameUsecase();
}
</script>

<template>
    <div class="page-home">
        <AppHeader></AppHeader>

        <transition name="fade" mode="out-in">
            <div class="game-content" v-show="cardImages.length">
                <GameCard
                    v-for="(image, index) of cardImages"
                    @open-card="openCardHandler(index)"
                    :isFlipped="checkIsShowedCard(index)"
                    :isShowed="checkIsShowedCard(index)"
                    :image="image"
                    :key="index + image"
                ></GameCard>
            </div>
        </transition>

        <AppModal title="You won!" :isShow="isShowModal" @closed="closeModalHandler"></AppModal>

        <div class="footer">
            <a href="https://github.com/attikos/ddd-vue-match-game" class="footer__link" target="_blank">
                <img src="../assets/github-mark.png" alt="Github" class="footer__github">
                <span class="footer__link-text">GitHub @attikos</span>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.page-home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.game-content {
    display: flex;
    max-width: 650px;
    min-height: 388px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 24px auto;

    @media screen and (max-width: 576px) {
        max-width: 100%;
    }
}

.footer {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 20px;

    &__link {
        display: flex;
    }

    &__github {
        height: 18px;
        width: 18px;
        margin-right: 6px;
        display: inline-block;
    }
}
</style>
