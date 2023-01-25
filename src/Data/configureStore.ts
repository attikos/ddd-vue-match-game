import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '@/Data/cardsSlice';
import gameSlice from '@/Data/gameSlice';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        game: gameSlice
    },
});
