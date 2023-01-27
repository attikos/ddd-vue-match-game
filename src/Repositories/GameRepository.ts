import type { GameStatus } from 'src/Domain/Game';

export class GameRepository {
    private _store: any;

    constructor() {
        this._store = {}
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
