import type { Usecase } from '@/Application/types';
import { getRandomGameCards } from '@/Domain/Card';
import type { CardRepository } from '@/Repositories/CardRepository';

export class StartGameUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository
    ) {}

    async execute(): Promise<void> {
        const cardImageAsset = this.cardRepository.store.cardImageAsset;

        this.cardRepository.resetShowedCards();
        this.cardRepository.resetPairCardAttempList();

        const randomCards = getRandomGameCards(cardImageAsset);
        this.cardRepository.setCurrentCards(randomCards);
    }
}
