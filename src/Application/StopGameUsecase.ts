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
        if (this.gameRepository.store.gameStatus === GameStatus.stopped) {
            return;
        }

        this.cardRepository.openAllShowedCards();
        this.cardRepository.resetPairCardAttempList();
        this.gameRepository.setGameStatus(GameStatus.stopped);
    }
}
