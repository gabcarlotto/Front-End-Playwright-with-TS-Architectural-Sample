import { Page, expect, Locator } from "@playwright/test";
import { GenericFunctions } from "../../components/genericFunctions";

export class RickSanchezPage extends GenericFunctions {
    readonly page: Page;
    readonly name: Locator;
    readonly genre: Locator;
    readonly specie: Locator;
    readonly status: Locator;
    readonly homeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.name = page.locator(".character-name");
        this.genre = page.locator(".character-genre");
        this.specie = page.locator(".character-specie");
        this.status = page.locator(".character-status");
        this.homeButton = page.locator("text=Home");
    }

    async isDisplayed() {
        await expect(this.name).toBeVisible();
        await expect(this.genre).toBeVisible();
        await expect(this.specie).toBeVisible();
        await expect(this.status).toBeVisible();
        await expect(this.homeButton).toBeVisible();
    }

    async validateCharacterData(characterData: any) {
        await expect(this.name).toHaveText(characterData.name);
        await expect(this.genre).toContainText(characterData.genre);
        await expect(this.specie).toContainText(characterData.specie);
        await expect(this.status).toContainText(characterData.status);
    }
}