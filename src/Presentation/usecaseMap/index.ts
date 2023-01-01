import { CardRepository } from '@/Repositories/CardRepository';
import { cardImagesAsset } from '@/Domain/Card';
import { AppStartedUsecase } from '@/Application/AppStartedUsecase';
import { StartGameUsecase } from '@/Application/StartGameUsecase';

export const appStartedUsecaseMap = () => {
    const usecase = new AppStartedUsecase(
        new CardRepository(),
        cardImagesAsset,
    );

    return usecase.execute();
};

export const startGameUsecaseMap = () => {
    const usecase = new StartGameUsecase(
        new CardRepository()
    );

    return usecase.execute();
};
