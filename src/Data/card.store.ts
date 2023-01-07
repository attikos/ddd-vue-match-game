import { defineStore } from 'pinia';
import type { CardState, ShowedCards } from '@/Domain/Card';

export const useCardStore = defineStore('card', {
    state: (): CardState => ({
        cardImagesAsset : [],
        currentCards : [],
        showedCards: {},
        pairCardAttemps: [],
    }),

    actions: {
        setCurrentCards(urls: string[]) {
            this.$patch({currentCards : urls});
        },
        setCardImagesAsset(urls: string[]) {
            this.$patch({cardImagesAsset : urls});
        },
        setShowedCards(cards: ShowedCards) {
            this.$patch(cards);
        }
    }
});
