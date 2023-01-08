import type { Usecase } from '@/Application/types';
import { getRandomGameCards } from '@/Domain/Card';
import { GameStatus } from '@/Domain/Game';
import type { CardRepository } from '@/Repositories/CardRepository';
import type { GameRepository } from '@/Repositories/GameRepository';

export class StartGameUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private gameRepository: GameRepository
    ) {}

    async execute(): Promise<void> {
        const START_GAME_ANIMATION_DELAY = 300;
        const cardImageAsset = this.cardRepository.store.cardImageAsset;

        this.cardRepository.resetShowedCards();
        this.cardRepository.resetPairCardAttempList();
        this.gameRepository.setGameStatus(GameStatus.inProgress);

        setTimeout(() => {
            const randomCards = getRandomGameCards(cardImageAsset);
            this.cardRepository.setCurrentCards(randomCards);
        }, START_GAME_ANIMATION_DELAY)
    }
}
