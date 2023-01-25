import { useCardStore } from '@/Data/card.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import type { ShowedCards } from '@/Domain/Card';

export function ShowedCardsPresenter(): Ref<ShowedCards> {
    const { showedCards } = storeToRefs(useCardStore());

    return showedCards;
}
