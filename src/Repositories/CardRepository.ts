import { useCardStore } from '@/Data/card.store';
import type { ShowedCards } from '@/Domain/Card';

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

    setCardImagesAsset(cards: string[]) {
        this.store.setCardImagesAsset(cards);
    }

    setShowedCards(cards: ShowedCards) {
        this.store.setShowedCards(cards);
    }

    resetShowedCards() {
        this.store.setShowedCards({});
    }
}
