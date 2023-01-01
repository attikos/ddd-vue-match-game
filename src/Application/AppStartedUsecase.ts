import type { Usecase } from '@/Application/types';
import type { CardRepository } from '@/Repositories/CardRepository';

export class AppStartedUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private cardImagesAsset: string[],
    ) {}

    async execute(): Promise<void> {
        console.log('app started');

        this.cardRepository.setCardImageUrls(this.cardImagesAsset);

        const randomCards = [...this.cardImagesAsset].sort(() => (Math.random() > 0.5) ? 1 : -1);
        this.cardRepository.setCurrentCards(randomCards)
    }
}
