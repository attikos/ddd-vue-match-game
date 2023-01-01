// import store from '@sw/Data/store';
import { useCardStore } from '@/Data/card.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';

export interface CardPresenter {
    cardImageUrls: Ref<string[]>
    currentCards: Ref<string[]>
}

export function CardPresenter(): CardPresenter {
    const { cardImageUrls, currentCards } = storeToRefs(useCardStore());

    return {
        cardImageUrls,
        currentCards
    };
}
