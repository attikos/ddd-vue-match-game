import { defineStore } from 'pinia';
import type { CardState, PairCardAttempList, ShowedCards } from '@/Domain/Card';

export const useCardStore = defineStore('card', {
    state: (): CardState => ({
        cardImageAsset : [],
        currentCards : [],
        showedCards: {},
        pairCardAttempList: [],
    }),

    actions: {
        setCurrentCards(urls: string[]) {
            this.currentCards = urls;
        },
        setCardImageAsset(urls: string[]) {
            this.cardImageAsset = urls;
        },
        setShowedCards(cards: ShowedCards) {
            this.showedCards = cards;
        },
        addShowedCards(cards: ShowedCards) {
            this.$patch({ showedCards : cards });
        },
        openAllShowedCards() {
            const result: ShowedCards = {};

            this.currentCards.forEach((_, index) => {
                result[index] = true;
            });

            console.log('result', result);

            this.showedCards = result;
        },
        resetShowedCards() {
            console.trace()
            this.showedCards = {};
        },
        setPairCardAttempList(attemps: PairCardAttempList) {
            this.pairCardAttempList = attemps;
        },
        resetPairCardAttempList() {
            this.pairCardAttempList = [];
        },
    }
});
