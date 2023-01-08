<script lang="ts" setup>
import { mapUsecase } from '@/Presentation/usecaseMap';
import { getSavedTheme, setTheme, type Theme } from '@/Presentation/view/utils/theme';
import { onMounted } from 'vue';

const DEFAULT_THEME = 'cyan';

const startGameUsecase = mapUsecase('StartGameUsecase');

const startHandler = () => {
    startGameUsecase();
}

const stopHandler = () => {
    // TODO
    startGameUsecase();
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
            <div class="header__logo">
                <h2>Match Match Game</h2>
            </div>

            <div class="header__nav">
                <a @click.prevent="startHandler" class="header__link">Start</a>
                <a @click.prevent="stopHandler" class="header__link">Stop</a>

                <a
                    v-for="theme in themeList"
                    @click.prevent="setThemeHandler(theme)"
                    class="header__link"
                    :class="`header__theme--${theme}`"
                    :key="theme"
                ></a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    display: block;
    border-bottom: 1px solid #999;

    &__container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }

    &__logo {
        margin-right: 24px;
    }

    &__nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    &__link {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 22px;
        position: relative;
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
            background: #f0f0f0;
        }

        &:active {
            background: #dcdcdc;
        }
    }

    @mixin theme-link($theme) {
        &__theme {
            &--#{$theme} {
                &::before {
                    color: var(--color-#{$theme});
                    display: flex;
                    font-size: 40px;
                    line-height: 29px;
                    content: "■";
                }

                html.#{$theme} & {
                    &::before {
                        text-decoration: underline;
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
