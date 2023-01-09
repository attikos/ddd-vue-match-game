import type { Usecase } from '@/Application/types';
import { GameStatus } from '@/Domain/Game';
import type { CardRepository } from '@/Repositories/CardRepository';
import type { GameRepository } from '@/Repositories/GameRepository';

export class StopGameUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private gameRepository: GameRepository
    ) {}

    async execute(): Promise<void> {
        const STOP_GAME_ANIMATION_DELAY = 400;

        if (this.gameRepository.store.gameStatus === GameStatus.stopped) {
            return;
        }

        this.cardRepository.resetPairCardAttempList();
        this.cardRepository.openAllShowedCards();

        setTimeout(() => {
            this.gameRepository.setGameStatus(GameStatus.stopped);
        }, STOP_GAME_ANIMATION_DELAY)
    }
}
