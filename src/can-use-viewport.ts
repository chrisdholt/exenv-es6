import { canUseDOM } from "./can-use-dom";

/**
 * Checks if viewport is available for use
 */
export function canUseViewport(): boolean {
    return canUseDOM() && !!window.screen;
}
