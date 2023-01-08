import type { Usecase } from '@/Application/types';
import type { CardRepository } from '@/Repositories/CardRepository';
import { cardImageAsset } from '@/Domain/Card';

export class AppStartedUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
    ) {}

    async execute(): Promise<void> {
        this.cardRepository.setCardImageAsset(cardImageAsset);
    }
}
