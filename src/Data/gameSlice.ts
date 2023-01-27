import { GameState, GameStatus } from 'src/Domain/Game';
import { createSlice } from '@reduxjs/toolkit';

const getInitialState = (): GameState => ({
    gameStatus : GameStatus.inProgress,
})

const gameSlice = createSlice({
    name: 'game',
    initialState: getInitialState(),
    reducers: {
        setGameStatus(state, action: { payload: GameStatus}) {
            state.gameStatus = action.payload;
        },
        resetGameStatus(state) {
            state.gameStatus = GameStatus.stopped;
        },
    },
});

export const {
    resetGameStatus,
    setGameStatus,
} = gameSlice.actions;

export default gameSlice.reducer;
