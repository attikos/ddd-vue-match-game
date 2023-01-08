import { CardRepository } from '@/Repositories/CardRepository';
import { AppStartedUsecase } from '@/Application/AppStartedUsecase';
import { StartGameUsecase } from '@/Application/StartGameUsecase';
import { OpenCardUsecase } from '@/Application/OpenCardUsecase';
import { PairCardAttempListPresenter } from '@/Presentation/presenter/PairCardAttempListPresenter';
import { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';

const usecaseMapping = {
    AppStartedUsecase: (): Promise<void> => {
        const usecase = new AppStartedUsecase(
            new CardRepository(),
        );

        return usecase.execute();
    },

    StartGameUsecase: (): Promise<void> => {
        const usecase = new StartGameUsecase(
            new CardRepository()
        );

        return usecase.execute();
    },

    OpenCardUsecase: (index: number): Promise<void> => {
        const usecase = new OpenCardUsecase(
            new CardRepository(),
            index,
            PairCardAttempListPresenter(),
            ShowedCardsPresenter(),
            CardPresenter(),
        );

        return usecase.execute();
    }
}

export const mapUsecase = <T extends keyof typeof usecaseMapping>(usecase: T) => {
    return usecaseMapping[usecase];
};
