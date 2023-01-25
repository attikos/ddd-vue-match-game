export interface CardPresenter {
    cardImageAsset: string[]
    currentCards: string[]
}

export function CardPresenter(): CardPresenter {
    return {
        cardImageAsset: [],
        currentCards: [],
    };
}
