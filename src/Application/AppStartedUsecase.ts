import type { Usecase } from 'src/Application/types';
import type { CardRepository } from 'src/Repositories/CardRepository';
import { cardImageAsset } from 'src/Domain/Card';

export class AppStartedUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
    ) {}

    async execute(): Promise<void> {
        this.cardRepository.setCardImageAsset(cardImageAsset);
    }
}
