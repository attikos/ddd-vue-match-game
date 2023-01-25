export enum GameStatus {
    inProgress,
    stopped,
}

export interface GameState {
    gameStatus: GameStatus
}
