import { defineStore } from 'pinia';
import type { CardState } from '@/Domain/Card';

export const useCardStore = defineStore('card', {
    state: (): CardState => ({
        cardImageUrls : [],
        currentCards : [],
    }),

    actions: {
        setCurrentCards(urls: string[]) {
            this.currentCards = urls;
        },
        setCardImageUrls(urls: string[]) {
            this.cardImageUrls = urls;
        }
    }
});
