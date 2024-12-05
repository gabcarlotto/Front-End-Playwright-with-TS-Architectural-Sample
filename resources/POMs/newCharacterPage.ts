import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from '../components/genericFunctions';

export class NewCharacterPage extends GenericFunctions {
    readonly page: Page;
    readonly form: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.form = page.locator("form");
    }

    async isDisplayed() {
        await expect(this.form).toBeVisible();
    }
}