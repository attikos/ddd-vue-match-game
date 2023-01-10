<script lang="ts" setup>
import { GameStatus } from '@/Domain/Game';
import { GamePresenter } from '@/Presentation/presenter/GamePresenter';
import { mapUsecase } from '@/Presentation/usecaseMap';
import { getSavedTheme, setTheme, type Theme } from '@/Presentation/view/utils/theme';
import { onMounted } from 'vue';

const DEFAULT_THEME = 'cyan';

const gameStatus = GamePresenter();

const startGameUsecase = mapUsecase('StartGameUsecase');
const stopGameUsecase = mapUsecase('StopGameUsecase');

const startHandler = () => {
    startGameUsecase();
}

const stopHandler = () => {
    stopGameUsecase();
}

function setThemeHandler(theme: Theme) {
    setTheme(theme);
}

const themeList: Theme[] = ['cyan', 'green', 'blue', 'purple', 'red', 'orange'];

onMounted(() => {
    startGameUsecase();
    const theme = getSavedTheme() || DEFAULT_THEME;
    setTheme(theme);
});
</script>

<template>
    <header class="header">
        <div class="header__container">
            <a href="#/" class="header__logo">Match Match Game 🎲</a>

            <div class="header__nav">
                <a
                    v-if="gameStatus === GameStatus.stopped"
                    @click.prevent="startHandler"
                    class="header__link header__link_type_start"
                >Start</a>

                <a
                    v-if="gameStatus === GameStatus.inProgress"
                    @click.prevent="stopHandler"
                    class="header__link header__link_type_start"
                >Stop</a>

                <a
                    v-for="theme in themeList"
                    @click.prevent="setThemeHandler(theme)"
                    class="header__link header__theme"
                    :class="`header__theme--${theme}`"
                    :key="theme"
                ></a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #999;
    background: rgba(255,255,255, 0.2);
    min-height: 80px;

    @media screen and (max-width: 768px) {
        padding-bottom: 13px;
    }

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }

    &__logo {
        font-weight: bold;
        font-size: 22px;
        line-height: 34px;
        margin: 8px 0 8px;
        margin-right: 50px;
        text-shadow: 1px 4px 4px rgba(0,0,0, 0.2);
        text-decoration: none;
        color: #444;

        @media screen and (max-width: 768px) {
            margin-right: 0;
            font-size: 20px;
            line-height: 32px;
        }
    }

    &__nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    &__link {
        position: relative;
        text-decoration: none;
        color: var(--primary-color);
        font-size: 22px;
        height: 22px;
        line-height: 100%;
        padding: 2px 12px;
        transition: all 0.2s ease-in;
        cursor: pointer;

        &:not(:last-child)::after {
            content: "";
            border-right: 1px solid var(--primary-color);
            opacity: 0.5;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
        }

        &:hover {
            text-shadow: 3px 2px 0px var(--color-shaddow-first), -2px -1px 0 var(--color-shaddow-second);
        }

        &:active {
            color: #000;
            text-shadow: 1px 1px 0px var(--color-shaddow-first), -1px -0px 0 var(--color-shaddow-second);
        }

        &_type {
            &_start {
                min-width: 54px;
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 21px;
            height: 21px;
        }
    }

    &__theme {
        display: flex;
        align-items: center;

        &::before {
            content: "";
            display: flex;
            width: 16px;
            height: 16px;
            box-sizing: content-box;
        }
    }

    @mixin theme-link($theme) {
        &__theme {
            &--#{$theme} {
                &::before {
                    background-color: var(--color-#{$theme});
                    color: var(--color-#{$theme});
                }

                html.#{$theme} & {
                    &::before {
                        box-shadow: 0 0 0 2px currentColor;
                    }
                }
            }
        }
    }

    @include theme-link('cyan');
    @include theme-link('green');
    @include theme-link('blue');
    @include theme-link('purple');
    @include theme-link('red');
    @include theme-link('orange');
}
</style>
