export type Theme = 'cyan' | 'green' | 'blue' | 'purple' | 'red' | 'yellow';

export const setTheme = (theme: Theme) => {
    const htmpEl = document.getElementsByTagName('html')[0];

    htmpEl.className = '';
    htmpEl.classList.add(theme);
    window.localStorage.setItem('theme', theme);
}

export const getSavedTheme = (): Theme => {
    const theme = window.localStorage.getItem('theme') as Theme;

    return theme;
}
