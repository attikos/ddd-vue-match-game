import { CardRepository } from '@/Repositories/CardRepository';
import { AppStartedUsecase } from '@/Application/AppStartedUsecase';
import { StartGameUsecase } from '@/Application/StartGameUsecase';
import { OpenCardUsecase } from '@/Application/OpenCardUsecase';
import { PairCardAttempListPresenter } from '@/Presentation/presenter/PairCardAttempListPresenter';
import { ShowedCardsPresenter } from '@/Presentation/presenter/ShowedCardsPresenter';
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { GameRepository } from '@/Repositories/GameRepository';
import { StopGameUsecase } from '@/Application/StopGameUsecase';
import { GamePresenter } from '@/Presentation/presenter/GamePresenter';

const usecaseMapping = {
    AppStartedUsecase: (): Promise<void> => {
        const usecase = new AppStartedUsecase(
            new CardRepository(),
        );

        return usecase.execute();
    },

    StartGameUsecase: (): Promise<void> => {
        const usecase = new StartGameUsecase(
            new CardRepository(),
            new GameRepository(),
        );

        return usecase.execute();
    },

    StopGameUsecase: (): Promise<void> => {
        const usecase = new StopGameUsecase(
            new CardRepository(),
            new GameRepository(),
        );

        return usecase.execute();
    },

    OpenCardUsecase: (index: number, showWonNotification: () => void): Promise<void> => {
        const usecase = new OpenCardUsecase(
            new CardRepository(),
            index,
            PairCardAttempListPresenter(),
            ShowedCardsPresenter(),
            CardPresenter(),
            GamePresenter(),
            showWonNotification,
        );

        return usecase.execute();
    }
}

export const mapUsecase = <T extends keyof typeof usecaseMapping>(usecase: T) => {
    return usecaseMapping[usecase];
};
