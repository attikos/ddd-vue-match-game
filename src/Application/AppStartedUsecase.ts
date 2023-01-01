import type { Usecase } from '@/Application/types';

export class AppStartedUseCase implements Usecase {
    constructor() {}

    async execute(): Promise<void> {
        console.log('app started')
    }
}
