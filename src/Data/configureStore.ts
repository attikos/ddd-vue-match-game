import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from 'src/Data/cardsSlice';
import gameSlice from 'src/Data/gameSlice';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        game: gameSlice
    },
});
