export function getImageUrl(name: string, extension: string) {
    return new URL(`./assets/${name}.${extension}`, import.meta.url).href
}