export const getInCss = (tag) => {
    return getComputedStyle(document.documentElement).getPropertyValue(tag)
}