export function getImageUrl(name: string) {
    return new URL(`../assets/${name}`, import.meta.url).href
}
