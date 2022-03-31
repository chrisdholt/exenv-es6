/**
 * @jest-environment jsdom
 */
import { canUseDOM } from "./can-use-dom";
import { canUseEventListeners } from "./can-use-event-listeners";
import { canUseViewport } from "./can-use-viewport";
import { canUseWorkers } from "./can-use-workers";

describe("canUseDOM", (): void => {
    test("should return true when jsdom is enabled and mocking the browser", (): void => {
        expect(canUseDOM()).toBe(true);
    });

    test("should execute code within the `if` statement when jsdom is enabled and mocking the browser", (): void => {
        let testString: string = void 0;
        const expected: string = "DOM is available";

        if (canUseDOM()) {
            testString = "DOM is available";
        }

        expect(testString).toBe(expected);
    });
});

describe("canUseEventListeners", (): void => {
    test("should return true when jsdom is enabled and mocking the browser", (): void => {
        expect(canUseEventListeners()).toBe(true);
    });
});

describe("canUseViewport", (): void => {
    test("should return true when jsdom is enabled and mocking the browser", (): void => {
        expect(canUseViewport()).toBe(true);
    });
});

// Worker is not currently supported in JSDOM. Enable this test when support is added in
xdescribe("canUseWorkers", (): void => {
    test("should return true when jsdom is enabled and mocking the browser", (): void => {
        expect(canUseWorkers()).toBe(true);
    });
});
