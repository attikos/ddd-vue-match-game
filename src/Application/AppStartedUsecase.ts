import type { Usecase } from '@/Application/types';
import type { CardRepository } from '@/Repositories/CardRepository';

export class AppStartedUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private cardImagesAsset: string[],
    ) {}

    async execute(): Promise<void> {
        this.cardRepository.setCardImagesAsset(this.cardImagesAsset);
        this.cardRepository.resetShowedCards();

        // const randomCards = [...this.cardImagesAsset, ...this.cardImagesAsset].sort(() => (Math.random() > 0.5) ? 1 : -1);
        // this.cardRepository.setCurrentCards(randomCards)
    }
}
