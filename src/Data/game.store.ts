import { defineStore } from 'pinia';
import type { GameState } from '@/Domain/Game';
import { GameStatus } from '@/Domain/Game';

export const useGameStore = defineStore('game', {
    state: (): GameState => ({
        gameStatus : GameStatus.inProgress,
    }),

    actions: {
        setGameStatus(gameStatus: GameStatus) {
            this.gameStatus = gameStatus;
        },
        resetGameStatus() {
            this.gameStatus = GameStatus.stopped;
        },
    }
});
