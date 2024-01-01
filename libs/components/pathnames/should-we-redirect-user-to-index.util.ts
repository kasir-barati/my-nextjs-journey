export function shouldWeRedirectUserToIndex(pathnames: string[]) {
    return pathnames.length <= 1;
}
