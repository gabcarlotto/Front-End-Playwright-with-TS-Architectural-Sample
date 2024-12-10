import { Page, expect, Locator } from "@playwright/test";

export class VueIntro {
    readonly page: Page;

    readonly buttonRun: Locator;

    constructor(page: Page) {

        this.page = page;

        this.buttonRun = page.locator("//span[normalize-space()='Run this project']");
        //ideally this would be a //button
    }

    async isDisplayed() {
        await expect(this.buttonRun).toBeVisible();

    }

}