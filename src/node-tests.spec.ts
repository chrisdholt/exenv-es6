/**
 * @jest-environment node
 */
import { canUseDOM } from "./can-use-dom";
import { canUseEventListeners } from "./can-use-event-listeners";
import { canUseViewport } from "./can-use-viewport";
import { canUseWorkers } from "./can-use-workers";

describe("canUseDOM", (): void => {
    test("should return false in a node environment where the browser is not available", (): void => {
        expect(canUseDOM()).toBe(false);
    });

    test("should not execute code within the `if` statement when the browser is not available", (): void => {
        let testString: string = void 0;

        if (canUseDOM()) {
            testString = "DOM is available";
        }

        expect(testString).toBe(void 0);
    });
});

describe("canUseEventListeners", (): void => {
    test("should return false in a node environment where the browser is not available", (): void => {
        expect(canUseEventListeners()).toBe(false);
    });
});

describe("canUseViewport", (): void => {
    test("should return false in a node environment where the browser is not available", (): void => {
        expect(canUseViewport()).toBe(false);
    });
});

describe("canUseWorkers", (): void => {
    test("should return false in a node environment where the browser is not available", (): void => {
        expect(canUseWorkers()).toBe(false);
    });
});
