import { useCardStore } from '@/Data/card.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import type { PairCardAttempList } from '@/Domain/Card';

export function PairCardAttempListPresenter(): Ref<PairCardAttempList> {
    const { pairCardAttempList } = storeToRefs(useCardStore());

    return pairCardAttempList;
}
