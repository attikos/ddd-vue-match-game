import { CardRepository } from '@/Repositories/CardRepository';
import { cardImagesAsset } from '@/Domain/Card';
import { AppStartedUsecase } from '@/Application/AppStartedUsecase';

export const appStartedUsecaseMap = () => {
    const usecase = new AppStartedUsecase(
        new CardRepository(),
        cardImagesAsset,
    );

    return usecase.execute();
};
