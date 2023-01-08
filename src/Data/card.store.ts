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
        resetShowedCards() {
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
