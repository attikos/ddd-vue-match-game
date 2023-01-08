import { useCardStore } from '@/Data/card.store';
import type { PairCardAttempList, ShowedCards } from '@/Domain/Card';

export class CardRepository {
    private _store: ReturnType<typeof useCardStore>;

    constructor() {
        this._store = useCardStore();
    }

    get store() {
        return this._store;
    }

    setCurrentCards(cards: string[]) {
        this.store.setCurrentCards(cards);
    }

    setCardImageAsset(cards: string[]) {
        this.store.setCardImageAsset(cards);
    }

    setShowedCards(cards: ShowedCards) {
        this.store.setShowedCards(cards);
    }

    addShowedCards(cards: ShowedCards) {
        this.store.addShowedCards(cards);
    }

    openAllShowedCards() {
        this.store.openAllShowedCards();
    }

    resetShowedCards() {
        this.store.resetShowedCards();
    }

    setPairCardAttempList(attemps: PairCardAttempList) {
        this.store.setPairCardAttempList(attemps);
    }

    resetPairCardAttempList() {
        this.store.resetPairCardAttempList();
    }
}
