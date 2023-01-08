// export type GameStatus = 'inProgress' | 'stopped';

export enum GameStatus {
    inProgress,
    stopped,
}

export interface GameState {
    gameStatus: GameStatus
}
