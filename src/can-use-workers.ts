/**
 * Checks if Web Workers are available
 */
export function canUseWorkers(): boolean {
    return typeof Worker !== "undefined";
}
