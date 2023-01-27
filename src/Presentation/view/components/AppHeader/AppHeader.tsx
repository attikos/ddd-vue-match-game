import React, { useEffect, useState } from 'react';
import { GameStatus } from 'src/Domain/Game';
import { GamePresenter } from 'src/Presentation/presenter/GamePresenter';
import { mapUsecase } from 'src/Presentation/usecaseMap';
import { getSavedTheme, setTheme, type Theme } from 'src/Presentation/view/utils/theme';
import './AppHeader.scss';
import cn from 'classnames';

const AppHeader = (): JSX.Element => {
    const DEFAULT_THEME = 'yellow';

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

    const themeList: Theme[] = ['cyan', 'green', 'blue', 'purple', 'red', 'yellow'];

    useEffect(() => {
        startGameUsecase();
        const theme = getSavedTheme() || DEFAULT_THEME;
        setTheme(theme);
    });

    return (
        <header className="header">
            <div className="header__container">
                <a href="#/" className="header__logo">Match Match Game 🎲</a>

                <div className="header__nav">
                    { gameStatus === GameStatus.stopped && (
                        <a
                            onClick={() => startHandler()}
                            className="header__link header__link_type_start"
                        >Start</a>
                    )}

                    { gameStatus === GameStatus.inProgress && (
                        <a
                            onClick={() => stopHandler()}
                            className="header__link header__link_type_start"
                        >Stop</a>
                    )}

                    { themeList.map(theme => (
                        <a
                            v-for="theme in themeList"
                            onClick={() => setThemeHandler(theme)}
                            className={`header__link header__theme header__theme--${theme}`}
                            key={theme}
                        ></a>
                    )) }
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
