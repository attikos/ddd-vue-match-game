export function getImageUrl(name: string, path: string = '../assets/') {
    const subPath = `${path}${name}`;

    return new URL(subPath, import.meta.url).href
}
