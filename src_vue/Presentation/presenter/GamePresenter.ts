import { useGameStore } from '@/Data/game.store';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import type { GameStatus } from '@/Domain/Game';

export function GamePresenter(): Ref<GameStatus> {
    const { gameStatus } = storeToRefs(useGameStore());

    return gameStatus;
}
