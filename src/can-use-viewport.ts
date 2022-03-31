import { canUseDOM } from "./can-use-dom.js";

/**
 * Checks if viewport is available for use
 */
export function canUseViewport(): boolean {
    return canUseDOM() && !!window.screen;
}
