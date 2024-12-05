// resources/components/genericFunctions.ts
import { Page, Locator } from "@playwright/test";

export class GenericFunctions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async scrollToTop() {
        await this.page.evaluate(() => {
            window.scrollTo(0, 0);
        });
    }

    async clickAndWaitForNavigation(locator: Locator) {
        await Promise.all([
            locator.click(),
            this.page.waitForNavigation(),
        ]);
    }
}