/**
 * Checks if the DOM is available to access and use
 */
export function canUseDOM(): boolean {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
