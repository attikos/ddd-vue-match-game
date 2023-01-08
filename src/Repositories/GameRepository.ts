import { useGameStore } from '@/Data/game.store';
import type { GameStatus } from '@/Domain/Game';

export class GameRepository {
    private _store: ReturnType<typeof useGameStore>;

    constructor() {
        this._store = useGameStore();
    }

    get store() {
        return this._store;
    }

    setGameStatus(gameStatus: GameStatus) {
        this.store.setGameStatus(gameStatus);
    }

    resetGameStatus() {
        this.store.resetGameStatus();
    }


}
