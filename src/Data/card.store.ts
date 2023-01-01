import { defineStore } from 'pinia';
import type { CardState } from '@/Domain/Card';

export const useCardStore = defineStore('card', {
    state: (): CardState => ({
        cardImagesAsset : [],
        currentCards : [],
    }),

    actions: {
        setCurrentCards(urls: string[]) {
            this.$patch({currentCards : urls});
        },
        setCardImagesAsset(urls: string[]) {
            this.$patch({cardImagesAsset : urls});
        }
    }
});
