import { useCardStore } from '@/Data/card.store';

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

    setCardImageUrls(cards: string[]) {
        this.store.setCardImageUrls(cards);
    }
}
