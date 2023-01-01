import type { Usecase } from '@/Application/types';
import type { CardRepository } from '@/Repositories/CardRepository';

export class StartGameUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository
    ) {}

    async execute(): Promise<void> {
        console.log('start game');

        const cardImagesAsset = this.cardRepository.store.cardImagesAsset;

        this.cardRepository.setCardImagesAsset(cardImagesAsset);

        const randomCards = [...cardImagesAsset, ...cardImagesAsset].sort(() => (Math.random() > 0.5) ? 1 : -1);
        this.cardRepository.setCurrentCards(randomCards);
    }
}
