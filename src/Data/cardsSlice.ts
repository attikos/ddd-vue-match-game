import type { CardState, PairCardAttempList, ShowedCards } from '@/Domain/Card';
import { createSlice } from '@reduxjs/toolkit';

const getInitialState = (): CardState => ({
    cardImageAsset : [],
    currentCards : [],
    showedCards: {},
    pairCardAttempList: [],
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState: getInitialState(),
    reducers: {
        setCurrentCards(state, action: { payload: string[] }) {
            state.currentCards = action.payload;
        },
        setCardImageAsset(state, action: { payload: string[] }) {
            state.cardImageAsset = action.payload;
        },
        setShowedCards(state, action: { payload: ShowedCards }) {
            state.showedCards = action.payload;
        },
        addShowedCards(state, action: { payload: ShowedCards }) {
            state.showedCards = { ...state.showedCards, ...action.payload };
        },
        openAllShowedCards(state) {
            const result: ShowedCards = {};

            state.currentCards.forEach((_, index) => {
                result[index] = true;
            });

            state.showedCards = result;
        },
        resetShowedCards(state) {
            state.showedCards = {};
        },
        setPairCardAttempList(state, action: { payload: PairCardAttempList }) {
            state.pairCardAttempList = action.payload;
        },
        resetPairCardAttempList(state) {
            state.pairCardAttempList = [];
        },
    },
});

export const {
    setCurrentCards,
    setCardImageAsset,
    setShowedCards,
    addShowedCards,
    openAllShowedCards,
    resetShowedCards,
    setPairCardAttempList,
    resetPairCardAttempList
} = cardsSlice.actions;

export default cardsSlice.reducer;
