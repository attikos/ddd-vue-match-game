import { useCardStore } from '@/Data/card.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';

export interface CardPresenter {
    cardImageAsset: Ref<string[]>
    currentCards: Ref<string[]>
}

export function CardPresenter(): CardPresenter {
    const { cardImageAsset, currentCards } = storeToRefs(useCardStore());

    return {
        cardImageAsset,
        currentCards,
    };
}
