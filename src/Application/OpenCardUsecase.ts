import type { Usecase } from '@/Application/types';
import { addCardAttemps, checkPairCards, checkIsFinish, removeAttempsCards, checkIsShowedCard } from '@/Domain/Card';
import type { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import type { PairCardAttempListPresenter } from '@/Presentation/presenter/PairCardAttempListPresenter';
import type { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import type { CardRepository } from '@/Repositories/CardRepository';

export class OpenCardUsecase implements Usecase {
    constructor(
        private cardRepository: CardRepository,
        private index: number,
        private pairCardAttempListRef: ReturnType<typeof PairCardAttempListPresenter>,
        private showedCardsRef: ReturnType<typeof ShowedCardsPresenter>,
        private cardPresenter: ReturnType<typeof CardPresenter>
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
            setTimeout(() => {
                if (!checkPairCards(this.pairCardAttempListRef.value)) {
                    const newShowedCards = removeAttempsCards(this.showedCardsRef.value, this.pairCardAttempListRef.value);

                    this.cardRepository.setShowedCards(newShowedCards);
                }
                else {
                    const isFinishedGame = checkIsFinish(
                        this.showedCardsRef.value,
                        this.cardPresenter.currentCards.value
                    );

                    if (isFinishedGame) {
                        alert('You won!');
                    }
                }

                resetPairAttemps();
            }, DELAY_TO_CLOSE);
        }
    }
}
