export const cardImageAsset = [
    'card/01.jpg',
    'card/02.jpg',
    'card/03.jpg',
    'card/04.jpg',
    'card/05.jpg',
    'card/06.jpg',
    'card/07.jpg',
    'card/08.jpg',
];

export interface PairCardAttemp {
    index: number
    id: string
}

export type PairCardAttempList = [PairCardAttemp?, PairCardAttemp?];

export interface ShowedCards {
    [key: number]: boolean
}

export type CurrentCard = string;
export type CardImage = string;
export type CardImageAsset = CardImage[];

export interface CardState {
    cardImageAsset: CardImageAsset
    currentCards: CurrentCard[]
    showedCards: ShowedCards
    pairCardAttempList: PairCardAttempList
}

export function checkPairCards(pairCardAttemp: PairCardAttempList): boolean {
    return pairCardAttemp[0]?.id === pairCardAttemp[1]?.id;
}

export function removeAttempsCards(
    showedCardList: ShowedCards,
    pairCards: PairCardAttempList
): ShowedCards {
    const result = { ...showedCardList };

    pairCards.forEach(card => {
        if (card && typeof card.index === 'number') {
            delete result[card.index];
        }
    });

    return result;
}

export function checkIsShowedCard (showedCards: ShowedCards, index: number): boolean {
    return !!showedCards[index];
}

export function addCardAttemps(
    pairCardAttempList: PairCardAttempList,
    currentCards: CurrentCard[],
    index: number
): PairCardAttempList {
    const result : PairCardAttempList = [];
    pairCardAttempList.forEach(val => result.push(Object.assign({}, val)));

    if (result.length >= 2) {
        return result;
    }

    result.push({
        index,
        id: currentCards[index]
    });

    return result;
}

export function checkIsFinish(showedCardList: ShowedCards, currentCards: CurrentCard[]): boolean {
    return Object.keys(showedCardList).length === currentCards.length;
}

export function getRandomGameCards(cardImageAsset: CardImageAsset) {
    return [...cardImageAsset, ...cardImageAsset].sort(() => (Math.random() > 0.5) ? 1 : -1);
}
