import { canUseDOM } from "./can-use-dom.js";

/**
 * Checks if Event Listeners are available for use
 */
export function canUseEventListeners(): boolean {
    return canUseDOM() && !!(window.addEventListener || window["attachEvent"]);
}
