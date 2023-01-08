import type { Usecase } from '@/Application/types';
import { addCardAttemps, checkPairCards, checkIsFinish, removeAttempsCards, checkIsShowedCard } from '@/Domain/Card';
import { GameStatus } from '@/Domain/Game';
import type { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import type { PairCardAttempListPresenter } from '@/Presentation/presenter/PairCardAttempListPresenter';
import type { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import type { CardRepository } from '@/Repositories/CardRepository';
import type { GamePresenter } from '../Presentation/presenter/GamePresenter';

export class OpenCardUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private index: number,
        private pairCardAttempListRef: ReturnType<typeof PairCardAttempListPresenter>,
        private showedCardsRef: ReturnType<typeof ShowedCardsPresenter>,
        private cardPresenter: ReturnType<typeof CardPresenter>,
        private gameStatusRef: ReturnType<typeof GamePresenter>,
        private showWonNotification: () => void,
    ) {}

    async execute(): Promise<void> {
        const DELAY_TO_CLOSE = 1000;
        const resetPairAttemps = () => this.cardRepository.setPairCardAttempList([]);

        if (checkIsShowedCard(this.showedCardsRef.value, this.index)) {
            return;
        }

        if (this.pairCardAttempListRef.value.length >= 2) {
            return;
        }

        const cardAttemps = addCardAttemps(
            this.pairCardAttempListRef.value,
            this.cardPresenter.currentCards.value,
            this.index
        );

        this.cardRepository.setPairCardAttempList(cardAttemps);
        this.cardRepository.addShowedCards({ [this.index] : true });

        if (this.pairCardAttempListRef.value.length === 2) {
            // let newShowedCards = this.showedCardsRef.value;

            // if (!checkPairCards(this.pairCardAttempListRef.value)) {
            //     newShowedCards = removeAttempsCards(
            //         this.showedCardsRef.value,
            //         this.pairCardAttempListRef.value
            //     );

            //     resetPairAttemps();

            //     setTimeout(() => {
            //         if (this.gameStatusRef.value === GameStatus.inProgress) {
            //             this.cardRepository.setShowedCards(newShowedCards);
            //         }
            //     }, DELAY_TO_CLOSE);
            // }
            // else {
            //     const isFinishedGame = checkIsFinish(
            //         newShowedCards,
            //         this.cardPresenter.currentCards.value
            //     );

            //     if (isFinishedGame) {
            //         alert('You won!');
            //     }
            // }

            let newShowedCards = this.showedCardsRef.value;

            if (!checkPairCards(this.pairCardAttempListRef.value)) {
                newShowedCards = removeAttempsCards(this.showedCardsRef.value, this.pairCardAttempListRef.value);

                // this.cardRepository.setShowedCards(newShowedCards);
            }
            else {
                const isFinishedGame = checkIsFinish(
                    this.showedCardsRef.value,
                    this.cardPresenter.currentCards.value
                );

                if (isFinishedGame) {
                    this.cardRepository.setShowedCards(newShowedCards);
                    this.showWonNotification();
                }
            }

            setTimeout(() => {
                if (this.gameStatusRef.value === GameStatus.stopped) {
                    return;
                }

                this.cardRepository.setShowedCards(newShowedCards);

                // if (!checkPairCards(this.pairCardAttempListRef.value)) {
                //     const newShowedCards = removeAttempsCards(this.showedCardsRef.value, this.pairCardAttempListRef.value);

                //     this.cardRepository.setShowedCards(newShowedCards);
                // }
                // else {
                //     const isFinishedGame = checkIsFinish(
                //         this.showedCardsRef.value,
                //         this.cardPresenter.currentCards.value
                //     );

                //     if (isFinishedGame) {
                //         alert('You won!');
                //     }
                // }

                resetPairAttemps();
            }, DELAY_TO_CLOSE);
        }
    }
}