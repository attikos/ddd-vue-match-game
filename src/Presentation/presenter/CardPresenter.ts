// import store from '@sw/Data/store';
import { useCardStore } from '@/Data/card.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';

export interface CardPresenter {
    cardImagesAsset: Ref<string[]>
    currentCards: Ref<string[]>
}

export function CardPresenter(): CardPresenter {
    const { cardImagesAsset, currentCards } = storeToRefs(useCardStore());

    return {
        cardImagesAsset,
        currentCards,
    };
}
