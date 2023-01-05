import { CardRepository } from '@/Repositories/CardRepository';
import { cardImagesAsset } from '@/Domain/Card';
import { AppStartedUsecase } from '@/Application/AppStartedUsecase';
import { StartGameUsecase } from '@/Application/StartGameUsecase';

const usecaseMap = {
    AppStartedUsecase: (): Promise<void> => {
        const usecase = new AppStartedUsecase(
            new CardRepository(),
            cardImagesAsset,
        );

        return usecase.execute();
    },

    StartGameUsecase: (): Promise<void> => {
        const usecase = new StartGameUsecase(
            new CardRepository()
        );

        return usecase.execute();
    }
}

export const mapUsecase = (usecase: keyof typeof usecaseMap) => {
    return usecaseMap[usecase];
};
